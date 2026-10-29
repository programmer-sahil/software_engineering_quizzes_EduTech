import { motion, useReducedMotion } from 'framer-motion';
import {
  BookmarkCheck,
  CheckCircle2,
  GraduationCap,
  MessageCircle,
  PhoneCall,
  Sparkles,
  Users,
} from 'lucide-react';
import { BRAND } from '../data/units';
import { getServicesWhatsAppLink, servicesContact } from '../data/services';
import sahilMain from '../../assets/profile/sahil-main.jpg';
import teachingMain from '../../assets/profile/teaching-main.jpg';
import { Card, SectionHeading, Button } from '../components/ui';

const guidancePoints = [
  'Practice authentic semester examination MCQs with timer tracking.',
  'Memorize verified long-question points and comparison tables for maximum marks.',
  'Revise hardware pinouts, PWM channels, and protocols 30 minutes before exams.',
  '1:1 doubt clearing and final-year academic project development support available.',
];

function StudentGuidanceSection() {
  const shouldReduceMotion = useReducedMotion();
  const whatsappUrl = getServicesWhatsAppLink();

  return (
    <section className="section-shell mt-16 sm:mt-24">
      <Card hover={false} className="p-6 sm:p-10 border-brand-border bg-brand-surface shadow-card">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Two HD Mentorship Photos (No Overlap, Crisp Rounded Fitting) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
            <figure className="group relative overflow-hidden rounded-2xl border border-brand-border bg-slate-950 aspect-[3/4]">
              <img
                src={sahilMain}
                alt={`${BRAND.madeBy} - Dedicated CST Coding Tutor`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <figcaption className="absolute bottom-3 left-3 right-3 text-white">
                <span className="block font-display text-xs font-bold text-white">{BRAND.madeBy}</span>
                <span className="text-[10px] text-brand-muted">Lead Tutor &amp; Developer</span>
              </figcaption>
            </figure>

            <figure className="group relative overflow-hidden rounded-2xl border border-brand-border bg-slate-950 aspect-[3/4]">
              <img
                src={teachingMain}
                alt="Practical classroom teaching session"
                loading="lazy"
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <figcaption className="absolute bottom-3 left-3 right-3 text-white">
                <span className="block font-display text-xs font-bold text-white">Live Classroom</span>
                <span className="text-[10px] text-brand-muted">Practical Lab Guidance</span>
              </figcaption>
            </figure>
          </div>

          {/* Right Column: Guidance Tips & Direct Contact */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-primary">
                <GraduationCap size={13} />
                <span>Academic Mentorship &amp; Guidance</span>
              </div>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-brand-heading">
                Meet Your Instructor &amp; Mentor
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-brand-body leading-relaxed">
                Guided by <strong className="text-brand-heading">{BRAND.madeBy}</strong>, {BRAND.subtitle}.
                Bringing industrial software engineering practices, embedded systems hardware testing, and top college
                teaching directly to your diploma exam preparation and project submission.
              </p>
            </div>

            {/* Guidance Points */}
            <div className="space-y-2.5 border-t border-brand-border/60 pt-4">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-heading">
                Diploma Exam Success Principles:
              </p>
              <ul className="grid gap-2 sm:grid-cols-2 text-xs text-brand-body">
                {guidancePoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <BookmarkCheck size={14} className="mt-0.5 shrink-0 text-brand-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact Actions Bar */}
            <div className="pt-4 border-t border-brand-border/40 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-brand-muted">
                <span className="font-semibold text-brand-heading">Need 1:1 Guidance or Project Help?</span>
                <p className="text-[11px] text-brand-muted">Direct contact with the instructor</p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={`tel:${BRAND.contact.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-brand-border bg-brand-elevated px-3.5 py-2 text-xs font-semibold text-brand-heading hover:border-brand-primary hover:text-brand-primary transition"
                >
                  <PhoneCall size={13} className="text-brand-primary" />
                  <span>Call {BRAND.contact}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-bold text-emerald-400 hover:bg-emerald-500/20 transition shadow-sm"
                >
                  <MessageCircle size={13} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default StudentGuidanceSection;
