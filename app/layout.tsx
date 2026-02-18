import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Configure Body Font: Lato (Clean, modern, readable)
const lato = Lato({ 
  subsets: ["latin"], 
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

// Configure Heading Font: Playfair Display (Classic, trustworthy, warm)
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds | Licensed Clinical Psychologist",
  description: "Therapy for high-achievers and trauma survivors in Santa Monica, CA. Specialized support for anxiety, burnout, and resilience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        // Apply the "Timeless Sanctuary" base styles
        // bg-stone-50 = Warm Cream Background
        // text-stone-900 = Deep Charcoal Text
        "min-h-screen bg-stone-50 text-stone-900 font-sans antialiased",
        lato.variable,
        playfair.variable
      )}>
        {children}
      </body>
    </html>
  );
}