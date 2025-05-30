"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "mr";

type LanguageContextType = {
  lang: Lang;
  toggleLanguage: () => void;
  t: (en: string, mr: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Lang | null;
    if (savedLang) {
      setLang(savedLang);
      document.documentElement.setAttribute("lang", savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "mr" : "en";
    setLang(newLang);
    document.documentElement.setAttribute("lang", newLang);
    localStorage.setItem("language", newLang);
  };

  const t = (en: string, mr: string) => {
    return lang === "en" ? en : mr;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}