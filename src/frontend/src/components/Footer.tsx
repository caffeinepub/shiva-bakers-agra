import { Link } from "@tanstack/react-router";
import { Clock, Instagram, MapPin, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-brown-dark text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* Brand */}
        <div>
          <div className="font-serif font-bold text-xl text-gold mb-2">
            SHIVA BAKERS
          </div>
          <div className="text-xs text-white/60 mb-4">
            Agra's Premium Bakery Since 2010
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Bringing sweetness to every celebration in Agra. Fresh, handcrafted
            cakes and pastries made with love every day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gold mb-4 uppercase text-xs tracking-widest">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/shop", label: "Shop" },
              { to: "/custom-order", label: "Custom Cake" },
              { to: "/gallery", label: "Gallery" },
              { to: "/offers", label: "Offers" },
              { to: "/about", label: "About Us" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-white/70 hover:text-gold transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-gold mb-4 uppercase text-xs tracking-widest">
            Contact Us
          </h4>
          <div className="space-y-3 text-sm text-white/70">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
              <span>Dayanand Nagar, Naglapadi, Agra, Uttar Pradesh 282002</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold" />
              <a href="tel:+916395716310" className="hover:text-gold">
                +91-6395716310
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold" />
              <span>Open daily: 9 AM – 10 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Instagram className="w-4 h-4 text-gold" />
              <a
                href="https://instagram.com/shibabakersagra"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                @shibabakersagra
              </a>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-semibold text-gold mb-4 uppercase text-xs tracking-widest">
            Categories
          </h4>
          <ul className="space-y-2">
            {[
              "Birthday Cakes",
              "Anniversary Cakes",
              "Custom Cakes",
              "Pastries",
              "Party Items",
              "Biscuits",
              "Cold Drinks",
              "Gifts",
            ].map((cat) => (
              <li key={cat}>
                <Link
                  to="/shop"
                  search={{ category: cat }}
                  className="text-sm text-white/70 hover:text-gold transition-colors"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 text-center">
        <p className="text-xs text-white/50">
          © {year}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
