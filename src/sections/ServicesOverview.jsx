import { MessageCircle, MoveRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { Button, SectionHeading } from '../components/ui';
import { getServicesWhatsAppLink, homeServiceCards, servicesContact } from '../data/services';

function ServicesOverview({ compact = true }) {
  return (
    <section id="services" className="section-shell mt-16 sm:mt-24 scroll-mt-28">
      <SectionHeading
        eyebrow="Academic Projects &amp; Career"
        title="Final-Year Projects &amp; Career Mentorship"
        description="Complete development, report writing, presentation, and viva question-answer guidance across IoT, Full-Stack Web, Data Analytics, and AI domains."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {homeServiceCards.map((service, index) => (
          <ServiceCard key={service.id} service={service} delay={index * 0.06} compact={compact} />
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
        <Link to="/services">
          <Button variant="primary" icon={<MoveRight size={16} />}>
            Explore All Services
          </Button>
        </Link>
        <a href={getServicesWhatsAppLink()} target="_blank" rel="noreferrer">
          <Button
            variant="outline"
            icon={<MessageCircle size={16} />}
            className="border-emerald-500/40 text-emerald-500 hover:bg-emerald-500/10"
          >
            WhatsApp Project Support
          </Button>
        </a>
        <a href={`tel:${servicesContact.phone.replace(/\s+/g, '')}`}>
          <Button variant="secondary" icon={<PhoneCall size={16} />}>
            Call: {servicesContact.phone}
          </Button>
        </a>
      </div>
    </section>
  );
}

export default ServicesOverview;
