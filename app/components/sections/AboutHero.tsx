"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function AboutHero() {
    const { t } = useLanguage();
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 100]);
    const y2 = useTransform(scrollY, [0, 300], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
                duration: 0.6
            }
        }
    };

    const childVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 12 }
        }
    };

    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div 
                    className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl"
                    style={{ x: y1, opacity }}
                />
                <motion.div 
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl"
                    style={{ x: y2, opacity }}
                />

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                {/* Background image with gradient overlay */}
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80)',
                        opacity: 0.4
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background/90" />
            </div>

            {/* Hero content */}
            <div className="container relative z-10 px-4 py-20 md:py-28 lg:py-36 mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div variants={childVariants} className="mb-6">
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20 backdrop-blur-sm">
                            <Sparkles className="mr-2 h-4 w-4" />
                            {t("Our Story", "आमची गोष्ट")}
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1 
                        variants={childVariants}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark"
                    >
                        {t("About Us", "आमच्याबद्दल")}
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p 
                        variants={childVariants}
                        className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-8"
                    >
                        {t(
                            "Empowering Shendurjan with technology education and digital services since 2025. Our mission is to bridge the digital divide and create opportunities through quality education.",
                            "२०२५ पासून शेंडुर्जनला तंत्रज्ञान शिक्षण आणि डिजिटल सेवांसह सक्षम करत आहे. गुणवत्तापूर्ण शिक्षणाद्वारे डिजिटल अंतर कमी करणे आणि संधी निर्माण करणे हे आमचे ध्येय आहे."
                        )}
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
