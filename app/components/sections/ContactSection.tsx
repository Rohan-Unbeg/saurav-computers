"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<null | { success: boolean; message: string }>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        success: false,
        message: t("Please fill all fields.", "कृपया सर्व फील्ड भरा.")
      });
      return;
    }
    
    // Mock form submission
    setTimeout(() => {
      setFormStatus({
        success: true,
        message: t("Message sent successfully!", "संदेश यशस्वीरीत्या पाठवला!")
      });
      setFormData({ name: "", email: "", message: "" });
      
      // Clear success message after 3 seconds
      setTimeout(() => setFormStatus(null), 3000);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("Contact Us", "आमच्याशी संपर्क साधा")}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form 
              id="contact-form" 
              onSubmit={handleSubmit} 
              className="grid gap-5"
            >
              <h3 className="text-xl font-semibold mb-2">{t("Get in Touch", "संपर्क साधा")}</h3>
              
              <div>
                <label htmlFor="name" className="block font-medium mb-1">
                  {t("Your Name", "तुमचे नाव")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("Enter your name", "तुमचे नाव प्रविष्ट करा")}
                  className="w-full p-3 rounded-lg border border-border bg-background"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-medium mb-1">
                  {t("Your Email", "तुमचा ईमेल")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("Enter your email", "तुमचा ईमेल प्रविष्ट करा")}
                  className="w-full p-3 rounded-lg border border-border bg-background"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-medium mb-1">
                  {t("Your Message", "तुमचा संदेश")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("Enter your message", "तुमचा संदेश प्रविष्ट करा")}
                  className="w-full p-3 rounded-lg border border-border bg-background min-h-[120px]"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-primary hover:bg-secondary text-primary-foreground font-semibold py-3 px-6 rounded-full transition-all hover:-translate-y-0.5"
              >
                {t("Send Message", "संदेश पाठवा")}
              </button>
              
              {formStatus && (
                <div 
                  className={`p-3 rounded-lg text-center text-sm ${
                    formStatus.success 
                      ? "bg-[#dcfce7] text-[#166534] dark:bg-[#166534]/20 dark:text-[#86efac]" 
                      : "bg-[#fee2e2] text-[#991b1b] dark:bg-[#991b1b]/20 dark:text-[#fecaca]"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[400px] lg:h-auto rounded-xl overflow-hidden"
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
      </div>
    </section>
  );
}