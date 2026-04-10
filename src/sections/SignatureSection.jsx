import { motion } from 'framer-motion';
import { BRAND } from '../data/units';

const trustHighlights = [
  '100% Common Question Focus',
  '400+ Students Taught',
  'Industrial Experience',
  'Top Engineering College Teaching Experience',
];

function SignatureSection() {
  return (
    <section className="section-shell mt-16">
      <motion.div
        className="glass rounded-2xl p-6 sm:p-8"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
      >
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Expert Academic Guidance</p>
        <h3 className="mt-2 max-w-4xl font-display text-2xl leading-tight text-white sm:text-3xl">
          Get Exam-Focused Preparation with Highly Important Common Questions
        </h3>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 sm:text-[15px]">
          Learn Software Engineering in a smart, structured, and exam-oriented way. Students get highly important
          common question practice, unit-wise revision support, and simple concept clarity. Built by {BRAND.madeBy}, a{' '}
          {BRAND.subtitle} with industrial experience, who has taught 400+ students in top reputed engineering
          colleges in West Bengal, India.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustHighlights.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
              viewport={{ once: true }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-xs font-medium text-slate-100 sm:text-sm"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default SignatureSection;
