"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { motion } from "framer-motion";

interface CourseVideoProps {
  title: {
    en: string;
    mr: string;
  };
  videoUrl: string;
}

export default function CourseVideo({ title, videoUrl }: CourseVideoProps) {
  const { t } = useLanguage();

  return (
    <section id="course-video" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t(title.en, title.mr)}
        </h2>
        
        <motion.div
          className="relative pt-[56.25%] w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={videoUrl}
            title={t(title.en, title.mr)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}