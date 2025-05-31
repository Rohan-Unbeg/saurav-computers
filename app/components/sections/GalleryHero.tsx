"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { motion, useScroll, useTransform } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";

export default function GalleryHero() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const childVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl"
          style={{ x: y1, opacity }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl"
          style={{ x: y2, opacity }}
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Background image with gradient overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80)',
            opacity: 0.4
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background/90" />
      </div>

      {/* Hero content */}
      <div className="container relative z-10 px-4 py-20 md:py-28 lg:py-36 mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div 
            variants={childVariants} 
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6"
          >
            <ImageIcon className="w-8 h-8" />
          </motion.div>
          
          <motion.h1 
            variants={childVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            {t("Our Gallery", "आमची गॅलरी")}
          </motion.h1>
          
          <motion.p 
            variants={childVariants}
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            {t(
              "A visual journey through our facilities, students, and events at Saurav Computers.",
              "सौरव कॉम्प्युटरमध्ये आमच्या सुविधा, विद्यार्थी आणि कार्यक्रमांची दृश्य यात्रा."
            )}
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator - centered */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5] 
          }}
          transition={{ 
            delay: 0.8,
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut" 
          }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{ 
                y: [0, 12, 0] 
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut" 
              }}
            />
          </div>
          <span className="text-xs mt-2 text-foreground/60">{t("Scroll to explore", "शोधण्यासाठी स्क्रोल करा")}</span>
        </motion.div>
      </div>
    </section>
  );
}
