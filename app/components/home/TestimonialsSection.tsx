"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageProvider";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Web Developer",
    content: "The courses at Saurav Computers transformed my career. The hands-on training and expert guidance helped me land my dream job as a web developer.",
    contentMr: "सौरव कॉम्प्युटर्समधील अभ्यासक्रमांनी माझ्या करिअरमध्ये मोठा बदल घडवून आणला. प्रात्यक्षिक प्रशिक्षण आणि तज्ञ मार्गदर्शनामुळे मला वेब डेव्हलपर म्हणून माझ्या स्वप्नांची नोकरी मिळाली.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=faces&q=80"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Graphic Designer",
    content: "Excellent learning experience! The instructors are knowledgeable and supportive. I highly recommend their graphic design course.",
    contentMr: "उत्कृष्ट शिक्षण अनुभव! प्रशिक्षक ज्ञानी आणि सहाय्यक आहेत. मी त्यांचा ग्राफिक डिझाइन कोर्स जोरदार शिफारस करतो.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces&q=80"
  },
  {
    id: 3,
    name: "Amit Deshmukh",
    role: "Mobile App Developer",
    content: "The mobile app development course was comprehensive and up-to-date with industry standards. The practical projects were incredibly valuable.",
    contentMr: "मोबाईल अॅप डेव्हलपमेंट कोर्स संपूर्ण आणि उद्योग मानकांनुसार अद्ययावत होता. व्यावहारिक प्रकल्प अत्यंत मौल्यवान होते.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&q=80"
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "UI/UX Designer",
    content: "The design courses here are top-notch. I learned industry-standard tools and got hands-on experience with real projects.",
    contentMr: "येथील डिझाइन कोर्सेस अत्यंत उत्कृष्ट आहेत. मी उद्योग-मानक साधने शिकलो आणि वास्तविक प्रकल्पांसह प्रात्यक्षिक अनुभव मिळवला.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces&q=80"
  },
  {
    id: 5,
    name: "Vikram Joshi",
    role: "Full Stack Developer",
    content: "The full-stack development program covered everything from frontend to backend. The instructors are industry experts.",
    contentMr: "फुल-स्टॅक डेव्हलपमेंट प्रोग्राममध्ये फ्रंटएंड ते बॅकएंड पर्यंत सर्व काही समाविष्ट होते. प्रशिक्षक उद्योगातील तज्ञ आहेत.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces&q=80"
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const TestimonialCard = ({ testimonial, isActive, t }: { testimonial: any, isActive: boolean, t: any }) => {
  return (
    <div className={`relative p-6 pt-16 rounded-2xl bg-background border-2 border-border hover:border-primary/50 transition-all duration-300 flex flex-col ${isActive ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
      {/* Image container with half-in, half-out effect */}
      <div className="absolute -top-16 left-6 w-28 h-28 z-20">
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-background shadow-md">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={112}
            height={112}
            className="w-full h-full object-cover"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-1">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-border/50'}`} 
            />
          ))}
        </div>
        
        <Quote className="w-8 h-8 text-accent/30" />
        
        <p className="text-muted-foreground text-lg leading-relaxed italic px-2">
          "{t(testimonial.content, testimonial.contentMr)}"
        </p>
        
        <div className="pt-2 border-t border-border">
          <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
          <p className="text-muted-foreground mt-1">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative py-20 bg-background">
      <div className="absolute inset-0 -z-10 overflow-visible">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t("Testimonials", "अभिप्राय")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6">
            {t("What Our Students Say", "आमचे विद्यार्थी काय म्हणतात")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Hear from the people who have experienced our training programs.",
              "आमच्या प्रशिक्षण कार्यक्रमांचा अनुभव घेतलेल्या लोकांकडून ऐका."
            )}
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-8">
          <div 
            className="relative min-h-[300px] overflow-visible pt-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                currentIndex === index && (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -80 }}
                    transition={{ 
                      type: 'spring',
                      damping: 20,
                      stiffness: 300
                    }}
                    className="absolute inset-0 px-4 sm:px-8 py-6 overflow-visible"
                  >
                    <div className="relative w-full overflow-visible">
                      <TestimonialCard 
                        testimonial={testimonial}
                        isActive={true}
                        t={t}
                      />
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border/20 flex items-center justify-center text-foreground/80 hover:text-primary hover:border-primary/40 transition-all z-10 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border/20 flex items-center justify-center text-foreground/80 hover:text-primary hover:border-primary/40 transition-all z-10 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-gradient-to-r from-primary to-secondary' 
                    : 'bg-border/30 hover:bg-border/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}