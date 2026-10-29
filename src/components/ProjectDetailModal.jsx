import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  CheckCircle2,
  Code2,
  ExternalLink,
  FileCheck2,
  HelpCircle,
  MessageCircle,
  Presentation,
  Sparkles,
  X,
} from 'lucide-react';
import Button from './ui/Button';

function ProjectDetailModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const whatsappMsg = encodeURIComponent(
    `Hi Sahil Sir, I would like to book guidance for the project: "${project.title}" (${project.domain}). Please let me know the full process and report submission schedule.`
  );
  const whatsappUrl = `https://wa.me/918583058673?text=${whatsappMsg}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-brand-border bg-brand-surface shadow-2xl my-auto"
        >
          {/* Header Image in HD */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Top Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-xl bg-black/70 text-white backdrop-blur-md hover:bg-black transition"
            >
              <X size={16} />
            </button>

            {/* Bottom Title Overlay */}
            <div className="absolute left-6 bottom-4 right-6 text-white">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-black/60 px-2.5 py-0.5 text-xs font-semibold text-brand-primary backdrop-blur-md">
                <Sparkles size={12} /> {project.domain}
              </span>
              <h2 className="mt-2 font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                Project Overview
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-body">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Technology Stack */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-2.5">
                Technologies &amp; Libraries Used
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-brand-border bg-brand-elevated px-3 py-1 text-xs font-semibold text-brand-heading"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Deliverables Breakdown */}
            <div className="rounded-2xl border border-brand-border/70 bg-brand-elevated/40 p-5 space-y-3">
              <p className="font-display text-sm font-bold text-brand-heading uppercase tracking-wider flex items-center gap-2">
                <FileCheck2 size={16} className="text-brand-primary" />
                <span>Complete Project Package Includes</span>
              </p>

              <div className="grid gap-2.5 sm:grid-cols-2 text-xs text-brand-body">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 rounded-lg border border-brand-border/40 bg-brand-surface/60 p-2.5">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    <span className="font-medium text-brand-heading">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Action Bar */}
          <div className="border-t border-brand-border p-5 sm:p-6 bg-brand-elevated/40 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-brand-muted text-center sm:text-left">
              1:1 guidance with complete report, PPT, and viva preparation.
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button variant="ghost" size="sm" onClick={onClose} className="w-full sm:w-auto">
                Close
              </Button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-500 transition"
              >
                <MessageCircle size={15} />
                <span>Book Guidance on WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ProjectDetailModal;
