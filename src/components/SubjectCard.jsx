import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, GraduationCap, LockKeyhole } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from './ui/GlassCard';

function SubjectCard({ subject, delay = 0 }) {
  const Icon = subject.id === 'iot' ? Cpu : GraduationCap;
  const isDisabled = Boolean(subject.disabled);

  return (
    <GlassCard delay={delay} className={`group h-full p-6 ${isDisabled ? 'opacity-75' : ''}`}>
      <div className="flex h-full flex-col">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent">
            <Icon size={20} />
          </div>
          <div className="flex flex-wrap justify-end gap-2">
            <span className="rounded-full border border-coral/40 bg-coral/10 px-3 py-1 text-[11px] font-semibold text-coral">
              {subject.badge}
            </span>
            {isDisabled ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold text-slate-200">
                <LockKeyhole size={12} /> {subject.disabledLabel || 'Temporarily disabled'}
              </span>
            ) : null}
          </div>
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{subject.semester}</p>
        <h3 className="mt-2 font-display text-2xl text-white">{subject.name}</h3>
        <p className="mt-1 text-sm font-medium text-cyan-100">{subject.subtitle}</p>
        <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">{subject.description}</p>

        {isDisabled ? (
          <motion.span
            className="mt-6 inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-300"
            aria-disabled="true"
            title={subject.disabledMessage}
          >
            <LockKeyhole size={16} /> {subject.disabledLabel || 'Temporarily disabled'}
          </motion.span>
        ) : (
          <Link to={subject.route} className="mt-6">
            <motion.span
              whileHover={{ x: 3 }}
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-accent transition group-hover:bg-accent group-hover:text-slate-900"
            >
              {subject.cta} <ArrowUpRight size={16} />
            </motion.span>
          </Link>
        )}
      </div>
    </GlassCard>
  );
}

export default SubjectCard;
