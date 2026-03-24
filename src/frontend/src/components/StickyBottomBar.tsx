import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";

export function StickyBottomBar() {
  const whatsappLink =
    "https://wa.me/916395716310?text=Hi%20Shiva%20Bakers%2C%20I%20want%20to%20place%20an%20order";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gold shadow-2xl">
      <div className="max-w-6xl mx-auto flex">
        <a
          href="tel:+916395716310"
          className="flex-1 flex flex-col items-center justify-center py-3 gap-0.5 text-brown-dark hover:bg-gold-dark transition-colors"
          data-ocid="contact.primary_button"
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs font-semibold">Call Us</span>
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3 gap-0.5 text-brown-dark hover:bg-gold-dark transition-colors border-x border-brown-primary/20"
          data-ocid="contact.secondary_button"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs font-semibold">WhatsApp</span>
        </a>
        <a
          href="mailto:shibabakersagra@gmail.com"
          className="flex-1 flex flex-col items-center justify-center py-3 gap-0.5 text-brown-dark hover:bg-gold-dark transition-colors border-r border-brown-primary/20"
          data-ocid="contact.link"
        >
          <Mail className="w-5 h-5" />
          <span className="text-xs font-semibold">Contact</span>
        </a>
        <a
          href="https://www.instagram.com/_shiva.bakers_"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3 gap-0.5 text-brown-dark hover:bg-gold-dark transition-colors"
          data-ocid="contact.link"
        >
          <Instagram className="w-5 h-5" />
          <span className="text-xs font-semibold">Instagram</span>
        </a>
      </div>
    </div>
  );
}
