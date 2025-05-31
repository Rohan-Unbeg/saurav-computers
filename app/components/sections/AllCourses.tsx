"use client";

// Using relative import since the absolute path isn't working
import { useLanguage } from "../../context/LanguageProvider";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { 
  ArrowRight, 
  Award, 
  Briefcase, 
  CheckCircle2, 
  Clock, 
  GraduationCap, 
  IndianRupee, 
  Layers, 
  Search, 
  Star, 
  Users, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown, 
  BookOpen 
} from "lucide-react";
import { cn } from "@/lib/utils";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

interface Course {
  id: string;
  title: { en: string; mr: string };
  description: { en: string; mr: string };
  details: { en: string; mr: string };
  image: string;
  link: string;
  category: string[];
  duration: { en: string; mr: string };
  level: { en: string; mr: string };
  rating: number;
  students: number;
  price: { en: string; mr: string };
  features: { en: string[]; mr: string[] };
  tags: string[];
}

const courses: Course[] = [
  {
    id: "ms-cit",
    title: { en: "MS-CIT Course", mr: "MS-CIT अभ्यासक्रम" },
    description: {
      en: "Master computer literacy with our government-recognized program.",
      mr: "सरकार मान्यताप्राप्त कार्यक्रमासह संगणक साक्षरता शिका."
    },
    details: {
      en: `
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-foreground">MS-CIT Course</h3>
          <div class="bg-muted/50 p-4 rounded-lg">
            <p class="text-muted-foreground">Master essential computer skills with our comprehensive MS-CIT program, recognized by the Government of Maharashtra. Perfect for beginners and those looking to enhance their digital literacy.</p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-sm text-muted-foreground">Duration</p>
              <p class="font-medium">3 Months</p>
            </div>
            <div>
              <p class="text-sm text-muted-foreground">Fees</p>
              <p class="font-medium">₹4,500</p>
            </div>
            <div>
              <p class="text-sm text-muted-foreground">Level</p>
              <p class="font-medium">Beginner</p>
            </div>
            <div>
              <p class="text-sm text-muted-foreground">Students</p>
              <p class="font-medium">1,200+</p>
            </div>
          </div>
          <div class="pt-4 border-t border-border">
            <h4 class="font-medium mb-2">Course Highlights</h4>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li class="flex items-start">
                <span class="text-primary mr-2">✓</span>
                <span>Government recognized certification</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary mr-2">✓</span>
                <span>Hands-on training on MS Office</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary mr-2">✓</span>
                <span>Internet and email fundamentals</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary mr-2">✓</span>
                <span>Basic hardware and software knowledge</span>
              </li>
            </ul>
          </div>
        </div>
      `,
      mr: `
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-foreground">MS-CIT अभ्यासक्रम</h3>
          <div class="bg-muted/50 p-4 rounded-lg">
            <p class="text-muted-foreground">महाराष्ट्र शासनाने मान्यता दिलेल्या आमच्या विस्तृत MS-CIT कार्यक्रमाद्वारे आवश्यक संगणक कौशल्ये शिका. नवशिक्यांसाठी आणि डिजिटल साक्षरता वाढवू इच्छिणाऱ्यांसाठी योग्य.</p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-sm text-muted-foreground">कालावधी</p>
              <p class="font-medium">३ महिने</p>
            </div>
            <div>
              <p class="text-sm text-muted-foreground">फी</p>
              <p class="font-medium">₹४,५००</p>
            </div>
            <div>
              <p class="text-sm text-muted-foreground">स्तर</p>
              <p class="font-medium">नवशिक्या</p>
            </div>
            <div>
              <p class="text-sm text-muted-foreground">विद्यार्थी</p>
              <p class="font-medium">१,२००+</p>
            </div>
          </div>
          <div class="pt-4 border-t border-border">
            <h4 class="font-medium mb-2">अभ्यासक्रमाची वैशिष्ट्ये</h4>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li class="flex items-start">
                <span class="text-primary mr-2">✓</span>
                <span>सरकारी मान्यताप्राप्त प्रमाणपत्र</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary mr-2">✓</span>
                <span>MS Office वर प्रात्यक्षिक प्रशिक्षण</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary mr-2">✓</span>
                <span>इंटरनेट आणि ईमेलची मूलभूत माहिती</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary mr-2">✓</span>
                <span>मूलभूत हार्डवेअर आणि सॉफ्टवेअर ज्ञान</span>
              </li>
            </ul>
          </div>
        </div>
      `
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    link: "/courses/ms-cit",
    category: ["certification", "beginner"],
    duration: { en: "3 Months", mr: "३ महिने" },
    level: { en: "Beginner", mr: "नवशिक्या" },
    rating: 4.8,
    students: 1250,
    price: { en: "₹4,500", mr: "₹४,५००" },
    features: {
      en: ["Government Certified", "MS Office Training", "Internet Basics", "Hands-on Practice"],
      mr: ["सरकारी मान्यताप्राप्त", "MS Office प्रशिक्षण", "इंटरनेट मूलतत्त्वे", "प्रात्यक्षिक सराव"]
    },
    tags: ["computer-basics", "ms-office", "certification"]
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
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    link: "/courses/programming",
    category: ["diploma", "intermediate", "advanced"],
    duration: { en: "6 Months", mr: "६ महिने" },
    level: { en: "Beginner to Advanced", mr: "नवशिक्या ते प्रगत" },
    rating: 4.9,
    students: 850,
    price: { en: "₹12,000", mr: "₹१२,०००" },
    features: {
      en: ["Project-Based Learning", "Industry Experts", "Placement Assistance", "Live Projects"],
      mr: ["प्रकल्प-आधारित शिक्षण", "उद्योग तज्ञ", "नोकरी मदत", "थेट प्रकल्प"]
    },
    tags: ["python", "java", "web-development", "programming"]
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
    image: "https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    link: "/courses/tally",
    category: ["certification", "short-term"],
    duration: { en: "1.5 Months", mr: "१.५ महिने" },
    level: { en: "Beginner", mr: "नवशिक्या" },
    rating: 4.7,
    students: 980,
    price: { en: "₹4,000", mr: "₹४,०००" },
    features: {
      en: ["Tally ERP 9 Certification", "GST & TDS Training", "Practical Accounting", "Job Ready Skills"],
      mr: ["टॅली ERP 9 प्रमाणपत्र", "GST & TDS प्रशिक्षण", "व्यावहारिक लेखापालन", "नोकरीसाठी आवश्यक कौशल्ये"]
    },
    tags: ["tally", "accounting", "gst", "certification"]
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
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    link: "/courses/graphic-design",
    category: ["diploma", "intermediate"],
    duration: { en: "3 Months", mr: "३ महिने" },
    level: { en: "Beginner to Intermediate", mr: "नवशिक्या ते मध्यम" },
    rating: 4.6,
    students: 720,
    price: { en: "₹8,000", mr: "₹८,०००" },
    features: {
      en: ["Industry Tools", "Portfolio Development", "Real-world Projects", "Freelance Opportunities"],
      mr: ["उद्योगातील साधने", "पोर्टफोलिओ विकास", "वास्तविक जगातील प्रकल्प", "फ्रिलान्सिंग संधी"]
    },
    tags: ["photoshop", "coreldraw", "graphic-design", "ui-ux"]
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
    image: "https://images.unsplash.com/photo-1517694712201-5a93b1f6e1f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    link: "/courses/typing",
    category: ["certification", "short-term"],
    duration: { en: "1 Month", mr: "१ महिना" },
    level: { en: "All Levels", mr: "सर्व स्तर" },
    rating: 4.5,
    students: 1500,
    price: { en: "₹2,000", mr: "₹२,०००" },
    features: {
      en: ["Government Certified", "Multi-language Support", "Speed Building", "Accuracy Training"],
      mr: ["सरकारी मान्यताप्राप्त", "बहुभाषिक समर्थन", "गती वाढवणे", "अचूकतेचे प्रशिक्षण"]
    },
    tags: ["typing", "certification", "gcc-tbc", "marathi-typing"]
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
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    link: "/courses/mkcl",
    category: ["certification", "diploma"],
    duration: { en: "Varies", mr: "बदलतो" },
    level: { en: "All Levels", mr: "सर्व स्तर" },
    rating: 4.4,
    students: 2000,
    price: { en: "Varies", mr: "बदलते" },
    features: {
      en: ["MKCL Certified", "Industry Relevant", "Practical Training", "Job Placement"],
      mr: ["MKCL मान्यताप्राप्त", "उद्योगातील गरजेनुसार", "व्यावहारिक प्रशिक्षण", "नोकरी मिळविण्यास मदत"]
    },
    tags: ["mkcl", "certification", "skill-development", "government-approved"]
  }
];

interface CategoryType {
  id: string;
  name: {
    en: string;
    mr: string;
  };
  count: number;
}

interface AllCoursesProps {
  searchQuery: string;
  activeCategory: string;
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: string) => void;
}

const AllCourses = ({ 
  searchQuery, 
  activeCategory, 
  onSearchChange, 
  onCategoryChange 
}: AllCoursesProps) => {
  const { t, lang } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const controls = useAnimationControls();
  
  // Update category when it changes from parent
  useEffect(() => {
    if (activeCategory) {
      onCategoryChange(activeCategory);
    }
  }, [activeCategory, onCategoryChange]);

  // Get course types with counts
  const categories: CategoryType[] = [
    { id: "all", name: { en: "All Courses", mr: "सर्व अभ्यासक्रम" }, count: courses.length },
    { id: "certification", name: { en: "Certification", mr: "प्रमाणपत्र" }, count: courses.filter(c => c.category.includes("certification")).length },
    { id: "diploma", name: { en: "Diploma", mr: "डिप्लोमा" }, count: courses.filter(c => c.category.includes("diploma")).length },
    { id: "short-term", name: { en: "Short Term", mr: "लघुकालीन" }, count: courses.filter(c => c.category.includes("short-term")).length },
    { id: "beginner", name: { en: "Beginner", mr: "नवशिक्या" }, count: courses.filter(c => c.category.includes('beginner')).length },
    { id: "advanced", name: { en: "Advanced", mr: "प्रगत" }, count: courses.filter(c => c.category.includes('advanced')).length },
  ];

  // Filter courses based on search and category
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title[lang as keyof typeof course.title]
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) ||
      course.description[lang as keyof typeof course.description]
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      course.tags.some(tag => 
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory = activeCategory === "all" || 
      course.category.includes(activeCategory);

    return matchesSearch && matchesCategory;
  });

  // Handle course selection
  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
    document.body.style.overflow = 'auto';
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Animate on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [controls]);

  return (
    <section className="py-16 md:py-24 bg-background/50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Category Filter - Mobile */}
        <div className="md:hidden mb-8 px-4">
          <div className="flex overflow-x-auto pb-2 space-x-2 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20'
                    : 'bg-background border border-border/50 text-foreground/80 hover:bg-accent/5 hover:border-primary/30 hover:text-primary'
                }`}
              >
                {t(category.name.en, category.name.mr)}
                <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-xs ${
                  activeCategory === category.id 
                    ? 'bg-white/20 text-white/90' 
                    : 'bg-accent/10 text-foreground/60 group-hover:bg-accent/20'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter - Desktop */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20'
                  : 'bg-background border border-border/50 text-foreground/80 hover:bg-accent/5 hover:border-primary/30 hover:text-primary'
              }`}
            >
              {t(category.name.en, category.name.mr)}
              <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-xs ${
                activeCategory === category.id 
                  ? 'bg-white/20 text-white/90' 
                  : 'bg-accent/10 text-foreground/60 group-hover:bg-accent/20'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              className="group relative bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/30 cursor-pointer"
              whileHover={{ y: -5, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setSelectedCourse(course as Course)}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedCourse(course as Course)}
              role="button"
              tabIndex={0}
              aria-label={`${t('View details for', 'तपशील पहा')} ${t(course.title.en, course.title.mr)}`}
            >
              <div className="relative aspect-video bg-muted/30 overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={course.image}
                    alt={t(course.title.en, course.title.mr)}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <span className="bg-white/90 text-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <span>{t('View Details', 'तपशील पहा')}</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {course.category[0]}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 mr-1" />
                    {course.duration[lang as keyof typeof course.duration]}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground/90 line-clamp-2">
                  {t(course.title.en, course.title.mr)}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {t(course.description.en, course.description.mr)}
                </p>
                <div className="flex justify-between items-center pt-3 border-t border-border/30">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{course.rating}</span>
                    <span className="mx-1.5 text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">
                      {course.students}+ {t('students', 'विद्यार्थी')}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-primary">
                    {course.price[lang as keyof typeof course.price]}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {t('No courses found. Try adjusting your search or filters.', 'कोर्स सापडले नाहीत. आपला शोध किंवा फिल्टर बदलून पहा.')}
            </p>
          </div>
        )}
      </div>

      {/* Course Details Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-0 sm:p-4 overflow-y-auto"
            onClick={(e) => e.target === e.currentTarget && setSelectedCourse(null)}
            onKeyDown={(e) => e.key === 'Escape' && setSelectedCourse(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="course-dialog-title"
            aria-describedby="course-dialog-description"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-5xl overflow-y-auto bg-background sm:rounded-2xl shadow-2xl border-0 sm:border border-border/30"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
                aria-label={t('Close', 'बंद करा')}
              >
                <X className="h-5 w-5 text-foreground" />
              </button>
              
              {/* Mobile close button - sticky at bottom */}
              <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none sm:hidden">
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="w-full py-3 px-4 bg-foreground text-background rounded-lg font-medium shadow-lg pointer-events-auto flex items-center justify-center gap-2"
                >
                  <X className="h-4 w-4" />
                  {t('Close', 'बंद करा')}
                </button>
              </div>

              <div className="grid lg:grid-cols-3">
                {/* Left Column - Course Summary */}
                <div className="lg:col-span-1 bg-background p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-border/30">
                  <div className="relative rounded-xl overflow-hidden mb-6">
                    <Image
                      src={selectedCourse.image}
                      alt={t(selectedCourse.title.en, selectedCourse.title.mr)}
                      width={400}
                      height={225}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  
                  <h2 id="course-dialog-title" className="text-2xl font-bold mb-4 text-foreground/90">
                    {t(selectedCourse.title.en, selectedCourse.title.mr)}
                  </h2>
                  <p id="course-dialog-description" className="sr-only">
                    {t('Course details for', 'अभ्यासक्रमाची तपशीलवार माहिती')} {t(selectedCourse.title.en, selectedCourse.title.mr)}
                  </p>
                  
                  <p className="text-muted-foreground mb-6">
                    {t(selectedCourse.description.en, selectedCourse.description.mr)}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {t('Duration', 'कालावधी')}
                        </span>
                      </div>
                      <span className="font-medium text-foreground">
                        {selectedCourse.duration[lang as keyof typeof selectedCourse.duration]}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {t('Level', 'स्तर')}
                        </span>
                      </div>
                      <span className="font-medium text-foreground">
                        {selectedCourse.level[lang as keyof typeof selectedCourse.level]}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <IndianRupee className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {t('Price', 'किंमत')}
                        </span>
                      </div>
                      <span className="font-bold text-primary">
                        {selectedCourse.price[lang as keyof typeof selectedCourse.price]}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {t('Students', 'विद्यार्थी')}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                        <span className="font-medium">
                          {selectedCourse.rating} ({selectedCourse.students}+)
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pt-2">
                    <h4 className="font-medium text-foreground/90">
                      {t('Course Features', 'अभ्यासक्रम वैशिष्ट्ये')}
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedCourse?.features[lang as keyof typeof selectedCourse.features]?.map((feature: string, i: number) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start group"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + (i * 0.05) }}
                        >
                          <span className="flex-shrink-0 mt-1 mr-2 text-primary">
                            <CheckCircle2 className="h-4 w-4" />
                          </span>
                          <span className="text-sm text-foreground/90">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t border-border/30">
                    <Link
                      href={selectedCourse.link}
                      className="group relative inline-flex items-center justify-center w-full px-6 py-3.5 overflow-hidden font-medium transition-all duration-300 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
                      aria-label={`${t('Enroll in', 'साठी नोंदणी करा')} ${t(selectedCourse.title.en, selectedCourse.title.mr)}`}
                    >
                      <span className="relative">
                        {t('Enroll Now', 'आतापासून नोंदणी करा')}
                      </span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-focus:translate-x-1" />
                    </Link>
                    
                    <p className="mt-3 text-xs text-center text-muted-foreground">
                      {t('Limited seats available', 'मर्यादित जागा उपलब्ध')} • {t('Flexible payment options', 'लवचिक पैसे भरण्याच्या पर्याय')}
                    </p>
                  </div>
                </div>
                
                {/* Right Column - Course Details */}
                <div className="lg:col-span-2 p-6 lg:p-8">
                  <div 
                    className="prose prose-sm sm:prose lg:prose-lg max-w-none prose-headings:text-foreground/90 prose-p:text-foreground/80 prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2 prose-strong:text-foreground/90 prose-a:text-primary hover:prose-a:text-primary/80 prose-a:no-underline prose-a:font-medium"
                    dangerouslySetInnerHTML={{ 
                      __html: selectedCourse.details[lang as keyof typeof selectedCourse.details] 
                    }} 
                  />
                  
                  <div className="mt-8 pt-6 border-t border-border/30">
                    <h3 className="text-xl font-semibold mb-4 text-foreground/90">
                      {t('Why Choose This Course?', 'हा अभ्यासक्रम का निवडावा?')}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          icon: <GraduationCap className="h-5 w-5" />,
                          title: t('Expert Instructors', 'तज्ञ प्रशिक्षक'),
                          desc: t('Learn from industry professionals with years of experience', 'वर्षांच्या अनुभवासह उद्योगातील तज्ञांकडून शिका')
                        },
                        {
                          icon: <Layers className="h-5 w-5" />,
                          title: t('Practical Training', 'व्यावहारिक प्रशिक्षण'),
                          desc: t('Hands-on projects and real-world applications', 'प्रात्यक्षिक प्रकल्प आणि वास्तविक जगातील अनुप्रयोग')
                        },
                        {
                          icon: <Briefcase className="h-5 w-5" />,
                          title: t('Career Support', 'करिअर समर्थन'),
                          desc: t('Resume building and job placement assistance', 'रेझ्युमे तयार करणे आणि नोकरी मिळविण्यास मदत')
                        },
                        {
                          icon: <Clock className="h-5 w-5" />,
                          title: t('Flexible Schedule', 'लवचिक वेळापत्रक'),
                          desc: t('Learn at your own pace with flexible timings', 'लवचिक वेळापत्रकासह आपल्या गतीने शिका')
                        }
                      ].map((item, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + (index * 0.1) }}
                          className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 mt-0.5 p-1.5 rounded-lg bg-primary/10 text-primary">
                              {item.icon}
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground/90">{item.title}</h4>
                              <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-border/30">
                      <h4 className="text-lg font-semibold mb-4 text-foreground/90">
                        {t('Have Questions?', 'काही प्रश्न आहेत?')}
                      </h4>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          href="/contact"
                          className="flex-1 px-4 py-2.5 text-center rounded-lg border border-primary text-primary hover:bg-primary/5 transition-colors font-medium"
                        >
                          {t('Contact Us', 'आमच्याशी संपर्क साधा')}
                        </Link>
                        <Link
                          href="/courses/faq"
                          className="flex-1 px-4 py-2.5 text-center rounded-lg border border-border hover:bg-muted/50 transition-colors font-medium"
                        >
                          {t('View FAQ', 'सामान्य प्रश्न पहा')}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AllCourses;