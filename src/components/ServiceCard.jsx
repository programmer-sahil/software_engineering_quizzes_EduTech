import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from './ui/GlassCard';

function ServiceCard({ service, delay = 0, compact = false }) {
  return (
    <GlassCard delay={delay} className="group h-full p-5 sm:p-6">
      <div className="flex h-full flex-col">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent">
          <Sparkles size={18} />
        </div>
        <h3 className="font-display text-xl text-white">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{service.description || service.shortDescription}</p>

        {service.tags?.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cyan-200/25 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-semibold text-cyan-100"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {!compact && service.includes?.length ? (
          <div className="mt-5 grid gap-2">
            {service.includes.slice(0, 5).map((item) => (
              <p key={item} className="inline-flex items-start gap-2 text-sm leading-5 text-slate-300">
                <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-300" />
                {item}
              </p>
            ))}
          </div>
        ) : null}

        {compact ? (
          <Link to="/services" className="mt-6">
            <motion.span
              whileHover={{ x: 3 }}
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-accent transition group-hover:bg-accent group-hover:text-slate-900"
            >
              Explore Services <ArrowUpRight size={16} />
            </motion.span>
          </Link>
        ) : null}
      </div>
    </GlassCard>
  );
}

export default ServiceCard;
