"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
  title: {
    en: string;
    mr: string;
  };
  description: {
    en: string;
    mr: string;
  };
};

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    alt: "Saurav Computers Classroom",
    category: "facilities",
    title: { en: "Modern Computer Lab", mr: "आधुनिक संगणक प्रयोगशाळा" },
    description: {
      en: "Our fully equipped computer lab with latest hardware and software",
      mr: "सर्वाधुनिक हार्डवेअर आणि सॉफ्टवेअरसह आमची संपूर्णपणे सुसज्ज संगणक प्रयोगशाळा"
    }
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Tech Training Session",
    category: "training",
    title: { en: "Expert-Led Training", mr: "तज्ञांकडून प्रशिक्षण" },
    description: {
      en: "Hands-on training sessions with industry experts",
      mr: "उद्योगातील तज्ञांकडून प्रत्यक्ष प्रशिक्षण सत्रे"
    }
  },
  {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    alt: "Banking Services",
    category: "services",
    title: { en: "Banking Services", mr: "बँकिंग सेवा" },
    description: {
      en: "Convenient banking services at your doorstep",
      mr: "तुमच्या दारात सोयीस्कर बँकिंग सेवा"
    }
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    alt: "Student Learning at Saurav Computers",
    category: "students",
    title: { en: "Student Success Stories", mr: "विद्यार्थ्यांच्या यशोगाऱ्या कथा" },
    description: {
      en: "Our students achieving their career goals",
      mr: "आमचे विद्यार्थी त्यांचे करिअर ध्येय साध्य करत आहेत"
    }
  },
  {
    src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
    alt: "Programming Workshop",
    category: "training",
    title: { en: "Coding Workshops", mr: "कोडिंग वर्कशॉप" },
    description: {
      en: "Interactive coding workshops for all skill levels",
      mr: "सर्व कौशल्य स्तरांसाठी संवादात्मक कोडिंग वर्कशॉप"
    }
  },
  {
    src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80",
    alt: "Design Class",
    category: "training",
    title: { en: "Design Education", mr: "डिझाइन शिक्षण" },
    description: {
      en: "Learn design principles and tools from experts",
      mr: "तज्ञांकडून डिझाइन तत्त्वे आणि साधने शिका"
    }
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    alt: "Team Meeting",
    category: "team",
    title: { en: "Dedicated Team", mr: "समर्पित संघ" },
    description: {
      en: "Our passionate team of educators and professionals",
      mr: "शिक्षक आणि व्यावसायिकांचा आमचा उत्साही संघ"
    }
  },
  {
    src: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80",
    alt: "Computer Lab",
    category: "facilities",
    title: { en: "Modern Infrastructure", mr: "आधुनिक पायाभूत सुविधा" },
    description: {
      en: "State-of-the-art facilities for the best learning experience",
      mr: "उत्कृष्ट शिकण्याच्या अनुभवासाठी अत्याधुनिक सुविधा"
    }
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
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 10 }}
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
                : 'bg-background border border-border/50 text-foreground/80 hover:bg-accent/5 hover:border-primary/30 hover:text-primary'
            }`}
          >
            {t(category.label.en, category.label.mr)}
          </motion.button>
        ))}
      </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3] bg-muted/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="absolute inset-0 group-hover:bg-foreground/20 transition-colors duration-300 z-10" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="bg-background/90 p-3 rounded-full text-foreground">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && setSelectedImage(null)}
          >
            <motion.div 
              className="relative max-w-4xl w-full bg-background rounded-2xl shadow-2xl overflow-hidden border border-border/30"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
              
              <div className="relative aspect-video bg-muted/50">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              <div className="p-6 border-t border-border/30">
                <h3 className="text-xl font-semibold mb-2">
                  {t(selectedImage.title.en, selectedImage.title.mr)}
                </h3>
                <p className="text-muted-foreground">
                  {t(selectedImage.description.en, selectedImage.description.mr)}
                </p>
              </div>
            </motion.div>
            
            {/* Scroll indicator for gallery page */}
            <motion.div 
              className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                y: [20, 0, 0, -10]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut"
              }}
            >
              <div className="w-8 h-12 border-2 border-muted-foreground/40 rounded-full flex justify-center p-1">
                <motion.div 
                  className="w-0.5 h-3 bg-muted-foreground/60 rounded-full mt-1"
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <span className="text-xs text-muted-foreground mt-2">Scroll</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}