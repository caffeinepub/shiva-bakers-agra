import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const galleryImages = [
  {
    src: "/assets/generated/hero-cake.dim_1200x600.jpg",
    title: "Celebration Cake",
  },
  {
    src: "/assets/generated/birthday-cake.dim_600x600.jpg",
    title: "Birthday Cake",
  },
  {
    src: "/assets/generated/anniversary-cake.dim_600x600.jpg",
    title: "Anniversary Cake",
  },
  {
    src: "/assets/generated/custom-cake.dim_600x600.jpg",
    title: "Designer Fondant Cake",
  },
  {
    src: "/assets/generated/strawberry-cake.dim_600x600.jpg",
    title: "Strawberry Dream",
  },
  {
    src: "/assets/generated/pastries.dim_600x600.jpg",
    title: "Assorted Pastries",
  },
  {
    src: "/assets/generated/biscuits.dim_600x600.jpg",
    title: "Artisan Cookies",
  },
  { src: "/assets/generated/gifts.dim_600x600.jpg", title: "Gift Hampers" },
  {
    src: "/assets/generated/bakery-store.dim_800x600.jpg",
    title: "Our Bakery",
  },
  {
    src: "/assets/generated/baker-decorating.dim_800x600.jpg",
    title: "Cake Artistry",
  },
  {
    src: "/assets/generated/party-items.dim_600x600.jpg",
    title: "Party Items",
  },
  {
    src: "/assets/generated/cold-drinks.dim_600x600.jpg",
    title: "Cold Beverages",
  },
];

export function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const prev = () =>
    setLightboxIdx((i) =>
      i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length,
    );
  const next = () =>
    setLightboxIdx((i) => (i === null ? null : (i + 1) % galleryImages.length));

  return (
    <div className="pb-safe min-h-screen">
      <div className="bg-brown-primary text-white py-10 px-4 text-center">
        <h1 className="font-serif text-3xl font-bold mb-2">Our Gallery</h1>
        <p className="text-white/70">A glimpse of our sweet creations</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          data-ocid="gallery.section"
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-2xl overflow-hidden cursor-pointer group relative"
              onClick={() => setLightboxIdx(i)}
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brown-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <p className="text-white text-xs font-semibold p-3">
                  {img.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxIdx(null)}
            data-ocid="gallery.modal"
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-white p-2"
              onClick={() => setLightboxIdx(null)}
              data-ocid="gallery.close_button"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              type="button"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 bg-white/10 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              data-ocid="gallery.pagination_prev"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <motion.img
              key={lightboxIdx}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={galleryImages[lightboxIdx].src}
              alt={galleryImages[lightboxIdx].title}
              className="max-w-full max-h-[80vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 bg-white/10 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              data-ocid="gallery.pagination_next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 text-white text-sm">
              {galleryImages[lightboxIdx].title}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
