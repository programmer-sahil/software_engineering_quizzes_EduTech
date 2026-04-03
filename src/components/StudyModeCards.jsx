import { motion } from 'framer-motion';
import { BookText, BrainCircuit, FileQuestion, Medal } from 'lucide-react';
import GlassCard from './ui/GlassCard';

const modes = [
  {
    id: 'complete-quiz',
    title: 'Complete Unit Quiz',
    description: 'Full MCQ practice from this unit with result analysis.',
    icon: BrainCircuit,
  },
  {
    id: 'pyq-quiz',
    title: 'PYQ Quiz',
    description: 'Previous-year pattern objective practice with feedback.',
    icon: FileQuestion,
  },
  {
    id: 'cheat-sheet',
    title: 'Cheat Sheet',
    description: 'Rapid revision cards, key terms, and smart exam notes.',
    icon: BookText,
  },
];

function StudyModeCards({ activeMode, onChange }) {
  return (
    <section className="section-shell mt-8">
      <div className="grid gap-4 md:grid-cols-3">
        {modes.map((mode, index) => {
          const Icon = mode.icon;
          const isActive = activeMode === mode.id;

          return (
            <motion.button
              key={mode.id}
              type="button"
              onClick={() => onChange(mode.id)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.99 }}
              className="text-left"
            >
              <GlassCard
                delay={index * 0.07}
                className={`relative h-full p-5 transition ${isActive ? 'border-accent bg-accent/15 shadow-glow' : ''}`}
              >
                {isActive && (
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-emerald-400/15 px-2 py-1 text-[11px] text-emerald-300">
                    <Medal size={12} /> Active
                  </span>
                )}
                <div className="mb-3 inline-flex rounded-xl border border-accent/35 bg-accent/10 p-2 text-accent">
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-lg text-white">{mode.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{mode.description}</p>
              </GlassCard>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}

export default StudyModeCards;
