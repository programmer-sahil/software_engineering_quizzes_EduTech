import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Compass,
  FileQuestion,
  FileText,
  PlaySquare,
  Sparkles,
} from 'lucide-react';
import { Card, SectionHeading } from '../components/ui';

function QuickActionsSection() {
  const [lastStudied, setLastStudied] = useState(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('edutech_last_unit');
      if (stored) {
        setLastStudied(JSON.parse(stored));
      }
    } catch {
      setLastStudied(null);
    }
  }, []);

  const actions = [
    lastStudied
      ? {
          title: `Continue Studying`,
          subtitle: `${lastStudied.subjectName || 'IoT'} • Unit ${lastStudied.unitId || '1'}`,
          icon: Sparkles,
          route: lastStudied.route || '/iot/unit/1',
          highlight: true,
        }
      : {
          title: 'Choose a Subject',
          subtitle: 'Diploma 5th Sem IoT or 4th Sem preview',
          icon: Compass,
          route: '/subjects',
          highlight: true,
        },
    {
      title: 'Explore Subjects',
      subtitle: 'View course aims, hours & modules',
      icon: BookOpen,
      route: '/subjects',
    },
    {
      title: 'Practice MCQs',
      subtitle: 'Self-assessment objective quizzes',
      icon: FileQuestion,
      route: '/practice?type=practice',
    },
    {
      title: 'PYQ Practice',
      subtitle: 'Jan 2026, Dec 2024 & Mar 2023 questions',
      icon: FileQuestion,
      route: '/practice?type=pyq',
    },
    {
      title: 'IoT Study Units',
      subtitle: '6 units with syllabus, notes & cheat sheets',
      icon: BookOpen,
      route: '/iot',
    },
    {
      title: 'Watch Reels',
      subtitle: '60-second concept learning videos',
      icon: PlaySquare,
      route: '/reels',
    },
  ];

  return (
    <section className="section-shell mt-12 sm:mt-16">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Quick Shortcuts"
          title="Jump Straight Into Learning"
          description="Direct access to authentic questions, syllabus modules, and revision tools."
        />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {actions.map((act, index) => {
          const Icon = act.icon;
          const isHighlight = act.highlight;

          return (
            <Link key={act.title} to={act.route} className="group outline-none">
              <Card
                delay={index * 0.05}
                className={`h-full p-5 transition-all ${
                  isHighlight
                    ? 'border-brand-primary/40 bg-brand-primary/5 shadow-glow'
                    : 'border-brand-border hover:border-brand-primary/40'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-transform group-hover:scale-105 ${
                      isHighlight
                        ? 'bg-gradient-to-br from-brand-primary to-brand-accent text-slate-950 font-bold'
                        : 'border border-brand-border bg-brand-elevated text-brand-primary'
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-base font-bold text-brand-heading group-hover:text-brand-primary transition-colors">
                      {act.title}
                    </h3>
                    <p className="mt-1 text-xs text-brand-body leading-relaxed">
                      {act.subtitle}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default QuickActionsSection;

