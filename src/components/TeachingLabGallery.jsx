import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Camera,
  CheckCircle2,
  Expand,
  GraduationCap,
  Sparkles,
  Users,
  X,
} from 'lucide-react';

import teaching1 from '../../assets/teaching/teaching1.jpg';
import teaching2 from '../../assets/teaching/teaching2.jpg';
import teaching3 from '../../assets/teaching/teaching3.jpg';
import teaching4 from '../../assets/teaching/teaching4.jpg';
import teaching5 from '../../assets/teaching/teaching5.jpg';
import teaching6 from '../../assets/teaching/teaching6.jpg';
import teaching7 from '../../assets/teaching/teaching7.jpg';
import teaching8 from '../../assets/teaching/teaching8.jpg';

const TEACHING_PHOTOS = [
  {
    id: 't1',
    src: teaching8,
    title: 'Live Whiteboard Concept Breakdown & Syllabus Deep-Dive',
    tag: 'Whiteboard Lecture',
    description: 'Interactive outdoor whiteboard teaching session breaking down algorithmic flowcharts, mathematical logic, and diploma syllabus concepts.',
  },
  {
    id: 't2',
    src: teaching2,
    title: '1:1 Student Mentorship & Academic Guidance',
    tag: '1:1 Mentorship',
    description: 'Personalized guidance explaining application flow, database design, and step-by-step problem solving.',
  },
  {
    id: 't3',
    src: teaching3,
    title: 'Classroom Lecture & Semester Exam Preparation',
    tag: 'Classroom Session',
    description: 'Structured classroom presentation for polytechnic semester exams with live question-and-answer discussions.',
  },
  {
    id: 't4',
    src: teaching5,
    title: 'Interactive Batch Discussion & Doubt Clearing',
    tag: 'Batch Discussion',
    description: 'Collaborative student sessions reviewing previous-year questions, model answers, and mock viva defenses.',
  },
  {
    id: 't5',
    src: teaching6,
    title: 'Collaborative Group Study & Problem Solving',
    tag: 'Group Study',
    description: 'Students working together on logic building, debugging programming assignments, and understanding algorithms.',
  },
  {
    id: 't6',
    src: teaching7,
    title: 'Practical Project Review & Guidance',
    tag: 'Project Guidance',
    description: 'Comprehensive review of academic project deliverables, reports, and presentation slides before college submission deadlines.',
  },
];

function TeachingLabGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="space-y-6">
      {/* Responsive HD Photo Grid (No Overlap, Crisp Fitting) */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TEACHING_PHOTOS.map((photo, idx) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-brand-border bg-brand-surface shadow-card transition-all duration-300 hover:border-brand-primary/50 hover:shadow-glow-sm cursor-pointer"
          >
            {/* HD Image Shell (Aspect 4/3, Crisp Fitting, Subtle Hover Zoom) */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-106"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />

              {/* Tag Badge */}
              <div className="absolute left-3 top-3 z-10">
                <span className="inline-flex items-center gap-1 rounded-lg border border-white/20 bg-black/70 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                  <Sparkles size={11} className="text-brand-primary" />
                  <span>{photo.tag}</span>
                </span>
              </div>

              {/* Expand Icon */}
              <div className="absolute right-3 top-3 z-10 grid h-7 w-7 place-items-center rounded-lg bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Expand size={13} />
              </div>
            </div>

            {/* Photo Caption */}
            <div className="p-4 sm:p-5">
              <h4 className="font-display text-sm sm:text-base font-bold text-brand-heading group-hover:text-brand-primary transition-colors">
                {photo.title}
              </h4>
              <p className="mt-1.5 text-xs text-brand-body leading-relaxed line-clamp-2">
                {photo.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen HD Photo Preview Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 max-w-4xl w-full overflow-hidden rounded-3xl border border-brand-border bg-brand-surface shadow-2xl"
            >
              <div className="relative max-h-[75vh] w-full overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />

                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  aria-label="Close photo"
                  className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-xl bg-black/70 text-white backdrop-blur-md hover:bg-black transition cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-5 sm:p-6 bg-brand-surface flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                    {selectedPhoto.tag}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold text-brand-heading">
                    {selectedPhoto.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-brand-body">
                    {selectedPhoto.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  className="rounded-xl border border-brand-border bg-brand-elevated px-4 py-2 text-xs font-semibold text-brand-heading hover:bg-brand-elevated/80 transition"
                >
                  Close Photo
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TeachingLabGallery;
