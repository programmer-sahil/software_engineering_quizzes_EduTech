import { ArrowRight, Clock, Cpu, FileCheck2, Layers, Lock, Sparkles, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, SectionHeading, Badge, Button } from '../components/ui';
import { getAllSubjects, getSubjectCounts } from '../content';

function SubjectSpotlightSection() {
  const subjects = getAllSubjects();

  return (
    <section className="section-shell mt-16 sm:mt-24">
      <SectionHeading
        eyebrow="Curriculum Spotlight"
        title="Explore Diploma Subjects"
        description="Focused exam preparation aligned with the state council diploma syllabus."
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {subjects.map((subject, index) => {
          const isIoT = subject.id === 'iot';
          const counts = getSubjectCounts(subject.id);
          const isDisabled = Boolean(subject.disabled);
          const Icon = isIoT ? Cpu : Workflow;

          return (
            <Card
              key={subject.id}
              delay={index * 0.08}
              className={`p-6 sm:p-8 flex flex-col justify-between ${
                isIoT
                  ? 'border-brand-primary/35 shadow-card'
                  : 'border-brand-border bg-brand-surface/70 opacity-90'
              }`}
            >
              <div>
                {/* Header Pills */}
                <div className="flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2">
                    <div
                      className={`grid h-11 w-11 place-items-center rounded-xl border ${
                        isIoT
                          ? 'border-brand-primary/40 bg-brand-primary/10 text-brand-primary'
                          : 'border-brand-border bg-brand-elevated text-brand-muted'
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
                <p className="mt-2 text-sm leading-relaxed text-brand-body">
                  {subject.description}
                </p>

                {/* Derived Live Metadata Counts */}
                <div className="mt-6 grid grid-cols-3 gap-2.5 rounded-2xl border border-brand-border bg-brand-elevated/40 p-3.5 text-center">
                  <div>
                    <span className="block font-display text-lg font-extrabold text-brand-heading">
                      {counts.totalUnits}
                    </span>
                    <span className="text-[11px] font-medium text-brand-muted">Units</span>
                  </div>
                  <div>
                    <span className="block font-display text-lg font-extrabold text-brand-primary">
                      {counts.totalHours}h
                    </span>
                    <span className="text-[11px] font-medium text-brand-muted">Total Hours</span>
                  </div>
                  <div>
                    <span className="block font-display text-lg font-extrabold text-brand-coral">
                      {isIoT ? `${counts.totalPYQs} PYQs` : `${counts.totalCompleteMCQs} MCQs`}
                    </span>
                    <span className="text-[11px] font-medium text-brand-muted">Verified QA</span>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 border-t border-brand-border pt-5">
                {isDisabled ? (
                  <div className="flex items-center justify-between text-xs text-brand-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Lock size={14} /> Material locked for this semester
                    </span>
                    <span className="font-semibold text-brand-muted">Available Next Sem</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-brand-primary">
                      Modules A, B, C • Full Syllabus Ready
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
        })}
      </div>
    </section>
  );
}

export default SubjectSpotlightSection;

