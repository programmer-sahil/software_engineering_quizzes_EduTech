/**
 * Skeleton Component - Design System
 * Polished shimmer placeholder for asynchronous and loading states
 */
function Skeleton({ className = '', variant = 'rectangular' }) {
  const variantClass =
    variant === 'circular'
      ? 'rounded-full'
      : variant === 'text'
      ? 'h-4 rounded-md'
      : 'rounded-xl';

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden bg-brand-elevated ${variantClass} ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

export default Skeleton;
