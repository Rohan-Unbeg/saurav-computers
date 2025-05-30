import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery - Saurav Computers",
    description:
        "Browse through our gallery of images showcasing Saurav Computers facilities, students, and achievements in Shendurjan, Maharashtra.",
};

import GalleryHero from "../components/sections/GalleryHero";
import GalleryGrid from "../components/sections/GalleryGrid";

export default function GalleryPage() {
    return (
        <>
            <GalleryHero />
            <GalleryGrid />
        </>
    );
}
