"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#specialties" },
  { name: "About", href: "#bio" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    // Check if the link is the Home link
    if (href === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      setIsOpen(false);
      return;
    }

    // Handle other anchor links
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        setIsOpen(false); 
        const offset = 100; 
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 flex h-24 items-center justify-between">
        <Link 
          href="/" 
          onClick={(e) => handleScroll(e, "/")}
          className="text-2xl font-serif font-bold text-primary-dark tracking-tight"
        >
          Dr. Maya Reynolds
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium text-stone-600 hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-stone-100"
            >
              {link.name}
            </Link>
          ))}
          <Button size="sm" className="ml-4 rounded-full px-6 bg-primary text-white hover:bg-primary-dark">
            Book Consultation
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-stone-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-stone-50 border-b border-stone-100 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-lg font-medium text-stone-800 py-3 border-b border-stone-100"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}