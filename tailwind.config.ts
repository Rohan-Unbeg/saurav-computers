import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      lineHeight: {
        'tight': '1.25',
        'normal': '1.6',
        'relaxed': '1.8',
      },
      letterSpacing: {
        'wide': '0.02em',
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "1.25rem",
        md: "1rem",
        sm: "0.75rem",
      },
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          dark: "#60a5fa",
        },
        secondary: {
          DEFAULT: "#14b8a6",
          dark: "#2dd4bf",
        },
        background: {
          DEFAULT: "#ffffff",
          dark: "#0f172a",
        },
        foreground: {
          DEFAULT: "#1e293b",
          dark: "#f1f5f9",
        },
        muted: {
          DEFAULT: "#f1f5f9",
          dark: "#1e293b",
        },
        accent: {
          DEFAULT: "#f97316",
          dark: "#fb923c",
        },
        border: {
          DEFAULT: "#e2e8f0",
          dark: "#334155",
        },
        input: {
          DEFAULT: "#e2e8f0",
          dark: "#334155",
        },
        ring: {
          DEFAULT: "#1e293b",
          dark: "#94a3b8",
        },
      },
      boxShadow: {
        card: "0 2px 8px 0 rgba(60,72,88,0.07)",
        button: "0 1px 2px 0 rgba(60,72,88,0.10)",
      },
      transitionProperty: {
        colors: "background-color, border-color, color, fill, stroke",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
