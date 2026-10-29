import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  Cpu,
  FileCheck,
  FileText,
  Layers,
  Lock,
  MessageCircle,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import UnitCard from '../components/UnitCard';
import { Card, SectionHeading, Badge, Button } from '../components/ui';
import { getSubject, getSubjectCounts } from '../content';
import { getServicesWhatsAppLink } from '../data/services';
import project1 from '../../assets/projects/project1.jpg';
import teaching8 from '../../assets/teaching/teaching8.jpg';

const seUnitCheatSheetsSummary = [
  { unitId: '1', title: 'Unit 1: Introduction to Software Engineering', count: 4, focus: 'Layered technology, CMMI, process frameworks' },
  { unitId: '2', title: 'Unit 2: Requirements Analysis & Specification', count: 8, focus: 'Elicitation, DFD, OOA, behavioral modeling' },
  { unitId: '3', title: 'Unit 3: Software Design & Testing Strategy', count: 9, focus: 'Architectural design, verification, unit & system test' },
  { unitId: '4', title: 'Unit 4: Project Management & Risk Planning', count: 8, focus: 'WBS, estimation, risk mitigation, configuration' },
  { unitId: '5', title: 'Unit 5: Quality Assurance & COCOMO II', count: 8, focus: 'ISO 9001, Six Sigma, cost models, reliability' },
];

function SubjectUnitsPage({ subjectId = 'iot' }) {
  const subject = getSubject(subjectId);

  // Fallback for nonexistent subjects
  if (!subject) {
    return (
      <PageTransition className="section-shell py-16">
        <Card hover={false} className="p-8 text-center max-w-xl mx-auto">
          <h1 className="font-display text-2xl font-bold text-brand-heading">Subject Not Found</h1>
          <p className="mt-2 text-sm text-brand-body">
            Please return to the subjects catalog to pick an available diploma curriculum.
          </p>
          <div className="mt-6">
            <Link to="/subjects">
              <Button variant="primary" icon={<ArrowLeft size={16} />}>
                View Subjects
              </Button>
            </Link>
          </div>
        </Card>
      </PageTransition>
    );
  }

  // =========================================================================
  // Software Engineering (Disabled Subject View)
  // Keeps SE visible inside Subjects, locked with "Reopens Next Semester".
  // Cheat sheets are located inside this section and strictly locked.
  // =========================================================================
  if (subject.disabled) {
    return (
      <PageTransition className="section-shell py-12 sm:py-16">
        <div className="space-y-10">
          {/* Top Lockout Hero */}
          <Card hover={false} className="p-6 sm:p-10 border-brand-coral/30 bg-gradient-to-br from-brand-surface via-brand-surface to-brand-coral/5 shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-border/60 pb-4">
              <div className="flex items-center gap-2">
                <Badge variant="locked" icon={<Lock size={12} />}>
                  {subject.disabledLabel || 'Reopens Next Semester'}
                </Badge>
                <span className="rounded-full border border-brand-border bg-brand-elevated px-3 py-1 text-xs font-semibold text-brand-muted">
                  {subject.semester} • 4th Semester
                </span>
              </div>

              <Link to="/subjects">
                <Button variant="ghost" size="sm" icon={<ArrowLeft size={15} />}>
                  All Subjects
                </Button>
              </Link>
            </div>

            <div className="mt-6">
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-heading">
                {subject.name || subject.title}
              </h1>
              <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-brand-body">
                {subject.disabledMessage ||
                  'Software Engineering is temporarily disabled for this semester. All study notes, MCQs, and cheat sheets remain intact and will reopen next semester.'}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/iot">
                <Button variant="primary" icon={<Cpu size={16} />} className="shadow-glow">
                  Continue With IoT (Active 5th Sem)
                </Button>
              </Link>
              <Link to="/subjects">
                <Button variant="secondary">
                  Browse Subjects
                </Button>
              </Link>
            </div>
          </Card>

          {/* Section 1: Software Engineering Units (Visibly Locked) */}
          <section>
            <SectionHeading
              eyebrow="Curriculum Structure"
              title="Software Engineering Syllabus Units"
              description="5 units covering core SDLC models, requirements engineering, testing, project planning, and metrics."
            />

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {subject.units.map((unit) => (
                <Card
                  key={unit.id}
                  hover={false}
                  className="p-5 border-brand-border/60 bg-brand-surface/60 opacity-80"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-md border border-brand-border bg-brand-elevated px-2 py-0.5 text-xs font-semibold text-brand-muted">
                      Unit {unit.id}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-coral">
                      <Lock size={11} /> Locked
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold text-brand-heading">
                    {unit.title}
                  </h3>
                  <p className="mt-2 text-xs text-brand-body line-clamp-2">
                    {unit.description || 'Comprehensive diploma syllabus unit.'}
                  </p>
                  <div className="mt-4 border-t border-brand-border/40 pt-3 flex items-center justify-between text-[11px] text-brand-muted">
                    <span>Reopens next semester</span>
                    <span className="font-semibold text-brand-muted">Material Preserved</span>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Section 2: Software Engineering Cheat Sheets (Located Here & Locked) */}
          <section id="cheat-sheets">
            <SectionHeading
              eyebrow="Rapid Revision"
              title="Software Engineering Cheat Sheets"
              description="37 exam cheat sheets are safely preserved in this section and will unlock next semester."
            />

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {seUnitCheatSheetsSummary.map((sheetGroup) => (
                <Card
                  key={sheetGroup.unitId}
                  hover={false}
                  className="p-5 border-brand-border/60 bg-brand-surface/50 opacity-80"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-muted">
                      <FileText size={13} />
                      <span>{sheetGroup.count} Revision Sheets</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-coral uppercase tracking-wider">
                      <Lock size={10} /> Reopens Next Sem
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-base font-bold text-brand-heading">
                    {sheetGroup.title}
                  </h3>
                  <p className="mt-2 text-xs text-brand-body">
                    {sheetGroup.focus}
                  </p>

                  <div className="mt-4 border-t border-brand-border/40 pt-3">
                    <span className="inline-flex cursor-not-allowed items-center gap-1 text-xs font-semibold text-brand-muted">
                      <Lock size={12} /> Locked for Current Semester
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </PageTransition>
    );
  }

  // =========================================================================
  // Internet of Things (Active Subject View)
  // Shows Units Grid + Dedicated Unit-Wise Cheat Sheets Overview
  // =========================================================================
  const counts = getSubjectCounts(subject.id);

  return (
    <PageTransition>
      {/* Subject Header & Course Objectives */}
      <section className="section-shell pt-10 sm:pt-14">
        <Card hover={false} className="p-6 sm:p-10 border-brand-primary/35 shadow-card">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="primary" icon={<Cpu size={12} />}>
                {subject.semester}
              </Badge>
              <span className="rounded-full border border-brand-border bg-brand-elevated px-3 py-1 text-xs font-semibold text-brand-body">
                {subject.stream}
              </span>
            </div>

            <Link to="/subjects">
              <Button variant="ghost" size="sm" icon={<ArrowLeft size={15} />}>
                All Subjects
              </Button>
            </Link>
          </div>

          <h1 className="mt-5 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-brand-heading">
            {subject.name || subject.title}
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-brand-body sm:text-base">
            {subject.description}
          </p>

          {/* Official Aim and Course Objectives from Syllabus */}
          {subject.aim || subject.courseObjectives ? (
            <div className="mt-6 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
              {subject.aim ? (
                <div className="rounded-2xl border border-brand-primary/30 bg-brand-primary/5 p-4 sm:p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                    Course Aim
                  </p>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-brand-heading font-medium">
                    {subject.aim}
                  </p>
                </div>
              ) : null}

              {subject.courseObjectives ? (
                <div className="rounded-2xl border border-brand-border bg-brand-elevated/40 p-4 sm:p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-muted">
                    Course Objectives
                  </p>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-brand-body">
                    {subject.courseObjectives}
                  </p>
                </div>
              ) : null}
            </div>
          ) : null}

          {/* Live Summary Bar */}
          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-brand-border pt-4 text-xs font-semibold text-brand-muted">
            <span>{counts.totalUnits} Units Configured</span>
            <span>•</span>
            <span>{counts.totalHours} Total Hours</span>
            <span>•</span>
            <span>{counts.totalMarks} Total Marks</span>
            <span>•</span>
            <span className="text-brand-coral font-bold">{counts.totalPYQs} Verified PYQs Ready</span>
          </div>
        </Card>
      </section>

      {/* Practical Hardware & Lab Preview Banner */}
      <section className="section-shell mt-8">
        <div className="rounded-3xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-card">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="space-y-3 lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-primary">
                <Cpu size={13} />
                <span>Practical Lab Alignment</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-heading">
                Real Hardware Testing &amp; Sensor Telemetry
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-brand-body">
                IoT is fundamentally a hardware-software discipline. In Unit 5 (Arduino), you master ATmega328P pinouts,
                PWM channels, and analog sensor interfacing with real breadboard circuits, relays, and MQTT telemetry.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
                <span className="rounded-lg border border-brand-border bg-brand-elevated px-2.5 py-1 text-brand-heading">
                  ATmega328P Microcontroller
                </span>
                <span className="rounded-lg border border-brand-border bg-brand-elevated px-2.5 py-1 text-brand-heading">
                  10-Bit ADC Voltage Sampling
                </span>
                <span className="rounded-lg border border-brand-border bg-brand-elevated px-2.5 py-1 text-brand-heading">
                  Relay &amp; Motor Actuation
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
              <figure className="group relative overflow-hidden rounded-2xl border border-brand-border bg-slate-950 aspect-[4/3]">
                <img
                  src={project1}
                  alt="IoT Hardware Breadboard Setup with Sensors"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <figcaption className="absolute bottom-2 left-2 right-2 text-[10px] font-bold text-white">
                  Sensor Interfacing Circuit
                </figcaption>
              </figure>

              <figure className="group relative overflow-hidden rounded-2xl border border-brand-border bg-slate-950 aspect-[4/3]">
                <img
                  src={teaching8}
                  alt="Practical Embedded Hardware Lab Session"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <figcaption className="absolute bottom-2 left-2 right-2 text-[10px] font-bold text-white">
                  Embedded Systems Lab
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Units Grid */}
      <section id="units" className="section-shell mt-12 sm:mt-16 scroll-mt-28">
        <SectionHeading
          eyebrow={subject.eyebrow || 'Units'}
          title={subject.unitGridTitle || `Choose Your ${subject.shortTitle || 'Subject'} Unit`}
          description={
            subject.unitGridDescription ||
            'Study module-wise topics with syllabus summaries, marks, hours, and verified PYQ patterns.'
          }
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subject.units.map((unit, index) => (
            <UnitCard
              key={unit.id}
              unit={unit}
              delay={index * 0.06}
              basePath={subject.unitRouteBase || '/iot/unit'}
            />
          ))}
        </div>
      </section>

      {/* Section 2: Unit-Wise Cheat Sheets Overview (Step 4 Requirement) */}
      <section id="cheat-sheets" className="section-shell mt-14 sm:mt-20 scroll-mt-28">
        <SectionHeading
          eyebrow="Rapid Recall"
          title="Unit-Wise Exam Cheat Sheets"
          description="Access 1-minute recall sheets, hardware pinouts, and key definitions organized unit-by-unit."
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subject.units.map((unit) => (
            <Card
              key={unit.id}
              className="p-5 sm:p-6 flex flex-col justify-between border-brand-border/60 hover:border-brand-primary/50 transition"
            >
              <div>
                <div className="flex items-center justify-between border-b border-brand-border/40 pb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary">
                    <FileText size={13} />
                    <span>Unit {unit.id} Cheat Sheets</span>
                  </span>
                  <span className="text-[11px] font-semibold text-brand-muted">
                    Module {unit.module}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-base font-bold text-brand-heading">
                  {unit.title}
                </h3>
                <p className="mt-2 text-xs text-brand-body leading-relaxed line-clamp-2">
                  {unit.summary || unit.description}
                </p>

                {/* Topics preview */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {unit.topics?.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded bg-brand-elevated px-2 py-0.5 text-[10px] text-brand-muted"
                    >
                      {t}
                    </span>
                  ))}
                  {unit.topics?.length > 3 && (
                    <span className="text-[10px] text-brand-muted self-center">
                      +{unit.topics.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button: Directly routes to Subjects -> IoT -> Unit X -> Cheat Sheets */}
              <div className="mt-5 border-t border-brand-border/40 pt-3">
                <Link
                  to={`/iot/unit/${unit.id}?tab=cheat-sheet`}
                  className="w-full inline-block"
                >
                  <Button
                    variant="secondary"
                    size="sm"
                    icon={<ArrowRight size={14} />}
                    className="w-full text-xs font-semibold hover:border-brand-primary/50"
                  >
                    Open Unit {unit.id} Cheat Sheets
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 3: Final-Year Project Support Banner */}
      <section className="section-shell mt-14 sm:mt-20 mb-16">
        <Card hover={false} className="p-6 sm:p-8 border-brand-primary/30 bg-gradient-to-br from-brand-primary/10 via-brand-surface to-brand-elevated">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                Final-Year Academic Projects
              </p>
              <h2 className="mt-1 font-display text-xl sm:text-2xl font-bold text-brand-heading">
                Building an IoT Final-Year Project?
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-brand-body leading-relaxed">
                Get full guidance on Arduino hardware interfacing, sensor selection, circuit design, report writing,
                PPT presentations, and viva question-and-answer preparation.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <a href={getServicesWhatsAppLink()} target="_blank" rel="noreferrer">
                <Button variant="primary" icon={<MessageCircle size={16} />}>
                  WhatsApp Project Support
                </Button>
              </a>
              <Link to="/services">
                <Button variant="secondary">
                  Explore Project Ideas
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </section>
    </PageTransition>
  );
}

export default SubjectUnitsPage;
