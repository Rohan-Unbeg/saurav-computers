"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import Link from "next/link";
import { motion } from "framer-motion";

interface CourseHeroProps {
    title: {
        en: string;
        mr: string;
    };
    description: {
        en: string;
        mr: string;
    };
    image: string;
    enrollLink: string;
}

export default function CourseHero({
    title,
    description,
    image,
    enrollLink,
}: CourseHeroProps) {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={image}
                    alt="Course background"
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
                        {t(title.en, title.mr)}
                    </h1>
                    <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto mb-8 font-medium drop-shadow">
                        {t(description.en, description.mr)}
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link
                            href={enrollLink}
                            className="bg-primary hover:bg-secondary text-primary-foreground font-semibold py-3 px-6 rounded-full inline-block transition-all hover:-translate-y-0.5"
                        >
                            {t("Enroll Now", "आता नाव नोंदवा")}
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
