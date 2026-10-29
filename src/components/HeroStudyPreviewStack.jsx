import { motion, useReducedMotion } from 'framer-motion';
import {
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  Cpu,
  FileQuestion,
  GraduationCap,
  Sparkles,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

/**
 * HeroStudyPreviewStack Component
 * Premium 3D-Style Floating Educational Learning Dashboard
 * Built with pure CSS perspective, glassmorphism, soft glowing orbs, and SVG accents.
 * Zero Three.js canvas overhead; ultra-fast, accessible, and responsive.
 */
function HeroStudyPreviewStack() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedDemoOption, setSelectedDemoOption] = useState('B'); // Default selected to 'B' (correct)

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none [perspective:1200px]">
      {/* Subtle Depth Accents */}
      <div
        className="pointer-events-none absolute -left-6 -top-6 h-48 w-48 rounded-full bg-cyan-500/10 blur-[60px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-6 top-1/3 h-52 w-52 rounded-full bg-blue-500/10 blur-[60px]"
        aria-hidden="true"
      />

      {/* Layered Floating Stack Container */}
      <div className="relative space-y-4 sm:space-y-5">
        {/* =========================================================================
            CARD 1: Layered Subject Progress Dashboard (Top Float)
            ========================================================================= */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [-3, 3, -3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative transition-transform duration-300 hover:[transform:translateZ(15px)]"
        >
          <div className="rounded-2xl border border-brand-border bg-brand-surface p-5 sm:p-6 shadow-card">
            {/* Subject Header */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-brand-primary/30 bg-brand-primary/10 text-brand-primary">
                  <Cpu size={22} className="text-brand-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-sm sm:text-base font-bold text-brand-heading">
                      Internet of Things
                    </h3>
                    <span className="rounded-full border border-brand-primary/30 bg-brand-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-brand-primary">
                      5th Semester
                    </span>
                  </div>
                  <p className="text-xs text-brand-muted mt-0.5">Computer Science &amp; Technology</p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 rounded-lg border border-brand-border bg-brand-elevated px-2.5 py-1 text-[11px] font-semibold text-brand-body">
                <Zap size={12} className="text-amber-400" /> Active Course
              </span>
            </div>

            {/* Metrics Chips */}
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-brand-border/60 pt-3.5 text-center">
              <div className="rounded-xl border border-brand-border bg-brand-elevated/40 p-2">
                <span className="block font-display text-base font-bold text-brand-heading">6</span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-brand-muted">Units</span>
              </div>
              <div className="rounded-xl border border-brand-border bg-brand-elevated/40 p-2">
                <span className="block font-display text-base font-bold text-brand-primary">57</span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-brand-muted">Topics</span>
              </div>
              <div className="rounded-xl border border-brand-border bg-brand-elevated/40 p-2">
                <span className="block font-display text-base font-bold text-emerald-400">39</span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-brand-muted">Verified PYQs</span>
              </div>
            </div>

            {/* Progress Track */}
            <div className="mt-3.5">
              <div className="flex items-center justify-between text-[11px] text-brand-body mb-1.5">
                <span>Curriculum Readiness</span>
                <span className="font-bold text-brand-primary">Module A • Unit 1 Completed</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-brand-elevated">
                <div className="h-full w-3/4 rounded-full bg-brand-primary" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            CARD 2: Interactive MCQ Practice Preview Card (Center 3D Depth)
            ========================================================================= */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [3, -3, 3] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          className="relative lg:-ml-2 transition-transform duration-300 hover:[transform:translateZ(20px)]"
        >
          <div className="rounded-2xl border border-brand-border bg-brand-surface p-5 sm:p-6 shadow-card">
            {/* Header: Verified PYQ Citation */}
            <div className="flex items-center justify-between gap-2 border-b border-brand-border/60 pb-3">
              <div className="flex items-center gap-2">
                <FileQuestion size={15} className="text-brand-coral" />
                <span className="font-display text-xs font-bold uppercase tracking-wider text-brand-coral">
                  Jan 2026 WBSCTE Exam PYQ
                </span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full border border-brand-coral/40 bg-brand-coral/10 px-2.5 py-0.5 text-[10px] font-bold text-brand-coral">
                <Sparkles size={11} /> Interactive Demo
              </span>
            </div>

            {/* Question Text */}
            <p className="mt-3 text-xs sm:text-sm font-semibold leading-relaxed text-brand-heading">
              A ______ converts an electrical signal into a physical movement or action in an IoT system.
            </p>

            {/* Interactive Options Demo */}
            <div className="mt-3.5 grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setSelectedDemoOption('A')}
                className={`flex items-center justify-between rounded-xl border p-2.5 text-xs transition ${
                  selectedDemoOption === 'A'
                    ? 'border-rose-500/60 bg-rose-500/10 text-rose-300'
                    : 'border-brand-border/60 bg-brand-elevated/40 text-brand-body hover:border-brand-border-hover'
                }`}
              >
                <span className="font-medium">A. Sensor</span>
                {selectedDemoOption === 'A' && <span className="text-[10px] text-rose-400 font-bold">Try again</span>}
              </button>

              <button
                type="button"
                onClick={() => setSelectedDemoOption('B')}
                className={`flex items-center justify-between rounded-xl border p-2.5 text-xs font-bold transition shadow-sm ${
                  selectedDemoOption === 'B'
                    ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/40 shadow-glow-sm'
                    : 'border-brand-border/60 bg-brand-elevated/40 text-brand-body hover:border-brand-border-hover'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <span>B. Actuator</span>
                </span>
                {selectedDemoOption === 'B' ? (
                  <CheckCircle2 size={15} className="text-emerald-400" />
                ) : null}
              </button>
            </div>

            {/* Instant Verified Explanation Snippet */}
            {selectedDemoOption === 'B' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-3 rounded-xl border border-emerald-500/25 bg-emerald-500/5 p-2.5 text-[11px] leading-relaxed text-brand-body"
              >
                <span className="font-bold text-emerald-400">Solution: </span>
                Actuators produce physical motions (motors, relays, valves) in response to controller commands.
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* =========================================================================
            CARD 3: Unit Revision & Micro-Learning Preview (Bottom Float)
            ========================================================================= */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [-3, 3, -3] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          className="relative lg:ml-4 transition-transform duration-300 hover:[transform:translateZ(25px)]"
        >
          <div className="rounded-2xl border border-brand-border bg-brand-surface p-4 sm:p-5 shadow-card">
            <div className="flex items-center justify-between text-xs">
              <span className="inline-flex items-center gap-1.5 font-display font-bold text-brand-heading">
                <BookOpen size={14} className="text-violet-400" /> Unit 5: Rapid Exam Recall
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] text-brand-muted">
                <Clock size={11} /> 1 min review
              </span>
            </div>

            <div className="mt-2.5 flex flex-wrap gap-1.5">
              <span className="rounded-lg border border-brand-border/60 bg-brand-elevated/50 px-2.5 py-1 text-[11px] text-brand-body">
                ATmega328P • 16 MHz
              </span>
              <span className="rounded-lg border border-brand-border/60 bg-brand-elevated/50 px-2.5 py-1 text-[11px] text-brand-body">
                6 PWM Pins (3, 5, 6, 9, 10, 11)
              </span>
              <span className="rounded-lg border border-violet-500/30 bg-violet-500/10 px-2.5 py-1 text-[11px] font-semibold text-violet-300">
                Analog Inputs A0–A5
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroStudyPreviewStack;
