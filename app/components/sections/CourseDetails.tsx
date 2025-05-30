"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { motion } from "framer-motion";

interface Detail {
  title: {
    en: string;
    mr: string;
  };
  value: {
    en: string;
    mr: string;
  };
}

interface CourseDetailsProps {
  details: Detail[];
}

export default function CourseDetails({ details }: CourseDetailsProps) {
  const { t } = useLanguage();

  return (
    <section id="course-details" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("Course Details", "अभ्यासक्रम तपशील")}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-card border border-border rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">
                {t(detail.title.en, detail.title.mr)}
              </h3>
              <p className="text-muted-foreground">
                {t(detail.value.en, detail.value.mr)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}