import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MS-CIT Course - Saurav Computers",
  description: "Master computer literacy with our government-recognized MS-CIT program at Saurav Computers in Shendurjan, Maharashtra.",
  openGraph: {
    title: "MS-CIT Course | Saurav Computers Shendurjan",
    description: "Master computer literacy with our government-recognized MS-CIT course in Shendurjan, Maharashtra.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
        width: 600,
        height: 400,
        alt: "MS-CIT Course at Saurav Computers",
      },
    ],
  },
};

import CourseHero from "@/app/components/hero/CourseHero";
import CourseOverview from "@/app/components/sections/CourseOverview";
import CourseSyllabus from "@/app/components/sections/CourseSyllabus";
import CourseDetails from "@/app/components/sections/CourseDetails";
import CourseVideo from "@/app/components/sections/CourseVideo";
import Testimonials from "@/app/components/sections/Testimonials";
import CourseEnrollForm from "@/app/components/sections/CourseEnrollForm";

export default function MSCITPage() {
  const courseModules = [
    {
      title: {
        en: "Module 1: Windows OS",
        mr: "मॉड्यूल १: Windows OS"
      },
      content: {
        en: "Learn file management, desktop navigation, and system settings.",
        mr: "फाइल व्यवस्थापन, डेस्कटॉप नेव्हिगेशन आणि सिस्टम सेटिंग्ज शिका."
      }
    },
    {
      title: {
        en: "Module 2: MS Office",
        mr: "मॉड्यूल २: MS Office"
      },
      content: {
        en: "Master Word, Excel, and PowerPoint for professional tasks.",
        mr: "वर्ड, एक्सेल आणि पॉवरपॉइंट व्यावसायिक कामांसाठी शिका."
      }
    },
    {
      title: {
        en: "Module 3: Internet Basics",
        mr: "मॉड्यूल ३: इंटरनेट मूलभूत"
      },
      content: {
        en: "Explore browsing, email, and online safety.",
        mr: "ब्राउझिंग, ईमेल आणि ऑनलाइन सुरक्षितता शिका."
      }
    },
    {
      title: {
        en: "Module 4: Digital Literacy",
        mr: "मॉड्यूल ४: डिजिटल साक्षरता"
      },
      content: {
        en: "Understand digital citizenship and IT fundamentals.",
        mr: "डिजीटल नागरिकत्व आणि आयटी मूलभूत गोष्टी समजा."
      }
    }
  ];

  const courseDetails = [
    {
      title: {
        en: "Fees",
        mr: "फी"
      },
      value: {
        en: "₹4500 (inclusive of all materials)",
        mr: "₹4500 (सर्व साहित्यासह)"
      }
    },
    {
      title: {
        en: "Duration",
        mr: "कालावधी"
      },
      value: {
        en: "3 months",
        mr: "३ महिने"
      }
    },
    {
      title: {
        en: "Schedule",
        mr: "वेळापत्रक"
      },
      value: {
        en: "Weekdays 10 AM - 12 PM or Weekends",
        mr: "कामाचे दिवस सकाळी १० ते दुपारी १२ किंवा शनिवार-रविवार"
      }
    },
    {
      title: {
        en: "Certification",
        mr: "प्रमाणपत्र"
      },
      value: {
        en: "MKCL MS-CIT Certificate",
        mr: "MKCL MS-CIT प्रमाणपत्र"
      }
    }
  ];

  return (
    <>
      <CourseHero
        title={{
          en: "MS-CIT: Master Computer Literacy",
          mr: "MS-CIT: संगणक साक्षरता शिका"
        }}
        description={{
          en: "Government-recognized course to boost your tech skills in Shendurjan.",
          mr: "शेंडुर्जनमध्ये तुमच्या तंत्रज्ञान कौशल्यांना चालना देणारा सरकार मान्यताप्राप्त अभ्यासक्रम."
        }}
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80"
        enrollLink="#enroll"
      />
      
      <CourseOverview
        title={{
          en: "Course Overview",
          mr: "अभ्यासक्रम विहंगावलोकन"
        }}
        description={{
          en: "The MS-CIT course is designed to make you proficient in computer basics, including Windows, MS Office, and internet skills. Perfect for beginners, job seekers, and professionals looking to enhance their digital literacy.",
          mr: "MS-CIT अभ्यासक्रम तुम्हाला Windows, MS Office आणि इंटरनेट कौशल्यांसह संगणक मूलभूत गोष्टींमध्ये निपुण करण्यासाठी डिझाइन केलेला आहे. नवशिक्यांसाठी, नोकरी शोधणाऱ्यांसाठी आणि डिजिटल साक्षरता वाढवू इच्छिणाऱ्या व्यावसायिकांसाठी योग्य."
        }}
        benefits={{
          en: [
            "Government-recognized MKCL certification",
            "Hands-on training in Shendurjan",
            "Job-ready skills for office roles"
          ],
          mr: [
            "सरकार मान्यताप्राप्त MKCL प्रमाणपत्र",
            "शेंडुर्जनमध्ये प्रत्यक्ष प्रशिक्षण",
            "ऑफिसच्या भूमिकांसाठी नोकरीसाठी तयार कौशल्ये"
          ]
        }}
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
      />
      
      <CourseSyllabus modules={courseModules} />
      
      <CourseDetails details={courseDetails} />
      
      <CourseVideo
        title={{
          en: "Why Choose MS-CIT?",
          mr: "MS-CIT का निवडावे?"
        }}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />
      
      <Testimonials />
      
      <CourseEnrollForm />
    </>
  );
}