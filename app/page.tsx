import HomeHero from "./components/hero/HomeHero";
import { Metadata } from "next";
import dynamic from 'next/dynamic';

// Import components with dynamic loading for better performance
const FeaturesSection = dynamic(() => import('@/app/components/home/FeaturesSection'), {
  ssr: false,
  loading: () => <div className="h-96 w-full flex items-center justify-center">Loading...</div>
});

const CoursesSection = dynamic(() => import('@/app/components/home/CoursesSection'), {
  ssr: false,
  loading: () => <div className="h-96 w-full flex items-center justify-center">Loading...</div>
});

const TestimonialsSection = dynamic(() => import('@/app/components/home/TestimonialsSection'), {
  ssr: false,
  loading: () => <div className="h-96 w-full flex items-center justify-center">Loading...</div>
});

const GallerySection = dynamic(() => import('@/app/components/home/GallerySection'), {
  ssr: false,
  loading: () => <div className="h-96 w-full flex items-center justify-center">Loading...</div>
});

export const metadata: Metadata = {
    title: "Saurav Computers - Computer Education & E-Governance Services | Shendurjan",
    description:
        "Saurav Computers - Premier Computer Education & Digital Services in Shendurjan, Maharashtra. MS-CIT, Programming, Tally, Banking & Government Services.",
    openGraph: {
        title: "Saurav Computers - Computer Education & E-Governance Services",
        description:
            "Your gateway to computer education and digital services in Shendurjan, Maharashtra.",
        url: "https://sauravcomputers.com",
        images: [
            {
                url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
                width: 1200,
                height: 630,
                alt: "Saurav Computers",
            },
        ],
    },
};

export default function Home() {
    return (
        <main className="flex-1">
            <HomeHero />
            <FeaturesSection />
            <CoursesSection />
            <TestimonialsSection />
            <GallerySection />
        </main>
    );
}
