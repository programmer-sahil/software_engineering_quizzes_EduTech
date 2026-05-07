import { AnimatePresence, motion } from 'framer-motion';
import { BriefcaseBusiness, Building2, CheckCircle2, GraduationCap } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { CAREER_UPSKILLING, getWhatsAppLink } from '../data/careerUpskilling';
import WhatsAppIcon from './icons/WhatsAppIcon';

import teaching1 from '../../assets/teaching/teaching1.jpg';
import teaching2 from '../../assets/teaching/teaching2.jpg';
import teaching3 from '../../assets/teaching/teaching3.jpg';
import teaching4 from '../../assets/teaching/teaching4.jpg';
import teaching5 from '../../assets/teaching/teaching5.jpg';
import teaching6 from '../../assets/teaching/teaching6.jpg';
import teaching7 from '../../assets/teaching/teaching7.jpg';
import teaching8 from '../../assets/teaching/teaching8.jpg';
import project1 from '../../assets/projects/project1.jpg';
import project2 from '../../assets/projects/project2.jpg';
import project3 from '../../assets/projects/project3.jpg';
import project4 from '../../assets/projects/project4.jpg';
import project5 from '../../assets/projects/project5.jpg';
import project6 from '../../assets/projects/project6.jpg';

const containerByVariant = {
  landing: 'p-6 sm:p-8',
  unit: 'p-5 sm:p-7',
  quiz: 'p-4 sm:p-5',
};

const titleByVariant = {
  landing: 'text-2xl sm:text-3xl',
  unit: 'text-xl sm:text-2xl',
  quiz: 'text-lg sm:text-xl',
};

const upskillingGallery = [
  teaching1,
  teaching2,
  teaching3,
  teaching4,
  teaching5,
  teaching6,
  teaching7,
  teaching8,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
];

function CareerUpskillingBanner({ variant = 'landing', unitTitle }) {
  const [activeImage, setActiveImage] = useState(0);
  const whatsappLink = getWhatsAppLink();
  const showFullContent = variant !== 'quiz';
  const exploreLink = variant === 'landing' ? '#units' : '/';

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage((prev) => (prev + 1) % upskillingGallery.length);
    }, 1100);

    return () => window.clearInterval(timer);
  }, []);

  const galleryPreview = useMemo(() => {
    if (variant === 'quiz') {
      return upskillingGallery.slice(0, 5);
    }
    return upskillingGallery;
  }, [variant]);

  return (
    <section
      className={`relative overflow-hidden rounded-2xl border border-emerald-300/30 bg-gradient-to-br from-emerald-500/18 via-cyan-500/14 to-sky-500/14 ${containerByVariant[variant]}`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-emerald-300/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-cyan-300/12 blur-3xl" />

      <div className={`relative z-10 ${showFullContent ? 'grid gap-6 lg:grid-cols-[1.4fr_1fr]' : 'space-y-5'}`}>
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/40 bg-emerald-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-100">
            <GraduationCap size={14} />
            {CAREER_UPSKILLING.title}
          </div>
          <p className="mt-3 inline-flex items-center rounded-md border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-cyan-100">
            Live Class + Projects + Mentorship
          </p>

          <h3 className={`mt-3 font-display leading-tight text-white ${titleByVariant[variant]}`}>
            Upskill for Jobs and Freelancing Growth
          </h3>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-cyan-50 sm:text-base">{CAREER_UPSKILLING.summary}</p>

          {showFullContent ? (
            <div className="mt-4 grid gap-2 text-sm text-cyan-50 sm:grid-cols-2">
              {CAREER_UPSKILLING.questions.map((question) => (
                <p key={question} className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2">
                  <CheckCircle2 size={16} className="text-emerald-200" />
                  {question}
                </p>
              ))}
            </div>
          ) : (
            <p className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-cyan-50">
              <CheckCircle2 size={16} className="text-emerald-200" />
              Remote or hybrid IT jobs and freelancing support included.
            </p>
          )}

          <p className="mt-4 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm leading-6 text-cyan-100">
            {CAREER_UPSKILLING.training}
          </p>

          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-100">Join our affordable AI courses</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {CAREER_UPSKILLING.courses.map((course) => (
              <span
                key={course}
                className="inline-flex items-center gap-2 rounded-full border border-sky-200/40 bg-sky-500/15 px-3 py-1 text-xs font-semibold text-sky-100 sm:text-sm"
              >
                <BriefcaseBusiness size={14} />
                {course}
              </span>
            ))}
          </div>

          <p className="mt-4 text-sm font-medium text-white">
            {CAREER_UPSKILLING.outcome} <span className="text-emerald-200">{CAREER_UPSKILLING.contactLine}</span>
            {unitTitle ? <span className="text-cyan-200"> This support is available for {unitTitle} learners as well.</span> : null}
          </p>
          <p className="mt-2 text-xs text-cyan-100">WhatsApp Direct: +91 85830 58673</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-200/50 bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500/30"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <a
              href={exploreLink}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-200/35 bg-cyan-500/12 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/20"
            >
              <Building2 size={16} />
              {variant === 'landing' ? 'Explore Learning Units' : 'Back to Home'}
            </a>
          </div>
        </div>

        {showFullContent ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/20 bg-slate-950/35 shadow-[0_18px_40px_rgba(6,182,212,0.2)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={upskillingGallery[activeImage]}
                  alt="Career upskilling training preview"
                  initial={{ opacity: 0, scale: 1.07, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.97, filter: 'blur(4px)' }}
                  transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover will-change-transform"
                />
              </AnimatePresence>
            </div>
            <div className="grid grid-cols-5 gap-2 rounded-xl border border-white/10 bg-white/5 p-2">
              {galleryPreview.slice(0, 10).map((image, index) => (
                <motion.img
                  key={`${image}-${index}`}
                  src={image}
                  alt="Training and project thumbnail"
                  className={`aspect-square w-full rounded-md object-cover ${index === activeImage % 10 ? 'ring-2 ring-emerald-300/70' : ''}`}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.2 }}
                  viewport={{ once: true }}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-2 rounded-xl border border-white/15 bg-white/5 p-2">
            <div className="relative aspect-[16/6] w-full overflow-hidden rounded-lg border border-white/15 shadow-[0_10px_22px_rgba(6,182,212,0.18)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`quiz-${activeImage}`}
                  src={upskillingGallery[activeImage]}
                  alt="Career upskilling highlight"
                  className="absolute inset-0 h-full w-full object-cover will-change-transform"
                  initial={{ opacity: 0, scale: 1.06, filter: 'blur(5px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.98, filter: 'blur(3px)' }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {galleryPreview.map((image, index) => (
                <motion.img
                  key={`${image}-${index}`}
                  src={image}
                  alt="Career upskilling thumbnail"
                  className={`aspect-square w-full rounded-md object-cover ${index === activeImage % 5 ? 'ring-2 ring-emerald-300/70' : ''}`}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.2 }}
                  viewport={{ once: true }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CareerUpskillingBanner;
