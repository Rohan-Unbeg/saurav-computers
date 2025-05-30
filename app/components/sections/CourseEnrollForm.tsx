"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CourseEnrollForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [formStatus, setFormStatus] = useState<null | { success: boolean; message: string }>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.phone) {
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
        message: t("Enrollment request sent successfully!", "नोंदणी विनंती यशस्वीरित्या पाठवली!")
      });
      setFormData({ name: "", email: "", phone: "" });
      
      // Clear success message after 3 seconds
      setTimeout(() => setFormStatus(null), 3000);
    }, 600);
  };

  return (
    <section id="enroll" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("Enroll Today", "आजच नाव नोंदवा")}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form 
              id="enroll-form" 
              onSubmit={handleSubmit} 
              className="grid gap-5"
            >
              <h3 className="text-xl font-semibold mb-2">{t("Get Started", "सुरू करा")}</h3>
              
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
                <label htmlFor="phone" className="block font-medium mb-1">
                  {t("Your Phone", "तुमचा फोन")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("Enter your phone", "तुमचा फोन प्रविष्ट करा")}
                  className="w-full p-3 rounded-lg border border-border bg-background"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="bg-primary hover:bg-secondary text-primary-foreground font-semibold py-3 px-6 rounded-full transition-all hover:-translate-y-0.5"
              >
                {t("Submit", "सबमिट")}
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
            className="flex flex-col justify-center"
          >
            <h3 className="text-xl font-semibold mb-4">
              {t("Or Contact Us Directly", "किंवा थेट आमच्याशी संपर्क साधा")}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t(
                "Reach out via WhatsApp for instant support.",
                "तात्काळ समर्थनासाठी व्हॉट्सअॅपद्वारे संपर्क साधा."
              )}
            </p>
            <a 
              href="https://wa.me/+919823779796" 
              className="inline-flex bg-transparent hover:bg-primary text-primary hover:text-primary-foreground border-2 border-primary py-3 px-6 rounded-full transition-colors self-start font-semibold"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M8.5 14.5c1 .8 2 1.5 3.5 1.5s2.5-.7 3.5-1.5" />
              </svg>
              {t("Chat on WhatsApp", "व्हॉट्सअॅपवर गप्पा मारा")}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}