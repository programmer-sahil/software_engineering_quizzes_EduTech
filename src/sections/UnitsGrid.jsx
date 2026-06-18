import { motion } from 'framer-motion';
import { units as defaultUnits } from '../data/units';
import UnitCard from '../components/UnitCard';

function UnitsGrid({
  units = defaultUnits,
  eyebrow = 'Units',
  title = 'Choose Your Software Engineering Unit',
  description,
  basePath = '/unit',
}) {
  return (
    <section id="units" className="section-shell mt-16 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
        <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">{title}</h2>
        {description ? <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">{description}</p> : null}
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {units.map((unit, index) => (
          <UnitCard key={unit.id} unit={unit} delay={index * 0.08} basePath={basePath} />
        ))}
      </div>
    </section>
  );
}

export default UnitsGrid;
