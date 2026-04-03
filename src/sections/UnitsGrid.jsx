import { motion } from 'framer-motion';
import { units } from '../data/units';
import UnitCard from '../components/UnitCard';

function UnitsGrid() {
  return (
    <section id="units" className="section-shell mt-16 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Units</p>
        <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">Choose Your Software Engineering Unit</h2>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {units.map((unit, index) => (
          <UnitCard key={unit.id} unit={unit} delay={index * 0.08} />
        ))}
      </div>
    </section>
  );
}

export default UnitsGrid;
