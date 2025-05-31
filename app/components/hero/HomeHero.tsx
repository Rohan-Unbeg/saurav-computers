"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { useTheme } from "@/app/context/ThemeProvider";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle2, Sparkles } from "lucide-react";

export default function HomeHero() {
  const { t, lang } = useLanguage();
  const { theme } = useTheme();
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  const featureVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { 
        delay: i * 0.1 + 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    })
  };

  // Features list
  const features = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      text: t("Modern Curriculum", "आधुनिक अभ्यासक्रम")
    },
    {
      icon: <CheckCircle2 className="h-5 w-5" />,
      text: t("Certified Courses", "प्रमाणित अभ्यासक्रम")
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      text: t("Expert Guidance", "तज्ञ मार्गदर्शन")
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80"
            alt="Saurav Computers Classroom"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-background/90" />
        </div>
      </div>

      {/* Hero content */}
      <div className="container relative z-10 px-4 py-20 md:py-28 lg:py-36 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-8"
          >
            {/* Badge */}
            <motion.div variants={childVariants} className="self-start">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 backdrop-blur-sm">
                <Sparkles className="mr-1 h-3 w-3" />
                {t("Transforming Education", "शिक्षण परिवर्तित करणे")}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              variants={childVariants}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark"
            >
              {t(
                "Empower Your Future with Saurav Computers",
                "सौरव कॉम्प्युटरसह तुमचे भविष्य सशक्त करा"
              )}
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              variants={childVariants}
              className="text-base md:text-lg text-foreground/80 max-w-xl leading-relaxed"
            >
              {t(
                "Premier Computer Education & Digital Services in Shendurjan, Maharashtra - building tech skills for tomorrow's opportunities.",
                "शेंडुर्जन, महाराष्ट्रातील प्रीमियर संगणक शिक्षण आणि डिजिटल सेवा - उद्याच्या संधींसाठी तंत्रज्ञान कौशल्ये विकसित करणे."
              )}
            </motion.p>

            {/* Features */}
            <motion.div variants={childVariants} className="flex flex-wrap gap-4 mt-2">
              {features.map((feature, i) => (
                <motion.div 
                  key={i}
                  custom={i}
                  variants={featureVariants}
                  className="flex items-center px-4 py-2 bg-background/50 backdrop-blur-sm rounded-full border border-border shadow-sm"
                >
                  <span className="mr-2 text-primary dark:text-primary-dark">{feature.icon}</span>
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={childVariants} className="flex flex-wrap gap-4 mt-2 rohan">
              <Link
                href="/courses"
                className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-full group bg-gradient-to-br from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-out"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary to-secondary transition-all duration-300 ease-out transform group-hover:scale-105"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition-all duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-primary-dark opacity-30 group-hover:rotate-90 ease-out"></span>
                <span className="relative flex items-center">
                  {t("Explore Courses", "अभ्यासक्रम एक्सप्लोर करा")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-primary dark:text-primary-dark border-2 border-primary dark:border-primary-dark rounded-full group hover:bg-primary/5 transition-all duration-300"
              >
                <span className="relative">{t("Contact Us", "आमच्याशी संपर्क साधा")}</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right content - Floating card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-md">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
              
              {/* Main card */}
              <motion.div 
                className="relative z-10 bg-background/70 backdrop-blur-lg border border-border/40 shadow-lg rounded-2xl overflow-hidden p-1"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 2,
                  ease: "easeInOut" 
                }}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden bg-background shadow-lg border border-border/20 hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute inset-0">
                    <div className="absolute inset-0">
                      <Image
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Students learning computers"
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover transition duration-700 ease-in-out hover:scale-105 opacity-20"
                        priority
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background/90"></div>
                  </div>
                  
                  {/* Overlaid content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        {t("Computer Training", "संगणक प्रशिक्षण")}
                      </h3>
                      <h4 className="text-lg font-semibold mb-2 text-foreground/90">
                        {t("Start Your Tech Journey", "आपली तंत्रज्ञान यात्रा सुरू करा")}
                      </h4>
                      <p className="text-sm text-foreground/80">
                        {t("Join our flagship computer courses", "आमच्या फ्लॅगशिप कंप्युटर कोर्समध्ये सामील व्हा")}
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-border/20">
                      <div className="flex -space-x-2">
                        {[
                          { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80', name: 'Student 1' },
                          { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', name: 'Student 2' },
                          { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80', name: 'Student 3' }
                        ].map((student, i) => (
                          <div key={i} className="w-8 h-8 rounded-full overflow-hidden border-2 border-background relative group">
                            <Image
                              src={student.src}
                              alt={student.name}
                              width={32}
                              height={32}
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-background text-foreground rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                              {student.name}
                            </span>
                          </div>
                        ))}
                        <div className="w-8 h-8 rounded-full bg-foreground/5 border-2 border-background flex items-center justify-center text-xs font-medium text-foreground/70">
                          +{Math.floor(Math.random() * 20) + 5}
                        </div>
                      </div>
                      <span className="text-xs font-semibold bg-primary/10 text-primary dark:text-primary-dark py-1.5 px-3 rounded-full">
                        {t("Popular", "लोकप्रिय")}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - centered with more spacing */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center mt-20 sm:mt-24">
        <motion.div 
          className="flex flex-col items-center"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5] 
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut" 
          }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 dark:border-primary-dark/30 flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-primary dark:bg-primary-dark rounded-full"
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