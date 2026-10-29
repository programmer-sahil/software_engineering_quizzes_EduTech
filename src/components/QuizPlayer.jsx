import { AnimatePresence, motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  ChevronDown,
  Clock,
  ExternalLink,
  Flag,
  HelpCircle,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
  XCircle,
} from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { normalizeQuestions } from '../content/questionNormalizer';
import {
  clearQuizSession,
  getBookmarks,
  isBookmarked,
  loadQuizSession,
  recordQuizAttempt,
  saveQuizSession,
  toggleBookmark,
} from '../utils/quizStorage';
import QuestionNavigator from './QuestionNavigator';
import QuizProgress from './QuizProgress';
import QuizResult from './QuizResult';
import Button from './ui/Button';
import Card from './ui/Card';
import EmptyState from './ui/EmptyState';

function QuizPlayer({
  title = 'Interactive Practice Quiz',
  subtitle,
  questions: rawQuestions = [],
  sessionKey = 'default',
  initialMode = 'practice', // 'practice' | 'exam'
  allowModeToggle = true,
  defaultTimerMinutes = 15,
  subjectId = 'iot',
  unitId = '1',
  onFinish,
  onBackToUnit,
}) {
  // Normalize all incoming questions safely and immutably
  const normalizedQuestions = useMemo(() => {
    return normalizeQuestions(rawQuestions, { subjectId, unitId });
  }, [rawQuestions, subjectId, unitId]);

  // Active question set (can be reduced when retrying incorrect answers)
  const [activeQuestions, setActiveQuestions] = useState(normalizedQuestions);
  useEffect(() => {
    setActiveQuestions(normalizedQuestions);
  }, [normalizedQuestions]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { [questionIndex]: optionIndex }
  const [checkedQuestions, setCheckedQuestions] = useState({}); // { [questionIndex]: true }
  const [submitted, setSubmitted] = useState(false);
  const [mode, setMode] = useState(initialMode); // 'practice' | 'exam'
  const [showExplanation, setShowExplanation] = useState(false);

  // Collapse explanation whenever navigating to a different question
  useEffect(() => {
    setShowExplanation(false);
  }, [currentIndex]);

  // Timer state for exam mode
  const [timerSeconds, setTimerSeconds] = useState(() => (mode === 'exam' ? defaultTimerMinutes * 60 : null));
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // Bookmark tracking
  const [bookmarkedIds, setBookmarkedIds] = useState(() => new Set(getBookmarks()));

  // Unanswered confirmation modal
  const [showConfirmSubmitModal, setShowConfirmSubmitModal] = useState(false);

  // Resume prompt state
  const [resumePrompt, setResumePrompt] = useState(null);

  // Current active question
  const currentQuestion = activeQuestions[currentIndex];
  const selectedOptionIndex = answers[currentIndex];
  const isCurrentChecked = Boolean(checkedQuestions[currentIndex]);

  const answeredCount = useMemo(
    () => Object.values(answers).filter((val) => typeof val === 'number').length,
    [answers]
  );
  const totalQuestions = activeQuestions.length;
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const allAnswered = answeredCount === totalQuestions;

  // ==========================================
  // AUTOSAVE & RESUME
  // ==========================================
  useEffect(() => {
    if (!sessionKey || activeQuestions.length === 0) return;
    const saved = loadQuizSession(sessionKey);
    if (saved && saved.activeQuestionsLength === activeQuestions.length && !submitted) {
      const savedAnswered = Object.keys(saved.answers || {}).length;
      if (savedAnswered > 0) {
        setResumePrompt({
          savedIndex: saved.currentIndex || 0,
          savedAnswers: saved.answers || {},
          savedChecked: saved.checkedQuestions || {},
          savedAnsweredCount: savedAnswered,
          savedMode: saved.mode || initialMode,
        });
      }
    }
  }, [sessionKey, activeQuestions.length]);

  // Persist session changes
  useEffect(() => {
    if (!sessionKey || submitted || activeQuestions.length === 0) return;
    if (answeredCount > 0 || currentIndex > 0) {
      saveQuizSession(sessionKey, {
        currentIndex,
        answers,
        checkedQuestions,
        mode,
        timerSeconds,
        activeQuestionsLength: activeQuestions.length,
      });
    }
  }, [sessionKey, currentIndex, answers, checkedQuestions, mode, timerSeconds, answeredCount, submitted, activeQuestions.length]);

  const handleResumeSession = () => {
    if (resumePrompt) {
      setCurrentIndex(resumePrompt.savedIndex);
      setAnswers(resumePrompt.savedAnswers);
      setCheckedQuestions(resumePrompt.savedChecked);
      if (resumePrompt.savedMode) setMode(resumePrompt.savedMode);
      setResumePrompt(null);
    }
  };

  const handleDiscardSession = () => {
    clearQuizSession(sessionKey);
    setAnswers({});
    setCheckedQuestions({});
    setCurrentIndex(0);
    setResumePrompt(null);
  };

  // ==========================================
  // TIMER TICK FOR EXAM MODE
  // ==========================================
  useEffect(() => {
    if (mode !== 'exam' || !isTimerRunning || timerSeconds === null || submitted) return;

    if (timerSeconds <= 0) {
      // Auto-submit when time expires
      handleSubmitQuiz();
      return;
    }

    const interval = setInterval(() => {
      setTimerSeconds((prev) => (prev !== null && prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [mode, isTimerRunning, timerSeconds, submitted]);

  // ==========================================
  // SELECTION & SUBMISSION
  // ==========================================
  const handleSelectOption = (optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex,
    }));

    // In practice mode, automatically mark as checked on answer selection
    // so students get instant feedback with full explanation
    if (mode === 'practice') {
      setCheckedQuestions((prev) => ({
        ...prev,
        [currentIndex]: true,
      }));
    }
  };

  const handleToggleCheck = () => {
    setCheckedQuestions((prev) => ({
      ...prev,
      [currentIndex]: !prev[currentIndex],
    }));
  };

  const nextQuestion = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleToggleCurrentBookmark = () => {
    if (!currentQuestion) return;
    const nowMarked = toggleBookmark(currentQuestion.id);
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (nowMarked) next.add(String(currentQuestion.id));
      else next.delete(String(currentQuestion.id));
      return next;
    });
  };

  const handleSubmitQuiz = () => {
    setShowConfirmSubmitModal(false);
    clearQuizSession(sessionKey);
    setSubmitted(true);

    // Compute metrics and record attempt
    const correctCount = activeQuestions.reduce((acc, q, idx) => {
      return acc + (answers[idx] === q.correctIndex ? 1 : 0);
    }, 0);

    const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    recordQuizAttempt({
      subjectId,
      unitId,
      quizTitle: title,
      total: totalQuestions,
      score: correctCount,
      percentage,
      mode,
    });

    if (typeof onFinish === 'function') {
      onFinish({ score: correctCount, total: totalQuestions, percentage });
    }
  };

  const handleAttemptSubmit = () => {
    if (mode === 'exam' && !allAnswered) {
      setShowConfirmSubmitModal(true);
    } else {
      handleSubmitQuiz();
    }
  };

  const restartQuiz = () => {
    clearQuizSession(sessionKey);
    setActiveQuestions(normalizedQuestions);
    setAnswers({});
    setCheckedQuestions({});
    setCurrentIndex(0);
    setSubmitted(false);
    if (mode === 'exam') {
      setTimerSeconds(defaultTimerMinutes * 60);
      setIsTimerRunning(true);
    }
  };

  // Retry only incorrect questions
  const handleRetryIncorrect = (incorrectQuestions) => {
    clearQuizSession(sessionKey);
    setActiveQuestions(incorrectQuestions);
    setAnswers({});
    setCheckedQuestions({});
    setCurrentIndex(0);
    setSubmitted(false);
    if (mode === 'exam') {
      setTimerSeconds(Math.max(5, Math.ceil(incorrectQuestions.length * 1.5)) * 60);
      setIsTimerRunning(true);
    }
  };

  // Switch between Practice and Exam modes
  const handleToggleMode = (newMode) => {
    if (newMode === mode) return;
    setMode(newMode);
    if (newMode === 'exam') {
      setTimerSeconds(defaultTimerMinutes * 60);
      setIsTimerRunning(true);
      setCheckedQuestions({});
    } else {
      setTimerSeconds(null);
    }
  };

  // ==========================================
  // KEYBOARD ACCESSIBILITY
  // ==========================================
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Avoid firing when focusing text inputs
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextQuestion();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevQuestion();
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        const optionIdx = parseInt(e.key, 10) - 1;
        if (currentQuestion && optionIdx < currentQuestion.options.length) {
          handleSelectOption(optionIdx);
        }
      } else if (['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D'].includes(e.key)) {
        const optionIdx = e.key.toUpperCase().charCodeAt(0) - 65;
        if (currentQuestion && optionIdx < currentQuestion.options.length) {
          handleSelectOption(optionIdx);
        }
      } else if (e.key === 'Enter' && !isLastQuestion) {
        e.preventDefault();
        nextQuestion();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, totalQuestions, currentQuestion, isLastQuestion]);

  // ==========================================
  // ZERO-QUESTION GUARD
  // ==========================================
  if (totalQuestions === 0) {
    return (
      <EmptyState
        icon={HelpCircle}
        title="No Questions Available"
        description="There are currently no verified questions matching this selection. Questions are added systematically based on official diploma syllabus standards."
      />
    );
  }

  // ==========================================
  // RESULTS VIEW
  // ==========================================
  if (submitted) {
    return (
      <QuizResult
        title={title}
        subtitle={subtitle}
        questions={activeQuestions}
        answers={answers}
        mode={mode}
        onRestart={restartQuiz}
        onRetryIncorrect={handleRetryIncorrect}
        onBackToUnit={onBackToUnit}
      />
    );
  }

  const isCurrentBookmarked = currentQuestion ? bookmarkedIds.has(String(currentQuestion.id)) : false;

  return (
    <div className="space-y-5">
      {/* Quiz Top Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-brand-border pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-primary">
            <Sparkles size={13} />
            <span>EduTech Interactive Assessment</span>
          </div>
          <h2 className="mt-1 font-display text-xl sm:text-2xl font-bold text-brand-heading">
            {title}
          </h2>
          {subtitle ? <p className="mt-1 text-xs sm:text-sm text-brand-muted">{subtitle}</p> : null}
        </div>

        {/* Mode Selector & Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {allowModeToggle && (
            <div className="flex items-center rounded-xl border border-brand-border bg-brand-surface p-1 text-xs">
              <button
                type="button"
                onClick={() => handleToggleMode('practice')}
                className={`rounded-lg px-3 py-1 font-semibold transition ${
                  mode === 'practice'
                    ? 'bg-brand-primary/15 text-brand-primary border border-brand-primary/40'
                    : 'text-brand-muted hover:text-brand-heading'
                }`}
              >
                Practice
              </button>
              <button
                type="button"
                onClick={() => handleToggleMode('exam')}
                className={`rounded-lg px-3 py-1 font-semibold transition ${
                  mode === 'exam'
                    ? 'bg-brand-coral/15 text-brand-coral border border-brand-coral/40'
                    : 'text-brand-muted hover:text-brand-heading'
                }`}
              >
                Exam Mode
              </button>
            </div>
          )}

          {mode === 'exam' && timerSeconds !== null && (
            <button
              type="button"
              onClick={() => setIsTimerRunning((prev) => !prev)}
              className="inline-flex items-center gap-1 rounded-xl border border-brand-border bg-brand-surface px-2.5 py-1.5 text-xs text-brand-body hover:border-brand-border-hover transition"
              title={isTimerRunning ? 'Pause exam timer' : 'Resume exam timer'}
            >
              {isTimerRunning ? <Pause size={13} /> : <Play size={13} />}
              <span>{isTimerRunning ? 'Pause' : 'Resume'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Resume Banner if pending saved session */}
      {resumePrompt && (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-brand-primary/30 bg-brand-primary/10 p-4">
          <div className="flex items-center gap-3">
            <Sparkles className="text-brand-primary shrink-0" size={20} />
            <div>
              <p className="text-sm font-semibold text-brand-heading">
                Resume previous session?
              </p>
              <p className="text-xs text-brand-body">
                You previously answered {resumePrompt.savedAnsweredCount} of {totalQuestions} questions.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="primary" onClick={handleResumeSession}>
              Resume Session
            </Button>
            <Button size="sm" variant="ghost" onClick={handleDiscardSession}>
              Start Fresh
            </Button>
          </div>
        </div>
      )}

      {/* Progress & Status Bar */}
      <QuizProgress
        currentIndex={currentIndex}
        total={totalQuestions}
        answered={answeredCount}
        mode={mode}
        timerSeconds={timerSeconds}
        isTimerRunning={isTimerRunning}
      />

      {/* Question Card View */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -15 }}
          transition={{ duration: 0.2 }}
        >
          <Card hover={false} className="p-6 sm:p-7 border-brand-border shadow-card">
            {/* Question Badges & Bookmark Action */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brand-border/60 pb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-xl border border-brand-border bg-brand-elevated px-3 py-1 text-xs font-bold text-brand-heading">
                  Question {currentIndex + 1}
                </span>

                {currentQuestion.pyq ? (
                  <span className="rounded-xl border border-brand-coral/40 bg-brand-coral/10 px-3 py-1 text-xs font-semibold text-brand-coral">
                    {currentQuestion.pyq}
                  </span>
                ) : (
                  <span className="rounded-xl border border-brand-border bg-brand-surface px-3 py-1 text-xs font-medium text-brand-muted">
                    Practice MCQ
                  </span>
                )}

                {currentQuestion.unitBadge ? (
                  <span className="rounded-xl border border-brand-primary/30 bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary">
                    {currentQuestion.unitBadge}
                  </span>
                ) : null}
              </div>

              {/* Bookmark Toggle */}
              <button
                type="button"
                onClick={handleToggleCurrentBookmark}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${
                  isCurrentBookmarked
                    ? 'border-amber-400/50 bg-amber-400/15 text-amber-300'
                    : 'border-brand-border bg-brand-surface text-brand-muted hover:text-brand-heading hover:border-brand-border-hover'
                }`}
                aria-pressed={isCurrentBookmarked}
                aria-label={isCurrentBookmarked ? 'Remove bookmark' : 'Bookmark this question'}
              >
                <Bookmark size={14} className={isCurrentBookmarked ? 'fill-amber-400' : ''} />
                <span>{isCurrentBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
              </button>
            </div>

            {/* Semantic Fieldset & Question Legend */}
            <fieldset className="mt-5 space-y-4">
              <legend className="font-display text-lg sm:text-xl font-bold leading-relaxed text-brand-heading">
                {currentQuestion.prompt}
              </legend>

              {/* Options Radio List */}
              <div className="mt-4 grid gap-3" role="radiogroup" aria-label={`Options for Question ${currentIndex + 1}`}>
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedOptionIndex === index;
                  const isCorrectAnswer = index === currentQuestion.correctIndex;
                  const showFeedback = mode === 'practice' && isCurrentChecked;

                  let cardStyle =
                    'border-brand-border bg-brand-elevated/40 text-brand-body hover:border-brand-border-hover hover:bg-brand-elevated/80';
                  let badgeStyle = 'border-brand-border bg-brand-surface text-brand-muted';

                  if (showFeedback) {
                    if (isCorrectAnswer) {
                      cardStyle =
                        'border-emerald-500/60 bg-emerald-500/15 text-emerald-300 font-medium shadow-glow-sm';
                      badgeStyle = 'border-emerald-500 bg-emerald-500 text-slate-950 font-bold';
                    } else if (isSelected && !isCorrectAnswer) {
                      cardStyle = 'border-rose-500/60 bg-rose-500/15 text-rose-300';
                      badgeStyle = 'border-rose-500 bg-rose-500 text-white font-bold';
                    }
                  } else if (isSelected) {
                    cardStyle =
                      'border-brand-primary bg-brand-primary/15 text-brand-primary shadow-glow-sm ring-1 ring-brand-primary/50';
                    badgeStyle = 'border-brand-primary bg-brand-primary text-slate-950 font-bold';
                  }

                  return (
                    <label
                      key={option.id}
                      className={`relative flex cursor-pointer items-start gap-3.5 rounded-2xl border p-4 sm:p-4.5 transition min-h-[52px] outline-none focus-within:ring-2 focus-within:ring-brand-primary ${cardStyle}`}
                    >
                      <input
                        type="radio"
                        name={`question-${currentQuestion.id}`}
                        value={index}
                        checked={isSelected}
                        onChange={() => handleSelectOption(index)}
                        className="sr-only"
                        aria-label={`Option ${option.label}: ${option.text}`}
                      />

                      {/* Option Letter Badge */}
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border text-xs font-bold transition ${badgeStyle}`}
                      >
                        {option.label}
                      </span>

                      {/* Option Text */}
                      <span className="flex-1 text-sm sm:text-base leading-relaxed text-inherit">
                        {option.text}
                      </span>

                      {/* Status Icon for Color-Blind Accessibility */}
                      {showFeedback && isCorrectAnswer && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400">
                          <CheckCircle2 size={18} />
                          <span className="sr-only">Correct option</span>
                        </span>
                      )}
                      {showFeedback && isSelected && !isCorrectAnswer && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-400">
                          <XCircle size={18} />
                          <span className="sr-only">Incorrect selection</span>
                        </span>
                      )}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {/* Practice Mode Feedback & Collapsible Explanation Control (Progressive Disclosure) */}
            {mode === 'practice' && isCurrentChecked && (
              <div className="mt-5 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-brand-border bg-brand-elevated/40 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-brand-body font-medium">
                      Correct Answer:
                    </span>
                    <span className="rounded-lg bg-emerald-500/20 px-2.5 py-0.5 text-xs font-bold text-emerald-400">
                      Option {currentQuestion.options[currentQuestion.correctIndex]?.label}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowExplanation((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-brand-primary/40 bg-brand-primary/10 px-3.5 py-1.5 text-xs font-semibold text-brand-primary hover:bg-brand-primary/20 transition cursor-pointer"
                    aria-expanded={showExplanation}
                  >
                    <Sparkles size={13} />
                    <span>{showExplanation ? 'Hide Explanation' : 'View Explanation'}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${showExplanation ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>

                <AnimatePresence>
                  {showExplanation && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="rounded-2xl border border-brand-primary/30 bg-brand-surface p-4 sm:p-5">
                        <div className="flex items-center justify-between gap-2 border-b border-brand-border pb-2.5">
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-primary">
                            <Sparkles size={13} /> Official Solution &amp; Explanation
                          </span>
                          <span className="text-xs text-brand-muted">
                            Correct: <strong>Option {currentQuestion.options[currentQuestion.correctIndex]?.label}</strong>
                          </span>
                        </div>
                        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-brand-body">
                          {currentQuestion.explanation || 'Explanation coming soon'}
                        </p>
                        {currentQuestion.pyq && (
                          <p className="mt-2 text-xs font-medium text-brand-muted">
                            Citation: {currentQuestion.pyq} • Verified Diploma Past Paper
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Navigation & Action Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <Button
          variant="secondary"
          icon={<ArrowLeft size={16} />}
          onClick={prevQuestion}
          disabled={currentIndex === 0}
          className="disabled:opacity-40"
        >
          Previous
        </Button>

        <div className="flex items-center gap-2">
          {mode === 'practice' && typeof selectedOptionIndex === 'number' && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleToggleCheck}
              className="text-xs text-brand-muted hover:text-brand-heading"
            >
              {isCurrentChecked ? 'Hide Solution' : 'Show Solution'}
            </Button>
          )}

          {!isLastQuestion ? (
            <Button
              variant="primary"
              icon={<ArrowRight size={16} />}
              onClick={nextQuestion}
            >
              Next
            </Button>
          ) : (
            <Button
              variant="primary"
              icon={<Flag size={16} />}
              onClick={handleAttemptSubmit}
              className="bg-brand-coral hover:bg-brand-coral/90 text-white"
            >
              Submit Quiz
            </Button>
          )}
        </div>
      </div>

      {/* Question Navigator Grid */}
      <QuestionNavigator
        total={totalQuestions}
        currentIndex={currentIndex}
        answers={answers}
        bookmarkedIds={bookmarkedIds}
        questions={activeQuestions}
        onSelectQuestion={(idx) => setCurrentIndex(idx)}
        className="mt-4"
      />

      {/* Keyboard Shortcut Hints for Accessibility */}
      <div className="hidden sm:flex items-center justify-center gap-4 text-[11px] text-brand-muted pt-2">
        <span>Keyboard:</span>
        <span className="rounded bg-brand-surface px-1.5 py-0.5 border border-brand-border">1 - 4</span>
        <span>Select option</span>
        <span className="rounded bg-brand-surface px-1.5 py-0.5 border border-brand-border">← / →</span>
        <span>Prev / Next</span>
        <span className="rounded bg-brand-surface px-1.5 py-0.5 border border-brand-border">Enter</span>
        <span>Advance</span>
      </div>

      {/* Confirmation Modal for Unanswered Questions (Exam Mode) */}
      {showConfirmSubmitModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-modal-title"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-md rounded-3xl border border-brand-border bg-brand-canvas p-6 shadow-2xl"
          >
            <div className="flex items-center gap-3 text-brand-coral">
              <AlertTriangle size={24} />
              <h3 id="confirm-modal-title" className="font-display text-lg font-bold text-brand-heading">
                Unanswered Questions
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-brand-body">
              You have answered <strong className="text-brand-heading">{answeredCount}</strong> of{' '}
              <strong className="text-brand-heading">{totalQuestions}</strong> questions.{' '}
              {totalQuestions - answeredCount} question(s) remain unanswered.
            </p>
            <p className="mt-2 text-xs text-brand-muted">
              Are you sure you want to finish the exam now?
            </p>
            <div className="mt-6 flex items-center justify-end gap-3">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setShowConfirmSubmitModal(false);
                  // Find first unanswered index and jump to it
                  const firstUnanswered = Array.from({ length: totalQuestions }, (_, i) => i).find(
                    (i) => typeof answers[i] !== 'number'
                  );
                  if (typeof firstUnanswered === 'number') {
                    setCurrentIndex(firstUnanswered);
                  }
                }}
              >
                Review Unanswered
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={handleSubmitQuiz}
                className="bg-brand-coral text-white"
              >
                Submit Anyway
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default QuizPlayer;
