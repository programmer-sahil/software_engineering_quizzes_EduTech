import { MessageCircle, PhoneCall, Sparkles } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ProjectCategoryCard from '../components/ProjectCategoryCard';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';
import { getServicesWhatsAppLink, projectDomains, services, servicesContact, whyProjectsMatter } from '../data/services';
import FinalYearProjectsSection from '../sections/FinalYearProjectsSection';
import JobTrainingSection from '../sections/JobTrainingSection';

const heroBadges = [
  'Final-year projects',
  'Full application development',
  'Report + PPT',
  'Viva QA',
  'Interview preparation',
  '1:1 special training',
];

function ServicesPage() {
  return (
    <PageTransition>
      <section className="section-shell pt-12">
        <div className="glass relative overflow-hidden rounded-2xl p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-coral/40 bg-coral/10 px-3 py-1 text-xs font-semibold text-coral">
              <Sparkles size={13} /> Premium EduTech Services
            </span>
            <h1 className="mt-5 max-w-5xl font-display text-3xl leading-tight text-white sm:text-5xl">
              Project Development, Training &amp; Career Guidance
            </h1>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base">
              Get complete support for final-year projects, full-stack applications, IoT systems, data science, ML/AI
              projects, reports, PPTs, viva preparation, and internship/job readiness.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {heroBadges.map((badge) => (
                <span key={badge} className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={getServicesWhatsAppLink()} target="_blank" rel="noreferrer">
                <Button icon={<MessageCircle size={16} />}>WhatsApp Now</Button>
              </a>
              <a href={`tel:${servicesContact.phone.replace(/\s+/g, '')}`}>
                <Button variant="secondary" icon={<PhoneCall size={16} />}>
                  Call: {servicesContact.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell mt-16">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Service Categories</p>
          <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">Complete Academic Project Support</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
            Get complete guidance from idea selection to final presentation across software, IoT, data, ML, AI, and
            career-readiness domains.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ProjectCategoryCard key={service.id} service={service} delay={index * 0.06} />
          ))}
        </div>
      </section>

      <section className="section-shell mt-16">
        <div className="glass rounded-2xl p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Project Domains</p>
          <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">Projects Students Can Build</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {projectDomains.map((domain) => (
              <span key={domain} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
                {domain}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell mt-16">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Portfolio Value</p>
          <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">Why Strong Projects Matter</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base">
            Academic projects are not only for marks. A well-built project can become a strong portfolio asset. Students
            can explain it in interviews, add it to their CV, showcase it on GitHub, use it during internship
            applications, and present it confidently during viva or project evaluation.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {whyProjectsMatter.map((item, index) => (
            <GlassCard key={item.title} delay={index * 0.06} className="p-5">
              <h3 className="font-display text-lg text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <FinalYearProjectsSection />
      <JobTrainingSection />

      <section className="section-shell mt-16">
        <div className="rounded-2xl border border-accent/35 bg-gradient-to-br from-accent/15 via-sky-500/10 to-coral/10 p-6 sm:p-8">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Ready to discuss your project?</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
            Projects help students showcase practical skills in interviews, CVs, internships, and job applications.
            Share your semester, domain, deadline, and project idea to get practical guidance.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={getServicesWhatsAppLink()} target="_blank" rel="noreferrer">
              <Button icon={<MessageCircle size={16} />}>Ask for Project Guidance</Button>
            </a>
            <a href={getServicesWhatsAppLink()} target="_blank" rel="noreferrer">
              <Button variant="secondary" icon={<Sparkles size={16} />}>
                Ask for 1:1 Training
              </Button>
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default ServicesPage;
