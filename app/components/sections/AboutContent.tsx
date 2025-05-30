"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { motion } from "framer-motion";

export default function AboutContent() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {t("Our Mission", "आमचे मिशन")}
            </h2>
            
            <p className="text-muted-foreground mb-6">
              {t(
                "At Saurav Computers, we believe in empowering individuals through technology education and digital access. Our mission is to bridge the digital divide in rural Maharashtra by providing quality computer education and essential e-governance services to the community of Shendurjan and surrounding areas.",
                "सौरव कॉम्प्युटर्स येथे, आम्ही तंत्रज्ञान शिक्षण आणि डिजिटल अॅक्सेसद्वारे व्यक्तींना सशक्त करण्यावर विश्वास ठेवतो. आमचे मिशन शेंडुर्जन आणि आसपासच्या भागातील समुदायाला दर्जेदार संगणक शिक्षण आणि आवश्यक ई-गव्हर्नन्स सेवा प्रदान करून ग्रामीण महाराष्ट्रातील डिजिटल विभाजन दूर करणे आहे."
              )}
            </p>
            
            <p className="text-muted-foreground">
              {t(
                "Established in 2025, we have quickly grown to become a trusted hub for computer literacy, skill development, and digital services in the region. We take pride in our personalized approach to education, ensuring that each student receives the attention and guidance they need to succeed in today's digital world.",
                "२०२५ मध्ये स्थापित, आम्ही प्रदेशातील संगणक साक्षरता, कौशल्य विकास आणि डिजिटल सेवांसाठी विश्वसनीय केंद्र बनण्यासाठी झपाट्याने वाढलो आहोत. आम्ही शिक्षणाच्या वैयक्तिकृत दृष्टिकोनावर अभिमान बाळगतो, हे सुनिश्चित करतो की प्रत्येक विद्यार्थ्याला आजच्या डिजिटल जगात यशस्वी होण्यासाठी आवश्यक असलेले लक्ष आणि मार्गदर्शन मिळते."
              )}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {t("What We Offer", "आम्ही काय ऑफर करतो")}
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary/10 rounded-full p-3 h-min">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="m18 16 4-4-4-4" />
                    <path d="m6 8-4 4 4 4" />
                    <path d="m14.5 4-5 16" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t("Computer Education", "संगणक शिक्षण")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(
                      "From basic computer literacy to advanced programming, we offer courses for all skill levels.",
                      "मूलभूत संगणक साक्षरतेपासून ते प्रगत प्रोग्रामिंगपर्यंत, आम्ही सर्व कौशल्य स्तरांसाठी अभ्यासक्रम देतो."
                    )}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 rounded-full p-3 h-min">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="M9.1 12a2.1 2.1 0 0 1 0-4.2C10.9 7.8 12 9 12 9s1.1-1.2 2.9-1.2a2.1 2.1 0 0 1 0 4.2C13.1 12 12 10.8 12 10.8s-1.1 1.2-2.9 1.2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t("Government Services", "सरकारी सेवा")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(
                      "We facilitate access to e-governance services, making it easier for citizens to connect with government schemes.",
                      "आम्ही ई-गव्हर्नन्स सेवांमध्ये प्रवेश सुलभ करतो, नागरिकांना सरकारी योजनांशी जोडणे सोपे करतो."
                    )}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 rounded-full p-3 h-min">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                    <path d="M22 19h-2" />
                    <path d="M9 3v2" />
                    <path d="M3 9h2" />
                    <path d="m9 19-3 3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t("Digital Solutions", "डिजिटल समाधाने")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(
                      "From printing and photocopying to SBI Kiosk Banking, we provide essential digital services for daily needs.",
                      "प्रिंटिंग आणि फोटोकॉपीपासून ते SBI किओस्क बँकिंगपर्यंत, आम्ही दैनंदिन गरजांसाठी आवश्यक डिजिटल सेवा प्रदान करतो."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}