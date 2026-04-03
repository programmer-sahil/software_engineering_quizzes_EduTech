import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock3, Flag, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import QuizProgress from './QuizProgress';
import QuizResult from './QuizResult';
import Button from './ui/Button';

function QuizPlayer({ title, questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timerEnabled, setTimerEnabled] = useState(false);

  const currentQuestion = questions[currentIndex];
  const selected = answers[currentIndex];

  const answeredCount = useMemo(
    () => Object.values(answers).filter((value) => typeof value === 'number').length,
    [answers]
  );

  const liveScore = useMemo(() => {
    if (answeredCount === 0) return 0;
    let score = 0;
    for (let i = 0; i < questions.length; i += 1) {
      if (answers[i] === questions[i].correctAnswer) score += 1;
    }
    return Math.round((score / questions.length) * 100);
  }, [answers, answeredCount, questions]);

  const chooseAnswer = (optionIndex) => {
    setAnswers((prev) => ({ ...prev, [currentIndex]: optionIndex }));
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const restartQuiz = () => {
    setAnswers({});
    setCurrentIndex(0);
    setSubmitted(false);
  };

  if (submitted) {
    return <QuizResult questions={questions} answers={answers} onRestart={restartQuiz} title={title} />;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Interactive Quiz</p>
          <h3 className="mt-1 font-display text-xl text-white">{title}</h3>
        </div>
        <button
          type="button"
          onClick={() => setTimerEnabled((prev) => !prev)}
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${
            timerEnabled ? 'border-coral/50 bg-coral/10 text-coral' : 'border-white/15 bg-white/5 text-slate-300'
          }`}
        >
          <Clock3 size={14} /> Timer {timerEnabled ? 'On (Placeholder)' : 'Off'}
        </button>
      </div>

      <QuizProgress
        currentIndex={currentIndex}
        total={questions.length}
        answered={answeredCount}
        scorePercent={liveScore}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -25 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-5"
        >
          <p className="font-semibold leading-7 text-white">{currentQuestion.question}</p>

          <div className="mt-4 grid gap-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selected === index;
              const optionLabel = String.fromCharCode(65 + index);
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => chooseAnswer(index)}
                  className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                    isSelected
                      ? 'border-accent bg-accent/15 text-accent shadow-glow'
                      : 'border-white/10 bg-slate-900/60 text-slate-200 hover:border-accent/40'
                  }`}
                >
                  <span className="inline-flex items-center gap-3">
                    <span
                      className={`grid h-6 w-6 place-items-center rounded-full border text-xs font-semibold ${
                        isSelected ? 'border-accent/70 bg-accent/20 text-accent' : 'border-white/20 text-slate-300'
                      }`}
                    >
                      {optionLabel}
                    </span>
                    <span>{option}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button variant="secondary" icon={<ChevronLeft size={16} />} onClick={prevQuestion} className="disabled:opacity-50" disabled={currentIndex === 0}>
          Previous
        </Button>

        {currentIndex < questions.length - 1 ? (
          <Button icon={<ChevronRight size={16} />} onClick={nextQuestion}>
            Next
          </Button>
        ) : (
          <Button icon={<Flag size={16} />} onClick={() => setSubmitted(true)}>
            Finish Quiz
          </Button>
        )}
      </div>

      <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
        <Sparkles size={14} className="text-accent" />
        Premium study tip: Attempt all questions once, then restart and target 90%+.
      </div>
    </div>
  );
}

export default QuizPlayer;
