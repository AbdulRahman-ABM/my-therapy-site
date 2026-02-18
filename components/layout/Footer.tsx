import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="md:col-span-2">
          <Link href="/" className="text-2xl font-serif font-bold text-stone-50 tracking-tight block mb-6">
            Dr. Maya Reynolds
          </Link>
          <p className="max-w-xs leading-relaxed mb-8">
            A grounded space for high-achievers to find clarity, process trauma, and build resilience.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" className="border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white">
              Book Consultation
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-stone-50 font-serif text-lg mb-6">Explore</h3>
          <ul className="space-y-4">
            <li><Link href="/" className="hover:text-primary-light transition-colors">Home</Link></li>
            <li><Link href="#specialties" className="hover:text-primary-light transition-colors">Services</Link></li>
            <li><Link href="#bio" className="hover:text-primary-light transition-colors">About</Link></li>
            <li><Link href="#faq" className="hover:text-primary-light transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-stone-50 font-serif text-lg mb-6">Contact</h3>
          <ul className="space-y-4">
            <li>
              <span className="block text-stone-500 text-sm">Office</span>
              123th Street 45 W,<br />
              Santa Monica, CA 90401
            </li>
            <li>
              <span className="block text-stone-500 text-sm">Email</span>
              hello@drmayareynolds.com
            </li>
            <li>
              <span className="block text-stone-500 text-sm">Phone</span>
              (555) 123-4567
            </li>
          </ul>
        </div>

      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-sm text-stone-600">
        <p>&copy; {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-stone-400">Privacy Policy</Link>
          <Link href="#" className="hover:text-stone-400">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}