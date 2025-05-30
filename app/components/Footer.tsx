"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageProvider";
import { Facebook, Mail, MapPin, Phone, Clock, Instagram, Youtube, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Create motion components
const MotionDiv = motion.div;
const MotionButton = motion.button;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
};

export default function Footer() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Show/hide scroll to top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-t border-border/10 pt-16 pb-8">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <MotionDiv 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo and Description */}
          <MotionDiv className="space-y-4" variants={itemVariants}>
            <Link href="/" className="inline-block">
              <Image 
                src="/logo.png" 
                alt="Saurav Computers Logo" 
                width={80}
                height={80}
                className="h-14 w-auto"
                priority
              />
            </Link>
            <p className="text-muted-foreground text-sm">
              {t(
                "Empowering Shendurjan with tech education and digital services since 2025.",
                "२०२५ पासून शेंडुर्जनला तंत्रज्ञान शिक्षण आणि डिजिटल सेवांसह सशक्त करत आहे."
              )}
            </p>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com/sauravcomputers" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent/5 hover:bg-accent/10 text-foreground/80 hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com/sauravcomputers" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent/5 hover:bg-accent/10 text-foreground/80 hover:text-pink-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com/@sauravcomputers" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent/5 hover:bg-accent/10 text-foreground/80 hover:text-red-600 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </MotionDiv>

          {/* Quick Links */}
          <MotionDiv className="space-y-6" variants={itemVariants}>
            <h4 className="text-lg font-semibold text-foreground">
              {t("Quick Links", "द्रुत दुवे")}
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: t("Home", "मुख्यपृष्ठ") },
                { href: "/courses", label: t("Courses", "अभ्यासक्रम") },
                { href: "/gallery", label: t("Gallery", "गॅलरी") },
                { href: "/about", label: t("About Us", "आमच्याबद्दल") },
                { href: "/contact", label: t("Contact", "संपर्क") },
              ].map((link, index) => (
                <motion.li key={link.href} variants={itemVariants}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </MotionDiv>

          {/* Contact Info */}
          <MotionDiv className="space-y-6" variants={itemVariants}>
            <h4 className="text-lg font-semibold text-foreground">
              {t("Contact Info", "संपर्क माहिती")}
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    AT POST SHENDURJAN, TQ SINDKHEDRAJA,<br />
                    DIST BULDHANA, PINCODE 443202,<br />
                    MAHARASHTRA, INDIA
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <a href="tel:+919823779796" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    +91 98237 79796
                  </a>
                  <a href="tel:+918275233774" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    +91 82752 33774
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={18} />
                </div>
                <a href="mailto:sauravcomputer@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  sauravcomputer@gmail.com
                </a>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t("Mon-Sat: 9:00 AM - 7:00 PM", "सोम-शनि: सकाळी ९:०० - संध्याकाळी ७:००")}<br />
                    {t("Sunday: Closed", "रविवार: बंद")}
                  </p>
                </div>
              </li>
            </ul>
          </MotionDiv>
        </MotionDiv>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {t("Saurav Computers. All rights reserved.", "सौरव कॉम्प्युटर्स. सर्व हक्क राखीव.")}
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("Privacy Policy", "गोपनीयता धोरण")}
            </a>
            <span className="text-muted-foreground/50">|</span>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("Terms & Conditions", "अटी आणि नियम")}
            </a>
          </div>
        </div>

        {/* Back to top button */}
        <AnimatePresence>
          {isVisible && (
            <MotionButton
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={t("Back to top", "वर जा")}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </MotionButton>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}