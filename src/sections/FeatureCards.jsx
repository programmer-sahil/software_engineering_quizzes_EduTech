import { BookOpenText, ClipboardList, FileQuestion, GraduationCap, Layers, Lightbulb } from 'lucide-react';
import { Card, SectionHeading } from '../components/ui';

const features = [
  {
    title: 'Unit-Wise Syllabus',
    description: 'Focus on one unit at a time with verified syllabus topics, marks, and module weights.',
    icon: Layers,
  },
  {
    title: 'Previous Year Questions',
    description: 'Practice diploma exam pattern MCQs from Jan 2026, Dec 2024, and Mar 2023 with verified keys.',
    icon: FileQuestion,
  },
  {
    title: 'Fast Recall Cheat Sheets',
    description: 'Smart revision cards with essential definitions, formulas, and 5-mark short note summaries.',
    icon: BookOpenText,
  },
  {
    title: 'Exam Flow Diagrams',
    description: 'Visual step diagrams (Sensors → Actuators → Network → Cloud) for high-scoring long answers.',
    icon: ClipboardList,
  },
  {
    title: '1:1 Doubt Mentoring',
    description: 'Get personal academic clarity and project advice directly from an experienced tutor.',
    icon: GraduationCap,
  },
  {
    title: 'Final-Year Project Support',
    description: 'End-to-end guidance for major projects, documentation, PPTs, and technical viva preparation.',
    icon: Lightbulb,
  },
];

function FeatureCards() {
  return (
    <section className="section-shell mt-16 sm:mt-24">
      <SectionHeading
        eyebrow="Study Features"
        title="Everything You Need for Diploma Success"
        description="Curated tools and resources structured specifically for diploma computer science examination standards."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <Card key={feature.title} delay={index * 0.05} className="p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-primary/30 bg-brand-primary/10 text-brand-primary">
                <Icon size={20} />
              </div>
              <h3 className="font-display text-lg font-bold text-brand-heading">
                {feature.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-brand-body">
                {feature.description}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default FeatureCards;
