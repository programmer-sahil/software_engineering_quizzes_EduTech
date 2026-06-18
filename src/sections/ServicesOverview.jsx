import { MessageCircle, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/ui/Button';
import { getServicesWhatsAppLink, homeServiceCards } from '../data/services';

function ServicesOverview({ compact = true }) {
  return (
    <section id="services" className="section-shell mt-16 scroll-mt-28">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Projects & Career Support</p>
        <h2 className="mt-2 max-w-4xl font-display text-3xl leading-tight text-white sm:text-4xl">
          Final-Year Projects, Training &amp; Career Support
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
          Build practical projects that you can showcase in your CV, internship interviews, job interviews, viva, and
          academic submissions.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {homeServiceCards.map((service, index) => (
          <ServiceCard key={service.id} service={service} delay={index * 0.07} compact={compact} />
        ))}
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Link to="/services">
          <Button icon={<MoveRight size={16} />}>Explore Services</Button>
        </Link>
        <a href={getServicesWhatsAppLink()} target="_blank" rel="noreferrer">
          <Button
            variant="secondary"
            icon={<MessageCircle size={16} />}
            className="border-emerald-300/45 text-emerald-200 hover:bg-emerald-400/10"
          >
            Contact on WhatsApp
          </Button>
        </a>
      </div>
    </section>
  );
}

export default ServicesOverview;
