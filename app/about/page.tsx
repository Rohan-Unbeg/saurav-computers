import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - Saurav Computers",
    description:
        "Learn about Saurav Computers, our mission, and our journey in providing computer education and digital services in Shendurjan, Maharashtra.",
};

import AboutHero from "../components/sections/AboutHero";
import AboutContent from "../components/sections/AboutContent";
import TeamSection from "../components/sections/TeamSection";

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <AboutContent />
            <TeamSection />
        </>
    );
}
