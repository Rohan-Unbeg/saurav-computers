"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageProvider";
import { Code, Laptop, Database, Smartphone, Globe, Cpu } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    icon: <Code className="w-6 h-6 text-blue-500" />,
    title: "Programming Fundamentals",
    titleMr: "प्रोग्रामिंगची मूलभूत माहिती",
    description: "Learn the basics of programming with our beginner-friendly course.",
    descriptionMr: "आमच्या सुरुवातीच्या मित्रांसाठी प्रोग्रामिंगची मूलभूत माहिती शिका.",
    duration: "2 Months",
    level: "Beginner",
    color: "border-blue-500/20 hover:border-blue-500/40",
    bgColor: "bg-blue-500/5"
  },
  {
    icon: <Laptop className="w-6 h-6 text-purple-500" />,
    title: "Web Development",
    titleMr: "वेब डेव्हलपमेंट",
    description: "Master full-stack web development with modern technologies.",
    descriptionMr: "आधुनिक तंत्रज्ञानासह पूर्ण-स्टॅक वेब डेव्हलपमेंट मास्टर करा.",
    duration: "4 Months",
    level: "Intermediate",
    color: "border-purple-500/20 hover:border-purple-500/40",
    bgColor: "bg-purple-500/5"
  },
  {
    icon: <Smartphone className="w-6 h-6 text-amber-500" />,
    title: "Mobile App Development",
    titleMr: "मोबाईल अॅप डेव्हलपमेंट",
    description: "Build cross-platform mobile applications with industry standards.",
    descriptionMr: "उद्योग मानकांसह क्रॉस-प्लॅटफॉर्म मोबाईल अॅप्लिकेशन्स तयार करा.",
    duration: "3 Months",
    level: "Intermediate",
    color: "border-amber-500/20 hover:border-amber-500/40",
    bgColor: "bg-amber-500/5"
  },
  {
    icon: <Database className="w-6 h-6 text-emerald-500" />,
    title: "Database Management",
    titleMr: "डेटाबेस व्यवस्थापन",
    description: "Learn to design and manage databases effectively.",
    descriptionMr: "डेटाबेस डिझाइन आणि व्यवस्थापित करणे प्रभावीपणे शिका.",
    duration: "2 Months",
    level: "Beginner",
    color: "border-emerald-500/20 hover:border-emerald-500/40",
    bgColor: "bg-emerald-500/5"
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function CoursesSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t("Our Courses", "आमचे कोर्सेस")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6">
            {t("Popular Programs", "लोकप्रिय प्रोग्राम")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Comprehensive courses designed to kickstart your tech career.",
              "तुमच्या तंत्रज्ञान करिअरला सुरुवात करण्यासाठी डिझाइन केलेले विस्तृत अभ्यासक्रम."
            )}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className={`group relative p-6 rounded-2xl bg-background/50 backdrop-blur-sm border ${course.color} transition-all duration-300 hover:shadow-lg`}
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className={`absolute -top-6 left-6 w-14 h-14 rounded-xl ${course.bgColor} flex items-center justify-center border ${course.color} shadow-sm`}>
                {course.icon}
              </div>
              <div className="pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                    {course.duration}
                  </span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {t(course.title, course.titleMr)}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t(course.description, course.descriptionMr)}
                </p>
                <Link 
                  href="/courses" 
                  className="inline-flex items-center text-sm font-medium text-primary group-hover:underline"
                >
                  {t("View Course", "कोर्स पहा")}
                  <svg
                    className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/courses"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg hover:shadow-primary/30"
          >
            {t("View All Courses", "सर्व कोर्सेस पहा")}
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
