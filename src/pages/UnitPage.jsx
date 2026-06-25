import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookOpenText, BookText, BrainCircuit, ExternalLink, FileQuestion, HelpCircle } from 'lucide-react';
import CheatSheetView from '../components/CheatSheetView';
import CareerUpskillingBanner from '../components/CareerUpskillingBanner';
import PageTransition from '../components/PageTransition';
import QuizPlayer from '../components/QuizPlayer';
import StudyModeCards from '../components/StudyModeCards';
import TopicRevisionPanel from '../components/TopicRevisionPanel';
import UnitHeader from '../components/UnitHeader';
import GlassCard from '../components/ui/GlassCard';
import { findSubjectUnit } from '../data/subjects';

const defaultStudyModes = [
  {
    id: 'complete-quiz',
    title: 'Start Quiz',
    description: 'Full MCQ practice from this unit with result analysis.',
    icon: BrainCircuit,
  },
  {
    id: 'pyq-quiz',
    title: 'View PYQ Practice',
    description: 'Previous-year pattern objective practice with feedback.',
    icon: FileQuestion,
  },
  {
    id: 'cheat-sheet',
    title: 'Open Cheat Sheet',
    description: 'Rapid revision cards, key terms, and smart exam notes.',
    icon: BookText,
  },
  {
    id: 'common-questions',
    title: 'Important Common Questions',
    description: 'High-impact questions to revise before internal and semester exams.',
    icon: HelpCircle,
  },
];

const modeTitles = {
  'complete-quiz': 'Complete Unit Quiz',
  'pyq-quiz': 'PYQ Practice',
  'cheat-sheet': 'Cheat Sheet',
  'common-questions': 'Important Common Questions',
};

const EmptyStudyState = ({ message }) => (
  <div className="rounded-2xl border border-dashed border-accent/35 bg-accent/10 p-6 text-center">
    <p className="font-display text-xl text-white">Coming Soon</p>
    <p className="mt-2 text-sm leading-6 text-slate-300">{message}</p>
  </div>
);

const TopicsList = ({ topics }) => (
  <div className="grid gap-3 sm:grid-cols-2">
    {topics.map((topic, index) => (
      <div key={topic} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-slate-200">
        <span className="mr-2 font-semibold text-accent">{String(index + 1).padStart(2, '0')}</span>
        {topic}
      </div>
    ))}
  </div>
);

const CommonQuestionsList = ({ questions, placeholder }) => {
  if (!questions?.length) {
    return <EmptyStudyState message={placeholder || 'Important common questions will be added soon.'} />;
  }

  return (
    <div className="grid gap-3">
      {questions.slice(0, 20).map((question, index) => (
        <div key={question.id || question.question} className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Question {index + 1}</p>
          <p className="mt-2 text-sm font-medium leading-6 text-slate-100">{question.question}</p>
          {question.explanation ? <p className="mt-2 text-xs leading-5 text-slate-400">{question.explanation}</p> : null}
        </div>
      ))}
    </div>
  );
};

function UnitPage({ subjectId = 'software-engineering' }) {
  const { unitId } = useParams();
  const [activeMode, setActiveMode] = useState('complete-quiz');

  const { subject, unit } = useMemo(() => findSubjectUnit(subjectId, unitId), [subjectId, unitId]);
  const studyModes = useMemo(
    () =>
      defaultStudyModes.map((mode) =>
        mode.id === 'pyq-quiz' && unit?.pyqQuizTitle
          ? {
              ...mode,
              title: unit.pyqQuizTitle,
              description: unit.pyqQuizSubtitle || mode.description,
            }
          : mode
      ),
    [unit]
  );
  const modeDescription = useMemo(() => {
    if (activeMode === 'complete-quiz') {
      return 'Master this unit with a curated full-syllabus challenge designed for accuracy, speed, and exam confidence.';
    }
    if (activeMode === 'pyq-quiz') {
      return 'Train with previous-year style questions to sharpen pattern recognition and maximize scoring strategy.';
    }
    if (activeMode === 'cheat-sheet') {
      return 'Revise high-impact concepts, formulas, and answer frameworks crafted for quick retention before tests.';
    }
    return 'Review high-probability questions and short-answer prompts before internal and semester exams.';
  }, [activeMode]);

  useEffect(() => {
    if (unit?.pyqQuiz?.length && !unit.completeQuiz?.length) {
      setActiveMode('pyq-quiz');
    } else {
      setActiveMode('complete-quiz');
    }
  }, [subjectId, unitId, unit]);

  if (subject?.disabled) {
    return (
      <PageTransition className="section-shell py-16">
        <GlassCard className="p-8 text-center">
          <span className="rounded-full border border-coral/40 bg-coral/10 px-3 py-1 text-xs font-semibold text-coral">
            {subject.disabledLabel || 'Temporarily disabled'}
          </span>
          <h1 className="mt-5 font-display text-3xl text-white">{subject.name} Is Disabled For Now</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            {subject.disabledMessage ||
              'This subject is temporarily disabled. It remains in the app and can be enabled again later.'}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/subjects">
              <button
                type="button"
                className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent/70 hover:bg-white/15"
              >
                View Subjects
              </button>
            </Link>
            <Link to="/iot">
              <button
                type="button"
                className="rounded-xl bg-gradient-to-r from-accent to-neon px-5 py-3 text-sm font-bold text-slate-900 shadow-glow transition hover:-translate-y-0.5"
              >
                Continue With IoT
              </button>
            </Link>
          </div>
        </GlassCard>
      </PageTransition>
    );
  }

  if (!unit) {
    return (
      <PageTransition className="section-shell py-16">
        <GlassCard className="p-8 text-center">
          <h1 className="font-display text-3xl text-white">Unit Not Found</h1>
          <p className="mt-3 text-slate-300">Please go back and select one of the configured subject units.</p>
        </GlassCard>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <UnitHeader
        title={unit.title}
        subject={subject}
        unit={unit}
        backTo={subject?.route || '/subjects'}
        backLabel={`Back to ${subject?.shortName || 'Subject'}`}
      />

      {unit.topicRevision?.length ? (
        <section className="section-shell mt-6">
          <GlassCard className="p-5 sm:p-7">
            <TopicRevisionPanel topics={unit.topicRevision} title="Topic-wise Flashcards & MCQ Revision" />
          </GlassCard>
        </section>
      ) : unit.topics?.length ? (
        <section className="section-shell mt-6">
          <GlassCard className="p-5 sm:p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Learning Focus</p>
            <h2 className="mt-2 font-display text-2xl text-white">Syllabus Topics</h2>
            <div className="mt-5">
              <TopicsList topics={unit.topics} />
            </div>
          </GlassCard>
        </section>
      ) : null}

      {unit.longAnswersRoute ? (
        <section className="section-shell mt-6">
          <div className="rounded-2xl border border-coral/35 bg-gradient-to-br from-coral/10 via-accent/10 to-sky-500/10 p-5 sm:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-coral">
                  <BookOpenText size={14} /> Important Long Questions
                </p>
                <h2 className="mt-2 font-display text-2xl text-white">🌐 Unit 1 Teaching Notes & Long Answers</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
                  Open a separate teaching page with emojis, visual flow cards, examples, conclusions, and important
                  long answers for class explanation.
                </p>
              </div>
              <a href={unit.longAnswersRoute} target="_blank" rel="noreferrer">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-neon px-5 py-3 text-sm font-bold text-slate-900 shadow-glow transition hover:-translate-y-0.5"
                >
                  Open Long Answers <ExternalLink size={16} />
                </button>
              </a>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-shell mt-6">
        <CareerUpskillingBanner variant="unit" unitTitle={unit.title} />
      </section>
      <StudyModeCards activeMode={activeMode} onChange={setActiveMode} modes={studyModes} />

      <section className="section-shell mt-6">
        <GlassCard className="p-5 sm:p-7">
          <h2 className="font-display text-2xl text-white">
            {activeMode === 'pyq-quiz' ? unit.pyqQuizTitle || modeTitles[activeMode] : modeTitles[activeMode]}
          </h2>
          <p className="mt-2 text-sm text-slate-300">{modeDescription}</p>

          <div className="mt-6">
            {activeMode === 'complete-quiz' && (
              unit.completeQuiz?.length ? (
                <QuizPlayer
                  key={`${subject?.id}-${unit.id}-complete`}
                  title={`${unit.title} - Complete Quiz`}
                  questions={unit.completeQuiz}
                  showUpskillingBanner={false}
                />
              ) : (
                <EmptyStudyState message={unit.placeholders?.completeQuiz || 'Quiz content will be added soon.'} />
              )
            )}
            {activeMode === 'pyq-quiz' && (
              unit.pyqQuiz?.length ? (
                <QuizPlayer
                  key={`${subject?.id}-${unit.id}-pyq`}
                  title={unit.pyqQuizTitle || `${unit.title} - PYQ Quiz`}
                  subtitle={unit.pyqQuizSubtitle}
                  questions={unit.pyqQuiz}
                  showUpskillingBanner={false}
                />
              ) : (
                <EmptyStudyState message={unit.placeholders?.pyqQuiz || 'PYQ practice will be added soon.'} />
              )
            )}
            {activeMode === 'cheat-sheet' && (
              unit.cheatSheet?.length ? (
                <CheatSheetView sections={unit.cheatSheet} />
              ) : (
                <EmptyStudyState message={unit.placeholders?.cheatSheet || 'Cheat sheet will be added soon.'} />
              )
            )}
            {activeMode === 'common-questions' && (
              <CommonQuestionsList
                questions={unit.commonQuestions || unit.completeQuiz}
                placeholder={unit.placeholders?.commonQuestions}
              />
            )}
          </div>
        </GlassCard>
      </section>
    </PageTransition>
  );
}

export default UnitPage;
