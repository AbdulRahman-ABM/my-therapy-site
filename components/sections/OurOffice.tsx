import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { MapPin, ShieldCheck, Sun } from "lucide-react";

export default function OurOffice() {
  return (
    <Section id="office" className="bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Warm Copy */}
        <FadeIn direction="right" className="flex flex-col gap-8">
          <div className="space-y-4">
            <span className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm">
              Your Safe Haven
            </span>
            <h2 className="text-4xl md:text-5xl text-primary-dark font-serif leading-tight">
              A calm space designed <br />
              <span className="italic text-stone-500">for your healing.</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
            <p>
              Located in the heart of Santa Monica, my office is more than just a room it’s a quiet, private sanctuary designed to help you slow down the moment you walk through the door. 
            </p>
            <p>
              I’ve curated this environment to feel grounding and uncluttered. With high ceilings, natural brick, and soft sunlight, the space provides a comfortable backdrop where you can feel secure exploring your thoughts and experiences.
            </p>
          </div>

          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex items-start gap-3">
              <Sun className="text-accent w-6 h-6 mt-1" />
              <div>
                <h4 className="font-serif font-bold text-stone-800">Natural Light</h4>
                <p className="text-sm text-stone-600">Large windows create a bright, airy atmosphere.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-accent w-6 h-6 mt-1" />
              <div>
                <h4 className="font-serif font-bold text-stone-800">Total Privacy</h4>
                <p className="text-sm text-stone-600">Secure, confidential setting for in-person sessions.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-accent w-6 h-6 mt-1" />
              <div>
                <h4 className="font-serif font-bold text-stone-800">Santa Monica</h4>
                <p className="text-sm text-stone-600">Conveniently located with accessible parking.</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Right Column: Image Composition */}
        <div className="relative h-[500px] md:h-[650px] w-full">
          {/* Main Large Image (Arch) */}
          <FadeIn direction="left" className="absolute top-0 right-0 w-[85%] h-[90%] z-0">
            <div className="relative w-full h-full clip-arch overflow-hidden shadow-2xl border-8 border-stone-50">
              <Image
                src="/images/office1.jpg"
                alt="Main therapy seating area with brick walls"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Floating Detail Image (Circle) */}
          <FadeIn delay={0.3} direction="up" className="absolute bottom-0 left-0 w-56 h-56 md:w-72 md:h-72 z-10">
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl border-8 border-white">
              <Image
                src="/images/office2.jpg"
                alt="Office bookshelf and detail shot"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
          
          {/* Aesthetic Blur Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl -z-10" />
        </div>

      </div>
    </Section>
  );
}