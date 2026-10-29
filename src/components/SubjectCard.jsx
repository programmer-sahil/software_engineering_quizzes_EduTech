import { ArrowRight, Cpu, GraduationCap, Lock, Sparkles, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, Badge, Button, ShowMoreText } from './ui';

function SubjectCard({ subject, delay = 0 }) {
  const isIoT = subject.id === 'iot';
  const Icon = isIoT ? Cpu : Workflow;
  const isDisabled = Boolean(subject.disabled);
  const unitsCount = Array.isArray(subject.units) ? subject.units.length : 0;

  return (
    <Card
      delay={delay}
      className={`h-full p-6 sm:p-7 flex flex-col justify-between ${
        isDisabled ? 'border-brand-border bg-brand-surface/70 opacity-90' : 'border-brand-primary/35 shadow-card'
      }`}
    >
      <div>
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`grid h-11 w-11 place-items-center rounded-xl border ${
                isDisabled
                  ? 'border-brand-border bg-brand-elevated text-brand-muted'
                  : 'border-brand-primary/40 bg-brand-primary/10 text-brand-primary'
              }`}
            >
              <Icon size={20} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                {subject.semester}
              </span>
              <p className="text-[11px] text-brand-muted">{subject.stream}</p>
            </div>
          </div>

          <div>
            {isDisabled ? (
              <Badge variant="locked" icon={<Lock size={12} />}>
                {subject.disabledLabel || 'Reopens next semester'}
              </Badge>
            ) : (
              <Badge variant="primary" icon={<Sparkles size={12} />}>
                Active Subject
              </Badge>
            )}
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="mt-5 font-display text-2xl font-bold text-brand-heading">
          {subject.name || subject.title}
        </h3>
        <p className="mt-1 text-xs font-medium text-brand-primary">
          {subject.subtitle}
        </p>
        <ShowMoreText
          text={subject.description}
          maxLength={140}
          className="mt-3 text-sm leading-relaxed text-brand-body"
        />

        {/* Unit Count Pill */}
        <div className="mt-5 flex items-center gap-3 text-xs text-brand-muted">
          <span className="rounded-lg border border-brand-border bg-brand-elevated/70 px-2.5 py-1 font-semibold text-brand-body">
            {unitsCount} Syllabus Units
          </span>
          {isIoT ? (
            <span className="text-brand-primary font-semibold">
              Modules A, B, C Available
            </span>
          ) : (
            <span>Course materials preserved</span>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-8 border-t border-brand-border pt-5">
        {isDisabled ? (
          <div className="flex items-center justify-between">
            <span className="text-xs text-brand-muted inline-flex items-center gap-1.5">
              <Lock size={14} className="text-brand-coral" /> Reopens Next Semester
            </span>
            <Link to={subject.route}>
              <Button variant="ghost" size="sm" icon={<Lock size={12} />} className="text-xs text-brand-muted hover:text-brand-heading">
                View Status
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <span className="text-xs text-brand-primary font-semibold">
              Ready for Study &amp; Practice
            </span>
            <Link to={subject.route}>
              <Button variant="primary" size="sm" icon={<ArrowRight size={15} />}>
                {subject.cta || 'Explore Units'}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Card>
  );
}

export default SubjectCard;
