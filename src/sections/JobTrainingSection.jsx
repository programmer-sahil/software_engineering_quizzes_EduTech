import { MessageCircle, PhoneCall, UserRoundCheck } from 'lucide-react';
import Button from '../components/ui/Button';
import { getServicesWhatsAppLink, servicesContact, trainingServices } from '../data/services';

function JobTrainingSection() {
  return (
    <section className="section-shell mt-16">
      <div className="glass rounded-2xl p-6 sm:p-8">
        <div className="grid gap-7 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-300/40 bg-emerald-400/10 text-emerald-200">
              <UserRoundCheck size={20} />
            </div>
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-200">1:1 Special Training</p>
            <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">Internship and Job Preparation</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Strong projects can improve your confidence and make your profile more practical. Get focused support for
              explaining your project, improving your CV, preparing demo flow, and planning skills for internships or
              job applications.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {trainingServices.map((service) => (
              <div key={service} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-medium text-slate-100">
                {service}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={getServicesWhatsAppLink()} target="_blank" rel="noreferrer">
            <Button icon={<MessageCircle size={16} />}>Ask for 1:1 Training</Button>
          </a>
          <a href={`tel:${servicesContact.phone.replace(/\s+/g, '')}`}>
            <Button variant="secondary" icon={<PhoneCall size={16} />}>
              Call: {servicesContact.phone}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default JobTrainingSection;
