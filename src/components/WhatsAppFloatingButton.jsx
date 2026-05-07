import { getWhatsAppLink } from '../data/careerUpskilling';
import WhatsAppIcon from './icons/WhatsAppIcon';

function WhatsAppFloatingButton() {
  const whatsappLink = getWhatsAppLink();

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Open WhatsApp chat"
      className="fixed bottom-5 right-4 z-50 inline-flex items-center gap-2 rounded-full border border-emerald-200/55 bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(16,185,129,0.35)] transition hover:scale-[1.02] hover:bg-emerald-400 sm:right-6"
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
        <WhatsAppIcon className="h-4 w-4" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

export default WhatsAppFloatingButton;
