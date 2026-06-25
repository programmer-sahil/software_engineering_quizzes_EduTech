import { motion } from 'framer-motion';
import SubjectCard from '../components/SubjectCard';
import { subjects } from '../data/subjects';

function SubjectsGrid({ compact = false }) {
  return (
    <section id="subjects" className={`section-shell scroll-mt-28 ${compact ? 'mt-12' : 'mt-16'}`}>
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Subjects</p>
        <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">Choose Your Diploma Subject</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
          Start with IoT right now. Software Engineering remains visible but disabled for this semester, ready to
          reopen with quiz practice, PYQ patterns, cheat sheets, and teacher-guided revision.
        </p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2">
        {subjects.map((subject, index) => (
          <SubjectCard key={subject.id} subject={subject} delay={index * 0.08} />
        ))}
      </div>
    </section>
  );
}

export default SubjectsGrid;
