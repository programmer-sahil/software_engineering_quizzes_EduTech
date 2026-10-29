import { ArrowRight, BookOpen, Clock, FileBadge2, Layers, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Badge, Button, ProgressBar } from './ui';

function UnitCard({ unit, delay = 0, basePath = '/iot/unit' }) {
  const unitHref = `${basePath}/${unit.id}`;
  const [trackedProgress, setTrackedProgress] = useState(null);

  // Check if student has genuinely completed questions in this unit
  useEffect(() => {
    try {
      const stored = localStorage.getItem(`edutech_unit_progress_${unit.id}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (typeof parsed.completed === 'number' && typeof parsed.total === 'number') {
          setTrackedProgress(parsed);
        }
      }
    } catch {
      setTrackedProgress(null);
    }
  }, [unit.id]);

  const topicsList = Array.isArray(unit.topics) ? unit.topics : [];

  return (
    <Card delay={delay} className="p-6 flex flex-col justify-between border-brand-border">
      <div>
        {/* Module Badge & Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            {unit.module ? (
              <span className="rounded-lg border border-brand-primary/40 bg-brand-primary/10 px-2.5 py-1 text-xs font-bold text-brand-primary">
                Module {unit.module}
              </span>
            ) : null}
            <span className="text-xs font-semibold text-brand-muted">
              Unit {unit.id}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-brand-body">
            {unit.hours ? (
              <span className="inline-flex items-center gap-1 rounded-md border border-brand-border bg-brand-elevated px-2 py-0.5">
                <Clock size={12} className="text-brand-primary" /> {unit.hours}h
              </span>
            ) : null}
            {unit.marks ? (
              <span className="inline-flex items-center gap-1 rounded-md border border-brand-border bg-brand-elevated px-2 py-0.5">
                <FileBadge2 size={12} className="text-brand-coral" /> {unit.marks} Marks
              </span>
            ) : null}
          </div>
        </div>

        {/* Unit Title & Description */}
        <h3 className="mt-4 font-display text-xl font-bold text-brand-heading">
          {unit.title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-brand-body">
          {unit.description || unit.summary}
        </p>

        {/* Real Syllabus Topics Preview (Original Text Verbatim) */}
        {topicsList.length > 0 ? (
          <div className="mt-4 space-y-1.5 border-t border-brand-border pt-3">
            <p className="text-[11px] font-bold uppercase tracking-wider text-brand-muted">
              Syllabus Topics ({topicsList.length}):
            </p>
            <div className="flex flex-wrap gap-1.5">
              {topicsList.slice(0, 3).map((topic) => (
                <span
                  key={topic}
                  className="rounded-md border border-brand-border bg-brand-elevated/40 px-2 py-0.5 text-[11px] text-brand-body"
                >
                  {topic}
                </span>
              ))}
              {topicsList.length > 3 ? (
                <span className="rounded-md border border-brand-border bg-brand-elevated/40 px-2 py-0.5 text-[11px] font-medium text-brand-muted">
                  +{topicsList.length - 3} more
                </span>
              ) : null}
            </div>
          </div>
        ) : null}

        {/* Genuine Learning Progress (Only when truly tracked in localStorage) */}
        {trackedProgress ? (
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-elevated/50 p-2.5">
            <ProgressBar
              current={trackedProgress.completed}
              total={trackedProgress.total}
              label={`Completed ${trackedProgress.completed}/${trackedProgress.total} Questions`}
            />
          </div>
        ) : null}
      </div>

      {/* Action Footer */}
      <div className="mt-6 border-t border-brand-border pt-4 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-brand-muted">
          {unit.longQuestions?.length ? `${unit.longQuestions.length} Long Qs • ` : ''}
          {unit.pyqQuiz?.length
            ? `${unit.pyqQuiz.length} Verified PYQs`
            : `${unit.completeQuiz?.length || 15} Practice MCQs`}
        </span>
        <Link to={unitHref}>
          <Button variant="primary" size="sm" icon={<ArrowRight size={15} />}>
            Open Unit
          </Button>
        </Link>
      </div>
    </Card>
  );
}

export default UnitCard;
