import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Reusable Accessible Accordion Component
 * Supports progressive disclosure: reveals information only when requested.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.title - Heading or summary line
 * @param {React.ReactNode} props.badge - Optional pill or counter
 * @param {React.ReactNode} props.children - Expanded content
 * @param {boolean} [props.defaultOpen=false] - Initially expanded state
 * @param {string} [props.className=''] - Wrapper styling
 */
function Accordion({
  title,
  badge,
  children,
  defaultOpen = false,
  className = '',
  id,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`rounded-2xl border border-brand-border bg-brand-surface transition-all duration-200 ${
        isOpen ? 'shadow-sm' : ''
      } ${className}`}
    >
      <button
        type="button"
        id={id ? `${id}-header` : undefined}
        aria-controls={id ? `${id}-content` : undefined}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-3 p-4 text-left transition-colors hover:bg-brand-elevated/40 rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
      >
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="font-display text-sm sm:text-base font-bold text-brand-heading">
            {title}
          </span>
          {badge}
        </div>

        <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-muted shrink-0">
          <span>{isOpen ? 'Show Less' : 'Show Details'}</span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 text-brand-muted ${
              isOpen ? 'rotate-180 text-brand-primary' : ''
            }`}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={id ? `${id}-content` : undefined}
            role="region"
            aria-labelledby={id ? `${id}-header` : undefined}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-brand-border/60"
          >
            <div className="p-4 sm:p-5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Accordion;

