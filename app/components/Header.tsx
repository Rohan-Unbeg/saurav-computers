"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageProvider";
import { useTheme } from "../context/ThemeProvider";
import { Menu, Moon, Sun, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Create motion components with proper TypeScript types
const MotionHeader = motion('header');
const MotionDiv = motion('div');
const MotionButton = motion('button');
const MotionUl = motion('ul');
const MotionLi = motion('li');

export default function Header() {
  const { lang, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovering, setIsHovering] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { 
      href: "/", 
      label: t("Home", "मुख्यपृष्ठ"),
      submenu: []
    },
    { 
      href: "/courses", 
      label: t("Courses", "अभ्यासक्रम"),
      submenu: [
        { href: "/courses/basic-computer", label: t("Basic Computer", "बेसिक कॉम्प्युटर") },
        { href: "/courses/advanced-diploma", label: t("Advanced Diploma", "अॅडव्हान्स डिप्लोमा") },
        { href: "/courses/web-designing", label: t("Web Designing", "वेब डिझायनिंग") },
      ]
    },
    { 
      href: "/gallery", 
      label: t("Gallery", "गॅलरी"),
      submenu: []
    },
    { 
      href: "/about", 
      label: t("About", "आमच्याबद्दल"),
      submenu: [
        { href: "/about/team", label: t("Our Team", "आमची टीम") },
        { href: "/about/mission", label: t("Mission & Vision", "उद्दिष्ट आणि ध्येय") },
      ]
    },
    { 
      href: "/contact", 
      label: t("Contact", "संपर्क"),
      submenu: []
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.3
      }
    })
  };

  // Language button text slide variants
  const textVariants = {
    initial: { x: 0 },
    hover: { x: -100, opacity: 0 },
  };

  const hoverTextVariants = {
    initial: { x: 100, opacity: 0 },
    hover: { x: 0, opacity: 1 },
  };

  return (
    <MotionHeader 
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <nav className={`container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 ${isScrolled ? 'backdrop-blur-md bg-background/80 border-b border-border/10 shadow-sm' : 'bg-transparent'}`}>
        <MotionDiv 
          className="logo"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Saurav Computers Logo"
              width={72}
              height={72}
              className={`h-12 w-auto transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}
              priority
            />
          </Link>
        </MotionDiv>

        {/* Desktop Nav */}
        <MotionUl 
          className="hidden md:flex items-center justify-center gap-1 flex-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link, index) => (
            <MotionLi 
              key={link.href} 
              className="relative"
              variants={itemVariants}
              custom={index}
              onMouseEnter={() => setIsHovering(link.href)}
              onMouseLeave={() => setIsHovering(null)}
            >
              <Link
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-1 group ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-foreground/90 hover:text-primary"
                }`}
              >
                {link.label}
                {link.submenu && link.submenu.length > 0 && (
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isHovering === link.href ? 'rotate-180' : ''}`} />
                )}
                <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                  pathname === link.href || isHovering === link.href ? 'w-4/5 -translate-x-1/2' : 'w-0'
                }`}></span>
              </Link>
              
              {/* Dropdown Menu */}
              {link.submenu && link.submenu.length > 0 && (
                <AnimatePresence>
                  {isHovering === link.href && (
                    <MotionDiv 
                      className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl bg-background/95 backdrop-blur-lg shadow-lg ring-1 ring-black/5 overflow-hidden"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-2">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm rounded-lg transition-colors hover:bg-accent/5 hover:text-primary"
                            onClick={() => setIsHovering(null)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </MotionDiv>
                  )}
                </AnimatePresence>
              )}
            </MotionLi>
          ))}
        </MotionUl>

        {/* Controls */}
        <MotionDiv 
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <MotionButton
            className="relative w-[80px] h-8 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-medium overflow-hidden"
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${lang === 'en' ? 'Marathi' : 'English'}`}
          >
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial="initial"
              whileHover="hover"
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="absolute"
                variants={textVariants}
                transition={{ duration: 0.3 }}
              >
                {lang === 'en' ? 'ENG' : 'मरा'}
              </motion.span>
              <motion.span
                className="absolute"
                variants={hoverTextVariants}
                transition={{ duration: 0.3 }}
              >
                {lang === 'en' ? 'मरा' : 'ENG'}
              </motion.span>
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />
          </MotionButton>
          <MotionButton
            className="p-2 rounded-full bg-accent/5 text-foreground hover:bg-accent/10 transition-colors"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </MotionButton>
          <MotionButton
            className="md:hidden p-2 -mr-2 text-foreground/80 hover:text-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </MotionButton>
        </MotionDiv>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <MotionDiv
              className="fixed inset-0 z-40 md:hidden pt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsMenuOpen(false);
                setOpenSubmenu(null);
              }}
            >
              <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />
              <MotionDiv 
                className="absolute top-16 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/10 shadow-xl overflow-y-auto pb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button at the top right */}
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setOpenSubmenu(null);
                  }}
                  className="absolute right-4 top-4 p-2 -m-2 text-foreground/70 hover:text-foreground transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
                <MotionUl 
                  className="flex flex-col divide-y divide-border/10"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 }
                    }
                  }}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  {navLinks.map((link, index) => (
                    <MotionLi 
                      key={link.href}
                      variants={{
                        open: { 
                          x: 0, 
                          opacity: 1,
                          transition: { type: 'spring', stiffness: 300, damping: 24 }
                        },
                        closed: { 
                          x: -20, 
                          opacity: 0,
                          transition: { duration: 0.2 }
                        }
                      }}
                    >
                      <div className="relative">
                        {link.submenu && link.submenu.length > 0 ? (
                          <button
                            onClick={() => setOpenSubmenu(openSubmenu === link.href ? null : link.href)}
                            className={`w-full flex items-center justify-between px-6 py-4 text-base font-medium transition-colors ${
                              pathname === link.href || (link.submenu?.some(item => item.href === pathname))
                                ? "text-primary"
                                : "text-foreground/90 hover:text-primary"
                            }`}
                          >
                            {link.label}
                            <ChevronDown 
                              className={`h-4 w-4 transition-transform duration-200 ${
                                openSubmenu === link.href ? 'rotate-180' : ''
                              }`} 
                            />
                          </button>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setOpenSubmenu(null);
                            }}
                            className={`block w-full text-left px-6 py-4 text-base font-medium transition-colors ${
                              pathname === link.href
                                ? "text-primary"
                                : "text-foreground/90 hover:text-primary"
                            }`}
                          >
                            {link.label}
                          </Link>
                        )}
                        
                        {/* Mobile Submenu */}
                        {link.submenu && link.submenu.length > 0 && (
                          <AnimatePresence>
                            {openSubmenu === link.href && (
                              <motion.div 
                                className="pl-6 bg-accent/5 overflow-hidden"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: 'easeInOut' }}
                              >
                                {link.submenu.map((subItem) => (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setOpenSubmenu(null);
                                    }}
                                    className={`block px-6 py-3 text-sm border-l-2 ${
                                      pathname === subItem.href
                                        ? "text-primary font-medium border-primary"
                                        : "text-foreground/80 hover:text-primary border-transparent"
                                    }`}
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      </div>
                    </MotionLi>
                  ))}
                </MotionUl>
                
                {/* Mobile Language Toggle */}
                <div className="px-6 py-4 border-t border-border/10">
                  <MotionButton
                    className="relative w-[80px] h-8 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-medium overflow-hidden"
                    onClick={toggleLanguage}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Switch to ${lang === 'en' ? 'Marathi' : 'English'}`}
                  >
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial="initial"
                      whileHover="hover"
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span
                        className="absolute"
                        variants={textVariants}
                        transition={{ duration: 0.3 }}
                      >
                        {lang === 'en' ? 'ENG' : 'मरा'}
                      </motion.span>
                      <motion.span
                        className="absolute"
                        variants={hoverTextVariants}
                        transition={{ duration: 0.3 }}
                      >
                        {lang === 'en' ? 'मरा' : 'ENG'}
                      </motion.span>
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0"
                      whileHover={{ opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </MotionButton>
                </div>

                <div className="px-6 pb-4">
                  <div className="flex items-center justify-between text-sm text-foreground/60">
                    <span>© {new Date().getFullYear()} Saurav Computers</span>
                    <span>All Rights Reserved</span>
                  </div>
                </div>
              </MotionDiv>
            </MotionDiv>
          )}
        </AnimatePresence>
      </nav>
    </MotionHeader>
  );
}