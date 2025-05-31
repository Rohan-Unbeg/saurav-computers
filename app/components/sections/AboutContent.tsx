"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { motion } from "framer-motion";
import { Code, ShieldCheck, Globe, Smartphone, BookOpen, Award } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  })
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  })
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  })
};

const features = [
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: "Computer Education",
    titleMr: "संगणक शिक्षण",
    description: "From basic computer literacy to advanced programming, we offer courses for all skill levels.",
    descriptionMr: "मूलभूत संगणक साक्षरतेपासून ते प्रगत प्रोग्रामिंगपर्यंत, आम्ही सर्व कौशल्य स्तरांसाठी अभ्यासक्रम देतो."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: "Government Services",
    titleMr: "सरकारी सेवा",
    description: "Access to e-governance services, making it easier to connect with government schemes.",
    descriptionMr: "ई-गव्हर्नन्स सेवांमध्ये प्रवेश सुलभ करतो, सरकारी योजनांशी जोडणे सोपे करतो."
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Digital Solutions",
    titleMr: "डिजिटल समाधाने",
    description: "From printing to SBI Kiosk Banking, we provide essential digital services for daily needs.",
    descriptionMr: "प्रिंटिंगपासून ते SBI किओस्क बँकिंगपर्यंत, आम्ही दैनंदिन गरजांसाठी आवश्यक डिजिटल सेवा देतो."
  },
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    title: "Certified Courses",
    titleMr: "प्रमाणित अभ्यासक्रम",
    description: "Industry-recognized certifications to boost your career prospects.",
    descriptionMr: "उद्योग-मान्यता प्राप्त प्रमाणपत्रे तुमच्या करिअरच्या संधी वाढविण्यासाठी."
  }
];

export default function AboutContent() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {/* Left column - Mission */}
          <motion.div
            variants={fadeInLeft}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
            
            <motion.div 
              variants={fadeInLeft}
              custom={0.2}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              {t("Our Journey", "आमचा प्रवास")}
            </motion.div>
            
            <motion.h2 
              variants={fadeInLeft}
              custom={0.3}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            >
              {t("Our Mission", "आमचे मिशन")}
            </motion.h2>
            
            <motion.p 
              variants={fadeInLeft}
              custom={0.4}
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
            >
              {t(
                "At Saurav Computers, we believe in empowering individuals through technology education and digital access. Our mission is to bridge the digital divide in rural Maharashtra by providing quality computer education and essential e-governance services to the community of Shendurjan and surrounding areas.",
                "सौरव कॉम्प्युटर्स येथे, आम्ही तंत्रज्ञान शिक्षण आणि डिजिटल अॅक्सेसद्वारे व्यक्तींना सशक्त करण्यावर विश्वास ठेवतो. आमचे मिशन शेंडुर्जन आणि आसपासच्या भागातील समुदायाला दर्जेदार संगणक शिक्षण आणि आवश्यक ई-गव्हर्नन्स सेवा प्रदान करून ग्रामीण महाराष्ट्रातील डिजिटल विभाजन दूर करणे आहे."
              )}
            </motion.p>
            
            <motion.p 
              variants={fadeInLeft}
              custom={0.5}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              {t(
                "Established in 2025, we have quickly grown to become a trusted hub for computer literacy, skill development, and digital services in the region. We take pride in our personalized approach to education, ensuring that each student receives the attention and guidance they need to succeed in today's digital world.",
                "२०२५ मध्ये स्थापित, आम्ही प्रदेशातील संगणक साक्षरता, कौशल्य विकास आणि डिजिटल सेवांसाठी विश्वसनीय केंद्र बनण्यासाठी झपाट्याने वाढलो आहोत. आम्ही शिक्षणाच्या वैयक्तिकृत दृष्टिकोनावर अभिमान बाळगतो, हे सुनिश्चित करतो की प्रत्येक विद्यार्थ्याला आजच्या डिजिटल जगात यशस्वी होण्यासाठी आवश्यक असलेले लक्ष आणि मार्गदर्शन मिळते."
              )}
            </motion.p>

            <motion.div 
              variants={fadeInLeft}
              custom={0.6}
              className="flex items-center gap-4 mt-8"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold"
                  >
                    {i}+
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                {t(
                  "Years of excellence in computer education",
                  "संगणक शिक्षणातील उत्कृष्टतेचे वर्षे"
                )}
              </p>
            </motion.div>
          </motion.div>
          
          {/* Right column - Features */}
          <motion.div
            variants={fadeInRight}
            className="space-y-8"
          >
            <motion.div 
              variants={fadeInRight}
              custom={0.2}
              className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-2"
            >
              {t("What We Offer", "आम्ही काय ऑफर करतो")}
            </motion.div>
            
            <motion.h2 
              variants={fadeInRight}
              custom={0.3}
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              {t(
                "Empowering the community through technology",
                "तंत्रज्ञानाद्वारे समुदायाला सक्षम करत आहोत"
              )}
            </motion.h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeInRight}
                  custom={0.3 + (i * 0.1)}
                  className="group relative p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-border/40 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t(feature.title, feature.titleMr)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(feature.description, feature.descriptionMr)}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              variants={fadeInRight}
              custom={0.8}
              className="pt-4"
            >
              <p className="text-muted-foreground mb-6">
                {t(
                  "Join us in our mission to create a digitally empowered community.",
                  "डिजिटलदृष्ट्या सक्षम समुदाय निर्माण करण्याच्या आमच्या मोहिमेत सामील व्हा."
                )}
              </p>
              <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-primary to-secondary text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <span className="relative z-10 flex items-center">
                  {t("Explore Our Courses", "आमचे अभ्यासक्रम एक्सप्लोर करा")}
                  <BookOpen className="ml-2 h-4 w-4" />
                </span>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}