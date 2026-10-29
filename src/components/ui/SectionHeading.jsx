import { motion } from 'framer-motion';

/**
 * SectionHeading Component - Design System
 * Unified section headers with eyebrow, title, and descriptive body
 */
function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  as: Component = 'h2',
}) {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`max-w-3xl ${alignmentClass} ${className}`}
    >
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
          {eyebrow}
        </p>
      ) : null}

      <Component className="mt-2 font-display text-3xl font-extrabold tracking-tight text-brand-heading sm:text-4xl">
        {title}
      </Component>

      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-brand-body sm:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

export default SectionHeading;
