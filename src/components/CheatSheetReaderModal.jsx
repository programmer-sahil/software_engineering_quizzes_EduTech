import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock,
  Download,
  Lightbulb,
  Printer,
  Sparkles,
  Tag,
  X,
} from 'lucide-react';
import { useEffect } from 'react';
import Button from './ui/Button';

function CheatSheetReaderModal({
  sheet,
  onClose,
  onPrev,
  onNext,
  hasPrev = false,
  hasNext = false,
}) {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrev && onPrev) {
        onPrev();
      } else if (e.key === 'ArrowRight' && hasNext && onNext) {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  // Prevent background body scroll when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!sheet) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reader-modal-title"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        transition={{ duration: 0.2 }}
        className="relative my-auto w-full max-w-3xl rounded-3xl border border-brand-border bg-brand-canvas p-6 sm:p-8 shadow-2xl overflow-hidden print-reader-sheet"
      >
        {/* Top Control Bar (Hidden in Print) */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-border pb-4 print:hidden">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-brand-primary/30 bg-brand-primary/10 px-2.5 py-1 text-xs font-bold text-brand-primary">
              <BookOpen size={13} />
              <span>{sheet.subjectTitle || 'Diploma'} • Unit {sheet.unitId}</span>
            </span>

            <span className="inline-flex items-center gap-1 rounded-lg border border-brand-border bg-brand-surface px-2.5 py-1 text-xs text-brand-muted">
              <Clock size={12} />
              <span>{sheet.readingTime?.text || '1 min read'}</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              icon={<Printer size={14} />}
              onClick={handlePrint}
              title="Print or Save as PDF"
            >
              Print / PDF
            </Button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-brand-border bg-brand-surface p-2 text-brand-muted hover:text-brand-heading hover:border-brand-border-hover transition outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              aria-label="Close reader"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Print Only Header */}
        <div className="hidden print:block border-b border-slate-300 pb-3 mb-4">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
            EduTech Diploma Study Hub • {sheet.subjectTitle} • Unit {sheet.unitId}
          </p>
        </div>

        {/* Article Body */}
        <article className="mt-6 space-y-6 max-h-[70vh] overflow-y-auto pr-1 print:max-h-none print:overflow-visible">
          {/* Main Title */}
          <div>
            <h2 id="reader-modal-title" className="font-display text-2xl sm:text-3xl font-extrabold text-brand-heading leading-tight print:text-black">
              {sheet.title || sheet.heading}
            </h2>
            {sheet.unitTitle && (
              <p className="mt-1 text-xs text-brand-muted print:text-slate-500">
                {sheet.unitTitle}
              </p>
            )}
          </div>

          {/* Key Terms Pill Box */}
          {sheet.keyTerms?.length > 0 && (
            <div className="rounded-2xl border border-brand-border/60 bg-brand-surface/60 p-4">
              <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-primary">
                <Tag size={13} /> Key Examination Terms
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {sheet.keyTerms.map((term) => (
                  <span
                    key={term}
                    className="inline-flex items-center gap-1 rounded-lg border border-brand-border bg-brand-elevated px-3 py-1 text-xs font-semibold text-brand-heading print:border-slate-300 print:bg-slate-100 print:text-black"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-primary print:bg-black" />
                    <span>{term}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Core Review Points */}
          {sheet.points?.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                Core Concepts &amp; Recall Points ({sheet.points.length})
              </h3>
              <ul className="space-y-3">
                {sheet.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-brand-border/40 bg-brand-surface/40 p-3.5 text-xs sm:text-sm leading-relaxed text-brand-body print:border-none print:p-1 print:text-black"
                  >
                    <CheckCircle
                      size={16}
                      className="mt-0.5 shrink-0 text-brand-primary print:text-black"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* QuickBox / Exam Focus Callout */}
          {sheet.quickBox && (
            <div className="rounded-2xl border border-brand-coral/40 bg-brand-coral/10 p-5 print:border-slate-400 print:bg-slate-50">
              <div className="flex items-center gap-2 text-brand-coral print:text-slate-900 font-bold text-xs uppercase tracking-wider">
                <Lightbulb size={15} />
                <span>Exam Strategy &amp; Memory Hook</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-brand-heading print:text-black">
                {sheet.quickBox}
              </p>
            </div>
          )}

          {/* Additional Markdown Content if provided */}
          {sheet.content && (
            <div className="prose prose-invert max-w-none text-xs sm:text-sm leading-relaxed text-brand-body">
              {sheet.content}
            </div>
          )}
        </article>

        {/* Bottom Pagination Controls (Hidden in Print) */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-brand-border pt-4 print:hidden">
          <Button
            variant="ghost"
            size="sm"
            icon={<ArrowLeft size={15} />}
            onClick={onPrev}
            disabled={!hasPrev}
            className="disabled:opacity-30"
          >
            Previous Sheet
          </Button>

          <span className="text-xs text-brand-muted">
            Press <kbd className="rounded bg-brand-surface px-1.5 py-0.5 border border-brand-border">ESC</kbd> to close
          </span>

          <Button
            variant="ghost"
            size="sm"
            icon={<ArrowRight size={15} />}
            onClick={onNext}
            disabled={!hasNext}
            className="disabled:opacity-30"
          >
            Next Sheet
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export default CheatSheetReaderModal;

