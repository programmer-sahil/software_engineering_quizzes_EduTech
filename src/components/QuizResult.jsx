import { motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Bookmark,
  CheckCircle2,
  FileQuestion,
  HelpCircle,
  Percent,
  RefreshCcw,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import Button from './ui/Button';
import Card from './ui/Card';
import { getBookmarks, toggleBookmark } from '../utils/quizStorage';

function getPerformanceAssessment(percentage) {
  if (percentage >= 90) {
    return {
      title: 'Exceptional Performance',
      description: 'You demonstrated comprehensive mastery of these diploma exam questions.',
      colorClass: 'text-emerald-400',
      bgClass: 'border-emerald-500/30 bg-emerald-500/10',
    };
  }
  if (percentage >= 75) {
    return {
      title: 'Strong Preparation',
      description: 'Solid command of the topics. Review the specific explanations below for the missed items.',
      colorClass: 'text-brand-primary',
      bgClass: 'border-brand-primary/30 bg-brand-primary/10',
    };
  }
  if (percentage >= 50) {
    return {
      title: 'Foundation Established',
      description: 'Passing level achieved. Revise key definitions and retry the incorrect questions to push your score higher.',
      colorClass: 'text-amber-400',
      bgClass: 'border-amber-400/30 bg-amber-400/10',
    };
  }
  return {
    title: 'Revision Recommended',
    description: 'We recommend reading the unit study notes and cheat sheets thoroughly before retaking this quiz.',
    colorClass: 'text-brand-coral',
    bgClass: 'border-brand-coral/30 bg-brand-coral/10',
  };
}

function QuizResult({
  questions = [],
  answers = {},
  onRestart,
  onRetryIncorrect,
  onBackToUnit,
  title = 'Quiz Results',
  subtitle,
  mode = 'practice',
}) {
  const [filter, setFilter] = useState('all'); // 'all' | 'incorrect' | 'correct' | 'bookmarked'
  const [bookmarkedSet, setBookmarkedSet] = useState(() => new Set(getBookmarks()));

  const totalQuestions = questions.length;

  // Compute arithmetic
  const attemptedCount = Object.keys(answers).filter(
    (idx) => typeof answers[idx] === 'number'
  ).length;

  const correctCount = questions.reduce((acc, q, index) => {
    const selected = answers[index];
    return acc + (selected === q.correctIndex ? 1 : 0);
  }, 0);

  const wrongCount = attemptedCount - correctCount;
  const skippedCount = totalQuestions - attemptedCount;
  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const assessment = getPerformanceAssessment(percentage);

  // List of incorrect or skipped questions for retry
  const incorrectQuestions = useMemo(() => {
    return questions.filter((q, index) => {
      const selected = answers[index];
      return selected !== q.correctIndex;
    });
  }, [questions, answers]);

  // Handle bookmark toggle
  const handleToggleBookmark = (questionId) => {
    const nowMarked = toggleBookmark(questionId);
    setBookmarkedSet((prev) => {
      const next = new Set(prev);
      if (nowMarked) next.add(String(questionId));
      else next.delete(String(questionId));
      return next;
    });
  };

  // Filtered review list
  const filteredQuestions = useMemo(() => {
    return questions.map((q, idx) => ({ ...q, originalIndex: idx })).filter((q) => {
      const selected = answers[q.originalIndex];
      const isCorrect = selected === q.correctIndex;
      const isMarked = bookmarkedSet.has(String(q.id));

      if (filter === 'incorrect') return !isCorrect;
      if (filter === 'correct') return isCorrect;
      if (filter === 'bookmarked') return isMarked;
      return true;
    });
  }, [questions, answers, filter, bookmarkedSet]);

  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      {/* Result Hero Header */}
      <div className={`rounded-3xl border p-6 sm:p-8 ${assessment.bgClass}`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-muted">
              <Award size={16} className={assessment.colorClass} />
              <span>Assessment Summary • {mode === 'exam' ? 'Exam Mode' : 'Practice Mode'}</span>
            </div>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-brand-heading">
              {title}
            </h2>
            {subtitle ? <p className="mt-1 text-sm text-brand-body">{subtitle}</p> : null}
          </div>

          <div className="flex items-baseline gap-2 rounded-2xl border border-brand-border bg-brand-elevated/80 px-5 py-3 shadow-card">
            <span className="font-display text-4xl font-extrabold text-brand-heading">{scoreCountString(correctCount, totalQuestions)}</span>
            <span className={`font-display text-xl font-bold ${assessment.colorClass}`}>
              ({percentage}%)
            </span>
          </div>
        </div>

        <div className="mt-5 border-t border-brand-border/40 pt-4">
          <p className="text-sm font-semibold text-brand-heading">{assessment.title}</p>
          <p className="mt-1 text-xs sm:text-sm text-brand-body leading-relaxed">{assessment.description}</p>
        </div>
      </div>

      {/* Metric Breakdown Cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Card hover={false} className="p-4 border-brand-border">
          <p className="text-xs uppercase tracking-wider text-brand-muted">Total Questions</p>
          <p className="mt-2 font-display text-2xl font-bold text-brand-heading">{totalQuestions}</p>
          <p className="mt-1 text-[11px] text-brand-muted">Exam standard set</p>
        </Card>

        <Card hover={false} className="p-4 border-emerald-500/30 bg-emerald-500/5">
          <p className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-emerald-400 font-semibold">
            <CheckCircle2 size={14} /> Correct
          </p>
          <p className="mt-2 font-display text-2xl font-bold text-emerald-400">{correctCount}</p>
          <p className="mt-1 text-[11px] text-emerald-300/80">Accurate answers</p>
        </Card>

        <Card hover={false} className="p-4 border-rose-500/30 bg-rose-500/5">
          <p className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-rose-400 font-semibold">
            <XCircle size={14} /> Incorrect
          </p>
          <p className="mt-2 font-display text-2xl font-bold text-rose-400">{wrongCount}</p>
          <p className="mt-1 text-[11px] text-rose-300/80">Requires review</p>
        </Card>

        <Card hover={false} className="p-4 border-amber-500/30 bg-amber-500/5">
          <p className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-amber-400 font-semibold">
            <HelpCircle size={14} /> Skipped
          </p>
          <p className="mt-2 font-display text-2xl font-bold text-amber-400">{skippedCount}</p>
          <p className="mt-1 text-[11px] text-amber-300/80">Unanswered</p>
        </Card>
      </div>

      {/* Main Actions Bar */}
      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-brand-border bg-brand-surface p-4">
        {incorrectQuestions.length > 0 && typeof onRetryIncorrect === 'function' ? (
          <Button
            variant="primary"
            icon={<RotateCcw size={16} />}
            onClick={() => onRetryIncorrect(incorrectQuestions)}
            className="w-full sm:w-auto"
          >
            Retry Incorrect Answers ({incorrectQuestions.length})
          </Button>
        ) : null}

        <Button
          variant="secondary"
          icon={<RefreshCcw size={16} />}
          onClick={onRestart}
          className="w-full sm:w-auto"
        >
          Retake Full Quiz
        </Button>

        {typeof onBackToUnit === 'function' && (
          <Button
            variant="ghost"
            icon={<ArrowRight size={16} />}
            onClick={onBackToUnit}
            className="w-full sm:w-auto"
          >
            Back to Unit Overview
          </Button>
        )}
      </div>

      {/* Question Review Section */}
      <div className="space-y-4 pt-4 border-t border-brand-border">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-xl font-bold text-brand-heading">
            Detailed Answer Review
          </h3>

          {/* Review Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`rounded-xl px-3 py-1.5 font-semibold transition ${
                filter === 'all'
                  ? 'bg-brand-primary text-slate-950 shadow-sm'
                  : 'border border-brand-border bg-brand-surface text-brand-body hover:border-brand-border-hover'
              }`}
            >
              All ({totalQuestions})
            </button>
            <button
              type="button"
              onClick={() => setFilter('incorrect')}
              className={`rounded-xl px-3 py-1.5 font-semibold transition ${
                filter === 'incorrect'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'border border-brand-border bg-brand-surface text-brand-body hover:border-brand-border-hover'
              }`}
            >
              Incorrect ({incorrectQuestions.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('correct')}
              className={`rounded-xl px-3 py-1.5 font-semibold transition ${
                filter === 'correct'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'border border-brand-border bg-brand-surface text-brand-body hover:border-brand-border-hover'
              }`}
            >
              Correct ({correctCount})
            </button>
            {bookmarkedSet.size > 0 && (
              <button
                type="button"
                onClick={() => setFilter('bookmarked')}
                className={`rounded-xl px-3 py-1.5 font-semibold transition ${
                  filter === 'bookmarked'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'border border-brand-border bg-brand-surface text-brand-body hover:border-brand-border-hover'
                }`}
              >
                ★ Bookmarked ({questions.filter((q) => bookmarkedSet.has(String(q.id))).length})
              </button>
            )}
          </div>
        </div>

        {/* Review Cards List */}
        <div className="space-y-4">
          {filteredQuestions.length === 0 ? (
            <Card hover={false} className="py-8 text-center text-sm text-brand-muted">
              No questions match this review filter.
            </Card>
          ) : (
            filteredQuestions.map((q) => {
              const selectedIdx = answers[q.originalIndex];
              const isAnswered = typeof selectedIdx === 'number';
              const isCorrect = isAnswered && selectedIdx === q.correctIndex;
              const isMarked = bookmarkedSet.has(String(q.id));

              const selectedOption = isAnswered ? q.options[selectedIdx] : null;
              const correctOption = q.options[q.correctIndex];

              return (
                <div
                  key={q.id}
                  className={`rounded-2xl border p-5 transition ${
                    isCorrect
                      ? 'border-emerald-500/30 bg-emerald-500/5'
                      : isAnswered
                      ? 'border-rose-500/30 bg-rose-500/5'
                      : 'border-amber-500/30 bg-amber-500/5'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brand-border/40 pb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-lg border border-brand-border bg-brand-elevated px-2.5 py-1 text-xs font-bold text-brand-heading">
                        Q{q.originalIndex + 1}
                      </span>
                      {q.pyq ? (
                        <span className="rounded-lg border border-brand-coral/40 bg-brand-coral/10 px-2.5 py-1 text-xs font-semibold text-brand-coral">
                          {q.pyq}
                        </span>
                      ) : (
                        <span className="rounded-lg border border-brand-border bg-brand-surface px-2.5 py-1 text-xs font-medium text-brand-muted">
                          Practice MCQ
                        </span>
                      )}
                      {q.unitBadge ? (
                        <span className="rounded-lg border border-brand-primary/30 bg-brand-primary/10 px-2.5 py-1 text-xs font-semibold text-brand-primary">
                          {q.unitBadge}
                        </span>
                      ) : null}
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                          isCorrect
                            ? 'bg-emerald-500/15 text-emerald-400'
                            : isAnswered
                            ? 'bg-rose-500/15 text-rose-400'
                            : 'bg-amber-500/15 text-amber-400'
                        }`}
                      >
                        {isCorrect ? (
                          <>
                            <CheckCircle2 size={14} /> Correct
                          </>
                        ) : isAnswered ? (
                          <>
                            <XCircle size={14} /> Incorrect
                          </>
                        ) : (
                          <>
                            <HelpCircle size={14} /> Skipped
                          </>
                        )}
                      </span>

                      <button
                        type="button"
                        onClick={() => handleToggleBookmark(q.id)}
                        className={`rounded-lg p-1.5 transition outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${
                          isMarked
                            ? 'text-amber-400 bg-amber-400/15'
                            : 'text-brand-muted hover:text-brand-heading'
                        }`}
                        title={isMarked ? 'Remove bookmark' : 'Bookmark question'}
                        aria-label={isMarked ? 'Remove bookmark' : 'Bookmark question'}
                      >
                        <Bookmark size={15} className={isMarked ? 'fill-amber-400' : ''} />
                      </button>
                    </div>
                  </div>

                  <p className="mt-3 font-display text-base font-semibold leading-relaxed text-brand-heading">
                    {q.prompt}
                  </p>

                  <div className="mt-3 grid gap-2 sm:grid-cols-2 text-xs sm:text-sm">
                    <div className="rounded-xl border border-brand-border bg-brand-elevated/60 p-3">
                      <span className="text-brand-muted block text-[11px] uppercase tracking-wider">Your Answer:</span>
                      <p className={`mt-1 font-semibold ${isCorrect ? 'text-emerald-400' : isAnswered ? 'text-rose-400' : 'text-amber-400'}`}>
                        {selectedOption ? `${selectedOption.label}. ${selectedOption.text}` : 'Not attempted'}
                      </p>
                    </div>

                    <div className="rounded-xl border border-brand-primary/30 bg-brand-primary/5 p-3">
                      <span className="text-brand-primary block text-[11px] uppercase tracking-wider font-semibold">Correct Answer:</span>
                      <p className="mt-1 font-semibold text-brand-heading">
                        {correctOption ? `${correctOption.label}. ${correctOption.text}` : q.correctAnswerText}
                      </p>
                    </div>
                  </div>

                  {/* Stored Explanation */}
                  <div className="mt-3 rounded-xl border border-brand-border bg-brand-surface/70 p-3 text-xs leading-relaxed text-brand-body">
                    <span className="font-semibold text-brand-primary mr-1">Explanation:</span>
                    <span>{q.explanation || 'Explanation coming soon'}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </motion.div>
  );
}

function scoreCountString(correct, total) {
  return `${correct}/${total}`;
}

export default QuizResult;
