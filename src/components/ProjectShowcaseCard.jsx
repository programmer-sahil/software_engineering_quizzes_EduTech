import { useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  Check,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Eye,
  FileCheck2,
  Globe,
  HelpCircle,
  MessageCircle,
  Presentation,
  Sparkles,
} from 'lucide-react';
import { getServicesWhatsAppLink } from '../data/services';
import Button from './ui/Button';

function ProjectShowcaseCard({ project, onOpenDetails }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!project) return null;

  const whatsappMsg = encodeURIComponent(
    `Hi Sahil Sir, I am interested in project guidance for: "${project.title}" (${project.domain}). Could you please share the details, report structure, and guidance fees?`
  );
  const whatsappUrl = `https://wa.me/918583058673?text=${whatsappMsg}`;

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-brand-border bg-brand-surface shadow-card transition-all duration-300 hover:border-brand-primary/50 hover:shadow-glow-sm">
      <div>
        {/* HD Image Visual Shell (Aspect 16/10, No Overlap, Crisp Object Cover) */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-brand-border/60">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-brand-elevated text-brand-muted text-xs">
              <Sparkles size={16} className="animate-spin text-brand-primary mr-2" />
              <span>Loading HD preview...</span>
            </div>
          )}

          {/* Subtle Gradient Shadow for Crisp Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

          {/* Top Floating Category & Status Badges */}
          <div className="absolute left-3 top-3 right-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-black/70 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md shadow-sm">
              <Sparkles size={11} className="text-brand-primary" />
              <span>{project.domain}</span>
            </span>

            <span className="inline-flex items-center gap-1 rounded-lg border border-emerald-500/40 bg-emerald-500/20 px-2.5 py-1 text-[11px] font-semibold text-emerald-300 backdrop-blur-md">
              <CheckCircle2 size={11} />
              <span>Verified Build</span>
            </span>
          </div>

          {/* Quick Preview Hover Trigger */}
          {onOpenDetails && (
            <button
              type="button"
              onClick={() => onOpenDetails(project)}
              className="absolute right-3 bottom-3 z-10 inline-flex items-center gap-1 rounded-lg border border-white/20 bg-black/70 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-black/90"
            >
              <Eye size={12} />
              <span>View Specs</span>
            </button>
          )}
        </div>

        {/* Project Card Body */}
        <div className="p-5 sm:p-6 space-y-4">
          <div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-brand-heading leading-snug group-hover:text-brand-primary transition-colors">
              {project.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-brand-body leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-brand-muted mb-2">
              Technology Stack:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-brand-border bg-brand-elevated/70 px-2.5 py-0.5 text-[11px] font-medium text-brand-heading"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Included Deliverables Checklist */}
          <div className="rounded-xl border border-brand-border/60 bg-brand-elevated/40 p-3 space-y-1.5 text-xs">
            <p className="font-semibold text-brand-heading flex items-center gap-1 text-[11px] uppercase tracking-wider text-brand-primary">
              <FileCheck2 size={13} /> Deliverables Included:
            </p>
            <div className="grid grid-cols-2 gap-1 text-[11px] text-brand-body">
              {project.deliverables.map((item, idx) => (
                <span key={idx} className="flex items-center gap-1.5 truncate">
                  <Check size={11} className="text-emerald-400 shrink-0" />
                  <span className="truncate">{item}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 pt-0 border-t border-brand-border/40 mt-4 flex items-center justify-between gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-500 transition"
        >
          <MessageCircle size={15} />
          <span>Request Project Guidance</span>
        </a>

        {onOpenDetails && (
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            aria-label="View project details"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-brand-border bg-brand-elevated text-brand-muted hover:border-brand-primary hover:text-brand-heading transition"
          >
            <ArrowUpRight size={16} />
          </button>
        )}
      </div>
    </article>
  );
}

export default ProjectShowcaseCard;
