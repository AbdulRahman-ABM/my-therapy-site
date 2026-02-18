import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";

const faqItems = [
  {
    title: "Do you offer online therapy?",
    content: "Yes. I offer secure telehealth sessions for clients located anywhere in California. This allows for flexibility if you have a busy schedule or prefer meeting from the comfort of your home.",
  },
  {
    title: "Where is your office located?",
    content: "My office is located in Santa Monica, CA. It is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable environment.",
  },
  {
    title: "What is your approach to therapy?",
    content: "I take a warm, collaborative, and grounded approach. Sessions are structured enough to feel supportive while leaving space for reflection. I integrate evidence-based methods like CBT, EMDR, and mindfulness to help you understand both the emotional and physiological sides of your experience.",
  },
  {
    title: "Do you take insurance?",
    content: "I am an out-of-network provider. This means I do not bill insurance directly, but I can provide you with a monthly superbill that you can submit to your insurance company for potential reimbursement.",
  },
];

export default function FAQ() {
  return (
    <Section bg="sage" id="faq">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
        
        {/* Left Column: Text & Accordion */}
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl mb-8 text-primary-dark">
            Common Questions
          </h2>
          <Accordion items={faqItems} />
        </div>

        {/* Right Column: Arch Image */}
        <div className="relative w-full aspect-[3/4] md:sticky md:top-32">
          <div className="w-full h-full clip-arch overflow-hidden bg-stone-200 shadow-xl border-4 border-white">
             <Image
              src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1200&auto=format&fit=crop"
              alt="Peaceful corner of the therapy office"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </Section>
  );
}