/**
 * Badge Component - Design System
 * Restrained, high-contrast status and metadata indicator
 */

const variants = {
  primary:
    'border-brand-primary/35 bg-brand-primary/10 text-brand-primary dark:text-cyan-300',
  secondary:
    'border-brand-secondary/35 bg-brand-secondary/10 text-brand-secondary dark:text-violet-300',
  coral:
    'border-brand-coral/40 bg-brand-coral/10 text-brand-coral dark:text-rose-300',
  success:
    'border-brand-success/35 bg-brand-success/10 text-brand-success dark:text-emerald-300',
  neutral:
    'border-brand-border bg-brand-elevated text-brand-body',
  locked:
    'border-brand-border bg-brand-elevated/80 text-brand-muted',
};

function Badge({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
}) {
  const sizeClass = size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-3 py-1 text-xs';

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-semibold tracking-wide ${variants[variant]} ${sizeClass} ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}

export default Badge;
