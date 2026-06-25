import { ArrowLeft, BookOpenText, ExternalLink, Lightbulb, Presentation } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';
import { unit1LongAnswers } from '../data/iotLongAnswers';

function VisualFlow({ visual }) {
  return (
    <div className="rounded-2xl border border-accent/25 bg-accent/10 p-4">
      <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        <Presentation size={14} /> {visual.title}
      </p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {visual.steps.map((step, index) => (
          <div key={step} className="relative rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center text-sm font-semibold text-slate-100">
            <span className="mb-2 inline-grid h-7 w-7 place-items-center rounded-full bg-accent text-xs text-slate-900">
              {index + 1}
            </span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function LongAnswerBlock({ answer, index }) {
  return (
    <GlassCard className="scroll-mt-28 p-5 sm:p-7" delay={index * 0.04}>
      <article id={answer.id}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Long Answer {index + 1}</p>
            <h2 className="mt-2 font-display text-2xl leading-tight text-white sm:text-3xl">
              <span className="mr-2">{answer.emoji}</span>
              {answer.title}
            </h2>
          </div>
          <div className="rounded-2xl border border-coral/30 bg-coral/10 px-4 py-3 text-sm font-semibold text-coral">
            Teaching Focus: {answer.teachingFocus}
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-4">
            {answer.intro.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-7 text-slate-300 sm:text-[15px]">
                {paragraph}
              </p>
            ))}
          </div>
          <VisualFlow visual={answer.visual} />
        </div>

        <div className="mt-6 space-y-5">
          {answer.sections.map((section) => (
            <section key={section.heading} className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
              <h3 className="font-display text-xl text-white">{section.heading}</h3>
              <ul className="mt-4 space-y-3">
                {section.bullets.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-300/35 bg-emerald-400/10 p-4">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
            <Lightbulb size={14} /> Conclusion
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-200">{answer.conclusion}</p>
        </div>
      </article>
    </GlassCard>
  );
}

function IotLongQuestionsPage() {
  return (
    <PageTransition>
      <section className="section-shell pt-10">
        <div className="glass rounded-2xl p-5 sm:p-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-accent">Diploma 5th Semester IoT</p>
              <h1 className="mt-2 font-display text-3xl leading-tight text-white sm:text-5xl">
                🌐 Unit 1: IoT Important Long Answers
              </h1>
            </div>
            <Link to="/iot/unit/1">
              <Button variant="secondary" icon={<ArrowLeft size={16} />}>
                Back to Unit 1
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell mt-8">
        <GlassCard className="p-5">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <BookOpenText size={14} /> Quick Teaching Index
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {unit1LongAnswers.map((answer, index) => (
              <a
                key={answer.id}
                href={`#${answer.id}`}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm font-semibold leading-5 text-slate-200 transition hover:border-accent/35 hover:bg-accent/10 hover:text-accent"
              >
                <span className="mr-2">{answer.emoji}</span>
                {index + 1}. {answer.title}
              </a>
            ))}
          </div>
        </GlassCard>
      </section>

      <section className="section-shell mt-8 space-y-6">
        {unit1LongAnswers.map((answer, index) => (
          <LongAnswerBlock key={answer.id} answer={answer} index={index} />
        ))}
      </section>

      <section className="section-shell mt-8">
        <div className="rounded-2xl border border-accent/35 bg-gradient-to-br from-accent/15 via-sky-500/10 to-emerald-400/10 p-5 sm:p-7">
          <h2 className="font-display text-2xl text-white">📌 Teaching Tip</h2>
          <p className="mt-2 text-sm leading-7 text-slate-300">
            Open this page in a separate tab, use the index to jump between answers, and explain each visual flow before
            reading the bullet points. Students can revise the same topics using the flashcards and MCQs on Unit 1.
          </p>
          <a href="/iot/unit/1" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
            Open Unit 1 Revision Page <ExternalLink size={15} />
          </a>
        </div>
      </section>
    </PageTransition>
  );
}

export default IotLongQuestionsPage;
