import { ArrowLeft, BookOpen, ExternalLink, Lightbulb, Presentation } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { Card, SectionHeading, Badge, Button } from '../components/ui';
import { unit1LongAnswers } from '../data/iotLongAnswers';

function VisualFlow({ visual }) {
  if (!visual || !Array.isArray(visual.steps)) return null;

  return (
    <div className="rounded-2xl border border-brand-primary/30 bg-brand-primary/5 p-4 sm:p-5">
      <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary">
        <Presentation size={15} /> {visual.title || 'Step Visual Flow'}
      </p>
      <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
        {visual.steps.map((step, index) => (
          <div
            key={step}
            className="rounded-xl border border-brand-border bg-brand-surface p-3 text-center shadow-sm"
          >
            <span className="mb-2 inline-grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-brand-primary to-brand-accent text-xs font-bold text-slate-950">
              {index + 1}
            </span>
            <p className="text-xs font-semibold text-brand-heading">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function LongAnswerBlock({ answer, index }) {
  return (
    <Card hover={false} className="scroll-mt-28 p-5 sm:p-8 border-brand-border" delay={index * 0.04}>
      <article id={answer.id}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between border-b border-brand-border pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              Long Answer {index + 1}
            </span>
            <h2 className="mt-1 font-display text-xl sm:text-2xl font-bold text-brand-heading">
              <span className="mr-2">{answer.emoji}</span>
              {answer.title}
            </h2>
          </div>
          {answer.teachingFocus ? (
            <span className="rounded-xl border border-brand-coral/30 bg-brand-coral/10 px-3.5 py-2 text-xs font-semibold text-brand-coral">
              Teaching Focus: {answer.teachingFocus}
            </span>
          ) : null}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <div className="space-y-3.5">
            {answer.intro?.map((paragraph) => (
              <p key={paragraph} className="text-xs sm:text-sm leading-relaxed text-brand-body">
                {paragraph}
              </p>
            ))}
          </div>
          {answer.visual ? <VisualFlow visual={answer.visual} /> : null}
        </div>

        {answer.sections?.map((section) => (
          <div key={section.heading} className="mt-6 rounded-2xl border border-brand-border bg-brand-elevated/40 p-4 sm:p-5">
            <h3 className="font-display text-base sm:text-lg font-bold text-brand-heading">
              {section.heading}
            </h3>
            <ul className="mt-3 space-y-2.5">
              {section.bullets?.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-brand-body">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {answer.conclusion ? (
          <div className="mt-6 rounded-2xl border border-brand-success/35 bg-brand-success/10 p-4 text-xs sm:text-sm text-brand-heading">
            <p className="inline-flex items-center gap-1.5 font-bold text-brand-success">
              <Lightbulb size={15} /> Conclusion
            </p>
            <p className="mt-1.5 leading-relaxed text-brand-body">{answer.conclusion}</p>
          </div>
        ) : null}
      </article>
    </Card>
  );
}

function IotLongQuestionsPage() {
  return (
    <PageTransition>
      <section className="section-shell pt-10 sm:pt-14">
        <Card hover={false} className="p-6 sm:p-8 border-brand-primary/35 shadow-card">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="primary">Diploma 5th Semester</Badge>
                <span className="text-xs text-brand-muted">Internet of Things</span>
              </div>
              <h1 className="mt-3 font-display text-2xl sm:text-4xl font-extrabold text-brand-heading">
                🌐 Unit 1: Important Long Answers &amp; Visual Flows
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-brand-body leading-relaxed max-w-2xl">
                Structured explanations with diagrams and memory models for high-scoring semester exam answers.
              </p>
            </div>
            <Link to="/iot/unit/1">
              <Button variant="secondary" icon={<ArrowLeft size={16} />}>
                Back to Unit 1
              </Button>
            </Link>
          </div>
        </Card>
      </section>

      {/* Long Answers List */}
      <section className="section-shell mt-8 sm:mt-10 mb-20 space-y-6">
        {unit1LongAnswers.map((answer, index) => (
          <LongAnswerBlock key={answer.id} answer={answer} index={index} />
        ))}
      </section>
    </PageTransition>
  );
}

export default IotLongQuestionsPage;
