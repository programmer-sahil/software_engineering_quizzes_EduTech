import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  FileCheck2,
  GraduationCap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui';
import FeaturedReelHeroCard from '../components/FeaturedReelHeroCard';
import { BRAND } from '../data/units';

function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-8 sm:pt-14 lg:pt-16 pb-10 sm:pb-16">
      {/* Subtle ambient lighting grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

      <div className="section-shell relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Clean Copy & Primary Actions */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-left lg:col-span-7"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
              <GraduationCap size={15} />
              <span>DIPLOMA LEARNING HUB</span>
            </div>

            {/* Requested Exact Headline */}
            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-brand-heading sm:text-5xl md:text-6xl leading-[1.12]">
              Learn smarter. Revise faster.
            </h1>

            {/* Requested Exact Supporting Text */}
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-body sm:text-lg">
              Unit-wise PYQ practice, concise long answers and quick revision for diploma students.
            </p>

            <p className="mt-2 text-xs font-medium text-brand-muted">
              Curated by <span className="font-semibold text-brand-primary">{BRAND.madeBy}</span> • {BRAND.subtitle}
            </p>

            {/* Two Primary CTAs */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Link to="/subjects">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  className="w-full sm:w-auto shadow-glow"
                >
                  Explore Subjects
                </Button>
              </Link>
              <Link to="/iot">
                <Button
                  variant="secondary"
                  size="lg"
                  icon={<FileCheck2 size={18} />}
                  className="w-full sm:w-auto border-brand-border/60 hover:border-brand-primary/50"
                >
                  Practice PYQ MCQs
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Premium Featured Video Preview Card */}
          <div className="lg:col-span-5">
            <FeaturedReelHeroCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
