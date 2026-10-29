import { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  Cpu,
  Database,
  ExternalLink,
  FileCheck2,
  GraduationCap,
  HelpCircle,
  MessageCircle,
  MonitorCog,
  Network,
  PhoneCall,
  Presentation,
  Sparkles,
} from 'lucide-react';
import Button from '../components/ui/Button';
import { getServicesWhatsAppLink, projectWorkflow } from '../data/services';
import { SHOWCASE_PROJECTS } from '../data/projectsData';
import ProjectShowcaseCard from '../components/ProjectShowcaseCard';
import ProjectDetailModal from '../components/ProjectDetailModal';

function FinalYearProjectsSection() {
  const [activeDomain, setActiveDomain] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const domains = ['All', 'Internet of Things', 'Full-Stack Web Development', 'Data Science & Machine Learning', 'Artificial Intelligence & NLP'];

  const filteredProjects = activeDomain === 'All'
    ? SHOWCASE_PROJECTS
    : SHOWCASE_PROJECTS.filter((p) => p.domain === activeDomain);

  return (
    <section className="section-shell mt-16 sm:mt-24">
      {/* Section Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-brand-border/60 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-primary">
            <GraduationCap size={13} />
            <span>Diploma &amp; B.Tech Final-Year Guidance</span>
          </div>
          <h2 className="mt-3 font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-brand-heading">
            Major Project Development &amp; Submission
          </h2>
          <p className="mt-2 max-w-3xl text-sm sm:text-base leading-relaxed text-brand-body">
            Get complete end-to-end support for academic major projects. From novel idea selection and clean source code
            development to college-formatted reports, presentation slide decks, and viva preparation.
          </p>
        </div>

        <a
          href={getServicesWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-500 transition"
        >
          <MessageCircle size={15} />
          <span>Discuss Project on WhatsApp</span>
        </a>
      </div>

      {/* Domain Filter Chips */}
      <div className="mt-8 flex flex-wrap items-center gap-2">
        {domains.map((dom) => (
          <button
            key={dom}
            type="button"
            onClick={() => setActiveDomain(dom)}
            className={`rounded-xl border px-3.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
              activeDomain === dom
                ? 'border-brand-primary bg-brand-primary text-brand-surface shadow-sm'
                : 'border-brand-border bg-brand-surface text-brand-body hover:border-brand-primary/40 hover:text-brand-heading'
            }`}
          >
            {dom}
          </button>
        ))}
      </div>

      {/* Projects Showcase Grid in HD */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectShowcaseCard
            key={project.id}
            project={project}
            onOpenDetails={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      {/* Step-by-Step Major Project Workflow */}
      <div className="mt-14 rounded-3xl border border-brand-border bg-brand-surface p-6 sm:p-10 shadow-card space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
            Step-by-Step Guidance
          </span>
          <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-brand-heading">
            Major Project Development Milestones
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-brand-body max-w-2xl">
            We guide you through each phase so you understand every single line of code and architecture decision during viva defense.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {projectWorkflow.map((step, index) => (
            <div
              key={step}
              className="group rounded-2xl border border-brand-border bg-brand-elevated/40 p-4 transition hover:border-brand-primary/40 hover:bg-brand-elevated/80"
            >
              <span className="rounded-md border border-brand-primary/30 bg-brand-primary/10 px-2 py-0.5 text-[10px] font-bold text-brand-primary">
                Phase {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-2.5 font-display text-sm font-bold text-brand-heading">
                {step}
              </p>
            </div>
          ))}
        </div>

        {/* Deliverables Guarantee Card */}
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-display text-base font-bold text-emerald-400 flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles size={16} /> Complete Submission Guarantee
            </p>
            <p className="text-xs sm:text-sm text-brand-body max-w-xl leading-relaxed">
              Every project comes with working source code, circuit/database design, formal IEEE-format report, PowerPoint presentation, and 1:1 viva question practice.
            </p>
          </div>

          <a
            href={getServicesWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-500 transition"
          >
            <MessageCircle size={15} />
            <span>Consult on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default FinalYearProjectsSection;
