"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: { en: "Rahul Patil", mr: "राहुल पाटील" },
    text: {
      en: "The MS-CIT course was well-structured and helped me gain confidence in using computers!",
      mr: "MS-CIT अभ्यासक्रम खूप चांगला होता आणि मला संगणक वापरण्यात आत्मविश्वास मिळाला!"
    },
    avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    name: { en: "Sneha Deshmukh", mr: "स्नेहा देशमुख" },
    text: {
      en: "The Tally course transformed my career in accounting. Highly recommended!",
      mr: "टॅली अभ्यासक्रमाने माझी अकाउंटिंगमधील करिअर बदलली. अत्यंत शिफारस!"
    },
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=100&q=80"
  }
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("What Our Students Say", "आमचे विद्यार्थी काय म्हणतात")}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-[hsl(var(--primary)/5%)] dark:bg-[hsl(var(--primary)/10%)] p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={t(testimonial.name.en, testimonial.name.mr)} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary flex-shrink-0"
                />
                <div>
                  <p className="italic text-foreground mb-4 relative pl-6">
                    <span className="absolute left-0 top-0 text-primary opacity-30 text-2xl">&ldquo;</span>
                    {t(testimonial.text.en, testimonial.text.mr)}
                  </p>
                  <h4 className="font-semibold text-primary">
                    {t(testimonial.name.en, testimonial.name.mr)}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}