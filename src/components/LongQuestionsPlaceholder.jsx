import { BookOpenText, FileQuestion, HelpCircle, Sparkles } from 'lucide-react';
import { Button, Card } from './ui';

/**
 * Long Questions Component for Unit Pages
 * Step 5 Requirement: Displays "Long questions and concise answers will be added soon."
 * Preserves source material on disk without displaying it until authorized.
 */
function LongQuestionsPlaceholder({ unit, onSwitchToQuiz, onSwitchToCheatSheet }) {
  return (
    <Card hover={false} className="p-8 sm:p-12 text-center border-brand-border/80 shadow-card">
      <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-primary/30 bg-brand-primary/10 text-brand-primary shadow-glow-sm">
        <HelpCircle size={32} />
      </div>

      <div className="mt-4">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-brand-elevated px-3 py-1 text-xs font-semibold text-brand-muted">
          <Sparkles size={13} className="text-brand-primary" />
          <span>Curriculum Preparation</span>
        </span>
      </div>

      <h2 className="mt-4 font-display text-2xl sm:text-3xl font-extrabold text-brand-heading">
        Long questions and concise answers will be added soon.
      </h2>

      <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base leading-relaxed text-brand-body">
        Comprehensive 5-mark and 10-mark board exam questions, structured definitions, and visual step-by-step
        diagrams for <span className="font-semibold text-brand-heading">{unit?.title || 'this unit'}</span> are
        currently being reviewed to ensure exam-ready brevity.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {onSwitchToQuiz && (
          <Button
            variant="primary"
            size="md"
            icon={<FileQuestion size={16} />}
            onClick={onSwitchToQuiz}
          >
            Start PYQ MCQ Quiz
          </Button>
        )}

        {onSwitchToCheatSheet && (
          <Button
            variant="secondary"
            size="md"
            icon={<BookOpenText size={16} />}
            onClick={onSwitchToCheatSheet}
          >
            Read Exam Cheat Sheets
          </Button>
        )}
      </div>
    </Card>
  );
}

export default LongQuestionsPlaceholder;
