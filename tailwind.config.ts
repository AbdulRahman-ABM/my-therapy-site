import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: "#FAFAF8",  // Bright, warm white
          100: "#F5F3EF", // Soft beige background
          200: "#E6E2D6", // Darker beige for borders
          800: "#44403C",
          900: "#292524", // Warm black
        },
        primary: {
          DEFAULT: "#3A4D3F", // Rich Olive Green
          foreground: "#FFFFFF",
          light: "#5C7362",
          dark: "#2A382E",
        },
        accent: {
          DEFAULT: "#C08B77", // Terracotta/Clay
          foreground: "#FFFFFF",
          light: "#D4A694",
        },
      },
      fontFamily: {
        sans: ["var(--font-lato)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      // Premium Shadows
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)', 
        'card': '0 0 0 1px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.04)',
        'glow': '0 0 20px rgba(192, 139, 119, 0.3)', // Accent glow
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;