import { motion } from 'framer-motion';
import { ArrowLeft, CircleCheckBig, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

function UnitHeader({ title }) {
  return (
    <motion.section
      className="section-shell pt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="glass rounded-2xl p-5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Revision Workspace</p>
            <h1 className="mt-2 font-display text-2xl text-white sm:text-3xl">{title}</h1>
          </div>
          <Link to="/">
            <Button variant="secondary" icon={<ArrowLeft size={16} />}>
              Back to Home
            </Button>
          </Link>
        </div>
        <div className="mt-5 inline-flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
          <CircleCheckBig size={16} /> Stay consistent: revise one section daily and attempt timed MCQs.
        </div>
        <div className="mt-3 inline-flex items-center gap-2 rounded-xl border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-xs text-amber-200">
          <Trophy size={14} /> Study Badge: Target 80%+ score in both Complete and PYQ quizzes.
        </div>
      </div>
    </motion.section>
  );
}

export default UnitHeader;
