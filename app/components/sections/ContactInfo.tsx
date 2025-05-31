"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function ContactInfo() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            {t("Our Location", "आमचे स्थान")}
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto"
          >
            {t(
              "Visit us at our location or get in touch using the contact form.",
              "आमच्या स्थानी भेट द्या किंवा संपर्क फॉर्म वापरून आमच्याशी संपर्क साधा."
            )}
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-16 rounded-2xl overflow-hidden border border-border/30 bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300"
          variants={fadeInUp}
          custom={0.6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="aspect-w-16 aspect-h-9 w-full h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.123456789012!2d76.12345678901234!3d20.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA3JzI0LjQiTiA3NsKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Saurav Computers Location"
            ></iframe>
          </div>
          <div className="p-6 md:p-8 border-t border-border/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold mb-1">
                  {t("Saurav Computers", "सौरव कॉम्प्युटर्स")}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t("Shendurjan, Maharashtra 443202", "शेंदुर्जन, महाराष्ट्र ४४३२०२")}
                </p>
              </div>
              <a 
                href="https://maps.app.goo.gl/example" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/20 whitespace-nowrap"
              >
                <MapPin className="w-4 h-4 mr-2" />
                {t("Get Directions", "मार्ग दर्शन")}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}