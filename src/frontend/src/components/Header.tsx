import { Link, useLocation } from "@tanstack/react-router";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/custom-order", label: "Custom Order" },
  { to: "/gallery", label: "Gallery" },
  { to: "/offers", label: "Offers" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const { count, setIsOpen } = useCart();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" data-ocid="nav.link">
          <img
            src="/assets/generated/logo-transparent.dim_300x300.png"
            alt="Shiva Bakers Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="font-serif font-bold text-lg leading-tight text-brown-primary">
              SHIVA BAKERS
            </div>
            <div className="text-xs text-muted-foreground font-sans">
              Agra's Premium Bakery
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                location.pathname === link.to
                  ? "text-gold border-b-2 border-gold"
                  : "text-brown-dark"
              }`}
              data-ocid="nav.link"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative p-2 rounded-full bg-cream hover:bg-pink-pastel transition-colors"
            data-ocid="cart.open_modal_button"
            aria-label="Open cart"
          >
            <ShoppingCart className="w-5 h-5 text-brown-primary" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            className="lg:hidden p-2 rounded-full bg-cream"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5 text-brown-primary" />
            ) : (
              <Menu className="w-5 h-5 text-brown-primary" />
            )}
          </button>
        </div>
      </div>

      <div className="bg-brown-primary px-4 py-2 hidden lg:flex items-center justify-between">
        <span className="text-xs text-white/80">
          🚚 Same-day delivery available in Agra &nbsp;|&nbsp; 📞 Call:
          +91-6395716310
        </span>
        <span className="text-xs text-gold font-medium">
          Cakes starting ₹349 • Free gift with every cake!
        </span>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-border px-4 py-3 flex flex-col gap-2 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`py-2 text-sm font-medium border-b border-border last:border-0 ${
                location.pathname === link.to ? "text-gold" : "text-brown-dark"
              }`}
              onClick={() => setMenuOpen(false)}
              data-ocid="nav.link"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
