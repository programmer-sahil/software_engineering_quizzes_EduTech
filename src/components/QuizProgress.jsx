import { Clock, ShieldCheck, Sparkles } from 'lucide-react';

function formatTime(totalSeconds) {
  if (typeof totalSeconds !== 'number' || totalSeconds < 0) return '00:00';
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function QuizProgress({
  currentIndex = 0,
  total = 1,
  answered = 0,
  mode = 'practice',
  timerSeconds = null,
  isTimerRunning = false,
}) {
  const safeTotal = Math.max(1, total);
  const progressPercent = Math.min(100, Math.round(((currentIndex + 1) / safeTotal) * 100));

  const isLowTime = typeof timerSeconds === 'number' && timerSeconds < 120 && timerSeconds > 0;

  return (
    <div className="space-y-3 rounded-2xl border border-brand-border bg-brand-surface/60 p-4">
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
        {/* Left: Question Counter & Mode */}
        <div className="flex items-center gap-2.5">
          <span className="font-display font-bold text-brand-heading">
            Question <span className="text-brand-primary">{currentIndex + 1}</span> of {safeTotal}
          </span>
          <span className="text-brand-muted">•</span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-brand-muted">
            {mode === 'exam' ? (
              <span className="inline-flex items-center gap-1 text-brand-coral">
                <ShieldCheck size={13} /> Exam Mode
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-brand-secondary">
                <Sparkles size={13} /> Practice Mode
              </span>
            )}
          </span>
        </div>

        {/* Right: Answered Badge & Optional Timer */}
        <div className="flex items-center gap-2">
          {typeof timerSeconds === 'number' && (
            <div
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs font-bold transition-colors ${
                isLowTime
                  ? 'animate-pulse border border-rose-500/50 bg-rose-500/15 text-rose-400'
                  : 'border border-brand-border bg-brand-elevated text-brand-heading'
              }`}
            >
              <Clock size={13} className={isLowTime ? 'text-rose-400' : 'text-brand-primary'} />
              <span>{formatTime(timerSeconds)}</span>
              {!isTimerRunning && <span className="text-[10px] uppercase text-brand-muted">(Paused)</span>}
            </div>
          )}

          <span className="inline-flex items-center rounded-full border border-brand-border bg-brand-elevated px-3 py-1 text-xs font-semibold text-brand-body">
            Answered: <strong className="ml-1 text-brand-heading">{answered}</strong>/{safeTotal}
          </span>
        </div>
      </div>

      {/* Progress Bar Track */}
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-brand-border/60"
        role="progressbar"
        aria-valuenow={progressPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Question progress: ${currentIndex + 1} of ${safeTotal}`}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}

export default QuizProgress;
