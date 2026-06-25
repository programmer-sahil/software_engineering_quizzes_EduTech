import { motion } from 'framer-motion';
import { Award, CheckCircle2, Percent, RefreshCcw, XCircle } from 'lucide-react';
import Button from './ui/Button';

const getCorrectIndex = (question) => {
  if (typeof question.correctAnswer === 'number') {
    return question.correctAnswer;
  }

  return question.options.findIndex((option) => option === question.answer);
};

const getPerformanceMessage = (percentage) => {
  if (percentage >= 90) {
    return 'Excellent';
  }
  if (percentage >= 70) {
    return 'Good';
  }
  if (percentage >= 50) {
    return 'Needs revision';
  }
  return 'Revise Unit 1 again';
};

function QuizResult({ questions, answers, onRestart, title }) {
  const score = questions.reduce((acc, question, index) => {
    const selected = answers[index];
    return acc + (selected === getCorrectIndex(question) ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);
  const wrongCount = questions.length - score;
  const performanceMessage = getPerformanceMessage(percentage);

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
      <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">Quiz Completed</p>
            <h3 className="mt-1 font-display text-2xl text-white">{title} Result</h3>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-1 text-sm text-emerald-200">
            <Award size={16} /> {score}/{questions.length} ({percentage}%)
          </span>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Total Score</p>
          <p className="mt-2 font-display text-2xl text-white">{score} / {questions.length}</p>
        </div>
        <div className="rounded-xl border border-accent/30 bg-accent/10 p-4">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-accent">
            <Percent size={14} /> Percentage
          </p>
          <p className="mt-2 font-display text-2xl text-white">{percentage}%</p>
        </div>
        <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-emerald-300">
            <CheckCircle2 size={14} /> Correct
          </p>
          <p className="mt-2 font-display text-2xl text-white">{score}</p>
        </div>
        <div className="rounded-xl border border-rose-400/30 bg-rose-400/10 p-4">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-rose-300">
            <XCircle size={14} /> Wrong
          </p>
          <p className="mt-2 font-display text-2xl text-white">{wrongCount}</p>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Performance</p>
        <p className="mt-2 font-display text-2xl text-white">{performanceMessage}</p>
      </div>

      <div className="space-y-4">
        {questions.map((question, index) => {
          const selected = answers[index];
          const correctIndex = getCorrectIndex(question);
          const isCorrect = selected === correctIndex;
          const selectedAnswer = typeof selected === 'number' ? question.options[selected] : 'Not answered';
          const correctAnswer = question.options[correctIndex] || question.answer;

          return (
            <div
              key={question.id}
              className={`rounded-xl border p-4 ${
                isCorrect ? 'border-emerald-400/25 bg-emerald-400/10' : 'border-rose-400/25 bg-rose-400/10'
              }`}
            >
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                  Question {index + 1}
                </span>
                {question.pyq ? (
                  <span className="rounded-full border border-coral/40 bg-coral/10 px-3 py-1 text-xs font-semibold text-coral">
                    {question.pyq}
                  </span>
                ) : null}
                {question.unitBadge ? (
                  <span className="rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {question.unitBadge}
                  </span>
                ) : null}
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                    isCorrect ? 'bg-emerald-400/15 text-emerald-300' : 'bg-rose-400/15 text-rose-300'
                  }`}
                >
                  {isCorrect ? <CheckCircle2 size={13} /> : <XCircle size={13} />}
                  {isCorrect ? 'Correct' : 'Wrong'}
                </span>
              </div>

              <p className="font-medium leading-7 text-white">Q{index + 1}. {question.question}</p>
              <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                <p className={isCorrect ? 'text-emerald-300' : 'text-rose-300'}>
                  User selected answer: <span className="font-semibold">{selectedAnswer}</span>
                </p>
                <p className="text-accent">
                  Correct answer: <span className="font-semibold">{correctAnswer}</span>
                </p>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-300">Explanation: {question.explanation}</p>
              {question.pyq || question.year ? (
                <p className="mt-2 text-xs leading-5 text-slate-400">
                  PYQ reference: {question.pyq || question.year}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      <Button icon={<RefreshCcw size={16} />} onClick={onRestart}>
        Retry Quiz
      </Button>
    </motion.div>
  );
}

export default QuizResult;
