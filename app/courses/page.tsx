import { Metadata } from "next";
import CoursesPageClient from "./CoursesPageClient";

export const metadata: Metadata = {
    title: "Courses - Saurav Computers",
    description:
        "Explore our range of computer courses including MS-CIT, Programming, Tally, and more at Saurav Computers in Shendurjan.",
};

export default function CoursesPage() {
    return <CoursesPageClient />;
}
