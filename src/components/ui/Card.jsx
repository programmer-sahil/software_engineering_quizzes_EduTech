import { motion, useReducedMotion } from 'framer-motion';

/**
 * Card Component - Design System
 * Smooth floating 3D-style card with elegant shadows and subtle gradients.
 * Respects prefers-reduced-motion; touch-friendly on mobile devices.
 */
function Card({
  children,
  className = '',
  delay = 0,
  hover = true,
  onClick,
  as: Component = 'div',
  role,
  ariaLabel,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const hoverAnimation =
    hover && !shouldReduceMotion
      ? {
          y: -4,
          transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
        }
      : {};

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : delay }}
      whileHover={hoverAnimation}
      onClick={onClick}
      role={role}
      aria-label={ariaLabel}
      className={`card-3d relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Subtle top edge highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      {children}
    </motion.div>
  );
}

export default Card;
