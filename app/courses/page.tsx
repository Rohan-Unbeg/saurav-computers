import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Courses - Saurav Computers",
    description:
        "Explore our range of computer courses including MS-CIT, Programming, Tally, and more at Saurav Computers in Shendurjan.",
};

import CoursesHero from "../components/sections/CoursesHero";
import AllCourses from "../components/sections/AllCourses";

export default function CoursesPage() {
    return (
        <>
            <CoursesHero />
            <AllCourses />
        </>
    );
}
