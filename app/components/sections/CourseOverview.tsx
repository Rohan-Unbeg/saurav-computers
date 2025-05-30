"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { motion } from "framer-motion";

interface CourseOverviewProps {
  title: {
    en: string;
    mr: string;
  };
  description: {
    en: string;
    mr: string;
  };
  benefits: {
    en: string[];
    mr: string[];
  };
  image: string;
}

export default function CourseOverview({ title, description, benefits, image }: CourseOverviewProps) {
  const { t } = useLanguage();

  return (
    <section id="overview" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t(title.en, title.mr)}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-foreground mb-6">
              {t(description.en, description.mr)}
            </p>
            
            <h3 className="font-medium text-lg mb-3">{t("Benefits:", "फायदे:")}</h3>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              {benefits.en.map((benefit, index) => (
                <li key={index}>{t(benefit, benefits.mr[index])}</li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src={image} 
              alt="Course Overview"
              className="w-full h-[300px] object-cover rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}