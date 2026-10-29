import { ArrowRight, BookOpen, Clock, FileText, Sparkles } from 'lucide-react';
import Card from './ui/Card';

function CheatSheetCard({ sheet, onSelectSheet }) {
  if (!sheet) return null;

  return (
    <Card
      onClick={() => onSelectSheet(sheet)}
      className="group flex flex-col justify-between p-6 transition-all duration-300 hover:border-brand-primary/50 cursor-pointer"
    >
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brand-border/60 pb-3">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-brand-primary/30 bg-brand-primary/10 px-2.5 py-1 text-xs font-bold text-brand-primary">
            <FileText size={12} />
            <span>{sheet.subjectTitle || 'Diploma'} • Unit {sheet.unitId}</span>
          </span>

          <span className="inline-flex items-center gap-1 text-xs text-brand-muted">
            <Clock size={12} />
            <span>{sheet.readingTime?.text || '1 min read'}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 font-display text-lg font-bold text-brand-heading group-hover:text-brand-primary transition">
          {sheet.title || sheet.heading}
        </h3>

        {/* Short Summary */}
        <p className="mt-2 text-xs sm:text-sm text-brand-body leading-relaxed line-clamp-3">
          {sheet.summary}
        </p>

        {/* Key Terms Chips */}
        {sheet.keyTerms?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {sheet.keyTerms.slice(0, 4).map((term) => (
              <span
                key={term}
                className="rounded-md border border-brand-border bg-brand-surface px-2 py-0.5 text-[11px] font-medium text-brand-muted"
              >
                {term}
              </span>
            ))}
            {sheet.keyTerms.length > 4 && (
              <span className="text-[10px] text-brand-muted self-center">
                +{sheet.keyTerms.length - 4} more
              </span>
            )}
          </div>
        )}
      </div>

      {/* Bottom Action Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-brand-border/40 pt-3">
        <span className="text-xs font-semibold text-brand-primary group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
          <span>Read Sheet</span>
          <ArrowRight size={14} />
        </span>
        <span className="text-[11px] text-brand-muted">
          {sheet.points?.length || 0} review points
        </span>
      </div>
    </Card>
  );
}

export default CheatSheetCard;

