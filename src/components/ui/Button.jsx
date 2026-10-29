import { motion, useReducedMotion } from 'framer-motion';

const variants = {
  primary:
    'bg-gradient-to-r from-accent to-neon text-slate-950 font-bold shadow-glow hover:shadow-cyan-400/50 border border-transparent',
  secondary:
    'bg-brand-surface text-brand-heading border border-brand-border hover:border-brand-primary/50 hover:bg-brand-elevated shadow-card',
  outline:
    'border border-brand-primary/40 text-brand-primary hover:bg-brand-primary/10 bg-transparent',
  ghost:
    'bg-transparent text-brand-body hover:text-brand-heading hover:bg-white/5',
  danger:
    'bg-brand-coral/10 text-brand-coral border border-brand-coral/30 hover:bg-brand-coral/20',
};

const sizes = {
  sm: 'min-h-[40px] px-3.5 py-1.5 text-xs rounded-lg',
  md: 'min-h-[44px] px-5 py-2.5 text-sm rounded-xl',
  lg: 'min-h-[48px] px-6 py-3.5 text-base rounded-2xl',
};

function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  type = 'button',
  onClick,
  disabled = false,
  loading = false,
  ariaLabel,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      whileHover={shouldReduceMotion || disabled || loading ? {} : { y: -2 }}
      whileTap={shouldReduceMotion || disabled || loading ? {} : { scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-canvas disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {loading ? (
        <svg
          className="h-4 w-4 animate-spin text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        icon
      )}
      {children}
    </motion.button>
  );
}

export default Button;
