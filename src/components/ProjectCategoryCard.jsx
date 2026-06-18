import { Cpu, Database, GraduationCap, MonitorCog, Network, UserRoundCheck } from 'lucide-react';
import GlassCard from './ui/GlassCard';

const iconById = {
  'final-year-projects': GraduationCap,
  'iot-projects': Cpu,
  'full-stack-projects': MonitorCog,
  'data-projects': Database,
  'ml-ai-projects': Network,
  'job-preparation': UserRoundCheck,
};

function ProjectCategoryCard({ service, delay = 0 }) {
  const Icon = iconById[service.id] || GraduationCap;
  const details = service.projectIdeas?.length ? service.projectIdeas : service.includes;

  return (
    <GlassCard delay={delay} className="h-full p-5 sm:p-6">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent">
        <Icon size={20} />
      </div>
      <h3 className="font-display text-xl text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{service.shortDescription}</p>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
          {service.projectIdeas?.length ? 'Project Ideas' : 'Includes'}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {details.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

export default ProjectCategoryCard;
