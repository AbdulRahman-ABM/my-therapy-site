import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Specialties from "@/components/sections/Specialties";
import Empathy from "@/components/sections/Empathy";
import Bio from "@/components/sections/Bio";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";
import OurOffice from "@/components/sections/OurOffice";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar/>
      
      {/* Stacking Order:
        1. Hero (Immediate impact)
        2. Intro (Philosophy & Hook)
        3. Specialties (What I treat)
        4. Empathy (Validation of struggle)
        5. Bio (Who I am)
        6. FAQ (Logistics)
        7. Footer
      */}
      
      <Hero />
<Intro />
<Specialties />
<Empathy />
<div id="bio">
  <Bio />
</div>
{/* --- NEW SECTION --- */}
<OurOffice /> 
{/* ------------------ */}
<div id="faq">
  <FAQ />
</div>
<Footer />
    </main>
  );
}