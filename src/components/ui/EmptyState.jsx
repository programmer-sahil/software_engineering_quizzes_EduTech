import { Sparkles } from 'lucide-react';
import Card from './Card';

/**
 * EmptyState Component - Design System
 * Clean, honest empty states for sections awaiting authentic questions/reels
 */
function EmptyState({
  icon: Icon = Sparkles,
  title = 'Coming Soon',
  description = 'Content will be added soon.',
  action,
  className = '',
}) {
  return (
    <Card hover={false} className={`p-8 text-center sm:p-12 ${className}`}>
      <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-primary/30 bg-brand-primary/10 text-brand-primary shadow-glow">
        <Icon size={24} />
      </div>

      <h3 className="mt-5 font-display text-xl font-bold text-brand-heading sm:text-2xl">
        {title}
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-brand-body">
        {description}
      </p>

      {action ? <div className="mt-6 flex justify-center">{action}</div> : null}
    </Card>
  );
}

export default EmptyState;
