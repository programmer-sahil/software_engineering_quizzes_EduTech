import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Code2,
  ExternalLink,
  Film,
  Globe,
  GraduationCap,
  Instagram,
  Play,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Card, SectionHeading } from '../components/ui';
import {
  getNonFeaturedMarkdownReels,
  OFFICIAL_INSTAGRAM_PROFILE,
} from '../content/reelsLoader';
import { openInstagramProfile, openInstagramReel } from '../utils/instagramDeepLink';

function CodeScholarPromotionalSection() {
  const shouldReduceMotion = useReducedMotion();
  const reels = getNonFeaturedMarkdownReels().slice(0, 4);

  return (
    <section className="section-shell mt-16 sm:mt-24">
      <Card hover={false} className="relative overflow-hidden p-6 sm:p-10 border-brand-border bg-brand-surface shadow-card">
        {/* Atmospheric HD Tech Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src="/assets/teaching/teaching7.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center opacity-[0.05] dark:opacity-[0.12] filter blur-[1px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-surface via-brand-surface/90 to-brand-surface/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10">
          {/* Top Promotional Header */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-brand-border/60 pb-8">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-pink-400">
                <Instagram size={13} />
                <span>Micro-Learning with Code Scholar AI</span>
              </div>

              {/* Requested Exact Heading */}
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-heading">
                Learn Beyond Your Syllabus
              </h2>

              {/* Requested Exact Description */}
              <p className="text-sm sm:text-base leading-relaxed text-brand-body">
                Explore AI, programming, automation and real-world technology concepts through short educational videos from Code Scholar AI.
              </p>
            </div>

            {/* Primary CTA: Follow Profile & Secondary CTA: Explore All Reels */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={OFFICIAL_INSTAGRAM_PROFILE.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => openInstagramProfile('code_scholar_ai', OFFICIAL_INSTAGRAM_PROFILE.url, e)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-glow hover:opacity-95 transition cursor-pointer"
              >
                <Instagram size={17} />
                <span>Follow @code_scholar_ai on Instagram</span>
                <ExternalLink size={13} />
              </a>

            <Link to="/reels">
              <Button
                variant="secondary"
                size="md"
                icon={<Film size={15} />}
                className="w-full sm:w-auto"
              >
                Explore All Learning Reels
              </Button>
            </Link>
          </div>
        </div>

        {/* 4 Topic Reel Previews Row */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-muted">
              Recent 60-Second Video Lessons
            </p>
            <Link
              to="/reels"
              className="inline-flex items-center gap-1 text-xs font-semibold text-brand-primary hover:text-brand-heading transition"
            >
              <span>View All 8 Reels</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reels.map((reel, idx) => (
              <motion.article
                key={reel.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-brand-border bg-brand-elevated/40 p-4 transition-all duration-300 hover:border-brand-primary/40 hover:bg-brand-elevated/70"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-bold ${
                        reel.visualStyle?.badgeColor || 'text-brand-primary border-brand-primary/30 bg-brand-primary/10'
                      }`}
                    >
                      {reel.category}
                    </span>
                    <span className="text-[10px] font-semibold text-brand-muted">
                      60s
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-sm font-bold text-brand-heading line-clamp-2 group-hover:text-brand-primary transition-colors">
                    {reel.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-brand-muted line-clamp-2 leading-relaxed">
                    {reel.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-brand-border/40 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-brand-muted">
                    Code Scholar AI
                  </span>
                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => openInstagramReel(reel.instagramId || reel.id, reel.url, e)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-pink-400 hover:text-pink-300 transition cursor-pointer"
                  >
                    <span>Watch</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        </div>
      </Card>
    </section>
  );
}

export default CodeScholarPromotionalSection;

