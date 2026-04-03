import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpenCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from './ui/GlassCard';

function UnitCard({ unit, delay = 0 }) {
  return (
    <GlassCard delay={delay} className="group h-full p-6">
      <div className="flex h-full flex-col">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent">
          <BookOpenCheck size={19} />
        </div>
        <h3 className="font-display text-xl text-white">{unit.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-300">{unit.description}</p>
        <Link to={`/unit/${unit.id}`} className="mt-5">
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
