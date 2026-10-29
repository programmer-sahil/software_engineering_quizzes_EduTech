import {
  Briefcase,
  CheckCircle2,
  FileCheck2,
  GraduationCap,
  MessageCircle,
  PhoneCall,
  Sparkles,
  UserRoundCheck,
} from 'lucide-react';
import Button from '../components/ui/Button';
import { getServicesWhatsAppLink, servicesContact, trainingServices } from '../data/services';
import sahilMain from '../../assets/profile/sahil-main.jpg';
import teachingMain from '../../assets/profile/teaching-main.jpg';

function JobTrainingSection() {
  return (
    <section className="section-shell mt-16 sm:mt-24">
      <div className="rounded-3xl border border-brand-border bg-brand-surface p-6 sm:p-10 shadow-card">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Mentorship Copy & Core Training Pillars */}
          <div className="space-y-6 lg:col-span-7">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <UserRoundCheck size={13} />
                <span>Career Upskilling &amp; Interview Prep</span>
              </div>
              <h2 className="mt-3 font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-brand-heading">
                1:1 Internship &amp; Job Preparation
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-brand-body">
                A strong academic project makes your profile standout in interviews. Get personalized 1:1 training to
                confidently explain application architecture, optimize your CV, organize GitHub source repositories, and
                master technical viva questions.
              </p>
            </div>

            {/* Service Pillars Grid */}
            <div className="grid gap-3 sm:grid-cols-2">
              {trainingServices.map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 rounded-xl border border-brand-border bg-brand-elevated/40 p-3.5 text-xs text-brand-heading font-medium"
                >
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            {/* Direct Contact Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={getServicesWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white shadow-sm hover:bg-emerald-500 transition"
              >
                <MessageCircle size={16} />
                <span>Book 1:1 Training on WhatsApp</span>
              </a>

              <a
                href={`tel:${servicesContact.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 rounded-xl border border-brand-border bg-brand-elevated px-4 py-3 text-xs font-bold text-brand-heading hover:border-brand-primary transition"
              >
                <PhoneCall size={15} className="text-brand-primary" />
                <span>Call: {servicesContact.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Real HD Mentorship Photographs (No Overlap, Crisp Rounded Shells) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5 sm:gap-4">
            <figure className="group relative overflow-hidden rounded-2xl border border-brand-border bg-slate-950 aspect-[3/4]">
              <img
                src={sahilMain}
                alt="SK Sahil - Developer and Technical Mentor"
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <figcaption className="absolute bottom-3 left-3 right-3 text-white">
                <span className="block font-display text-xs font-bold text-white">SK SAHIL</span>
                <span className="text-[10px] text-brand-muted">Lead Coding Tutor &amp; Mentor</span>
              </figcaption>
            </figure>

            <figure className="group relative overflow-hidden rounded-2xl border border-brand-border bg-slate-950 aspect-[3/4]">
              <img
                src={teachingMain}
                alt="Practical classroom teaching session"
                loading="lazy"
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <figcaption className="absolute bottom-3 left-3 right-3 text-white">
                <span className="block font-display text-xs font-bold text-white">Live Classroom</span>
                <span className="text-[10px] text-brand-muted">Doubt Clearing &amp; Viva Mock</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobTrainingSection;
