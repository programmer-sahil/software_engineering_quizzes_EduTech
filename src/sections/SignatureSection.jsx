import { motion, useReducedMotion } from 'framer-motion';
import { BRAND } from '../data/units';
import sahilMain from '../../assets/profile/sahil-main.jpg';
import teachingMain from '../../assets/profile/teaching-main.jpg';
import { Card, SectionHeading } from '../components/ui';

const trustHighlights = [
  'Exam-Pattern Question Focus',
  '400+ Students Taught',
  'Industrial Experience',
  'Top Engineering College Teaching Experience',
];

function SignatureSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-shell mt-16 sm:mt-24">
      <Card hover={false} className="p-6 sm:p-10">
        <SectionHeading
          eyebrow="Academic Mentorship"
          title="Meet Your Instructor &amp; Mentor"
          description={`Guided by ${BRAND.madeBy}, ${BRAND.subtitle}. Bringing industrial development practice and college teaching experience directly to your diploma exam preparation.`}
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {/* Instructor Image 1 */}
          <figure className="overflow-hidden rounded-2xl border border-brand-border bg-brand-elevated/40">
            <img
              src={sahilMain}
              alt={`${BRAND.madeBy} - AI Developer and Coding Tutor`}
              loading="lazy"
              className="h-60 sm:h-72 w-full object-cover object-top transition-transform duration-500 hover:scale-102"
            />
            <figcaption className="p-4 text-xs leading-relaxed text-brand-body">
              <span className="font-bold text-brand-heading">{BRAND.madeBy}</span> — Dedicated coding tutor and
              developer passionate about helping diploma students master programming, hardware interfacing, and exams.
            </figcaption>
          </figure>

          {/* Instructor Image 2 */}
          <figure className="overflow-hidden rounded-2xl border border-brand-border bg-brand-elevated/40">
            <img
              src={teachingMain}
              alt={`${BRAND.madeBy} classroom teaching session`}
              loading="lazy"
              className="h-60 sm:h-72 w-full object-cover object-center transition-transform duration-500 hover:scale-102"
            />
            <figcaption className="p-4 text-xs leading-relaxed text-brand-body">
              Practical classroom guidance with project-oriented training, 1:1 doubt-clearing sessions, and career
              upskilling.
            </figcaption>
          </figure>
        </div>

        {/* Credentials Badges */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustHighlights.map((item, index) => (
            <div
              key={item}
              className="rounded-xl border border-brand-border bg-brand-elevated/60 px-4 py-3 text-center text-xs font-semibold text-brand-heading shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

export default SignatureSection;
