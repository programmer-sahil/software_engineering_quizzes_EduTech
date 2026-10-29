import { Bookmark, ChevronDown, ChevronUp, Grid } from 'lucide-react';
import { useMemo, useState } from 'react';

function QuestionNavigator({
  total = 0,
  currentIndex = 0,
  answers = {},
  bookmarkedIds = new Set(),
  questions = [],
  onSelectQuestion,
  className = '',
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filter, setFilter] = useState('all'); // 'all' | 'unanswered' | 'bookmarked'

  const filteredIndices = useMemo(() => {
    return Array.from({ length: total }, (_, i) => i).filter((index) => {
      const q = questions[index];
      const isAnswered = typeof answers[index] === 'number';
      const isBookmarked = q ? bookmarkedIds.has(String(q.id)) : false;

      if (filter === 'unanswered') return !isAnswered;
      if (filter === 'bookmarked') return isBookmarked;
      return true;
    });
  }, [total, answers, bookmarkedIds, questions, filter]);

  const answeredCount = Object.values(answers).filter((val) => typeof val === 'number').length;
  const bookmarkedCount = questions.filter((q) => bookmarkedIds.has(String(q.id))).length;

  return (
    <div className={`rounded-2xl border border-brand-border bg-brand-surface p-4 ${className}`}>
      {/* Mobile Toggle / Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="inline-flex items-center gap-2 font-display text-sm font-bold text-brand-heading outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
          aria-expanded={isExpanded}
          aria-label="Toggle Question Navigator Grid"
        >
          <Grid size={16} className="text-brand-primary" />
          <span>Question Navigator</span>
          <span className="text-xs font-normal text-brand-muted">
            ({answeredCount}/{total} answered)
          </span>
          <span className="ml-1 text-brand-muted sm:hidden">
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </span>
        </button>

        {/* Filter Chips */}
        <div className="flex items-center gap-1.5 text-xs">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`rounded-lg px-2.5 py-1 font-semibold transition ${
              filter === 'all'
                ? 'bg-brand-primary/15 text-brand-primary border border-brand-primary/40'
                : 'text-brand-muted hover:text-brand-body'
            }`}
          >
            All ({total})
          </button>
          <button
            type="button"
            onClick={() => setFilter('unanswered')}
            className={`rounded-lg px-2.5 py-1 font-semibold transition ${
              filter === 'unanswered'
                ? 'bg-brand-coral/15 text-brand-coral border border-brand-coral/40'
                : 'text-brand-muted hover:text-brand-body'
            }`}
          >
            Left ({total - answeredCount})
          </button>
          {bookmarkedCount > 0 && (
            <button
              type="button"
              onClick={() => setFilter('bookmarked')}
              className={`rounded-lg px-2.5 py-1 font-semibold transition ${
                filter === 'bookmarked'
                  ? 'bg-amber-400/15 text-amber-300 border border-amber-400/40'
                  : 'text-brand-muted hover:text-brand-body'
              }`}
            >
              ★ ({bookmarkedCount})
            </button>
          )}
        </div>
      </div>

      {/* Grid Container (always visible on sm+, expandable on mobile) */}
      <div className={`mt-4 ${isExpanded ? 'block' : 'hidden sm:block'}`}>
        {filteredIndices.length === 0 ? (
          <p className="py-2 text-center text-xs text-brand-muted">No questions match this filter.</p>
        ) : (
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
            {filteredIndices.map((idx) => {
              const q = questions[idx];
              const isCurrent = idx === currentIndex;
              const isAnswered = typeof answers[idx] === 'number';
              const isMarked = q ? bookmarkedIds.has(String(q.id)) : false;

              let style = 'border-brand-border bg-brand-elevated/40 text-brand-muted hover:border-brand-border-hover';

              if (isAnswered) {
                style = 'border-emerald-500/40 bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25';
              }
              if (isCurrent) {
                style =
                  'border-brand-primary bg-brand-primary text-slate-950 font-bold ring-2 ring-brand-primary/40 shadow-glow-sm';
              }

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    onSelectQuestion(idx);
                    setIsExpanded(false);
                  }}
                  aria-label={`Go to Question ${idx + 1}${isAnswered ? ', Answered' : ', Unanswered'}${
                    isMarked ? ', Bookmarked' : ''
                  }`}
                  aria-current={isCurrent ? 'step' : undefined}
                  className={`relative flex h-9 items-center justify-center rounded-xl border text-xs font-semibold transition min-w-[36px] min-h-[36px] outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${style}`}
                >
                  <span>{idx + 1}</span>
                  {isMarked && (
                    <Bookmark
                      size={10}
                      className="absolute -top-1 -right-1 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionNavigator;

