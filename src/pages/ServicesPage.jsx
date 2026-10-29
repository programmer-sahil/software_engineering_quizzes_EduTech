import { useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Cpu,
  Database,
  ExternalLink,
  Film,
  GraduationCap,
  MessageCircle,
  MonitorCog,
  Network,
  PhoneCall,
  Sparkles,
  Users,
  Video,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import FinalYearProjectsSection from '../sections/FinalYearProjectsSection';
import JobTrainingSection from '../sections/JobTrainingSection';
import TeachingLabGallery from '../components/TeachingLabGallery';
import ReelModal from '../components/ReelModal';
import {
  getServicesWhatsAppLink,
  projectDomains,
  servicesContact,
  whyProjectsMatter,
} from '../data/services';
import {
  getPublishedMarkdownReels,
  OFFICIAL_INSTAGRAM_PROFILE,
} from '../content/reelsLoader';

import project2 from '../../assets/projects/project2.jpg';
import sahilMain from '../../assets/profile/sahil-main.jpg';

const heroBadges = [
  'Final-Year Major Projects',
  'Full-Stack Web Development',
  'IoT & Arduino Prototypes',
  'Data Science & ML Models',
  'College Report + PPT',
  'Technical Viva Q&A Prep',
  '1:1 Internship Training',
];

function ServicesPage() {
  const [activeModalReel, setActiveModalReel] = useState(null);

  // Get project demonstration reels (AI, Programming, Web Dev, Automation)
  const demoReels = getPublishedMarkdownReels().slice(0, 4);

  return (
    <PageTransition className="min-h-screen py-10 sm:py-16">
      {/* 1. HERO SECTION WITH HD VISUAL HERO BANNER */}
      <section className="section-shell">
        <div className="relative overflow-hidden rounded-3xl border border-brand-border bg-brand-surface p-6 sm:p-10 lg:p-12 shadow-card">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Headline & Value Proposition */}
            <div className="space-y-5 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-pink-400">
                <Sparkles size={13} />
                <span>Premium Academic Guidance &amp; Career Training</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-brand-heading leading-[1.12]">
                Project Development, Training &amp; Career Guidance
              </h1>

              <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-brand-body">
                Get complete guidance for final-year major projects, full-stack web applications, IoT embedded systems,
                machine learning dashboards, IEEE-format reports, presentation slide decks, and 1:1 technical viva defense.
              </p>

              {/* Service Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {heroBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-lg border border-brand-border bg-brand-elevated/70 px-2.5 py-1 text-xs font-semibold text-brand-heading"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Primary Consultation Actions */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={getServicesWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-glow hover:bg-emerald-500 transition"
                >
                  <MessageCircle size={17} />
                  <span>Consult on WhatsApp</span>
                </a>

                <a
                  href={`tel:${servicesContact.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-border bg-brand-elevated px-5 py-3 text-sm font-bold text-brand-heading hover:border-brand-primary transition"
                >
                  <PhoneCall size={16} className="text-brand-primary" />
                  <span>Call: {servicesContact.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: HD Visual Showcase Banner (No Overlap, High Definition) */}
            <div className="lg:col-span-5">
              <div className="group relative overflow-hidden rounded-3xl border border-brand-border/80 bg-slate-950 shadow-card aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={project2}
                  alt="Full-Stack and IoT Project Development"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 backdrop-blur-md">
                    <CheckCircle2 size={12} /> 100% Submission Ready
                  </span>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 z-10 rounded-2xl border border-white/10 bg-black/60 p-4 text-white backdrop-blur-md">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-brand-primary">
                    Comprehensive Deliverables
                  </p>
                  <p className="mt-1 font-display text-sm font-bold text-white">
                    Source Code • IEEE College Report • PPT • Viva Q&amp;A
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-300">
                    Built for Diploma CST, IT, ECE &amp; B.Tech students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAJOR FINAL-YEAR PROJECTS SECTION (WITH 6 HD PROJECT SHOWCASE CARDS) */}
      <FinalYearProjectsSection />

      {/* 3. REAL CLASSROOM & PRACTICAL LAB GUIDANCE GALLERY (8 HD PHOTOS) */}
      <section className="section-shell mt-16 sm:mt-24">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-brand-border/60 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-primary">
              <Users size={13} />
              <span>Real Mentorship Atmosphere</span>
            </div>
            <h2 className="mt-3 font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-brand-heading">
              Practical Lab &amp; Classroom Sessions
            </h2>
            <p className="mt-2 max-w-3xl text-sm sm:text-base leading-relaxed text-brand-body">
              Explore how students learn programming, assemble microcontroller circuits, debug code, and rehearse
              technical project presentations under expert guidance.
            </p>
          </div>

          <a
            href={getServicesWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-500 transition"
          >
            <MessageCircle size={15} />
            <span>Join Next Practical Batch</span>
          </a>
        </div>

        {/* HD Teaching Gallery Component */}
        <TeachingLabGallery />
      </section>

      {/* 4. CODE SCHOLAR AI VIDEO DEMONSTRATIONS */}
      <section className="section-shell mt-16 sm:mt-24">
        <div className="rounded-3xl border border-brand-border bg-brand-surface p-6 sm:p-10 shadow-card">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-brand-border/60 pb-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-pink-400">
                <Video size={13} />
                <span>Watch Video Demonstrations</span>
              </div>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-heading">
                Project &amp; Technology Micro-Lessons
              </h2>
              <p className="mt-1.5 max-w-2xl text-xs sm:text-sm leading-relaxed text-brand-body">
                Watch concise video lessons explaining software architecture, artificial intelligence, and hardware
                interfacing from Code Scholar AI.
              </p>
            </div>

            <a
              href={OFFICIAL_INSTAGRAM_PROFILE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:opacity-95 transition"
            >
              <span>Follow @code_scholar_ai</span>
              <ExternalLink size={13} />
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {demoReels.map((reel) => (
              <div
                key={reel.id}
                onClick={() => setActiveModalReel(reel)}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-brand-border bg-brand-elevated/40 p-4 transition-all duration-300 hover:border-brand-primary/50 hover:bg-brand-elevated/80 cursor-pointer"
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
                    <span className="text-[10px] text-brand-muted font-semibold">60s Demo</span>
                  </div>

                  <h3 className="mt-3 font-display text-sm font-bold text-brand-heading line-clamp-2 group-hover:text-brand-primary transition-colors">
                    {reel.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-brand-muted line-clamp-2 leading-relaxed">
                    {reel.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-brand-border/40 flex items-center justify-between text-xs font-semibold text-pink-400">
                  <span>Watch Video Reel</span>
                  <ExternalLink size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY STRONG ACADEMIC PROJECTS MATTER (5 PORTFOLIO VALUE CARDS) */}
      <section className="section-shell mt-16 sm:mt-24">
        <SectionHeading
          eyebrow="Portfolio Value"
          title="Why Strong Projects Define Your Career"
          description="Academic projects are not only for exam marks. A well-built application is your primary showcase asset during job interviews and internship applications."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {whyProjectsMatter.map((item, index) => (
            <Card key={item.title} className="p-5 flex flex-col justify-between border-brand-border">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                  Advantage #{index + 1}
                </span>
                <h3 className="mt-2 font-display text-base font-bold text-brand-heading">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-brand-body">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 6. 1:1 INTERNSHIP & JOB PREPARATION */}
      <JobTrainingSection />

      {/* 7. BOTTOM DIRECT BOOKING CTA */}
      <section className="section-shell mt-16 sm:mt-24">
        <div className="rounded-3xl border border-brand-primary/40 bg-gradient-to-br from-brand-surface via-brand-surface to-brand-primary/10 p-8 sm:p-12 shadow-card text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-primary">
                <Sparkles size={13} /> Direct Mentor Booking
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-brand-heading">
                Ready to Build Your Major Project?
              </h2>
              <p className="text-xs sm:text-base text-brand-body leading-relaxed">
                Send your semester, preferred domain, project title, and submission deadline to receive immediate
                consultation, architecture diagrams, and custom timeline planning.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={getServicesWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-glow hover:bg-emerald-500 transition"
              >
                <MessageCircle size={18} />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href={`tel:${servicesContact.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-border bg-brand-elevated px-5 py-3.5 text-xs sm:text-sm font-bold text-brand-heading hover:border-brand-primary transition"
              >
                <PhoneCall size={16} className="text-brand-primary" />
                <span>{servicesContact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      <ReelModal
        reel={activeModalReel}
        isOpen={Boolean(activeModalReel)}
        onClose={() => setActiveModalReel(null)}
      />
    </PageTransition>
  );
}

export default ServicesPage;
