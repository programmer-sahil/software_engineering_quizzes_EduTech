import CareerUpskillingBanner from '../components/CareerUpskillingBanner';
import PageTransition from '../components/PageTransition';
import SubjectsGrid from '../sections/SubjectsGrid';

function SubjectsPage() {
  return (
    <PageTransition>
      <section className="section-shell pt-12">
        <div className="glass rounded-2xl p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Diploma Learning Hub</p>
          <h1 className="mt-3 max-w-4xl font-display text-3xl leading-tight text-white sm:text-5xl">
            Pick a subject and start exam-focused preparation.
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            Start IoT with module-wise syllabus guidance for Diploma 5th Semester. Software Engineering is kept visible
            but disabled for this semester so it can reopen next semester.
          </p>
        </div>
      </section>
      <SubjectsGrid compact />
      <section className="section-shell mt-12">
        <CareerUpskillingBanner variant="landing" />
      </section>
    </PageTransition>
  );
}

export default SubjectsPage;
