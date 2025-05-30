import "./styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./context/ThemeProvider";
import { LanguageProvider } from "./context/LanguageProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Preloader from "./components/Preloader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saurav Computers - Computer Education & E-Governance Services | Shendurjan",
  description: "Saurav Computers - Computer Education & E-Governance Services in Shendurjan, Maharashtra. MS-CIT, Programming, Tally, Banking & Government Services.",
  keywords: "computer education, MS-CIT, programming, tally, SBI kiosk banking, aaple sarkar, shendurjan, buldhana, maharashtra, संगणक शिक्षण, शेंडुर्जनमधील संगणक अभ्यासक्रम",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider>
            <a href="#main-content" className="skip-link">Skip to content</a>
            <Header />
            <main id="main-content" role="main">
              {children}
            </main>
            <Footer />
            <BackToTop />
            <Preloader />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}