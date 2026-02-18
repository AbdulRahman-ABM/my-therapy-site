import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Check } from "lucide-react";

export default function Empathy() {
  return (
    <Section bg="sage" className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        
        <div className="relative w-full aspect-[4/5] md:h-[600px] animate-fade-in-up">
          <div className="relative w-full h-full rounded-t-[200px] rounded-b-lg overflow-hidden shadow-xl border-4 border-white">
             <Image
              src="/images/Relax.jpg"
              alt="Woman looking thoughtful and introspective"
              fill
              className="object-cover"
            />
          </div>
        </div>

        
        <div className="animate-fade-in-up delay-100">
          <h2 className="text-3xl md:text-5xl mb-6 text-primary-dark leading-tight">
            You don't have to carry it <span className="italic text-stone-600">all alone.</span>
          </h2>
          
          <p className="text-lg text-stone-700 mb-8 leading-relaxed">
            Life can be challenging—especially when you're trying to balance a demanding career with your personal well-being. It’s easy to feel like you’re the only one navigating this, but there is hope.
          </p>

          <div className="space-y-4">
            <h3 className="font-serif text-xl text-stone-800 mb-4">
              Do any of these resonate with you?
            </h3>
            
            <ul className="space-y-3">
              {[
                "Feeling 'functional' on the outside, but exhausted internally",
                "Constant worry, tension, or difficulty sleeping",
                "A sense that you're always bracing for something to go wrong",
                "Disconnected from yourself after years of pushing through stress",
                "Struggling with the impact of past relationships or experiences"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-stone-700">
                  <div className="mt-1 min-w-[20px]">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </Section>
  );
}