import { motion } from 'framer-motion';

/**
 * Tabs Component - Design System
 * Accessible tab bar with keyboard navigation & animated indicator
 */
function Tabs({
  tabs = [],
  activeTab,
  onChange,
  className = '',
  layoutId = 'active-tab-indicator',
}) {
  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowRight') {
      const nextIndex = (index + 1) % tabs.length;
      onChange(tabs[nextIndex].id);
    } else if (e.key === 'ArrowLeft') {
      const prevIndex = (index - 1 + tabs.length) % tabs.length;
      onChange(tabs[prevIndex].id);
    }
  };

  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className={`inline-flex flex-wrap items-center gap-1.5 rounded-2xl border border-brand-border bg-brand-surface p-1.5 shadow-card ${className}`}
    >
      {tabs.map((tab, index) => {
        const isActive = tab.id === activeTab;
        const Icon = tab.icon;

        return (
          <button
            key={tab.id}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`group relative inline-flex min-h-[44px] items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold tracking-wide transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${
              isActive
                ? 'text-brand-primary dark:text-cyan-300'
                : 'text-brand-body hover:text-brand-heading hover:bg-brand-elevated/60'
            }`}
          >
            {isActive ? (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 rounded-xl border border-brand-primary/40 bg-brand-primary/10 shadow-sm"
                transition={{ type: 'spring', stiffness: 420, damping: 32 }}
              />
            ) : null}

            <span className="relative z-10 inline-flex items-center gap-2">
              {Icon ? <Icon size={16} className="shrink-0" /> : null}
              <span>{tab.label || tab.title}</span>
              {typeof tab.count === 'number' ? (
                <span
                  className={`ml-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    isActive
                      ? 'bg-brand-primary/20 text-brand-primary'
                      : 'bg-brand-elevated text-brand-muted'
                  }`}
                >
                  {tab.count}
                </span>
              ) : null}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default Tabs;
