import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  BookOpenText,
  Clock,
  Cpu,
  FileCheck2,
  FileQuestion,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Card, SectionHeading } from '../components/ui';
import HeroStudyPreviewStack from '../components/HeroStudyPreviewStack';

function ExamPrepPreviewSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-shell mt-16 sm:mt-24">
      <SectionHeading
        eyebrow="Academic Exam Preparation"
        title="Interactive Study Tools for Semester Exams"
        description="Module-wise syllabus alignment, verified previous-year question patterns, concise model answers, and rapid-recall cheat sheets."
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center">
        {/* Left Column: 3 Structured Tools */}
        <div className="space-y-4 lg:col-span-6">
          {/* Tool 1: PYQ MCQs */}
          <div className="rounded-2xl border border-brand-border bg-brand-surface p-5 shadow-card">
            <div className="flex items-start gap-3.5">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-brand-primary/30 bg-brand-primary/10 text-brand-primary">
                <FileQuestion size={20} />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-brand-heading">
                  Verified Past-Paper MCQs (90 Questions)
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-brand-body leading-relaxed">
                  Practice questions verified from 2023, 2024, and 2026 exam sessions. Includes Practice Mode with instant explanations and a Timed Exam Simulator.
                </p>
              </div>
            </div>
          </div>

          {/* Tool 2: Concise Long Questions */}
          <div className="rounded-2xl border border-brand-border bg-brand-surface p-5 shadow-card">
            <div className="flex items-start gap-3.5">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-brand-coral/30 bg-brand-coral/10 text-brand-coral">
                <HelpCircle size={20} />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-brand-heading">
                  39 Exam-Ready Long Answers
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-brand-body leading-relaxed">
                  Direct definitions, bulleted scoring points, and visual flowcharts for 4-mark and 6-mark diploma questions, with Copy Answer and Mark Revised controls.
                </p>
              </div>
            </div>
          </div>

          {/* Tool 3: Revision Cheat Sheets */}
          <div className="rounded-2xl border border-brand-border bg-brand-surface p-5 shadow-card">
            <div className="flex items-start gap-3.5">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                <BookOpenText size={20} />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-brand-heading">
                  Micro-Revision Cheat Sheets
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-brand-body leading-relaxed">
                  32 structured revision cards featuring hardware pinout diagrams, protocol comparison tables (MQTT vs CoAP), and practical C++ Arduino code.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Link to="/iot">
              <Button variant="primary" icon={<ArrowRight size={16} />}>
                Start IoT Preparation (5th Sem)
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column: Interactive Study Stack Visual Preview */}
        <div className="lg:col-span-6">
          <HeroStudyPreviewStack />
        </div>
      </div>
    </section>
  );
}

export default ExamPrepPreviewSection;

