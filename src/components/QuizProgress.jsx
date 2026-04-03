function QuizProgress({ currentIndex, total, answered, scorePercent }) {
  const progress = ((currentIndex + 1) / total) * 100;

  return (
    <div className="mb-5 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
        <p className="text-slate-300">
          Question <span className="font-semibold text-white">{currentIndex + 1}</span> / {total}
        </p>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            Answered: {answered}/{total}
          </span>
          <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs text-accent">
            Score: {scorePercent}%
          </span>
        </div>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-neon transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default QuizProgress;
