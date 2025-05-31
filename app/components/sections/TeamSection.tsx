"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { motion } from "framer-motion";
import { Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: { en: "Saurav Patil", mr: "सौरव पाटील" },
    role: { en: "Founder & Director", mr: "संस्थापक आणि संचालक" },
    bio: {
      en: "A computer science graduate with a passion for digital literacy and rural development. Committed to bridging the digital divide in rural Maharashtra.",
      mr: "डिजिटल साक्षरता आणि ग्रामीण विकासाची आवड असलेले संगणक शास्त्र पदवीधर. ग्रामीण महाराष्ट्रातील डिजिटल विभाजन दूर करण्यासाठी वचनबद्ध."
    },
    image: "/team/saurav.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "saurav@example.com"
    }
  },
  {
    name: { en: "Priya Deshmukh", mr: "प्रिया देशमुख" },
    role: { en: "Lead Instructor", mr: "प्रमुख प्रशिक्षक" },
    bio: {
      en: "Experienced educator specializing in MS Office and programming languages. Passionate about making technology accessible to all.",
      mr: "MS Office आणि प्रोग्रॅमिंग भाषांमध्ये विशेषज्ञता असलेले अनुभवी शिक्षक. तंत्रज्ञान सर्वांसाठी सुलभ करण्याबद्दल उत्सुक."
    },
    image: "/team/priya.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "priya@example.com"
    }
  },
  {
    name: { en: "Rahul Sharma", mr: "राहुल शर्मा" },
    role: { en: "Technical Trainer", mr: "तांत्रिक प्रशिक्षक" },
    bio: {
      en: "Expert in web development and digital marketing. Loves teaching and helping students build real-world projects.",
      mr: "वेब डेव्हलपमेंट आणि डिजिटल मार्केटिंगमध्ये तज्ञ. शिकवणे आणि विद्यार्थ्यांना वास्तविक जगातील प्रकल्प तयार करण्यास मदत करणे आवडते."
    },
    image: "/team/rahul.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "rahul@example.com"
    }
  },
  {
    name: { en: "Anjali Joshi", mr: "अंजली जोशी" },
    role: { en: "Student Counselor", mr: "विद्यार्थी सल्लागार" },
    bio: {
      en: "Dedicated to guiding students in choosing the right career path in technology and digital fields.",
      mr: "विद्यार्थ्यांना तंत्रज्ञान आणि डिजिटल क्षेत्रात योग्य करिअर मार्ग निवडण्यास मार्गदर्शन करण्यासाठी समर्पित."
    },
    image: "/team/anjali.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "anjali@example.com"
    }
  }
];

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

export default function TeamSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          <motion.div 
            variants={fadeInUp}
            custom={0.1}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            {t("Our Team", "आमची टीम")}
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            custom={0.2}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            {t("Meet Our Expert Team", "आमच्या तज्ञांची ओळख करून घ्या")}
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            custom={0.3}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {t(
              "Passionate educators and technology enthusiasts dedicated to your success.",
              "तुमच्या यशासाठी समर्पित उत्साही शिक्षक आणि तंत्रज्ञानाचे प्रेमी."
            )}
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={0.3 + (index * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-background/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/40 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={t(member.name.en, member.name.mr)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 pt-16 bg-gradient-to-t from-background/90 to-transparent">
                  <h3 className="text-xl font-bold">
                    {t(member.name.en, member.name.mr)}
                  </h3>
                  <p className="text-primary font-medium">
                    {t(member.role.en, member.role.mr)}
                  </p>
                </div>
                
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={member.social.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors border border-border/40"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a 
                    href={member.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors border border-border/40"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors border border-border/40"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground text-sm">
                  {t(member.bio.en, member.bio.mr)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          variants={fadeInUp}
          custom={0.6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t(
              "Our team is dedicated to providing the best learning experience and digital services to the community.",
              "आमची टीम समुदायाला सर्वोत्तम शिकण्याचा अनुभव आणि डिजिटल सेवा प्रदान करण्यासाठी समर्पित आहे."
            )}
          </p>
          <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-primary to-secondary text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
            <span className="relative z-10 flex items-center">
              {t("Join Our Team", "आमच्या टीममध्ये सामील व्हा")}
              <span className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </span>
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}