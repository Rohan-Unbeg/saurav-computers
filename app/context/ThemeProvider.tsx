"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  // Apply theme to document
  const applyTheme = useCallback((newTheme: Theme) => {
    const root = document.documentElement;
    
    // Clear all theme classes first
    root.classList.remove("light", "dark");
    
    // Add the new theme class
    root.classList.add(newTheme);
    
    // Update state
    setThemeState(newTheme);
    setIsDark(newTheme === "dark");
    
    // Save preference
    localStorage.setItem("theme", newTheme);
    
    // Update meta tag for theme color
    const themeColor = getComputedStyle(root).getPropertyValue('--background');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor);
  }, []);

  // Toggle between light and dark theme
  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    applyTheme(newTheme);
  }, [theme, applyTheme]);

  // Set theme directly
  const setTheme = useCallback((newTheme: Theme) => {
    applyTheme(newTheme);
  }, [applyTheme]);

  // Initialize theme on component mount
  useEffect(() => {
    const handleMediaChange = (e: MediaQueryListEvent) => {
      // Only apply system preference if no explicit theme is set
      if (!localStorage.getItem("theme")) {
        applyTheme(e.matches ? "dark" : "light");
      }
    };

    // Get saved theme or fallback to system preference
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    
    // Set initial theme
    const initialTheme = savedTheme || (prefersDark.matches ? "dark" : "light");
    applyTheme(initialTheme);
    
    // Listen for system theme changes
    prefersDark.addEventListener("change", handleMediaChange);
    setMounted(true);
    
    return () => {
      prefersDark.removeEventListener("change", handleMediaChange);
    };
  }, [applyTheme]);

  // Don't render the app until we know the theme
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}