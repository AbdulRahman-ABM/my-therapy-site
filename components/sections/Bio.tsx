import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function Bio() {
  return (
    <Section id="bio" className="overflow-visible relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        
        {/* Left: Text */}
        <div className="order-2 md:order-1 animate-fade-in-up">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">
            Licensed Clinical Psychologist
          </span>
          <h2 className="text-4xl md:text-5xl mb-6 text-primary-dark font-serif">
            Hi, I'm Dr. Maya.
          </h2>
          
          <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
            <p>
              I offer therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
            </p>
            <p>
              My office is a quiet, private space designed to feel calm and grounding. Clients often share that the space itself helps them feel more at ease when they arrive.
            </p>
          </div>

          <div className="mt-8">
            {/* UPDATED LINK TO ABOUT PAGE */}
            <Link href="/about">
              <Button variant="outline" className="border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors">
                More About My Background
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: Single Main Image Only */}
        <div className="relative order-1 md:order-2 min-h-[500px] w-full flex justify-center md:justify-end">
          <div className="relative w-3/4 aspect-[3/4] z-10">
            <div className="w-full h-full clip-arch overflow-hidden bg-stone-200 shadow-soft">
               <Image
                src="/Images/Bio.jpg"
                alt="Dr. Maya Reynolds"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}