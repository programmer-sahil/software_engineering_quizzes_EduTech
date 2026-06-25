import { motion } from 'framer-motion';
import { AppWindow, ArrowRight, Briefcase, Braces, ClipboardCheck, Cpu, Flame, PhoneCall, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../data/units';
import Button from '../components/ui/Button';
import ThreeDBackgroundScene from '../components/ThreeDBackgroundScene';

const techIcons = [
  { title: 'Software Engineering', subtitle: 'Reopens next semester', Icon: Braces },
  { title: 'Internet of Things', subtitle: 'Protocols, Arduino & sensors', Icon: Cpu },
  { title: 'Quiz Practice', subtitle: 'Unit-wise MCQ revision', Icon: ClipboardCheck },
  { title: 'PYQ + Cheat Sheets', subtitle: 'Fast exam pattern prep', Icon: AppWindow },
  { title: 'Career Growth', subtitle: 'Freelancing and IT jobs', Icon: Briefcase },
];

const trustHooks = [
  '99.99% common-question focused prep',
  'Semester exam strategy',
  '3-6 month career roadmap',
  'Freelancing starter guidance',
];

const heroMetrics = [
  {
    title: '99.99%',
    label: 'Common-question focus for semester exam preparation',
    Icon: Trophy,
  },
  {
    title: '3-6 Months',
    label: 'Guided internship, job-readiness, and freelancing roadmap',
    Icon: Flame,
  },
];

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-14 sm:pt-20">
      <ThreeDBackgroundScene />
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="section-shell relative z-10 pb-16 pt-6 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-coral/45 bg-coral/10 px-3 py-1 text-xs font-medium text-coral">
            Get 99.99% common-question focused exam preparation
          </span>

          <h1 className="mt-5 font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Semester Exam Preparation &amp; Career Learning Hub
          </h1>

          <p className="mt-4 text-base font-medium text-cyan-100 sm:text-lg">
            EduTech Diploma Learning Hub for Computer Science &amp; Technology Students
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            Prepare for IoT, quizzes, PYQ patterns, cheat sheets, and high-impact common questions. Software Engineering
            stays listed for next semester while you follow a practical 3-6 month roadmap for internship, job-readiness,
            and freelancing confidence.
          </p>

          <p className="mt-3 text-sm text-slate-300">
            Made by <span className="font-semibold text-accent">{BRAND.madeBy}</span> • {BRAND.subtitle}
          </p>

          <div className="mx-auto mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-2">
            {trustHooks.map((hook, index) => (
              <motion.span
                key={hook}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 + index * 0.06, duration: 0.3 }}
                className="inline-flex rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
              >
                {hook}
              </motion.span>
            ))}
          </div>

          <div className="mx-auto mt-7 grid max-w-3xl gap-3 sm:grid-cols-2">
            {heroMetrics.map(({ title, label, Icon }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.32 + index * 0.08, duration: 0.35 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl border border-accent/25 p-4 text-left shadow-glow"
              >
                <div className="inline-flex rounded-xl border border-accent/35 bg-accent/10 p-2 text-accent">
                  <Icon size={18} />
                </div>
                <p className="mt-3 font-display text-2xl text-white">{title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">{label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/subjects">
              <Button icon={<ArrowRight size={16} />}>Explore Subjects</Button>
            </Link>
            <a href={`tel:${BRAND.contact.replace(/\s+/g, '')}`}>
              <Button
                variant="secondary"
                icon={<PhoneCall size={16} />}
                className="border-accent/50 text-accent hover:bg-accent/10"
              >
                Contact Now: {BRAND.contact}
              </Button>
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {techIcons.map(({ title, subtitle, Icon }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.08, duration: 0.35 }}
                whileHover={{ y: -5, rotateX: 8, rotateY: -8 }}
                className="icon-3d-card glass rounded-xl border border-white/10 p-3 text-left transition-colors hover:border-accent/45"
              >
                <div className="inline-flex rounded-lg border border-accent/35 bg-accent/10 p-2 text-accent">
                  <Icon size={16} />
                </div>
                <p className="mt-2 text-xs font-semibold tracking-wide text-slate-100">{title}</p>
                <p className="mt-1 text-[11px] leading-5 text-slate-300">{subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
