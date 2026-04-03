import { motion } from 'framer-motion';
import { BookmarkCheck, Lightbulb } from 'lucide-react';

function CheatSheetView({ sections }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
      <div className="space-y-4">
        {sections.map((section, index) => (
          <motion.article
            key={section.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <h3 className="font-display text-xl text-white">{section.heading}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {section.keyTerms.map((term) => (
                <span key={term} className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
                  {term}
                </span>
              ))}
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-200">
              {section.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
            <div className="mt-4 rounded-xl border border-coral/30 bg-coral/10 p-3 text-sm text-coral">
              {section.quickBox}
            </div>
          </motion.article>
        ))}
      </div>

      <aside className="h-fit rounded-2xl border border-white/10 bg-white/5 p-5 lg:sticky lg:top-24">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Revision Box</p>
        <h4 className="mt-2 font-display text-lg text-white">Fast Recall</h4>
        <ul className="mt-4 space-y-2 text-sm text-slate-300">
          <li className="inline-flex items-start gap-2"><BookmarkCheck size={14} className="mt-1 text-accent" /> Read headings first</li>
          <li className="inline-flex items-start gap-2"><BookmarkCheck size={14} className="mt-1 text-accent" /> Revise key terms aloud</li>
          <li className="inline-flex items-start gap-2"><BookmarkCheck size={14} className="mt-1 text-accent" /> Solve one PYQ after notes</li>
        </ul>
        <div className="mt-5 rounded-xl border border-emerald-400/35 bg-emerald-400/10 p-3 text-xs text-emerald-200">
          <Lightbulb size={14} className="mb-1" />
          Use this sheet before quizzes for better retention.
        </div>
      </aside>
    </div>
  );
}

export default CheatSheetView;
