import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const galleryImages = [
  {
    src: "/assets/uploads/img20250319204701_01-019d1fce-e9a6-7388-b782-897a4d3e7c7d-1.jpg",
    title: "Makeup Birthday Cake",
  },
  {
    src: "/assets/uploads/img20250307193128_01-019d1fce-ea65-700c-8442-906913789553-2.jpg",
    title: "Oreo Chocolate Cake",
  },
  {
    src: "/assets/uploads/img20250304183636_01-019d1fce-ea63-724a-b998-26715f4afa35-3.jpg",
    title: "Gym Theme Cake",
  },
  {
    src: "/assets/uploads/img20250103181348_01-019d1fce-eaf1-76fc-9ea4-9be31f464fdb-4.jpg",
    title: "Mickey Mouse Kids Cake",
  },
  {
    src: "/assets/uploads/screenshot_2025-02-25-18-15-53-26_6012fa4d4ddec268fc5c7112cbb265e7-019d1fce-eb61-7618-95e6-2d05c83454cf-5.jpg",
    title: "25th Anniversary Cake",
  },
  {
    src: "/assets/uploads/img20250110221541_01-019d1fce-ec58-716c-af47-fade8059877c-6.jpg",
    title: "Colorful Floral Cake",
  },
  {
    src: "/assets/uploads/img20241210175826_01-019d1fce-edd0-73ae-9370-db235dae36f2-7.jpg",
    title: "Jungle Animals Kids Cake",
  },
  {
    src: "/assets/uploads/img20250119180355_01-019d1fce-f383-724b-aeb5-778767cb22e9-8.jpg",
    title: "Photo Birthday Cake",
  },
  {
    src: "/assets/uploads/img20250306170433_01-019d1fce-f400-7389-9cee-fa153bdcf7a4-9.jpg",
    title: "Ducati Bike Theme Cake",
  },
  {
    src: "/assets/uploads/img20241121210157-019d1fce-f557-769c-bf59-e33018d366eb-10.jpg",
    title: "Pop Art Girl Cake",
  },
  {
    src: "/assets/uploads/img20250203185038-019d1fce-fa6a-717e-8520-6f12c50b8232-11.jpg",
    title: "Golden Face Art Cake",
  },
  // Previous cakes
  {
    src: "/assets/uploads/img20250412194751-019d1f6a-1748-74f6-b497-ec482274470d-6.jpg",
    title: "3-Tier Fairy Cake",
  },
  {
    src: "/assets/uploads/img-20241012-wa0007-019d1f69-fa0a-71fa-960b-fa42474a84bf-1.jpg",
    title: "Mickey Mouse Birthday Cake",
  },
  {
    src: "/assets/uploads/img20250201183243_01-019d1f6a-070a-772e-bcaf-4ca4adf8f2d5-4.jpg",
    title: "Rose Anniversary Cake",
  },
  {
    src: "/assets/uploads/img20250211190121_01-019d1f6a-03b7-727c-9271-ca43881bae9d-3.jpg",
    title: "Custom CA Cake",
  },
  {
    src: "/assets/uploads/screenshot_20250407_135127-019d1f6a-0ac1-7748-a46b-6cfd09f30d87-5.jpg",
    title: "Princess Birthday Cake",
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
              key={`${img.title}-${i}`}
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
