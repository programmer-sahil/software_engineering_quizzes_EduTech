import Card from './Card';

/**
 * GlassCard - Backward-compatible wrapper for Card
 */
function GlassCard({ children, className = '', delay = 0, hover = true, ...props }) {
  return (
    <Card className={className} delay={delay} hover={hover} {...props}>
      {children}
    </Card>
  );
}

export default GlassCard;
