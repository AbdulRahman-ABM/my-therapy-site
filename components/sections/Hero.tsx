import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Hero() {
  return (
    <Section className="pt-12 md:pt-24 pb-12 overflow-hidden bg-stone-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* Left: Image with Slow Zoom Effect */}
        <FadeIn direction="right" className="relative w-full aspect-[4/5] md:aspect-[3/4] order-first md:order-first">
          <div className="relative w-full h-full clip-arch overflow-hidden bg-stone-200 shadow-soft group">
             <Image
              src="/images/office1.jpg"
              alt="Dr. Reynolds Therapy Office"
              fill
              className="object-cover transition-transform duration-[2s] scale-100 group-hover:scale-105"
              priority
            />
            {/* Subtle overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-60" />
          </div>
        </FadeIn>

        {/* Right: Staggered Text Animation */}
        <div className="flex flex-col gap-6 text-center md:text-left z-10">
          <FadeIn delay={0.1}>
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              Santa Monica, CA • Online in California
            </span>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl leading-[1.1] text-primary-dark font-serif">
              Find clarity in the <br />
              <span className="italic text-accent relative inline-block">
                midst of chaos.
                {/* Decorative underline */}
                <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/10 -z-10 -rotate-1" />
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-stone-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Therapy for high-achievers navigating anxiety, burnout, and the weight of past experiences.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
            <Button size="lg" className="rounded-full shadow-glow hover:shadow-soft hover:scale-105 transition-all duration-300 bg-primary text-white text-base px-8 py-6">
              Book a Consultation
            </Button>
            
            {/* UPDATED LINK TO ABOUT PAGE */}
            <Link href="/about">
              <Button variant="ghost" size="lg" className="rounded-full hover:bg-stone-100 text-stone-600 text-base px-8 py-6">
                Read My Bio &rarr;
              </Button>
            </Link>
          </FadeIn>
        </div>

      </div>
    </Section>
  );
}