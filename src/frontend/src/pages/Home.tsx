import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Award,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Truck,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { products, reviews } from "../data/products";

const STARS = [1, 2, 3, 4, 5];

const stats = [
  {
    icon: <Award className="w-5 h-5" />,
    label: "15+ Years",
    sub: "of Excellence",
  },
  {
    icon: <Users className="w-5 h-5" />,
    label: "5000+",
    sub: "Happy Customers",
  },
  { icon: <Truck className="w-5 h-5" />, label: "Same Day", sub: "Delivery" },
  {
    icon: <Clock className="w-5 h-5" />,
    label: "11AM-11PM",
    sub: "Open Daily",
  },
];

const homeCategories = [
  {
    name: "Birthday Cakes",
    image:
      "/assets/uploads/img20250319204701_01-019d1fce-e9a6-7388-b782-897a4d3e7c7d-1.jpg",
    icon: "🎂",
    link: "/shop",
    search: { category: "Birthday Cakes" },
  },
  {
    name: "Anniversary Cakes",
    image:
      "/assets/uploads/screenshot_2025-02-25-18-15-53-26_6012fa4d4ddec268fc5c7112cbb265e7-019d1fce-eb61-7618-95e6-2d05c83454cf-5.jpg",
    icon: "💕",
    link: "/shop",
    search: { category: "Anniversary Cakes" },
  },
  {
    name: "Chocolate Cakes",
    image:
      "/assets/uploads/img20250307193128_01-019d1fce-ea65-700c-8442-906913789553-2.jpg",
    icon: "🍫",
    link: "/shop",
    search: { category: "Birthday Cakes" },
  },
  {
    name: "Custom Cakes",
    image:
      "/assets/uploads/img20250304183636_01-019d1fce-ea63-724a-b998-26715f4afa35-3.jpg",
    icon: "✨",
    link: "/shop",
    search: { category: "Custom Cakes" },
  },
  {
    name: "Photo Cakes",
    image:
      "/assets/uploads/img20250119180355_01-019d1fce-f383-724b-aeb5-778767cb22e9-8.jpg",
    icon: "📸",
    link: "/shop",
    search: { category: "Custom Cakes" },
  },
  {
    name: "Pastries",
    image: "/assets/generated/pastries.dim_600x600.jpg",
    icon: "🥐",
    link: "/shop",
    search: { category: "Pastries" },
  },
];

const whyUs = [
  {
    icon: "🎂",
    title: "Freshly Baked",
    desc: "All cakes are baked fresh to order, never stored",
  },
  {
    icon: "🥚",
    title: "100% Eggless",
    desc: "All our cakes are eggless, suitable for everyone",
  },
  {
    icon: "💰",
    title: "Affordable Premium",
    desc: "Premium quality cakes starting at just ₹349",
  },
  {
    icon: "🎁",
    title: "Gift Packaging",
    desc: "Beautiful premium packaging included with every cake",
  },
  {
    icon: "⚡",
    title: "Same Day Order",
    desc: "Order today, get your cake the same day in Agra",
  },
  {
    icon: "🎨",
    title: "Custom Designs",
    desc: "Fully customized cakes for any theme or occasion",
  },
];

const galleryImages = [
  {
    src: "/assets/uploads/img20250319204701_01-019d1fce-e9a6-7388-b782-897a4d3e7c7d-1.jpg",
    alt: "Makeup Birthday Cake",
  },
  {
    src: "/assets/uploads/screenshot_2025-02-25-18-15-53-26_6012fa4d4ddec268fc5c7112cbb265e7-019d1fce-eb61-7618-95e6-2d05c83454cf-5.jpg",
    alt: "25th Anniversary Cake",
  },
  {
    src: "/assets/uploads/img20250306170433_01-019d1fce-f400-7389-9cee-fa153bdcf7a4-9.jpg",
    alt: "Ducati Bike Theme Cake",
  },
  {
    src: "/assets/uploads/img20250203185038-019d1fce-fa6a-717e-8520-6f12c50b8232-11.jpg",
    alt: "Golden Face Art Cake",
  },
];

const WHATSAPP_LINK =
  "https://wa.me/916395716310?text=Hi%20Shiva%20Bakers%2C%20I%20want%20to%20place%20an%20order";

export function Home() {
  const [reviewIdx, setReviewIdx] = useState(0);
  const featuredProducts = products.filter((p) => p.isPopular).slice(0, 4);

  const prevReview = () =>
    setReviewIdx((i) => (i - 1 + reviews.length) % reviews.length);
  const nextReview = () => setReviewIdx((i) => (i + 1) % reviews.length);

  return (
    <div className="pb-safe">
      {/* Hero */}
      <section
        className="relative bg-brown-dark overflow-hidden"
        data-ocid="hero.section"
      >
        <div className="max-w-6xl mx-auto px-4 py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <span className="inline-block bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-gold/30">
              🚚 Same-day Delivery Available
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Fresh &amp; Premium Cakes
              <span className="block text-gold italic">
                for Every Celebration
              </span>
            </h1>
            <p className="text-white/70 text-base mb-6 leading-relaxed">
              Order delicious eggless cakes with beautiful packaging at
              affordable prices
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.primary_button"
              >
                <Button className="bg-gold hover:bg-gold-dark text-brown-dark font-bold px-8 py-6 text-base w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Order on WhatsApp
                </Button>
              </a>
              <Link to="/custom-order">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-6 text-base w-full sm:w-auto"
                  data-ocid="hero.secondary_button"
                >
                  Custom Cake
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <img
              src="/assets/generated/hero-cake-main.dim_1200x700.jpg"
              alt="Shiva Bakers Agra - Premium Handcrafted Cakes"
              className="w-full rounded-2xl shadow-2xl object-cover h-64 lg:h-[420px]"
            />
          </motion.div>
        </div>

        <div className="bg-brown-primary/80 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3 text-white">
                <span className="text-gold">{s.icon}</span>
                <div>
                  <div className="font-bold text-sm">{s.label}</div>
                  <div className="text-xs text-white/60">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4" data-ocid="categories.section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brown-dark mb-2">
              Our Categories
            </h2>
            <p className="text-muted-foreground">
              From fresh cakes to party essentials — we have it all
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
            {homeCategories.map((cat, i) => (
              <Link key={cat.name} to={cat.link} search={cat.search}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-pink-pastel rounded-2xl overflow-hidden cursor-pointer card-hover border border-pink-pastel shadow-sm"
                  data-ocid={`categories.item.${i + 1}`}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-24 sm:h-32 object-cover"
                    loading="lazy"
                  />
                  <div className="p-2 text-center">
                    <span className="text-base">{cat.icon}</span>
                    <p className="text-xs font-semibold text-brown-dark mt-0.5 leading-tight">
                      {cat.name}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="mx-4 mb-12">
        <div className="max-w-6xl mx-auto bg-brown-primary rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="text-center lg:text-left">
            <span className="text-gold text-xs font-bold uppercase tracking-widest">
              Limited Time Offer
            </span>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mt-1">
              Half Kg Cake Starting at ₹349
            </h3>
            <p className="text-white/70 mt-2">
              Free small gift under ₹50 with every cake. Premium packaging
              included!
            </p>
          </div>
          <Link to="/offers">
            <Button
              className="bg-gold hover:bg-gold-dark text-brown-dark font-bold px-8 py-6 flex-shrink-0"
              data-ocid="offer.primary_button"
            >
              View Offers
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-4 bg-cream-dark" data-ocid="why_us.section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brown-dark mb-2">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground">
              Quality, trust, and sweetness in every bite
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm border border-pink-pastel/60 text-center"
                data-ocid={`why_us.item.${i + 1}`}
              >
                <div className="text-3xl lg:text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-brown-dark text-sm lg:text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-3xl font-bold text-brown-dark">
              Popular Cakes
            </h2>
            <Link
              to="/shop"
              search={{ category: undefined }}
              className="text-sm text-gold font-medium hover:underline"
              data-ocid="shop.link"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 px-4 bg-cream-dark" data-ocid="reviews.section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-brown-dark mb-2">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground">
              500+ happy customers in Agra
            </p>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={reviewIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-border text-center"
                data-ocid={`reviews.item.${reviewIdx + 1}`}
              >
                <div className="w-12 h-12 rounded-full bg-brown-primary text-white font-bold flex items-center justify-center text-lg mx-auto mb-4">
                  {reviews[reviewIdx].avatar}
                </div>
                <div className="flex justify-center gap-1 mb-3">
                  {STARS.map((n) => (
                    <Star
                      key={n}
                      className={`w-4 h-4 ${
                        n <= reviews[reviewIdx].rating
                          ? "fill-gold text-gold"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed mb-4">
                  "{reviews[reviewIdx].text}"
                </p>
                <p className="font-semibold text-brown-dark">
                  {reviews[reviewIdx].name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {reviews[reviewIdx].location}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-4 mt-6">
              <button
                type="button"
                onClick={prevReview}
                className="p-2 rounded-full bg-brown-primary text-white hover:bg-brown-dark"
                data-ocid="reviews.pagination_prev"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2 items-center">
                {reviews.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setReviewIdx(r.id - 1)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      r.id - 1 === reviewIdx
                        ? "bg-gold w-4"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={nextReview}
                className="p-2 rounded-full bg-brown-primary text-white hover:bg-brown-dark"
                data-ocid="reviews.pagination_next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-12 px-4" data-ocid="gallery.section">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-3xl font-bold text-brown-dark">
              Our Gallery
            </h2>
            <Link
              to="/gallery"
              className="text-sm text-gold font-medium hover:underline"
              data-ocid="gallery.link"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl overflow-hidden ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-cream-dark" data-ocid="contact.section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brown-dark mb-2">
              Find Us &amp; Order Now
            </h2>
            <p className="text-muted-foreground">
              Visit us or order via WhatsApp — we deliver same day in Agra
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.5!2d77.9876543!3d27.1767654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477a0b04de001%3A0x5a5b5d5e5f5g5h5i!2sDayanand+Nagar%2C+Naglapadi%2C+Agra%2C+Uttar+Pradesh+282005!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Shiva Bakers Location"
              />
            </div>

            {/* Info + Buttons */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border flex flex-col gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-brown-dark">
                  <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Business Hours</p>
                    <p className="text-muted-foreground text-sm">
                      Open Daily: 11 AM – 11 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-brown-dark">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Address</p>
                    <p className="text-muted-foreground text-sm">
                      Dayanand Nagar, Naglapadi, Agra, UP 282005
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-brown-dark">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Phone</p>
                    <a
                      href="tel:+916395716310"
                      className="text-muted-foreground text-sm hover:text-gold transition-colors"
                    >
                      +91-6395716310
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.primary_button"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Order on WhatsApp
                  </Button>
                </a>
                <a
                  href="tel:+916395716310"
                  data-ocid="contact.secondary_button"
                >
                  <Button
                    variant="outline"
                    className="w-full border-brown-primary text-brown-dark hover:bg-brown-primary/10 font-bold py-5"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
