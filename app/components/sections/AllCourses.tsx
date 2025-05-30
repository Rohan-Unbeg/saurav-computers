"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../Modal";

const courses = [
  {
    id: "ms-cit",
    title: { en: "MS-CIT Course", mr: "MS-CIT अभ्यासक्रम" },
    description: {
      en: "Master computer literacy with our government-recognized program.",
      mr: "सरकार मान्यताप्राप्त कार्यक्रमासह संगणक साक्षरता शिका."
    },
    details: {
      en: "<h3>MS-CIT Course</h3><p>Duration: 2 months<br>Fees: ₹4500<br>Learn basic computer skills, MS Office, and internet usage with a government-recognized certificate.</p>",
      mr: "<h3>MS-CIT अभ्यासक्रम</h3><p>कालावधी: २ महिने<br>फी: ₹४५००<br>मूलभूत संगणक कौशल्ये, MS Office आणि इंटरनेट वापर शिका, सरकार मान्यताप्राप्त प्रमाणपत्रासह.</p>"
    },
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    link: "/courses/ms-cit"
  },
  {
    id: "programming",
    title: { en: "Programming Courses", mr: "प्रोग्रामिंग अभ्यासक्रम" },
    description: {
      en: "Learn Python, Java, and Web Development from experts.",
      mr: "तज्ञांकडून Python, Java आणि वेब डेव्हलपमेंट शिका."
    },
    details: {
      en: "<h3>Programming Courses</h3><p>Duration: 3 months<br>Fees: ₹6000<br>Learn Python, Java, C++, Web Development, and more with hands-on projects.</p>",
      mr: "<h3>प्रोग्रामिंग अभ्यासक्रम</h3><p>कालावधी: ३ महिने<br>फी: ₹६०००<br>Python, Java, C++, वेब डेव्हलपमेंट आणि प्रात्यक्षिक प्रकल्पांसह शिका.</p>"
    },
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
    link: "/courses/programming"
  },
  {
    id: "tally",
    title: { en: "Tally Course", mr: "टॅली अभ्यासक्रम" },
    description: {
      en: "Excel in accounting with Tally ERP 9 certification.",
      mr: "टॅली ERP 9 प्रमाणपत्रासह अकाउंटिंगमध्ये उत्कृष्ट व्हा."
    },
    details: {
      en: "<h3>Tally Course</h3><p>Duration: 1.5 months<br>Fees: ₹4000<br>Comprehensive Tally ERP 9 training for accounting and business management.</p>",
      mr: "<h3>टॅली अभ्यासक्रम</h3><p>कालावधी: १.५ महिने<br>फी: ₹४०००<br>अकाउंटिंग आणि व्यवसाय व्यवस्थापनासाठी Tally ERP 9 चे संपूर्ण प्रशिक्षण.</p>"
    },
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
    link: "/courses/tally"
  },
  {
    id: "graphic-design",
    title: { en: "Graphic Design", mr: "ग्राफिक डिझाइन" },
    description: {
      en: "Master Photoshop, CorelDraw, and design principles for creative careers.",
      mr: "Photoshop, CorelDraw आणि डिझाइन तत्त्वे शिका, सर्जनशील करिअरसाठी."
    },
    details: {
      en: "<h3>Graphic Design</h3><p>Duration: 2 months<br>Fees: ₹5000<br>Master Photoshop, CorelDraw, and design principles for creative careers.</p>",
      mr: "<h3>ग्राफिक डिझाइन</h3><p>कालावधी: २ महिने<br>फी: ₹५०००<br>Photoshop, CorelDraw आणि डिझाइन तत्त्वे शिका, सर्जनशील करिअरसाठी.</p>"
    },
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&q=80",
    link: "/courses/graphic-design"
  },
  {
    id: "typing",
    title: { en: "GCC-TBC Typing", mr: "GCC-TBC टायपिंग" },
    description: {
      en: "Certified typing in Hindi, Marathi, and English with speed and accuracy focus.",
      mr: "हिंदी, मराठी, इंग्रजी टायपिंग प्रमाणपत्र, गती व अचूकता प्रशिक्षणासह."
    },
    details: {
      en: "<h3>GCC-TBC Typing</h3><p>Duration: 1 month<br>Fees: ₹2000<br>Certified typing in Hindi, Marathi, and English with speed and accuracy focus.</p>",
      mr: "<h3>GCC-TBC टायपिंग</h3><p>कालावधी: १ महिना<br>फी: ₹२०००<br>हिंदी, मराठी, इंग्रजी टायपिंग प्रमाणपत्र, गती व अचूकता प्रशिक्षणासह.</p>"
    },
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&q=80",
    link: "/courses/typing"
  },
  {
    id: "mkcl",
    title: { en: "MKCL Courses", mr: "MKCL अभ्यासक्रम" },
    description: {
      en: "Skill development and certification courses approved by MKCL.",
      mr: "MKCL मान्यताप्राप्त कौशल्य विकास व प्रमाणपत्र अभ्यासक्रम."
    },
    details: {
      en: "<h3>MKCL Courses</h3><p>Duration: Varies<br>Fees: Varies<br>Skill development and certification courses approved by MKCL.</p>",
      mr: "<h3>MKCL अभ्यासक्रम</h3><p>कालावधी: बदलतो<br>फी: बदलते<br>MKCL मान्यताप्राप्त कौशल्य विकास व प्रमाणपत्र अभ्यासक्रम.</p>"
    },
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80",
    link: "/courses/mkcl"
  }
];

export default function AllCourses() {
  const { t, lang } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<(typeof courses)[0] | null>(null);

  const openModal = (course: (typeof courses)[0]) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-all hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img 
                src={course.image} 
                alt={t(course.title.en, course.title.mr)} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{t(course.title.en, course.title.mr)}</h3>
                <p className="text-muted-foreground mb-6">{t(course.description.en, course.description.mr)}</p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => openModal(course)}
                    className="inline-block bg-transparent hover:bg-primary text-primary hover:text-primary-foreground py-2 px-4 rounded-full border-2 border-primary transition-colors font-semibold text-sm"
                  >
                    {t("Quick Info", "त्वरित माहिती")}
                  </button>
                  <Link 
                    href={course.link}
                    className="inline-block bg-primary hover:bg-secondary text-primary-foreground py-2 px-4 rounded-full transition-colors font-semibold text-sm"
                  >
                    {t("View Details", "तपशील पहा")}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedCourse && (
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <div dangerouslySetInnerHTML={{ __html: lang === "en" ? selectedCourse.details.en : selectedCourse.details.mr }} />
          <div className="mt-6">
            <Link 
              href={selectedCourse.link}
              className="inline-block bg-primary hover:bg-secondary text-primary-foreground py-2 px-4 rounded-full transition-colors font-semibold text-sm"
            >
              {t("View Full Details", "संपूर्ण तपशील पहा")}
            </Link>
          </div>
        </Modal>
      )}
    </section>
  );
}