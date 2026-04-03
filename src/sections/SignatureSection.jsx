import { motion } from 'framer-motion';
import { BRAND } from '../data/units';

function SignatureSection() {
  return (
    <section className="section-shell mt-16">
      <motion.div
        className="glass rounded-2xl p-6 sm:p-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Creator Signature</p>
        <h3 className="mt-2 font-display text-2xl text-white">Made by {BRAND.madeBy}</h3>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
          {BRAND.subtitle}. This platform is structured for exam-oriented Software Engineering preparation with simple,
          reliable unit navigation and section-based revision.
        </p>
      </motion.div>
    </section>
  );
}

export default SignatureSection;
