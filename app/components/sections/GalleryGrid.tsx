"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../Modal";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    alt: "Saurav Computers Classroom",
    category: "facilities"
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    alt: "Tech Training Session",
    category: "training"
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    alt: "SBI Kiosk Banking Setup",
    category: "services"
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    alt: "Student Learning at Saurav Computers",
    category: "students"
  },
  {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    alt: "Programming Workshop",
    category: "training"
  },
  {
    src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
    alt: "Design Class",
    category: "training"
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
    alt: "Team Meeting",
    category: "team"
  },
  {
    src: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
    alt: "Computer Lab",
    category: "facilities"
  }
];

const categories = [
  { id: "all", label: { en: "All", mr: "सर्व" } },
  { id: "facilities", label: { en: "Facilities", mr: "सुविधा" } },
  { id: "training", label: { en: "Training", mr: "प्रशिक्षण" } },
  { id: "services", label: { en: "Services", mr: "सेवा" } },
  { id: "students", label: { en: "Students", mr: "विद्यार्थी" } },
  { id: "team", label: { en: "Team", mr: "टीम" } }
];

export default function GalleryGrid() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {t(category.label.en, category.label.mr)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)}
      >
        {selectedImage && (
          <div className="p-2">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full rounded-lg"
            />
            <p className="mt-4 text-center text-muted-foreground">
              {selectedImage.alt}
            </p>
          </div>
        )}
      </Modal>
    </section>
  );
}