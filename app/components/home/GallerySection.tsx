"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageProvider";
import { Image as ImageIcon, ArrowRight } from "lucide-react";
import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    alt: "Students in computer lab",
    category: "classroom"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    alt: "Coding workshop",
    category: "workshop"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    alt: "Graduation ceremony",
    category: "event"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    alt: "Group study session",
    category: "classroom"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    alt: "Award ceremony",
    category: "event"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
    alt: "Project presentation",
    category: "workshop"
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "classroom", label: "Classroom" },
  { id: "workshop", label: "Workshops" },
  { id: "event", label: "Events" },
];

const GalleryCard = ({ image, onClick }: { image: any, onClick: () => void }) => (
  <motion.div 
    className="group relative rounded-xl overflow-hidden aspect-video cursor-pointer"
    onClick={onClick}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20% 0px" }}
    transition={{ duration: 0.5 }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
      <div className="text-background">
        <h4 className="font-medium">{image.alt}</h4>
        <span className="text-sm opacity-80">View details</span>
      </div>
    </div>
    <img 
      src={image.src} 
      alt={image.alt}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      loading="lazy"
    />
  </motion.div>
);

export default function GallerySection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-20 bg-background/50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px 0px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("Our Gallery", "आमची गॅलरी")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Explore moments of learning, achievements, and events at Saurav Computers.",
              "सौरव कॉम्प्युटर्समधील शिक्षण, यशस्वी आणि कार्यक्रमांचे क्षण अन्वेषा करा."
            )}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px 0px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20'
                  : 'bg-background border border-border/50 text-foreground/80 hover:bg-accent/5 hover:border-primary/30'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <GalleryCard 
              key={image.id} 
              image={image} 
              onClick={() => openLightbox(image.id)}
            />
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/20 transition-all">
            {t("View Full Gallery", "संपूर्ण गॅलरी पहा")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-foreground/70 hover:text-foreground"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="relative max-w-4xl w-full max-h-[80vh] overflow-hidden rounded-xl">
            <img 
              src={galleryImages[selectedImage - 1].src}
              alt={galleryImages[selectedImage - 1].alt}
              className="w-full h-full object-contain max-h-[70vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
