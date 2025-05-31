import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Saurav Computers",
  description: "Get in touch with Saurav Computers in Shendurjan, Maharashtra for computer education and digital services. Phone: +91 9823779796 / +91 8275233774",
};

import ContactHero from "../components/sections/ContactHero";
import ContactForm from "../components/sections/ContactForm";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}