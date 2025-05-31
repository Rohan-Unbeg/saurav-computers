"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";

const courseTypes = [
  { id: 'all', en: 'All Courses', mr: 'सर्व अभ्यासक्रम' },
  { id: 'certification', en: 'Certification', mr: 'प्रमाणपत्र' },
  { id: 'diploma', en: 'Diploma', mr: 'डिप्लोमा' },
  { id: 'short-term', en: 'Short Term', mr: 'लघुकालीन' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

interface CoursesHeroProps {
  searchQuery: string;
  activeCategory: string;
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: string) => void;
}

export default function CoursesHero({
  searchQuery,
  activeCategory,
  onSearchChange,
  onCategoryChange,
}: CoursesHeroProps) {
  const { t, lang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };
  
  const handleCategoryChange = (category: string) => {
    onCategoryChange(category);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated background elements */}
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80)',
            opacity: 0.4
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background/90" />
      </div>

      <div className="container relative z-10 px-4 py-20 md:py-28 lg:py-36 mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span 
            variants={childVariants}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            {t("Empowering Your Future", "तुमच्या भविष्यासाठी सक्षम")}
          </motion.span>
          
          <motion.h1 
            variants={childVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            {t("Our Professional Courses", "आमचे व्यावसायिक अभ्यासक्रम")}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
            variants={fadeInUp}
            custom={0.5}
          >
            {t(
              "Unlock your potential with our industry-relevant courses designed for career success. Learn from experts and gain practical skills.",
              "करिअरच्या यशासाठी डिझाइन केलेल्या आमच्या उद्योग-संबंधित अभ्यासक्रमांसह तुमची क्षमता उघडा. तज्ञांकडून शिका आणि व्यावहारिक कौशल्ये मिळवा."
            )}
          </motion.p>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10 pointer-events-none">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            y: [0, 8, 0],
            opacity: [0.7, 1, 0.7] 
          }}
          transition={{ 
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut" 
          }}
        >
          <div className="w-5 h-8 rounded-full border-2 border-primary/30 flex justify-center pt-1.5 bg-background/80 backdrop-blur-sm shadow-sm">
            <motion.div 
              className="w-1.5 h-2.5 bg-primary rounded-full"
              animate={{ 
                y: [0, 8, 0] 
              }}
              transition={{ 
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut" 
              }}
            />
          </div>
          <span className="text-xs mt-1.5 text-foreground/80 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
            {t("Scroll to explore", "शोधण्यासाठी स्क्रोल करा")}
          </span>
        </motion.div>
      </div>

    </section>
  );
}
