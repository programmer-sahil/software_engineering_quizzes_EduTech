import { motion } from 'framer-motion';
import { ArrowLeft, CircleCheckBig, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

function UnitHeader({ title, subject, unit, backTo = '/', backLabel = 'Back to Home' }) {
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
            {subject ? (
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-cyan-100">
                <span className="rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-accent">
                  {subject.shortName}
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">{subject.semester}</span>
                {unit?.module ? (
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">Module {unit.module}</span>
                ) : null}
              </div>
            ) : null}
          </div>
          <Link to={backTo}>
            <Button variant="secondary" icon={<ArrowLeft size={16} />}>
              {backLabel}
            </Button>
          </Link>
        </div>
        {unit?.summary ? <p className="mt-5 max-w-4xl text-sm leading-6 text-slate-300">{unit.summary}</p> : null}
        {unit?.hours || unit?.marks ? (
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-200">
            {unit.hours ? <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">{unit.hours} Hours</span> : null}
            {unit.marks ? <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">{unit.marks} Marks</span> : null}
          </div>
        ) : null}
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
