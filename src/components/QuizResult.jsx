import { motion } from 'framer-motion';
import { Award, RefreshCcw } from 'lucide-react';
import Button from './ui/Button';

function QuizResult({ questions, answers, onRestart, title }) {
  const score = questions.reduce((acc, question, index) => {
    const selected = answers[index];
    return acc + (selected === question.correctAnswer ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);

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

      <div className="space-y-4">
        {questions.map((question, index) => {
          const selected = answers[index];
          const isCorrect = selected === question.correctAnswer;

          return (
            <div key={question.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-medium text-white">Q{index + 1}. {question.question}</p>
              <p className={`mt-2 text-sm ${isCorrect ? 'text-emerald-300' : 'text-rose-300'}`}>
                Your answer: {typeof selected === 'number' ? question.options[selected] : 'Not answered'}
              </p>
              {!isCorrect && (
                <p className="mt-1 text-sm text-accent">Correct answer: {question.options[question.correctAnswer]}</p>
              )}
              <p className="mt-2 text-xs text-slate-300">Explanation: {question.explanation}</p>
            </div>
          );
        })}
      </div>

      <Button icon={<RefreshCcw size={16} />} onClick={onRestart}>
        Practice Again
      </Button>
    </motion.div>
  );
}

export default QuizResult;
