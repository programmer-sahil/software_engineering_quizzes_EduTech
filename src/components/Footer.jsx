import { motion } from 'framer-motion';
import { GraduationCap, PhoneCall, Sparkles } from 'lucide-react';
import { BRAND } from '../data/units';

function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950/60 py-12 backdrop-blur-md">
      <motion.div
        className="section-shell"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="glass rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="font-display text-xl text-white">Made by {BRAND.madeBy}</p>
              <p className="mt-1 text-sm text-slate-300">{BRAND.subtitle}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Exam-oriented learning platform for Software Engineering and diploma students.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm lg:justify-end">
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-slate-200">
                <Sparkles size={14} /> {BRAND.bannerText}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-coral/30 bg-coral/10 px-3 py-2 text-coral">
                <GraduationCap size={14} /> {BRAND.promoLine}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-slate-200">
                Diploma teaching for every department
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-slate-200">
                Highly qualified teachers available
              </span>
              <motion.span
                whileHover={{ y: -2, scale: 1.01 }}
                className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-3 py-2 font-semibold text-accent"
              >
                Contact us immediately
              </motion.span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-3 py-2 text-accent">
                <PhoneCall size={14} /> Call us: {BRAND.contact}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
