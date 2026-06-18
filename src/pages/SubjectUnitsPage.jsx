import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import CareerUpskillingBanner from '../components/CareerUpskillingBanner';
import PageTransition from '../components/PageTransition';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';
import { findSubject } from '../data/subjects';
import { getServicesWhatsAppLink } from '../data/services';
import UnitsGrid from '../sections/UnitsGrid';

function SubjectUnitsPage({ subjectId }) {
  const subject = findSubject(subjectId);

  if (!subject) {
    return (
      <PageTransition className="section-shell py-16">
        <GlassCard className="p-8 text-center">
          <h1 className="font-display text-3xl text-white">Subject Not Found</h1>
          <p className="mt-3 text-slate-300">Please select one of the available Diploma subjects.</p>
          <Link to="/subjects" className="mt-6 inline-block">
            <Button>View Subjects</Button>
          </Link>
        </GlassCard>
      </PageTransition>
    );
  }

  const projectCta =
    subject.id === 'iot'
      ? 'Need an IoT final-year project? Get complete project, report, PPT, and viva QA guidance.'
      : 'Need a full-stack or software engineering project? Get complete project development and presentation support.';

  return (
    <PageTransition>
      <section className="section-shell pt-12">
        <div className="glass rounded-2xl p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              {subject.semester}
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-100">
              {subject.stream}
            </span>
          </div>
          <h1 className="mt-4 font-display text-3xl text-white sm:text-5xl">{subject.name}</h1>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base">{subject.description}</p>

          {subject.aim ? (
            <div className="mt-5 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-xl border border-accent/25 bg-accent/10 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-accent">Aim</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">{subject.aim}</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-100">Course Objectives</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{subject.courseObjectives}</p>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <UnitsGrid
        units={subject.units}
        eyebrow={subject.eyebrow}
        title={subject.unitGridTitle}
        description={subject.unitGridDescription}
        basePath={subject.unitRouteBase}
      />

      <section className="section-shell mt-12">
        <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/12 via-sky-500/10 to-coral/10 p-5 sm:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-accent">Project Guidance</p>
              <p className="mt-2 max-w-3xl font-display text-xl leading-tight text-white">{projectCta}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/services">
                <Button variant="secondary">Explore Services</Button>
              </Link>
              <a href={getServicesWhatsAppLink()} target="_blank" rel="noreferrer">
                <Button icon={<MessageCircle size={16} />}>WhatsApp Now</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell mt-12">
        <CareerUpskillingBanner variant="landing" />
      </section>
    </PageTransition>
  );
}

export default SubjectUnitsPage;
