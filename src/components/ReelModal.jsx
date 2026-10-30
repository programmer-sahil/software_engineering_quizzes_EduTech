import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Instagram, X } from 'lucide-react';
import Button from './ui/Button';
import { openInstagramReel } from '../utils/instagramDeepLink';

function ReelModal({ reel, isOpen, onClose }) {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !reel) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-brand-border bg-brand-surface shadow-2xl"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-brand-border/60 bg-brand-elevated/70 px-5 py-3.5">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-pink-500/20 text-pink-400">
                <Instagram size={15} />
              </span>
              <div>
                <p className="text-xs font-bold text-brand-heading">Code Scholar AI</p>
                <p className="text-[10px] text-brand-muted">{reel.category}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="grid h-8 w-8 place-items-center rounded-xl border border-brand-border bg-brand-surface text-brand-muted hover:text-brand-heading transition"
            >
              <X size={16} />
            </button>
          </div>

          {/* Embedded Player Frame (9:16 Aspect Ratio) */}
          <div className="relative aspect-[9/15] w-full bg-black">
            <iframe
              src={reel.embedUrl}
              className="h-full w-full border-0"
              title={reel.title}
              allowTransparency="true"
              allow="encrypted-media"
              loading="lazy"
            />
          </div>

          {/* Footer Controls */}
          <div className="p-4 bg-brand-surface border-t border-brand-border/60 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <h4 className="font-display text-xs sm:text-sm font-bold text-brand-heading truncate">
                {reel.title}
              </h4>
              <p className="text-[11px] text-brand-muted truncate">
                {reel.description}
              </p>
            </div>

            <a
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => openInstagramReel(reel.instagramId || reel.id, reel.url, e)}
              className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 px-3.5 py-2 text-xs font-bold text-white shadow-sm hover:opacity-95 transition cursor-pointer"
            >
              <span>Instagram</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ReelModal;

