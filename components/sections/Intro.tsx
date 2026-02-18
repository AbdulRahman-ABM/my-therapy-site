import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Intro() {
  return (
    <Section bg="sage" id="intro" className="overflow-hidden relative">
      {/* Decorative Background Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        
        <FadeIn direction="up" className="order-2 md:order-1">
          <h2 className="text-4xl md:text-5xl mb-8 text-primary-dark font-serif leading-tight">
            A grounded approach to <br />
            <span className="italic text-stone-600">healing & growth.</span>
          </h2>
          
          <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
            <p>
              Many of the people I work with are high-achieving and self-aware—but internally, they feel exhausted. You might be "functional" on the outside while quietly struggling with constant worry.
            </p>
            <p>
              My goal isn't just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {["CBT & Evidence-Based", "EMDR for Trauma", "Mindfulness Practices", "Somatic Techniques"].map((item, i) => (
              <FadeIn key={item} delay={0.2 + (i * 0.1)} className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-stone-100">
                  <CheckCircle2 className="text-accent h-4 w-4" />
                </div>
                <span className="font-medium text-stone-800 text-sm md:text-base">{item}</span>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.6} className="mt-12">
            <Button variant="outline" className="border-stone-400 rounded-full px-8 py-6 text-base hover:bg-stone-800 hover:text-white transition-colors">
              Learn About My Methods
            </Button>
          </FadeIn>
        </FadeIn>

        {/* Right: Image */}
        <FadeIn direction="left" className="relative w-full aspect-square md:aspect-[4/5] order-1 md:order-2">
          <div className="relative w-full h-full rounded-tr-[160px] rounded-bl-[160px] overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-1 transition-transform duration-700">
             <Image
              src="/images/office2.jpg" 
              alt="Relaxing therapy environment"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>

      </div>
    </Section>
  );
}