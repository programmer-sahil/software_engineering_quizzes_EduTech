import { motion } from 'framer-motion';
import { BookOpenText, ClipboardList, FileQuestion, Layers, Lightbulb } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';

const features = [
  { title: 'Unit-wise Learning', description: 'Choose any unit and jump directly into focused study mode.', icon: Layers },
  { title: 'Complete Quiz Practice', description: 'One-question-at-a-time MCQ experience with progress and score.', icon: ClipboardList },
  { title: 'PYQ-based Preparation', description: 'Practice previous-year question patterns in quiz flow.', icon: FileQuestion },
  { title: 'Fast Revision Sheets', description: 'Beautiful cheat sheets with key terms and quick recall.', icon: BookOpenText },
  { title: 'Student-friendly Learning', description: 'Simple navigation, premium UI, and confidence-focused flow.', icon: Lightbulb },
];

function FeatureCards() {
  return (
    <section className="section-shell mt-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-7"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Features</p>
        <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">Your Student-Friendly Study Toolkit</h2>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <GlassCard key={feature.title} delay={index * 0.07} className="p-5">
              <div className="mb-4 inline-flex rounded-xl border border-accent/35 bg-accent/10 p-2 text-accent">
                <Icon size={18} />
              </div>
              <h3 className="font-display text-xl text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{feature.description}</p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}

export default FeatureCards;
