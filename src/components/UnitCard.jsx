import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpenCheck, Clock3, FileBadge2, Layers3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from './ui/GlassCard';

function UnitCard({ unit, delay = 0, basePath = '/unit' }) {
  const unitHref = `${basePath}/${unit.id}`;

  return (
    <GlassCard delay={delay} className="group h-full p-6">
      <div className="flex h-full flex-col">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent">
          <BookOpenCheck size={19} />
        </div>
        <h3 className="font-display text-xl text-white">{unit.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-300">{unit.description}</p>

        <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-semibold text-cyan-100">
          {unit.hours ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2.5 py-1">
              <Clock3 size={12} /> {unit.hours} Hours
            </span>
          ) : null}
          {unit.marks ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2.5 py-1">
              <FileBadge2 size={12} /> {unit.marks} Marks
            </span>
          ) : null}
          {unit.module ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-accent">
              <Layers3 size={12} /> Module {unit.module}
            </span>
          ) : null}
        </div>

        <Link to={unitHref} className="mt-5">
          <motion.span
            whileHover={{ x: 3 }}
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-accent transition group-hover:bg-accent group-hover:text-slate-900"
          >
            Enter <ArrowUpRight size={16} />
          </motion.span>
        </Link>
      </div>
    </GlassCard>
  );
}

export default UnitCard;
