"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm({ className }: { className?: string }) {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [formStatus, setFormStatus] = useState<null | {
        success: boolean;
        message: string;
    }>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Form validation
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus({
                success: false,
                message: t("Please fill all fields.", "कृपया सर्व फील्ड भरा."),
            });
            return;
        }

        // Mock form submission
        setTimeout(() => {
            setFormStatus({
                success: true,
                message: t(
                    "Message sent successfully!",
                    "संदेश यशस्वीरीत्या पाठवला!"
                ),
            });
            setFormData({ name: "", email: "", message: "" });

            // Clear success message after 3 seconds
            setTimeout(() => setFormStatus(null), 3000);
        }, 600);
    };

    return (
        <section className={cn("py-16 md:py-24 bg-muted/30", className)}>
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                            {t("Send Us a Message", "आम्हाला संदेश पाठवा")}
                        </h2>

                        <form
                            id="contact-form"
                            onSubmit={handleSubmit}
                            className="grid gap-6 bg-card p-8 rounded-xl border border-border"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block font-medium mb-2"
                                >
                                    {t("Your Name", "तुमचे नाव")}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t(
                                        "Enter your name",
                                        "तुमचे नाव प्रविष्ट करा"
                                    )}
                                    className="w-full p-3 rounded-lg border border-border bg-background"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block font-medium mb-2"
                                >
                                    {t("Your Email", "तुमचा ईमेल")}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t(
                                        "Enter your email",
                                        "तुमचा ईमेल प्रविष्ट करा"
                                    )}
                                    className="w-full p-3 rounded-lg border border-border bg-background"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block font-medium mb-2"
                                >
                                    {t("Your Message", "तुमचा संदेश")}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder={t(
                                        "Enter your message",
                                        "तुमचा संदेश प्रविष्ट करा"
                                    )}
                                    className="w-full p-3 rounded-lg border border-border bg-background min-h-[150px]"
                                    required
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="bg-primary hover:bg-secondary text-primary-foreground font-semibold py-3 px-6 rounded-full transition-all hover:-translate-y-0.5 w-full"
                                >
                                    {t("Send Message", "संदेश पाठवा")}
                                </button>
                            </div>

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

                        <div className="text-center mt-8 text-muted-foreground">
                            <p>
                                {t(
                                    "You can also reach us via WhatsApp or phone for immediate assistance.",
                                    "त्वरित मदतीसाठी तुम्ही आमच्याशी WhatsApp किंवा फोनद्वारे देखील संपर्क साधू शकता."
                                )}
                            </p>
                            <div className="flex justify-center gap-4 mt-4">
                                <a
                                    href="https://wa.me/+919823779796"
                                    className="bg-primary hover:bg-secondary text-primary-foreground font-semibold py-2 px-4 rounded-full transition-colors inline-flex items-center gap-2"
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
                                    >
                                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                                        <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                                        <path d="M8.5 14.5c1 .8 2 1.5 3.5 1.5s2.5-.7 3.5-1.5" />
                                    </svg>
                                    {t("WhatsApp", "WhatsApp")}
                                </a>
                                <a
                                    href="tel:+919823779796"
                                    className="bg-transparent hover:bg-primary text-primary hover:text-primary-foreground font-semibold py-2 px-4 rounded-full border-2 border-primary transition-colors inline-flex items-center gap-2"
                                >
                                    <Phone size={20} />
                                    {t("Call Us", "आम्हाला कॉल करा")}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
