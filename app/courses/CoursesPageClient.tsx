"use client";

import { useState } from "react";
import dynamic from 'next/dynamic';

// Dynamically import components with no SSR to avoid hydration issues
const CoursesHero = dynamic(() => import("../components/sections/CoursesHero"), { ssr: false });
const AllCourses = dynamic(() => import("../components/sections/AllCourses"), { ssr: false });

export default function CoursesPageClient() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");

    return (
        <div className="min-h-screen bg-background">
            <CoursesHero 
                searchQuery={searchQuery}
                activeCategory={activeCategory}
                onSearchChange={setSearchQuery}
                onCategoryChange={setActiveCategory}
            />
            <AllCourses 
                searchQuery={searchQuery} 
                activeCategory={activeCategory}
                onSearchChange={setSearchQuery}
                onCategoryChange={setActiveCategory}
            />
        </div>
    );
}
