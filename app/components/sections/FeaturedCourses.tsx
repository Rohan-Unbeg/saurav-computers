"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import Link from "next/link";
import { motion } from "framer-motion";

const courses = [
  {
    id: "ms-cit",
    title: { en: "MS-CIT Course", mr: "MS-CIT अभ्यासक्रम" },
    description: {
      en: "Master computer literacy with our government-recognized program.",
      mr: "सरकार मान्यताप्राप्त कार्यक्रमासह संगणक साक्षरता शिका."
    },
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    link: "/courses/ms-cit"
  },
  {
    id: "programming",
    title: { en: "Programming Courses", mr: "प्रोग्रामिंग अभ्यासक्रम" },
    description: {
      en: "Learn Python, Java, and Web Development from experts.",
      mr: "तज्ञांकडून Python, Java आणि वेब डेव्हलपमेंट शिका."
    },
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
    link: "/courses/programming"
  },
  {
    id: "tally",
    title: { en: "Tally Course", mr: "टॅली अभ्यासक्रम" },
    description: {
      en: "Excel in accounting with Tally ERP 9 certification.",
      mr: "टॅली ERP 9 प्रमाणपत्रासह अकाउंटिंगमध्ये उत्कृष्ट व्हा."
    },
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
    link: "/courses/tally"
  }
];

export default function FeaturedCourses() {
  const { t } = useLanguage();

  return (
    <section id="courses" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("Featured Courses", "विशेष अभ्यासक्रम")}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-all hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img 
                src={course.image} 
                alt={t(course.title.en, course.title.mr)} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{t(course.title.en, course.title.mr)}</h3>
                <p className="text-muted-foreground mb-6">{t(course.description.en, course.description.mr)}</p>
                <Link 
                  href={course.link}
                  className="inline-block bg-transparent hover:bg-primary text-primary hover:text-primary-foreground py-2 px-4 rounded-full border-2 border-primary transition-colors font-semibold text-sm"
                >
                  {t("Learn More", "अधिक जाणून घ्या")}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/courses"
            className="bg-primary hover:bg-secondary text-primary-foreground font-semibold py-3 px-6 rounded-full inline-block transition-all hover:-translate-y-0.5"
          >
            {t("View All Courses", "सर्व अभ्यासक्रम पहा")}
          </Link>
        </div>
      </div>
    </section>
  );
}