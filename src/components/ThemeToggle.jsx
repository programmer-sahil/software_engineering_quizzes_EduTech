import { motion, useReducedMotion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

function ThemeToggle({ theme = 'dark', onToggle, compact = false, className = '' }) {
  const isLight = theme === 'light';
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={onToggle}
      whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
      className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-xl border border-brand-border bg-brand-surface text-brand-body transition-colors hover:border-brand-primary/50 hover:text-brand-heading focus-visible:ring-2 focus-visible:ring-brand-primary ${
        compact ? 'px-3 py-2 text-xs' : 'px-3.5 py-2 text-sm'
      } ${className}`}
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      title={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
    >
      <motion.div
        key={theme}
        initial={shouldReduceMotion ? false : { rotate: -30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-brand-primary"
      >
        {isLight ? <Moon size={17} /> : <Sun size={17} />}
      </motion.div>
      {!compact ? (
        <span className="font-semibold">{isLight ? 'Dark' : 'Light'}</span>
      ) : null}
    </motion.button>
  );
}

export default ThemeToggle;
