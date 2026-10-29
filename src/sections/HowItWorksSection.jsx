import { BookOpen, CheckCircle, FileQuestion, HelpCircle, Layers, RefreshCw } from 'lucide-react';
import { Card, SectionHeading } from '../components/ui';

const steps = [
  {
    step: '01',
    title: 'Choose Subject',
    description: 'Select your diploma semester subject with complete council syllabus alignment.',
    icon: Layers,
  },
  {
    step: '02',
    title: 'Select Unit',
    description: 'Browse module hours, marks weightage, and official topic breakdowns.',
    icon: BookOpen,
  },
  {
    step: '03',
    title: 'Learn + Practice',
    description: 'Review structured lecture notes and solve verified previous-year MCQs.',
    icon: FileQuestion,
  },
  {
    step: '04',
    title: 'Review Mistakes',
    description: 'Study detailed answer explanations and retain key concepts with cheat sheets.',
    icon: RefreshCw,
  },
];

function HowItWorksSection() {
  return (
    <section className="section-shell mt-16 sm:mt-24">
      <SectionHeading
        align="center"
        eyebrow="Methodology"
        title="How to Prepare with EduTech"
        description="A 4-step structured revision cycle designed for clarity, retention, and maximum exam confidence."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((item, index) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.step}
              delay={index * 0.06}
              className="p-6 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-brand-primary/30 bg-brand-primary/10 text-brand-primary">
                    <Icon size={20} />
                  </div>
                  <span className="font-display text-2xl font-black text-brand-muted/40">
                    {item.step}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-bold text-brand-heading">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-brand-body">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 h-1 w-8 rounded-full bg-brand-primary/40" />
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default HowItWorksSection;

