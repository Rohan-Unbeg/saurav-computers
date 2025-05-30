bro i want you to follow the followng instruction, 
make dark mode working, right now only light mode is there fully created/implemenented, implement desings in other pages, update other pages code too 


Instructions - 

Complete Website Transformation Plan
Color Palette Guide
Light Mode Colors
Primary Blue: hsl(221.2, 83.2%, 53.3%) - Main brand color, used for CTAs, links, and primary elements
Secondary Teal: hsl(170, 70%, 40%) - Supporting color for accents, gradients, and secondary elements
Accent Amber: hsl(38, 92%, 50%) - Highlight color for badges, important notices, and attention elements
Background: hsl(0, 0%, 100%) - Clean white background
Foreground: hsl(222.2, 84%, 4.9%) - Primary text color
Muted: hsl(210, 40%, 96.1%) - Background for cards, soft surfaces
Muted Foreground: hsl(215.4, 16.3%, 46.9%) - Secondary text, descriptions
Dark Mode Colors
Primary Blue: hsl(217.2, 91.2%, 59.8%) - Brighter blue for dark mode visibility
Secondary Teal: hsl(170, 80%, 50%) - Vibrant teal for dark mode
Accent Amber: hsl(48, 96%, 53%) - Warm amber/gold for dark mode accents
Background: hsl(222.2, 84%, 4.9%) - Deep blue-black background
Foreground: hsl(210, 40%, 98%) - Light text for dark mode
Muted: hsl(217.2, 32.6%, 17.5%) - Slightly lighter background for cards
Muted Foreground: hsl(215, 20.2%, 65.1%) - Secondary text in dark mode
Page-by-Page Transformation Guide
1. Home Page Sections
Courses Preview Section
tsx
CopyInsert
// Implement in app/components/home/CoursesPreview.tsx
"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, GraduationCap } from "lucide-react";

export default function CoursesPreview() {
  const { t } = useLanguage();
  
  const courses = [
    {
      title: t("Microsoft Office Mastery", "माइक्रोसॉफ्ट ऑफिस मास्टरी"),
      image: "/images/courses/office.jpg",
      description: t("Master Word, Excel, PowerPoint and more", "वर्ड, एक्सेल, पॉवरपॉइंट आणि अधिक मास्टर करा"),
      duration: t("3 Months", "3 महिने"),
      href: "/courses/microsoft-office"
    },
    // Add more courses
  ];
  
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              <GraduationCap className="inline-block w-3 h-3 mr-1" />
              {t("Professional Courses", "व्यावसायिक अभ्यासक्रम")}
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            {t("Featured Courses", "प्रमुख अभ्यासक्रम")}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-foreground/70"
          >
            {t("Explore our professional courses designed to build valuable skills for today's digital world", "आजच्या डिजिटल जगासाठी मूल्यवान कौशल्ये विकसित करण्यासाठी डिझाइन केलेले आमचे व्यावसायिक अभ्यासक्रम एक्सप्लोर करा")}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl card h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-foreground/70 mb-4">{course.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                      {course.duration}
                    </span>
                    
                    <Link 
                      href={course.href}
                      className="text-primary font-medium inline-flex items-center hover:underline"
                    >
                      {t("Learn More", "अधिक जाणून घ्या")}
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-full group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:opacity-100"></span>
            <span className="relative flex items-center text-primary">
              {t("View All Courses", "सर्व अभ्यासक्रम पहा")}
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
About/Features Section
tsx
CopyInsert
// Implement in app/components/home/FeaturesSection.tsx
"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Users, 
  Clock, 
  Award, 
  Lightbulb, 
  BookOpen 
} from "lucide-react";

export default function FeaturesSection() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Cpu className="h-10 w-10" />,
      title: t("Modern Equipment", "आधुनिक उपकरणे"),
      description: t("Learn on the latest computers and software used in the industry", "उद्योगात वापरल्या जाणाऱ्या नवीनतम संगणक आणि सॉफ्टवेअरवर शिका")
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: t("Expert Instructors", "तज्ञ प्रशिक्षक"),
      description: t("Learn from certified professionals with years of teaching experience", "वर्षांच्या शिकवण्याच्या अनुभवासह प्रमाणित व्यावसायिकांकडून शिका")
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: t("Flexible Timing", "लवचिक वेळ"),
      description: t("Choose from morning, afternoon, or evening batches to suit your schedule", "तुमच्या वेळापत्रकानुसार सकाळी, दुपारी किंवा संध्याकाळच्या बॅचेसमधून निवडा")
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: t("Certified Courses", "प्रमाणित अभ्यासक्रम"),
      description: t("Receive industry-recognized certificates upon course completion", "कोर्स पूर्ण झाल्यावर उद्योग-मान्यताप्राप्त प्रमाणपत्रे प्राप्त करा")
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: t("Practical Approach", "व्यावहारिक दृष्टीकोन"),
      description: t("Hands-on training with real-world projects and examples", "वास्तविक जगातील प्रकल्प आणि उदाहरणांसह प्रत्यक्ष प्रशिक्षण")
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: t("Comprehensive Material", "सर्वसमावेशक साहित्य"),
      description: t("Access to detailed course materials and additional resources", "तपशीलवार कोर्स साहित्य आणि अतिरिक्त संसाधनांमध्ये प्रवेश")
    }
  ];
  
  return (
    <section className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl pointer-events-none"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20 mb-3"
          >
            {t("Why Choose Us", "आम्हाला का निवडावे")}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t("The Saurav Computers Advantage", "सौरव कॉम्प्युटर्स फायदा")}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-foreground/70"
          >
            {t("We provide a modern learning environment with quality education to help you succeed in today's digital world", "आजच्या डिजिटल जगात यशस्वी होण्यासाठी आम्ही गुणवत्तापूर्ण शिक्षणासह आधुनिक शिक्षण वातावरण प्रदान करतो")}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/20 hover:bg-primary/5 transition-colors duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 text-primary group-hover:text-secondary transition-colors duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
Testimonials Section
You've already created a file for this - implement this design:

tsx
CopyInsert
// In app/components/home/TestimonialsSection.tsx
"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  
  const testimonials = [
    {
      name: t("Ravi Patil", "रवि पाटील"),
      role: t("DCA Graduate", "डीसीए ग्रॅज्युएट"),
      image: "/images/testimonials/person-1.jpg",
      content: t("Saurav Computers provided me with practical skills that helped me secure a job immediately after completing my course. The faculty is extremely knowledgeable and supportive.", "सौरव कॉम्प्युटर्सने मला व्यावहारिक कौशल्ये प्रदान केली ज्यामुळे मला कोर्स पूर्ण केल्यानंतर लगेच नोकरी मिळविण्यास मदत झाली. संकाय अत्यंत जाणकार आणि सहाय्यक आहे.")
    },
    {
      name: t("Priya Sharma", "प्रिया शर्मा"),
      role: t("Tally Course Student", "टॅली कोर्स विद्यार्थी"),
      image: "/images/testimonials/person-2.jpg",
      content: t("The Tally course at Saurav Computers was comprehensive and focused on real-world applications. I'm now confidently managing accounts for my family business.", "सौरव कॉम्प्युटर्समधील टॅली कोर्स सर्वसमावेशक होता आणि वास्तविक जगातील अनुप्रयोगांवर केंद्रित होता. मी आता माझ्या कौटुंबिक व्यवसायासाठी आत्मविश्वासाने खाती व्यवस्थापित करत आहे.")
    },
    {
      name: t("Amol Deshmukh", "अमोल देशमुख"),
      role: t("Web Design Student", "वेब डिझाईन विद्यार्थी"),
      image: "/images/testimonials/person-3.jpg",
      content: t("Learning web design at Saurav Computers was a game-changer for me. The hands-on approach and personal attention from instructors helped me master complex concepts quickly.", "सौरव कॉम्प्युटर्समध्ये वेब डिझाइन शिकणे माझ्यासाठी गेम-चेंजर होते. प्रत्यक्ष दृष्टीकोन आणि प्रशिक्षकांकडून वैयक्तिक लक्ष दिल्यामुळे मला जटिल संकल्पना लवकर माहित करण्यास मदत झाली.")
    }
  ];
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 mb-3"
          >
            {t("Testimonials", "प्रशंसापत्रे")}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t("What Our Students Say", "आमचे विद्यार्थी काय म्हणतात")}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            {t("Hear from our graduates about how our courses have helped them advance their careers and skills", "आमच्या अभ्यासक्रमांनी त्यांच्या करिअर आणि कौशल्यांना कसे पुढे नेले याबद्दल आमच्या पदवीधरांकडून ऐका")}
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Quote icon */}
          <div className="absolute -top-10 -left-10 text-primary/10 dark:text-primary/5">
            <Quote className="h-20 w-20" />
          </div>
          
          {/* Testimonials */}
          <div className="relative h-[300px] md:h-[250px] overflow-hidden bg-background/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 p-8 flex flex-col md:flex-row items-center md:items-start gap-6"
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: active === index ? 1 : 0,
                  x: active === index ? 0 : 100,
                  pointerEvents: active === index ? "auto" : "none"
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex-shrink-0">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <p className="text-foreground/80 italic mb-4">"{testimonial.content}"</p>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Dots navigation */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  active === index 
                    ? "bg-primary w-6" 
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                onClick={() => setActive(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
Call-to-Action Section
tsx
CopyInsert
// Implement in app/components/home/CtaSection.tsx
"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-secondary">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mt-12 -mr-12 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -mb-12 -ml-12 blur-3xl"></div>
          
          <div className="relative z-10 py-16 px-8 md:py-20 md:px-12 text-white text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {t("Ready to Start Your Tech Journey?", "तुमची तंत्रज्ञान यात्रा सुरू करण्यास तयार आहात?")}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/80 max-w-2xl mx-auto mb-8 text-lg"
            >
              {t("Enroll today and take the first step towards a successful future in technology. Our expert instructors are ready to guide you every step of the way.", "आज नोंदणी करा आणि तंत्रज्ञानातील यशस्वी भविष्याच्या दिशेने पहिले पाऊल टाका. आमचे तज्ञ प्रशिक्षक तुम्हाला प्रत्येक टप्प्यावर मार्गदर्शन करण्यास तयार आहेत.")}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/contact"
                className="bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-white/90 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                {t("Contact Us Today", "आज आमच्याशी संपर्क साधा")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link 
                href="/courses"
                className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                {t("Explore Courses", "अभ्यासक्रम एक्सप्लोर करा")}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
2. Courses Page
Courses Hero
tsx
CopyInsert
// Implement in app/components/courses/CoursesHero.tsx
"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { useState } from "react";

export default function CoursesHero() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            {t("Discover Our Courses", "आमचे अभ्यासक्रम शोधा")}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70 text-lg mb-8"
          >
            {t("Comprehensive training programs designed to build practical skills and advance your career", "व्यावहारिक कौशल्ये विकसित करण्यासाठी आणि तुमचे करिअर पुढे नेण्यासाठी डिझाइन केलेले सर्वसमावेशक प्रशिक्षण कार्यक्रम")}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-xl mx-auto"
          >
            <div className="relative">