import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const specialties = [
  {
    title: "Anxiety & Overwhelm",
    description: "For high-achievers who feel functional on the outside but are constantly bracing for the next problem. We work on quieting the internal noise.",
    image: "/images/coffee.jpg",
  },
  {
    title: "Trauma & Resilience",
    description: "Processing the lingering effects of past experiences. Whether it's a single incident or complex patterns from childhood, we pace this work carefully.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Burnout & Perfectionism",
    description: "Reconnect with yourself after years of pushing through stress. We explore sustainable ways of working that don't require sacrificing your well-being.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop", 
  },
];

export default function Specialties() {
  return (
    <Section className="bg-stone-50" id="specialties">
      <FadeIn className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-3xl md:text-5xl text-primary-dark mb-6 font-serif">
          My Areas of Specialization
        </h2>
        <div className="h-1 w-20 bg-accent/30 mx-auto rounded-full mb-6" />
        <p className="text-stone-600 text-lg">
          I provide a safe, non-judgmental space to explore complex challenges.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {specialties.map((item, index) => (
          <FadeIn 
            key={index} 
            delay={index * 0.1} // Stagger the entrance of each card
            className="group flex flex-col items-center text-center p-6 rounded-3xl hover:bg-white hover:shadow-soft transition-all duration-500"
          >
            <div className="mb-8 px-2">
              <h3 className="text-2xl font-serif text-stone-800 mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-stone-600 leading-relaxed mb-6 text-sm md:text-base">
                {item.description}
              </p>
              
              <div className="inline-flex items-center text-primary font-bold text-xs tracking-widest uppercase border-b border-transparent group-hover:border-primary transition-all">
                Learn more <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Circular Image with Hover Expansion */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 mt-auto">
              <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-white shadow-lg relative bg-stone-200 group-hover:shadow-glow transition-all duration-500">
                 <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}