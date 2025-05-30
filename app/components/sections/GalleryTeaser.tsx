"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import Link from "next/link";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
    alt: "Saurav Computers Classroom"
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    alt: "Tech Training Session"
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    alt: "SBI Kiosk Banking Setup"
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    alt: "Student Learning at Saurav Computers"
  }
];

export default function GalleryTeaser() {
  const { t } = useLanguage();

  return (
    <section id="gallery-teaser" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("Our Journey", "आमचा प्रवास")}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/gallery"
            className="bg-primary hover:bg-secondary text-primary-foreground font-semibold py-3 px-6 rounded-full inline-block transition-all hover:-translate-y-0.5"
          >
            {t("View Full Gallery", "पूर्ण गॅलरी पहा")}
          </Link>
        </div>
      </div>
    </section>
  );
}