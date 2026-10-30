import { motion } from 'framer-motion';
import { ExternalLink, GraduationCap, Instagram, PhoneCall, Sparkles } from 'lucide-react';
import { BRAND } from '../data/units';
import { OFFICIAL_INSTAGRAM_PROFILE } from '../content/reelsLoader';
import { openInstagramProfile } from '../utils/instagramDeepLink';
import Card from './ui/Card';

function Footer() {
  return (
    <footer className="mt-20 border-t border-brand-border bg-brand-surface/70 py-12 backdrop-blur-md">
      <motion.div
        className="section-shell"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card hover={false} className="p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="font-display text-xl font-bold text-brand-heading">
                Made by {BRAND.madeBy}
              </p>
              <p className="mt-1 text-sm font-medium text-brand-primary">{BRAND.subtitle}</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-body">
                Exam-oriented EduTech platform for Software Engineering, IoT, diploma preparation, and career
                upskilling.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 text-xs font-semibold lg:justify-end">
              {/* Instagram Profile Link */}
              <a
                href={OFFICIAL_INSTAGRAM_PROFILE.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => openInstagramProfile('code_scholar_ai', OFFICIAL_INSTAGRAM_PROFILE.url, e)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-pink-500/40 bg-pink-500/10 px-3.5 py-2 font-bold text-pink-400 hover:bg-pink-500/20 transition shadow-sm cursor-pointer"
              >
                <Instagram size={14} />
                <span>Follow {OFFICIAL_INSTAGRAM_PROFILE.handle}</span>
                <ExternalLink size={11} />
              </a>

              <span className="inline-flex items-center gap-1.5 rounded-xl border border-brand-border bg-brand-elevated px-3 py-2 text-brand-body">
                <Sparkles size={14} className="text-brand-primary" /> {BRAND.bannerText}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-brand-coral/30 bg-brand-coral/10 px-3 py-2 text-brand-coral">
                <GraduationCap size={14} /> {BRAND.promoLine}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-brand-border bg-brand-elevated px-3 py-2 text-brand-body">
                Diploma teaching for every department
              </span>
              <a
                href={`tel:${BRAND.contact.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 rounded-xl border border-brand-primary/40 bg-brand-primary/10 px-3.5 py-2 font-bold text-brand-primary hover:bg-brand-primary/20"
              >
                <PhoneCall size={14} /> Call us: {BRAND.contact}
              </a>
            </div>
          </div>
        </Card>
      </motion.div>
    </footer>
  );
}

export default Footer;
