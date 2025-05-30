"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { motion } from "framer-motion";

export default function ContactHero() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80"
                    alt="Contact us background"
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
                        {t("Contact Us", "आमच्याशी संपर्क साधा")}
                    </h1>
                    <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto font-medium drop-shadow">
                        {t(
                            "Have questions or want to enroll? Reach out to us today.",
                            "प्रश्न आहेत किंवा नोंदणी करू इच्छिता? आजच आमच्याशी संपर्क साधा."
                        )}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
