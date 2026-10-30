import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  BookmarkCheck,
  Check,
  ChevronDown,
  Clock,
  Code2,
  Copy,
  FileCheck2,
  Lightbulb,
  Printer,
  Sparkles,
  Table,
  Tag,
} from 'lucide-react';
import Button from './ui/Button';
import { calculateReadingTime } from '../content/cheatSheetNormalizer';

/**
 * Copy Code Button with visual feedback
 */
function CopyCodeButton({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-lg border border-brand-border/80 bg-brand-elevated/80 px-2.5 py-1 text-xs font-medium text-brand-body hover:border-brand-primary hover:text-brand-primary transition"
      title="Copy code to clipboard"
    >
      {copied ? (
        <>
          <Check size={12} className="text-emerald-400" />
          <span className="text-emerald-400 font-semibold">Copied!</span>
        </>
      ) : (
        <>
          <Copy size={12} />
          <span>Copy Code</span>
        </>
      )}
    </button>
  );
}

/**
 * Beautiful Responsive Table Renderer
 */
function MarkdownTableRenderer({ table }) {
  if (!table || !table.headers || !table.rows) return null;

  return (
    <div className="my-4 overflow-hidden rounded-xl border border-brand-border bg-brand-surface shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-brand-border bg-brand-elevated/70 text-brand-heading font-bold">
              {table.headers.map((header, idx) => (
                <th key={idx} className="px-4 py-3 whitespace-nowrap text-brand-primary">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border/60">
            {table.rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className="hover:bg-brand-elevated/30 transition-colors"
              >
                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className={`px-4 py-3 leading-relaxed text-brand-body ${
                      cellIdx === 0 ? 'font-semibold text-brand-heading' : ''
                    }`}
                  >
                    {String(cell ?? '').replace(/\*\*/g, '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/**
 * Code Block Renderer with Copy Button
 */
function CodeBlockRenderer({ codeBlock }) {
  if (!codeBlock || !codeBlock.code) return null;

  return (
    <div className="my-4 overflow-hidden rounded-xl border border-brand-border bg-brand-elevated/80 shadow-card">
      <div className="flex items-center justify-between border-b border-brand-border/60 bg-brand-surface/60 px-4 py-2">
        <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-primary">
          <Code2 size={13} />
          <span>{codeBlock.language || 'Code'}</span>
        </div>
        <CopyCodeButton code={codeBlock.code} />
      </div>
      <pre className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-brand-heading">
        <code>{codeBlock.code}</code>
      </pre>
    </div>
  );
}

/**
 * CheatSheetView Component
 * Presents each ## section as a compact 3D expandable card.
 * Progressive disclosure: title + preview first, click to expand full notes, tables, and code.
 */
function CheatSheetView({ sections = [], unitTitle = 'Unit Cheat Sheet', unitId = '1' }) {
  const shouldReduceMotion = useReducedMotion();

  // Set of section IDs or indices that are currently expanded (collapsed by default)
  const [expandedSections, setExpandedSections] = useState(() => new Set());

  // Track revised status in localStorage
  const [revisedMap, setRevisedMap] = useState(() => {
    try {
      const stored = localStorage.getItem(`edutech_revised_sheets_${unitId}`);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  const toggleSection = (idx) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  const allExpanded = sections.length > 0 && expandedSections.size === sections.length;

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedSections(new Set());
    } else {
      setExpandedSections(new Set(sections.map((_, i) => i)));
    }
  };

  const toggleRevised = (sectionId, e) => {
    e.stopPropagation();
    setRevisedMap((prev) => {
      const updated = { ...prev, [sectionId]: !prev[sectionId] };
      try {
        localStorage.setItem(`edutech_revised_sheets_${unitId}`, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const revisedCount = sections.filter((s) => revisedMap[s.id || s.heading]).length;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_310px]">
      {/* Main Column: Expandable Sections List */}
      <div className="space-y-4">
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-brand-border bg-brand-surface p-4 shadow-sm">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              {sections.length} Revision Topics
            </p>
            <p className="mt-0.5 text-xs text-brand-muted">
              {revisedCount} of {sections.length} marked revised
            </p>
          </div>

          <div className="flex items-center gap-2">
            {sections.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleAll}
                className="text-xs text-brand-muted hover:text-brand-heading"
              >
                {allExpanded ? 'Collapse All' : 'Expand All'}
              </Button>
            )}

            <Button
              variant="secondary"
              size="sm"
              icon={<Printer size={14} />}
              onClick={handlePrint}
              title="Print sheet or save as PDF"
            >
              Print Sheet
            </Button>
          </div>
        </div>

        {/* Section Cards List */}
        {sections.map((section, index) => {
          const isExpanded = expandedSections.has(index);
          const sectionId = section.id || section.heading;
          const isRevised = Boolean(revisedMap[sectionId]);

          const readingTime = section.readingTime || calculateReadingTime(section.rawContent || '');
          const readingTimeText = typeof readingTime === 'string' ? readingTime : readingTime?.text || '2 min read';

          return (
            <motion.article
              key={sectionId || index}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              className={`rounded-2xl border transition-all ${
                isRevised
                  ? 'border-emerald-500/40 bg-brand-surface/90 shadow-sm'
                  : 'border-brand-border bg-brand-surface shadow-card hover:border-brand-primary/40'
              }`}
            >
              {/* Card Header (Clickable Accordion Trigger) */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => toggleSection(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleSection(index);
                  }
                }}
                className="p-5 sm:p-6 cursor-pointer select-none"
                aria-expanded={isExpanded}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brand-border/60 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md border border-brand-border bg-brand-elevated px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                      Topic #{index + 1}
                    </span>
                    {isRevised && (
                      <span className="inline-flex items-center gap-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-400">
                        <Check size={11} /> Revised
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-xs text-brand-muted">
                      <Clock size={12} />
                      <span>{readingTimeText}</span>
                    </span>

                    <button
                      type="button"
                      onClick={(e) => toggleRevised(sectionId, e)}
                      className={`inline-flex items-center gap-1 rounded-lg border px-2 py-1 text-[11px] font-semibold transition ${
                        isRevised
                          ? 'border-emerald-500/40 bg-emerald-500/20 text-emerald-300'
                          : 'border-brand-border bg-brand-elevated text-brand-muted hover:border-brand-primary hover:text-brand-primary'
                      }`}
                      title={isRevised ? 'Mark as not revised' : 'Mark as revised'}
                    >
                      <BookmarkCheck size={12} />
                      <span>{isRevised ? 'Revised' : 'Mark Revised'}</span>
                    </button>
                  </div>
                </div>

                {/* Section Title */}
                <h3 className="mt-3 font-display text-lg sm:text-xl font-bold text-brand-heading">
                  {section.heading}
                </h3>

                {/* Key Terms Badges */}
                {section.keyTerms?.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {section.keyTerms.map((term, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1 rounded-md border border-brand-border bg-brand-elevated/70 px-2 py-0.5 text-[11px] font-medium text-brand-body"
                      >
                        <Tag size={10} className="text-brand-primary" />
                        <span>{term}</span>
                      </span>
                    ))}
                  </div>
                )}

                {/* Collapsed State: Concise Preview */}
                {!isExpanded && section.preview && (
                  <p className="mt-3 text-xs sm:text-sm text-brand-body line-clamp-2 leading-relaxed">
                    {section.preview}
                  </p>
                )}

                {/* Progressive Disclosure Action Strip */}
                <div className="mt-4 pt-3 border-t border-brand-border/40 flex items-center justify-between">
                  <span className="text-xs text-brand-muted font-medium">
                    {section.points?.length ? `${section.points.length} points • ` : ''}
                    {section.tables?.length ? `${section.tables.length} table • ` : ''}
                    {section.codeBlocks?.length ? `${section.codeBlocks.length} code snippet • ` : ''}
                    {isExpanded ? 'Showing full revision notes' : 'Click to read complete details'}
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-primary">
                    <span>{isExpanded ? 'Hide Details' : 'View Full Notes'}</span>
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </span>
                </div>
              </div>

              {/* Expanded Detailed Revision Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden border-t border-brand-border/60 bg-brand-surface/50"
                  >
                    <div className="p-5 sm:p-6 space-y-4">
                      {/* Paragraphs */}
                      {section.paragraphs?.map((p, pIdx) => (
                        <p key={pIdx} className="text-xs sm:text-sm leading-relaxed text-brand-body">
                          {String(p ?? '').replace(/\*\*/g, '')}
                        </p>
                      ))}

                      {/* Bullet Points */}
                      {section.points?.length > 0 && (
                        <ul className="space-y-2.5 text-xs sm:text-sm leading-relaxed text-brand-body">
                          {section.points.map((point, ptIdx) => (
                            <li key={ptIdx} className="flex items-start gap-2.5">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                              <span>{String(point ?? '').replace(/\*\*/g, '')}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Comparison Tables */}
                      {section.tables?.map((table, tblIdx) => (
                        <div key={tblIdx} className="pt-2">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-brand-heading mb-1.5">
                            <Table size={13} className="text-brand-primary" />
                            <span>Exam Comparison Matrix</span>
                          </div>
                          <MarkdownTableRenderer table={table} />
                        </div>
                      ))}

                      {/* Code Blocks */}
                      {section.codeBlocks?.map((cb, cbIdx) => (
                        <div key={cbIdx} className="pt-2">
                          <CodeBlockRenderer codeBlock={cb} />
                        </div>
                      ))}

                      {/* Exam Hook / Memory Reminder Callout */}
                      {(section.examHook || section.quickBox) && (
                        <div className="rounded-2xl border border-brand-coral/40 bg-brand-coral/10 p-4 text-xs sm:text-sm">
                          <div className="flex items-center gap-1.5 font-bold text-brand-coral uppercase tracking-wider text-[11px]">
                            <Lightbulb size={14} />
                            <span>Exam Memory Hook &amp; Scoring Tip</span>
                          </div>
                          <p className="mt-1.5 font-medium leading-relaxed text-brand-heading">
                            {section.examHook || section.quickBox}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>

      {/* Sidebar: Fast Recall Guide & Progress */}
      <aside className="space-y-5">
        <div className="h-fit rounded-2xl border border-brand-border bg-brand-surface p-5 sm:p-6 lg:sticky lg:top-24 space-y-5 shadow-card">
          <div>
            <p className="text-xs uppercase tracking-widest font-bold text-brand-primary">
              Revision Tracker
            </p>
            <h4 className="mt-1.5 font-display text-lg font-bold text-brand-heading">
              {revisedCount}/{sections.length} Topics Revised
            </h4>

            {/* Visual Progress Bar */}
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-brand-elevated">
              <div
                className="h-full bg-emerald-400 transition-all duration-300"
                style={{
                  width: `${sections.length > 0 ? (revisedCount / sections.length) * 100 : 0}%`,
                }}
              />
            </div>
          </div>

          <div className="border-t border-brand-border pt-4">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-heading">
              Fast Recall Strategy
            </p>
            <ul className="mt-3 space-y-2.5 text-xs text-brand-body leading-relaxed">
              <li className="flex items-start gap-2">
                <BookmarkCheck size={14} className="mt-0.5 shrink-0 text-brand-primary" />
                <span>Read headings first to construct the mental schema.</span>
              </li>
              <li className="flex items-start gap-2">
                <BookmarkCheck size={14} className="mt-0.5 shrink-0 text-brand-primary" />
                <span>Focus on comparison tables; 4–6 marks questions often ask for differences.</span>
              </li>
              <li className="flex items-start gap-2">
                <BookmarkCheck size={14} className="mt-0.5 shrink-0 text-brand-primary" />
                <span>Solve the unit PYQs immediately after reading these sheets.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-brand-primary/30 bg-brand-primary/10 p-3.5 text-xs text-brand-primary">
            <p className="font-bold flex items-center gap-1.5">
              <Sparkles size={14} /> 15-Minute Exam Drill
            </p>
            <p className="mt-1 text-brand-body text-[11px] leading-relaxed">
              Use "Expand All" to rapidly scan all bold key terms and pinouts before entering the examination hall.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default CheatSheetView;
