"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactHero() {
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
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      }
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
          style={{ x: y1, opacity }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
          style={{ x: y2, opacity }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            {t("Get In Touch", "संपर्कात रहा")}
          </motion.div>

          <motion.h1 
            variants={childVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark"
          >
            {t("Contact Us", "आमच्याशी संपर्क साधा")}
          </motion.h1>

          <motion.p 
            variants={childVariants}
            className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            {t(
              "Have questions or want to enroll? Our team is here to help you with any inquiries about our courses and services.",
              "तुमच्याकडे प्रश्न आहेत किंवा नोंदणी करू इच्छिता? आमची टीम तुमच्या कोणत्याही प्रश्नांचे उत्तर देण्यासाठी तयार आहे."
            )}
          </motion.p>

          <motion.div 
            variants={childVariants}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link 
              href="tel:+919823779796" 
              className="group relative inline-flex items-center px-6 py-3 overflow-hidden font-medium rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary to-secondary transition-all duration-300 ease-out transform group-hover:scale-105"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition-all duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-primary-dark opacity-30 group-hover:rotate-90 ease-out"></span>
              <span className="relative flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                +91 98237 79796
              </span>
            </Link>
            
            <Link 
              href="mailto:info@sauravcomputers.com" 
              className="group relative inline-flex items-center px-6 py-3 overflow-hidden font-medium text-foreground border-2 border-foreground/20 rounded-full hover:bg-foreground/5 transition-all duration-300"
            >
              <span className="relative flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                info@sauravcomputers.com
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
