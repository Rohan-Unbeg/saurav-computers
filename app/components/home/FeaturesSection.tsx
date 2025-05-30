"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageProvider";
import { Laptop2, Code2, Briefcase, Lightbulb } from "lucide-react";

const features = [
  {
    icon: <Laptop2 className="w-8 h-8 text-primary" />,
    title: "Computer Courses",
    titleMr: "संगणक कोर्सेस",
    description: "Comprehensive computer training from basics to advanced levels.",
    descriptionMr: "प्राथमिक ते प्रगत स्तरापर्यंत संपूर्ण संगणक प्रशिक्षण.",
    color: "from-blue-500/10 to-blue-500/5",
    delay: 0.1
  },
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: "Programming",
    titleMr: "प्रोग्रॅमिंग",
    description: "Learn popular programming languages and frameworks.",
    descriptionMr: "लोकप्रिय प्रोग्रामिंग भाषा आणि फ्रेमवर्क शिका.",
    color: "from-purple-500/10 to-purple-500/5",
    delay: 0.2
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Job Readiness",
    titleMr: "नोकरीसाठी तयारी",
    description: "Get job-ready with our career-oriented training programs.",
    descriptionMr: "आमच्या करिअर-केंद्रित प्रशिक्षण कार्यक्रमांसह नोकरीसाठी तयार व्हा.",
    color: "from-amber-500/10 to-amber-500/5",
    delay: 0.3
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Digital Literacy",
    titleMr: "डिजिटल साक्षरता",
    description: "Essential digital skills for the modern world.",
    descriptionMr: "आधुनिक जगासाठी आवश्यक डिजिटल कौशल्ये.",
    color: "from-emerald-500/10 to-emerald-500/5",
    delay: 0.4
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
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

export default function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
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
            {t("Our Services", "आमची सेवा")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6">
            {t("What We Offer", "आम्ही काय देतो")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Comprehensive computer education and digital services to empower your future.",
              "आपल्या भविष्यासाठी सक्षम करणारी संपूर्ण संगणक शिक्षण आणि डिजिटल सेवा."
            )}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`group relative p-6 rounded-2xl bg-gradient-to-br ${feature.color} border border-border/10 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1`}
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-background/80 backdrop-blur-sm flex items-center justify-center mb-6 shadow-sm border border-border/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {t(feature.title, feature.titleMr)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(feature.description, feature.descriptionMr)}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform duration-300">
                  {t("Learn more", "अधिक जाणा")}
                  <svg
                    className="w-4 h-4 ml-1"
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
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
