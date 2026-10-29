import { Search, X } from 'lucide-react';

/**
 * SearchFilter Component - Design System
 * Search input + accessible filter pills for units, topics, and reels
 */
function SearchFilter({
  searchQuery = '',
  onSearchChange,
  filterOptions = [],
  activeFilter = 'all',
  onFilterChange,
  placeholder = 'Search topics, units, or questions...',
  className = '',
}) {
  return (
    <div className={`space-y-3 ${className}`}>
      {/* Search Input Bar */}
      <div className="relative flex items-center">
        <Search
          size={18}
          className="pointer-events-none absolute left-4 text-brand-muted"
          aria-hidden="true"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          className="min-h-[44px] w-full rounded-2xl border border-brand-border bg-brand-surface py-2.5 pl-11 pr-10 text-sm text-brand-heading placeholder-brand-muted shadow-card transition-all outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
        />
        {searchQuery ? (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            aria-label="Clear search query"
            className="absolute right-3 inline-flex h-7 w-7 items-center justify-center rounded-lg text-brand-muted hover:bg-brand-elevated hover:text-brand-heading"
          >
            <X size={15} />
          </button>
        ) : null}
      </div>

      {/* Filter Options Pills */}
      {filterOptions.length > 0 ? (
        <div className="flex flex-wrap items-center gap-2">
          {filterOptions.map((opt) => {
            const isSelected = opt.id === activeFilter;

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onFilterChange(opt.id)}
                className={`inline-flex min-h-[36px] items-center gap-1.5 rounded-xl border px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  isSelected
                    ? 'border-brand-primary/50 bg-brand-primary/10 text-brand-primary shadow-sm'
                    : 'border-brand-border bg-brand-surface text-brand-body hover:border-brand-border hover:bg-brand-elevated hover:text-brand-heading'
                }`}
              >
                {opt.label}
                {typeof opt.count === 'number' ? (
                  <span
                    className={`ml-1 rounded-full px-1.5 py-0.2 text-[10px] ${
                      isSelected
                        ? 'bg-brand-primary/20 text-brand-primary'
                        : 'bg-brand-elevated text-brand-muted'
                    }`}
                  >
                    {opt.count}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default SearchFilter;
