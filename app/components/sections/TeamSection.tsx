"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: { en: "Saurav Patil", mr: "सौरव पाटील" },
    role: { en: "Founder & Director", mr: "संस्थापक आणि संचालक" },
    bio: {
      en: "A computer science graduate with a passion for digital literacy and rural development.",
      mr: "डिजिटल साक्षरता आणि ग्रामीण विकासाची आवड असलेले संगणक शास्त्र पदवीधर."
    },
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: { en: "Priya Deshmukh", mr: "प्रिया देशमुख" },
    role: { en: "Lead Instructor", mr: "प्रमुख प्रशिक्षक" },
    bio: {
      en: "Experienced educator specializing in MS Office and programming languages.",
      mr: "MS Office आणि प्रोग्रामिंग भाषांमध्ये विशेषज्ञता असलेले अनुभवी शिक्षक."
    },
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
  }
];

export default function TeamSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("Our Team", "आमची टीम")}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-sm border border-border flex flex-col items-center p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img 
                src={member.image} 
                alt={t(member.name.en, member.name.mr)} 
                className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-primary/20"
              />
              <h3 className="text-xl font-bold mb-1">
                {t(member.name.en, member.name.mr)}
              </h3>
              <p className="text-primary mb-4 font-medium">
                {t(member.role.en, member.role.mr)}
              </p>
              <p className="text-muted-foreground">
                {t(member.bio.en, member.bio.mr)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}