"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: { en: "Address", mr: "पत्ता" },
      content: "AT POST SHENDURJAN, TQ SINDKHEDRAJA, DIST BULDHANA, PINCODE 443202, MAHARASHTRA"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: { en: "Phone", mr: "फोन" },
      content: "+91 9823779796 / +91 8275233774"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: { en: "Email", mr: "ईमेल" },
      content: "sauravcomputer@gmail.com"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: { en: "Hours", mr: "वेळ" },
      content: { 
        en: "Mon-Sat: 9:00 AM - 7:00 PM, Sunday: Closed",
        mr: "सोम-शनि: सकाळी ९:०० - संध्याकाळी ७:००, रविवार: बंद"
      }
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-card rounded-xl border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t(item.title.en, item.title.mr)}
              </h3>
              <p className="text-muted-foreground">
                {typeof item.content === 'object' 
                  ? t(item.content.en, item.content.mr) 
                  : item.content
                }
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-12 rounded-xl overflow-hidden h-[400px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1918032.020453247!2d73.945122!3d20.1275263!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bda7460fd74ae97%3A0x5da090ecebbfee46!2ssaurav%20computer%20shendurjan!5e0!3m2!1sen!2sin!4v1748530133944!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}