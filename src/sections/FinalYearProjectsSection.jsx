import { MessageCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import { getServicesWhatsAppLink, projectWorkflow } from '../data/services';

function FinalYearProjectsSection() {
  return (
    <section className="section-shell mt-16">
      <div className="glass rounded-2xl p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Major Project Workflow</p>
        <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">Final-Year Major Project Support</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
          From topic selection to final viva, get complete step-by-step guidance.
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {projectWorkflow.map((step, index) => (
            <div key={step} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Step {String(index + 1).padStart(2, '0')}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-100">{step}</p>
            </div>
          ))}
        </div>

        <div className="mt-7 rounded-2xl border border-coral/35 bg-coral/10 p-5">
          <p className="font-display text-xl text-white">Need a complete project?</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">Contact SK SAHIL for project guidance, report, PPT, viva QA, and final demo preparation.</p>
          <a href={getServicesWhatsAppLink()} target="_blank" rel="noreferrer" className="mt-4 inline-block">
            <Button
              variant="secondary"
              icon={<MessageCircle size={16} />}
              className="border-coral/50 text-coral hover:bg-coral/10"
            >
              Ask for Project Guidance
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinalYearProjectsSection;
