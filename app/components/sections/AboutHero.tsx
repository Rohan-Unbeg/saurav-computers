"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { motion } from "framer-motion";

export default function AboutHero() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80"
                    alt="About us background"
                    className="w-full h-full object-cover opacity-25"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background/90" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white drop-shadow-xl">
                        {t("About Us", "आमच्याबद्दल")}
                    </h1>

                    <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto font-medium drop-shadow">
                        {t(
                            "Empowering Shendurjan with technology education and digital services since 2025.",
                            "2025 पासून शेंडुर्जनला तंत्रज्ञान शिक्षण आणि डिजिटल सेवांसह सक्षम करत आहे."
                        )}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
