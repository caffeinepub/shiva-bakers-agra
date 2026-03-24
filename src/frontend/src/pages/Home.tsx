import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Award,
  ChevronLeft,
  ChevronRight,
  Clock,
  Star,
  Truck,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { categories, products, reviews } from "../data/products";

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
  { icon: <Clock className="w-5 h-5" />, label: "9AM-10PM", sub: "Open Daily" },
];

const galleryImages = [
  {
    src: "/assets/generated/hero-cake.dim_1200x600.jpg",
    alt: "Celebration cake",
  },
  {
    src: "/assets/generated/birthday-cake.dim_600x600.jpg",
    alt: "Birthday cake",
  },
  {
    src: "/assets/generated/anniversary-cake.dim_600x600.jpg",
    alt: "Anniversary cake",
  },
  { src: "/assets/generated/custom-cake.dim_600x600.jpg", alt: "Custom cake" },
];

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
              Celebrate Life’s
              <span className="block text-gold italic">Sweetest Moments</span>
            </h1>
            <p className="text-white/70 text-base mb-6 leading-relaxed">
              Handcrafted cakes &amp; pastries made with premium ingredients.
              Birthday cakes starting at just ₹349. Free gift with every cake!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link to="/shop" search={{ category: undefined }}>
                <Button
                  className="bg-gold hover:bg-gold-dark text-brown-dark font-bold px-8 py-6 text-base"
                  data-ocid="hero.primary_button"
                >
                  Order Now
                </Button>
              </Link>
              <Link to="/custom-order">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-6 text-base"
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
              src="/assets/generated/hero-cake.dim_1200x600.jpg"
              alt="Premium cakes by Shiva Bakers Agra"
              className="w-full rounded-2xl shadow-2xl object-cover h-64 lg:h-96"
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <Link key={cat.name} to="/shop" search={{ category: cat.name }}>
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
                    className="w-full h-32 sm:h-40 object-cover"
                    loading="lazy"
                  />
                  <div className="p-3 text-center">
                    <span className="text-lg">{cat.icon}</span>
                    <p className="text-xs font-semibold text-brown-dark mt-1 leading-tight">
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
              Cake + Free Gift Under ₹50
            </h3>
            <p className="text-white/70 mt-2">
              Premium packaging included with every order. Same-day delivery
              available!
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

      {/* Featured Products */}
      <section className="py-4 pb-12 px-4">
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
                  “{reviews[reviewIdx].text}”
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
    </div>
  );
}
