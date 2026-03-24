import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Award, CheckCircle, Heart, Star, Truck, Users } from "lucide-react";
import { motion } from "motion/react";

const whyUs = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "Fresh Daily",
    desc: "All cakes and pastries baked fresh every morning using finest ingredients.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Premium Ingredients",
    desc: "We use only high-quality flour, dairy, and Belgian chocolate in our recipes.",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Same-Day Delivery",
    desc: "Order before 3 PM and receive your fresh cake delivered the same day in Agra.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "500+ Happy Customers",
    desc: "Trusted by families, students, and couples across Agra since 2010.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Made with Love",
    desc: "Every cake is crafted by our skilled bakers with passion and attention to detail.",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Custom Designs",
    desc: "We bring your cake vision to life — any design, theme, or flavor you desire.",
  },
];

export function About() {
  return (
    <div className="pb-safe min-h-screen">
      <div className="bg-brown-primary text-white py-10 px-4 text-center">
        <h1 className="font-serif text-3xl font-bold mb-2">
          About Shiva Bakers Agra
        </h1>
        <p className="text-white/70">Bringing sweetness to Agra since 2010</p>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/generated/baker-decorating.dim_800x600.jpg"
              alt="Baker decorating cake at Shiva Bakers"
              className="w-full rounded-2xl shadow-lg object-cover h-80"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="font-serif text-3xl font-bold text-brown-dark mt-2 mb-4">
              Crafting Memories, One Cake at a Time
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shiva Bakers Agra was founded in 2010 with a simple dream: to
              bring the finest, freshest baked goods to the families of Agra.
              What started as a small home bakery in Dayanand Nagar has grown
              into one of Agra’s most loved cake shops.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our master bakers combine traditional Indian baking wisdom with
              modern techniques to create cakes that are not just delicious, but
              truly unforgettable. From birthday cakes for little ones to grand
              wedding tiers, every creation is made with heart.
            </p>
            <div className="flex gap-6">
              {[
                { value: "15+", label: "Years" },
                { value: "5000+", label: "Cakes Made" },
                { value: "500+", label: "Happy Customers" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-3xl font-bold text-gold">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-cream-dark py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              Visit Us
            </span>
            <h2 className="font-serif text-3xl font-bold text-brown-dark mt-2 mb-4">
              Our Bakery in Agra
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Step into our warm, inviting bakery in Dayanand Nagar, Naglapadi —
              the heart of Agra. Browse our display cases filled with fresh
              cakes, pastries, and sweets every day from 9 AM to 10 PM.
            </p>
            <p className="font-medium text-brown-dark">
              📍 Dayanand Nagar, Naglapadi, Agra, UP 282002
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Open daily: 9 AM – 10 PM
            </p>
          </div>
          <img
            src="/assets/generated/bakery-store.dim_800x600.jpg"
            alt="Shiva Bakers store in Agra"
            className="w-full rounded-2xl shadow-lg object-cover h-72"
          />
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-brown-dark mb-2">
              Why Choose Shiva Bakers?
            </h2>
            <p className="text-muted-foreground">
              We’re committed to quality, freshness, and your satisfaction
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-border shadow-sm card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-pastel flex items-center justify-center text-brown-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-brown-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brown-primary py-12 px-4 text-center">
        <h2 className="font-serif text-3xl font-bold text-white mb-4">
          Ready to Order Your Dream Cake?
        </h2>
        <p className="text-white/70 mb-6">
          Same-day delivery available. Birthday cakes starting ₹349.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/shop" search={{ category: undefined }}>
            <Button
              className="bg-gold hover:bg-gold-dark text-brown-dark font-bold px-8 py-6"
              data-ocid="about.primary_button"
            >
              Order Now
            </Button>
          </Link>
          <Link to="/custom-order">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6"
              data-ocid="about.secondary_button"
            >
              Custom Cake
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
