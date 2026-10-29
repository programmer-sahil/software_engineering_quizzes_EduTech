import { motion, useReducedMotion } from 'framer-motion';

/**
 * ProgressBar Component - Design System
 * Accessible linear progress indicator for quizzes, lessons & revision
 */
function ProgressBar({
  current = 0,
  total = 100,
  label,
  showPercentage = true,
  className = '',
  color = 'primary',
}) {
  const shouldReduceMotion = useReducedMotion();
  const percentage = total > 0 ? Math.min(Math.round((current / total) * 100), 100) : 0;

  const colorVariants = {
    primary: 'from-brand-primary to-brand-accent',
    success: 'from-brand-success to-emerald-400',
    coral: 'from-brand-coral to-rose-400',
  };

  return (
    <div className={`space-y-1.5 ${className}`}>
      {label || showPercentage ? (
        <div className="flex items-center justify-between text-xs font-semibold text-brand-body">
          {label ? <span>{label}</span> : <span />}
          {showPercentage ? <span>{percentage}%</span> : null}
        </div>
      ) : null}

      <div
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={label || 'Progress'}
        className="h-2 w-full overflow-hidden rounded-full bg-brand-elevated"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${colorVariants[color] || colorVariants.primary}`}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
