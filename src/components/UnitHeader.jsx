import { useState } from 'react';
import {
  ArrowLeft,
  BookOpenText,
  Check,
  ChevronRight,
  Clock,
  FileBadge2,
  FileQuestion,
  HelpCircle,
  Layers,
  Printer,
  Share2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Card, ShowMoreText } from './ui';

/**
 * Clean Unit Header
 * Spec: Unit Title | Module | Hours | Marks
 * Implements progressive disclosure on description.
 */
function UnitHeader({
  title,
  subject,
  unit,
  backTo = '/iot',
  backLabel = 'Back to Subject',
  onStartQuiz,
  onStartPractice,
  onStartLongQuestions,
  onStartCheatSheets,
}) {
  const [copied, setCopied] = useState(false);
  const handleStart = onStartQuiz || onStartPractice;

  const handleShare = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {}
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="section-shell pt-6 sm:pt-10">
      {/* Compact Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-3.5">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-brand-muted">
          <li>
            <Link to="/subjects" className="hover:text-brand-heading transition-colors">
              Subjects
            </Link>
          </li>
          <li aria-hidden="true" className="select-none">
            <ChevronRight size={12} className="text-brand-muted/60" />
          </li>
          <li>
            <Link to={subject?.route || '/iot'} className="hover:text-brand-heading transition-colors">
              {subject?.shortTitle || subject?.name || 'Subject'}
            </Link>
          </li>
          <li aria-hidden="true" className="select-none">
            <ChevronRight size={12} className="text-brand-muted/60" />
          </li>
          <li className="text-brand-primary font-bold" aria-current="page">
            {unit?.shortTitle || `Unit ${unit?.id}`}
          </li>
        </ol>
      </nav>

      {/* Main Clean Header Card */}
      <Card hover={false} className="p-5 sm:p-7 border-brand-border bg-brand-surface shadow-card">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl space-y-3">
            {/* Core Metadata Ribbon: Unit Title | Module | Hours | Marks */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="rounded-lg bg-brand-primary/10 px-2.5 py-1 text-brand-primary">
                {subject?.shortTitle || 'IoT'} • Unit {unit?.id}
              </span>
              <span className="rounded-lg bg-brand-elevated px-2.5 py-1 text-brand-body">
                Module {unit?.module || 'A'}
              </span>
              <span className="inline-flex items-center gap-1 rounded-lg bg-brand-elevated px-2.5 py-1 text-brand-body">
                <Clock size={12} className="text-brand-primary" /> {unit?.hours} Hours
              </span>
              <span className="inline-flex items-center gap-1 rounded-lg bg-brand-elevated px-2.5 py-1 text-brand-coral">
                <FileBadge2 size={12} /> {unit?.marks} Marks
              </span>
            </div>

            {/* Unit Title */}
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-heading">
              {title}
            </h1>

            {/* Progressive Disclosure Description */}
            {unit?.summary || unit?.description ? (
              <ShowMoreText
                text={unit.summary || unit.description}
                maxLength={140}
                className="text-xs sm:text-sm leading-relaxed text-brand-body"
              />
            ) : null}

            {/* Clear Primary Actions per Step 8 */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <Button
                variant="primary"
                size="sm"
                icon={<FileQuestion size={14} />}
                onClick={handleStart}
              >
                Practice PYQ MCQs
              </Button>

              {onStartLongQuestions && (
                <Button
                  variant="secondary"
                  size="sm"
                  icon={<HelpCircle size={14} />}
                  onClick={onStartLongQuestions}
                >
                  Study Long Questions
                </Button>
              )}

              {onStartCheatSheets && (
                <Button
                  variant="ghost"
                  size="sm"
                  icon={<BookOpenText size={14} />}
                  onClick={onStartCheatSheets}
                  className="border border-brand-border bg-brand-elevated/60 text-brand-body hover:text-brand-heading"
                >
                  Open Cheat Sheets
                </Button>
              )}
            </div>
          </div>

          {/* Right Header Actions (Back, Share, Print) */}
          <div className="flex flex-wrap items-center gap-2 self-start lg:flex-col lg:items-end">
            <Link to={backTo}>
              <Button variant="ghost" size="sm" icon={<ArrowLeft size={14} />} className="text-xs">
                {backLabel}
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleShare}
                aria-label="Share page link"
                title="Copy link"
                className="inline-flex h-8 items-center gap-1 rounded-lg border border-brand-border bg-brand-elevated px-2.5 text-xs text-brand-body hover:text-brand-heading transition"
              >
                {copied ? <Check size={13} className="text-brand-success" /> : <Share2 size={13} />}
                <span>{copied ? 'Copied' : 'Share'}</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                aria-label="Print summary"
                title="Print"
                className="inline-flex h-8 items-center gap-1 rounded-lg border border-brand-border bg-brand-elevated px-2.5 text-xs text-brand-body hover:text-brand-heading transition"
              >
                <Printer size={13} />
                <span>Print</span>
              </button>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default UnitHeader;
