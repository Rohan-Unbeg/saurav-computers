"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Module {
  title: {
    en: string;
    mr: string;
  };
  content: {
    en: string;
    mr: string;
  };
}

interface CourseSyllabusProps {
  modules: Module[];
}

export default function CourseSyllabus({ modules }: CourseSyllabusProps) {
  const { t } = useLanguage();
  const [activeModule, setActiveModule] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setActiveModule(activeModule === index ? null : index);
  };

  return (
    <section id="syllabus" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("Syllabus", "अभ्यासक्रम")}
        </h2>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {modules.map((module, index) => (
            <div 
              key={index} 
              className="border border-border rounded-lg mb-4 overflow-hidden"
            >
              <button
                className={`w-full text-left p-4 font-medium text-lg flex justify-between items-center ${
                  activeModule === index ? "bg-muted" : "bg-background"
                }`}
                onClick={() => toggleModule(index)}
              >
                <span>{t(module.title.en, module.title.mr)}</span>
                {activeModule === index ? (
                  <ChevronUp className="text-primary" size={20} />
                ) : (
                  <ChevronDown className="text-primary" size={20} />
                )}
              </button>
              
              <div 
                className={`p-4 bg-background text-muted-foreground transition-all duration-300 ${
                  activeModule === index 
                    ? "max-h-[200px] opacity-100" 
                    : "max-h-0 opacity-0 overflow-hidden p-0"
                }`}
              >
                <p>{t(module.content.en, module.content.mr)}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}