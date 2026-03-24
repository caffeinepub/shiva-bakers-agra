import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Clock, Gift, Star, Tag } from "lucide-react";
import { motion } from "motion/react";

const offers = [
  {
    id: 1,
    tag: "Best Seller",
    title: "Cake + Free Gift",
    subtitle: "Under ₹50 value gift with premium packaging",
    description:
      "Order any cake and receive a beautifully wrapped free gift (chocolates or sweets) with premium packaging — absolutely free!",
    highlight: "FREE Gift Worth ₹50",
    cta: "Order Now",
    icon: "🎁",
    color: "bg-pink-pastel",
  },
  {
    id: 2,
    tag: "Weekend Special",
    title: "10% Off On Weekends",
    subtitle: "Saturday & Sunday only",
    description:
      "Get 10% discount on all cakes ordered on Saturday and Sunday. Perfect for weekend celebrations and parties!",
    highlight: "Save 10% Every Weekend",
    cta: "Shop Now",
    icon: "🎉",
    color: "bg-cream-dark",
  },
  {
    id: 3,
    tag: "Combo Deal",
    title: "Cake + Balloon Combo",
    subtitle: "Birthday cake + balloon set",
    description:
      "Celebrate in style! Get any birthday cake with our Birthday Balloon Set for just ₹499 extra. Party-ready delivered!",
    highlight: "Combo starts ₹499",
    cta: "Get Combo",
    icon: "🎈",
    color: "bg-pink-light",
  },
  {
    id: 4,
    tag: "Bulk Order",
    title: "Corporate & Bulk Orders",
    subtitle: "Orders above 5 cakes",
    description:
      "Planning an office party or event? Get special pricing and priority delivery for bulk cake orders above 5 cakes.",
    highlight: "Up to 20% Off",
    cta: "Contact Us",
    icon: "🏢",
    color: "bg-cream",
  },
  {
    id: 5,
    tag: "Loyalty Reward",
    title: "Refer & Earn",
    subtitle: "Refer a friend, get ₹100 off",
    description:
      "Share Shiva Bakers with your friends! When they place their first order, you both get ₹100 off on your next cake.",
    highlight: "₹100 Off per Referral",
    cta: "Share Now",
    icon: "🤝",
    color: "bg-pink-pastel",
  },
  {
    id: 6,
    tag: "Same Day",
    title: "Same-Day Delivery",
    subtitle: "Order before 3 PM",
    description:
      "Need a cake today? Order before 3 PM and get same-day delivery within Agra. Fresh, on time, every time!",
    highlight: "Free Delivery in Agra",
    cta: "Order Now",
    icon: "🚚",
    color: "bg-cream-dark",
  },
];

export function Offers() {
  return (
    <div className="pb-safe min-h-screen">
      <div className="bg-brown-primary text-white py-10 px-4 text-center">
        <h1 className="font-serif text-3xl font-bold mb-2">Special Offers</h1>
        <p className="text-white/70">
          Exclusive deals to make your celebrations sweeter
        </p>
      </div>

      {/* Hero offer */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-brown-primary rounded-3xl p-6 lg:p-10 text-center mb-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <img
              src="/assets/generated/hero-cake.dim_1200x600.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <span className="bg-gold text-brown-dark text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
              🔥 HOT DEAL
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-3">
              Cake + Free Gift
              <span className="block text-gold">Under ₹50</span>
            </h2>
            <p className="text-white/70 max-w-md mx-auto mb-6">
              With every cake order, receive a premium gift worth ₹50 —
              beautifully packaged. Limited time offer!
            </p>
            <Link to="/shop" search={{ category: undefined }}>
              <Button
                className="bg-gold hover:bg-gold-dark text-brown-dark font-bold px-10 py-6 text-lg"
                data-ocid="offers.primary_button"
              >
                Grab This Deal
              </Button>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`${offer.color} rounded-2xl p-6 border border-border card-hover`}
              data-ocid={`offers.item.${i + 1}`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{offer.icon}</span>
                <span className="bg-brown-primary text-gold text-xs font-bold px-2 py-0.5 rounded-full">
                  {offer.tag}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-brown-dark mb-1">
                {offer.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {offer.subtitle}
              </p>
              <p className="text-sm text-brown-dark leading-relaxed mb-4">
                {offer.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-gold text-sm">
                  {offer.highlight}
                </span>
                <Link to="/shop" search={{ category: undefined }}>
                  <Button
                    size="sm"
                    className="bg-brown-primary hover:bg-brown-dark text-white"
                    data-ocid={`offers.secondary_button.${i + 1}`}
                  >
                    {offer.cta}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
