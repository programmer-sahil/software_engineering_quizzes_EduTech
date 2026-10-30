import { useEffect, useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BookOpenText,
  Clock,
  FileBadge2,
  FileQuestion,
  HelpCircle,
  Lock,
  Sparkles,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import UnitHeader from '../components/UnitHeader';
import UnitQuizExperience from '../components/UnitQuizExperience';
import UnitLongQuestionsExperience from '../components/UnitLongQuestionsExperience';
import LongQuestionsPlaceholder from '../components/LongQuestionsPlaceholder';
import CheatSheetView from '../components/CheatSheetView';
import { Card, Badge, Button, Tabs, EmptyState, Accordion, ShowMoreText } from '../components/ui';
import { getSubjectUnit } from '../content';
import sensorCircuitImg from '../../assets/hardware/sensor-circuit.jpg';
import embeddedLabImg from '../../assets/hardware/embedded-lab.jpg';

function UnitPage({ subjectId = 'iot' }) {
  const { unitId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { subject, unit } = useMemo(() => getSubjectUnit(subjectId, unitId), [subjectId, unitId]);

  // Tab state: exactly 4 tabs per Step 2:
  // Overview | PYQ MCQ Quiz | Long Questions | Cheat Sheets
  const [activeTab, setActiveTab] = useState('overview');

  // Handle URL query param with backward compatibility for legacy links
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'pyq-quiz' || tabParam === 'pyq-practice' || tabParam === 'mcq-practice') {
      setActiveTab('pyq-quiz');
    } else if (tabParam === 'long-questions' || tabParam === 'notes') {
      setActiveTab('long-questions');
    } else if (tabParam === 'cheat-sheet' || tabParam === 'cheat-sheets') {
      setActiveTab('cheat-sheet');
    } else {
      setActiveTab('overview');
    }
  }, [unitId, searchParams]);

  // Record student progress in localStorage for home quick actions
  useEffect(() => {
    if (subject && unit && !subject.disabled) {
      try {
        localStorage.setItem(
          'edutech_last_unit',
          JSON.stringify({
            subjectId: subject.id,
            subjectName: subject.shortTitle || subject.name,
            unitId: unit.id,
            unitTitle: unit.title,
            route: `${subject.unitRouteBase || '/iot/unit'}/${unit.id}`,
            timestamp: Date.now(),
          })
        );
      } catch {}
    }
  }, [subject, unit]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSearchParams({ tab: tabId }, { replace: true });
  };

  // Guard against disabled subjects (e.g. Software Engineering)
  if (subject?.disabled) {
    return (
      <PageTransition className="section-shell py-16">
        <Card hover={false} className="p-8 sm:p-12 text-center max-w-2xl mx-auto border-brand-coral/30">
          <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-coral/30 bg-brand-coral/10 text-brand-coral">
            <Lock size={22} />
          </div>
          <div className="mt-4">
            <Badge variant="coral">{subject.disabledLabel || 'Temporarily disabled'}</Badge>
          </div>
          <h1 className="mt-4 font-display text-2xl sm:text-3xl font-extrabold text-brand-heading">
            {subject.name || subject.title} Reopens Next Semester
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-brand-body">
            {subject.disabledMessage ||
              'Software Engineering is temporarily disabled for this semester. Study materials are kept in place for next semester.'}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/subjects">
              <Button variant="secondary" icon={<ArrowLeft size={16} />}>
                View All Subjects
              </Button>
            </Link>
            <Link to="/iot">
              <Button variant="primary">Continue With IoT (5th Sem)</Button>
            </Link>
          </div>
        </Card>
      </PageTransition>
    );
  }

  // Guard against missing unit
  if (!unit) {
    return (
      <PageTransition className="section-shell py-16">
        <Card hover={false} className="p-8 text-center max-w-xl mx-auto">
          <h1 className="font-display text-2xl font-bold text-brand-heading">Unit Not Found</h1>
          <p className="mt-2 text-sm text-brand-body">
            Please return to {subject?.name || 'the subject overview'} to pick a valid unit.
          </p>
          <div className="mt-6">
            <Link to={subject?.route || '/iot'}>
              <Button variant="primary" icon={<ArrowLeft size={16} />}>
                Back to {subject?.shortTitle || 'Subject'}
              </Button>
            </Link>
          </div>
        </Card>
      </PageTransition>
    );
  }

  // Exactly the 4 requested tabs:
  // Overview | PYQ MCQ Quiz | Long Questions | Cheat Sheets
  const tabsList = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    {
      id: 'pyq-quiz',
      label: 'PYQ MCQ Quiz',
      icon: FileQuestion,
      count: unit.completeQuiz?.length || unit.questions?.length || 15,
    },
    {
      id: 'long-questions',
      label: 'Long Questions',
      icon: HelpCircle,
      count: unit.longQuestions?.length || unit.longAnswers?.length || 0,
    },
    {
      id: 'cheat-sheet',
      label: 'Cheat Sheets',
      icon: BookOpenText,
      count: unit.cheatSheet?.length || 0,
    },
  ];

  return (
    <PageTransition>
      {/* Unit Header with Breadcrumb and Actions */}
      <UnitHeader
        title={unit.title}
        subject={subject}
        unit={unit}
        backTo={subject?.route || '/iot'}
        backLabel={`Back to ${subject?.shortTitle || 'Subject'}`}
        onStartQuiz={() => handleTabChange('pyq-quiz')}
        onStartPractice={() => handleTabChange('pyq-quiz')}
        onStartLongQuestions={() => handleTabChange('long-questions')}
        onStartCheatSheets={() => handleTabChange('cheat-sheet')}
      />

      <section className="section-shell mt-8 sm:mt-10 mb-20">
        {/* Navigation Tabs Bar: Overview | PYQ MCQ Quiz | Long Questions | Cheat Sheets */}
        <div className="flex overflow-x-auto pb-2 scrollbar-none">
          <Tabs tabs={tabsList} activeTab={activeTab} onChange={handleTabChange} />
        </div>

        {/* Main Content Layout with Sticky Sidebar on Desktop */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          {/* Main Tab Panel */}
          <div className="lg:col-span-8 space-y-6">
            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Syllabus Description & Quick Stats Card */}
                <Card hover={false} className="p-6 sm:p-7 border-brand-border">
                  <h2 className="font-display text-lg sm:text-xl font-bold text-brand-heading">
                    Unit Syllabus &amp; Learning Objectives
                  </h2>
                  <div className="mt-3">
                    <ShowMoreText
                      text={unit.description || unit.summary}
                      maxLength={180}
                      className="text-xs sm:text-sm leading-relaxed text-brand-body"
                    />
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="rounded-2xl border border-brand-border bg-brand-elevated/40 p-3.5">
                      <span className="block font-display text-base sm:text-lg font-bold text-brand-heading">
                        Module {unit.module || 'A'}
                      </span>
                      <span className="text-[11px] text-brand-muted font-medium">Council Module</span>
                    </div>
                    <div className="rounded-2xl border border-brand-border bg-brand-elevated/40 p-3.5">
                      <span className="block font-display text-base sm:text-lg font-bold text-brand-primary">
                        {unit.hours} Hours
                      </span>
                      <span className="text-[11px] text-brand-muted font-medium">Lecture Duration</span>
                    </div>
                    <div className="rounded-2xl border border-brand-border bg-brand-elevated/40 p-3.5">
                      <span className="block font-display text-base sm:text-lg font-bold text-brand-coral">
                        {unit.marks} Marks
                      </span>
                      <span className="text-[11px] text-brand-muted font-medium">Exam Weightage</span>
                    </div>
                    <div className="rounded-2xl border border-brand-border bg-brand-elevated/40 p-3.5">
                      <span className="block font-display text-base sm:text-lg font-bold text-emerald-400">
                        {unit.completeQuiz?.length || unit.questions?.length || 15} Qs
                      </span>
                      <span className="text-[11px] text-brand-muted font-medium">PYQ &amp; Practice</span>
                    </div>
                  </div>
                </Card>

                {/* Progressive Disclosure: Accordion for Detailed Syllabus Topics */}
                <Accordion
                  title="Detailed Syllabus Topics"
                  badge={
                    <span className="rounded-full border border-brand-border bg-brand-elevated px-2.5 py-0.5 text-xs font-semibold text-brand-body">
                      {unit.topics?.length || 0} Topics
                    </span>
                  }
                  defaultOpen={false}
                >
                  <div className="grid gap-2 sm:grid-cols-2">
                    {unit.topics?.map((topic, index) => (
                      <div
                        key={topic}
                        className="flex items-center gap-3 rounded-xl border border-brand-border bg-brand-elevated/40 px-3.5 py-2.5 text-xs text-brand-heading"
                      >
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-brand-primary/10 font-mono text-[11px] font-bold text-brand-primary">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="font-medium leading-relaxed">{topic}</span>
                      </div>
                    ))}
                  </div>
                </Accordion>

                {/* Direct Action Gateway into Unit Assessment */}
                <Card
                  hover={false}
                  className="p-6 sm:p-7 border-brand-primary/40 bg-brand-surface shadow-card"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/40 bg-brand-primary/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-brand-primary">
                        <FileQuestion size={12} />
                        <span>Unit Exam Preparation</span>
                      </span>
                      <h3 className="mt-2 font-display text-lg sm:text-xl font-bold text-brand-heading">
                        Start Unit {unit.id} PYQ MCQ Quiz
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-brand-body leading-relaxed max-w-xl">
                        Practice verified previous-year questions from past WBSCTE board papers with instant solutions or take a timed exam simulation.
                      </p>
                    </div>
                    <Button
                      variant="primary"
                      icon={<ArrowRight size={16} />}
                      onClick={() => handleTabChange('pyq-quiz')}
                    >
                      Start PYQ Quiz
                    </Button>
                  </div>
                </Card>

                {/* Practical Laboratory & Hardware Visual Preview */}
                {(unit.id === '5' || unit.id === '1' || unit.id === '6') && (
                  <Card hover={false} className="p-5 sm:p-6 border-brand-border bg-brand-surface shadow-card">
                    <div className="grid gap-5 sm:grid-cols-12 items-center">
                      <div className="sm:col-span-7 space-y-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-primary">
                          <Cpu size={12} />
                          <span>
                            {unit.id === '5'
                              ? 'ATmega328P Hardware Lab'
                              : unit.id === '1'
                              ? 'Sensor Interfacing Telemetry'
                              : 'Industrial IoT Deployment'}
                          </span>
                        </span>
                        <h4 className="font-display text-base font-bold text-brand-heading">
                          {unit.id === '5'
                            ? 'Hands-On Arduino Circuit Prototyping'
                            : unit.id === '1'
                            ? 'Physical Sensing & Output Actuation Setup'
                            : 'Industrial Energy Monitoring & SCADA Bus'}
                        </h4>
                        <p className="text-xs text-brand-body leading-relaxed">
                          {unit.id === '5'
                            ? 'Connect breadboard circuits, write sketch lifecycle code (setup & loop), and interface analog sensors with 10-bit ADC channels.'
                            : unit.id === '1'
                            ? 'Explore how physical phenomena (temperature, gas, light) are converted into electrical signals and delivered to cloud dashboards.'
                            : 'Explore factory-floor telemetry over Modbus RS-485, predictive machine maintenance, and automated relay triggers.'}
                        </p>
                      </div>

                      <div className="sm:col-span-5">
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-brand-border bg-slate-950">
                          <img
                            src={unit.id === '5' ? sensorCircuitImg : embeddedLabImg}
                            alt="Practical IoT Lab Hardware Setup"
                            loading="lazy"
                            className="h-full w-full object-cover object-center"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                          <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-md">
                            {unit.id === '5' ? 'Arduino Breadboard Setup' : 'Embedded Systems Lab'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            )}

            {/* TAB 2: PYQ MCQ QUIZ (Single Quiz Experience per Unit) */}
            {activeTab === 'pyq-quiz' && (
              <UnitQuizExperience
                unit={unit}
                subjectId={subject?.id || 'iot'}
                onBackToOverview={() => handleTabChange('overview')}
              />
            )}

            {/* TAB 3: LONG QUESTIONS (Connected Descriptive PYQs & Answers) */}
            {activeTab === 'long-questions' && (
              <UnitLongQuestionsExperience
                unit={unit}
                subjectId={subject?.id || 'iot'}
                onBackToOverview={() => handleTabChange('overview')}
                onSwitchToQuiz={() => handleTabChange('pyq-quiz')}
              />
            )}

            {/* TAB 4: CHEAT SHEETS (Kept Under Respective Unit) */}
            {activeTab === 'cheat-sheet' && (
              <div>
                {unit.cheatSheet?.length ? (
                  <CheatSheetView
                    sections={unit.cheatSheet}
                    unitTitle={unit.title}
                    unitId={unit.id}
                  />
                ) : (
                  <EmptyState
                    icon={BookOpenText}
                    title="Cheat Sheet Notes Coming Soon"
                    description={
                      unit.placeholders?.cheatSheet ||
                      'High-retention cheat sheet notes and key term summaries will be added soon.'
                    }
                    action={
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleTabChange('pyq-quiz')}
                      >
                        Practice PYQ Quiz Instead
                      </Button>
                    }
                  />
                )}
              </div>
            )}
          </div>

          {/* Sticky Table of Contents Sidebar on Desktop */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <Card hover={false} className="p-5 border-brand-border">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                  Unit Contents
                </p>
                <h4 className="mt-1 font-display text-base font-bold text-brand-heading">
                  {unit.shortTitle || `Unit ${unit.id}`} Quick Nav
                </h4>

                <div className="mt-4 space-y-1.5 text-xs">
                  <button
                    type="button"
                    onClick={() => handleTabChange('overview')}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 font-medium transition-colors ${
                      activeTab === 'overview'
                        ? 'bg-brand-primary/10 text-brand-primary font-bold'
                        : 'text-brand-body hover:bg-brand-elevated'
                    }`}
                  >
                    <span>Syllabus &amp; Topics</span>
                    <span className="text-brand-muted">{unit.topics?.length || 0} topics</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleTabChange('pyq-quiz')}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 font-medium transition-colors ${
                      activeTab === 'pyq-quiz'
                        ? 'bg-brand-primary/10 text-brand-primary font-bold'
                        : 'text-brand-body hover:bg-brand-elevated'
                    }`}
                  >
                    <span>PYQ MCQ Quiz</span>
                    <span className="font-bold text-brand-coral">
                      {unit.completeQuiz?.length || unit.questions?.length || 15} Qs
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleTabChange('long-questions')}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 font-medium transition-colors ${
                      activeTab === 'long-questions'
                        ? 'bg-brand-primary/10 text-brand-primary font-bold'
                        : 'text-brand-body hover:bg-brand-elevated'
                    }`}
                  >
                    <span>Long Questions</span>
                    <span className="font-bold text-brand-primary">
                      {unit.longQuestions?.length || unit.longAnswers?.length || 0} Qs
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleTabChange('cheat-sheet')}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 font-medium transition-colors ${
                      activeTab === 'cheat-sheet'
                        ? 'bg-brand-primary/10 text-brand-primary font-bold'
                        : 'text-brand-body hover:bg-brand-elevated'
                    }`}
                  >
                    <span>Cheat Sheets</span>
                    <span className="text-brand-muted">{unit.cheatSheet?.length || 0}</span>
                  </button>
                </div>
              </Card>

              {/* Study Tip Card */}
              <Card hover={false} className="p-4 border-brand-border bg-brand-elevated/40 text-xs text-brand-body">
                <p className="font-bold text-brand-heading inline-flex items-center gap-1.5">
                  <Sparkles size={14} className="text-brand-primary" /> Exam Retention Tip
                </p>
                <p className="mt-2 leading-relaxed">
                  Practice verified previous-year questions in Practice Mode for immediate explanations, then simulate the exam in Timed Exam Mode.
                </p>
              </Card>
            </div>
          </aside>
        </div>
      </section>
    </PageTransition>
  );
}

export default UnitPage;
