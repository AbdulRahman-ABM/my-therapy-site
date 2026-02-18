"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Quote, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-stone-50">
      <Navbar />

      <Section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Back Navigation */}
          <Link 
            href="/" 
            className="inline-flex items-center text-stone-500 hover:text-primary mb-12 transition-colors group font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Sticky Sidebar (Portrait & Credentials) */}
            <aside className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
              <FadeIn direction="right">
                <div className="relative aspect-[3/4] rounded-t-[10rem] rounded-b-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image 
                    src="/images/Bio.jpg" 
                    alt="Dr. Maya Reynolds Portrait" 
                    fill 
                    className="object-cover"
                    priority
                  />
                </div>
              </FadeIn>

              {/* Credentials Box */}
              <FadeIn delay={0.2} className="bg-white p-8 rounded-2xl shadow-soft border border-stone-100">
                <h3 className="font-serif text-xl text-primary-dark mb-4">Credentials</h3>
                <ul className="space-y-3 text-stone-600 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" /> Licensed Clinical Psychologist
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" /> PsyD, Clinical Psychology
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" /> California License #PSY12345
                  </li>
                </ul>
                
                <div className="w-full h-px bg-stone-100 my-6" />
                
                <h3 className="font-serif text-xl text-primary-dark mb-4">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {["Anxiety & Panic", "Trauma (EMDR)", "Burnout", "Mindfulness"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-stone-50 text-stone-600 text-xs font-bold uppercase tracking-wider rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </FadeIn>
            </aside>

            {/* Right Column: The Narrative Bio */}
            <article className="lg:col-span-7 space-y-10 text-lg leading-relaxed text-stone-700">
              
              <FadeIn direction="up">
                <h1 className="text-5xl md:text-6xl font-serif text-primary-dark mb-6 leading-tight">
                  About Dr. Maya Reynolds
                </h1>
                <p className="text-xl font-medium text-stone-500 mb-8">
                  Licensed Clinical Psychologist based in Santa Monica, California.
                </p>
                
                <p>
                  I offer therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware but internally feel exhausted, stuck in overthinking, or emotionally on edge.
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p>
                  My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling "functional" on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong. Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-2xl font-serif text-primary-dark mt-8 mb-4">A Grounded Approach</h3>
                <p>
                  I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they’re experiencing.
                </p>
              </FadeIn>

              {/* Pull Quote */}
              <FadeIn delay={0.3} className="my-10 pl-6 border-l-4 border-accent">
                <p className="text-2xl font-serif italic text-primary-dark leading-relaxed">
                  "I believe therapy works best when clients feel respected, understood, and actively involved in the process."
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <h3 className="text-2xl font-serif text-primary-dark mb-4">Trauma & Resilience</h3>
                <p>
                  Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives not just during sessions.
                </p>
              </FadeIn>

              <FadeIn delay={0.5}>
                <h3 className="text-2xl font-serif text-primary-dark mb-4">Burnout & High-Achievers</h3>
                <p>
                  In addition to trauma and anxiety, I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure. Many are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.
                </p>
              </FadeIn>

              <FadeIn delay={0.6} className="bg-sage-50 p-8 rounded-2xl mt-8">
                <h3 className="text-2xl font-serif text-primary-dark mb-4">My Office & Availability</h3>
                <p className="mb-6">
                  I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California. My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.
                </p>
                <p className="font-medium text-primary-dark mb-8">
                  If you’re looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment I may be a good fit.
                </p>
                <Button size="lg" className="w-full md:w-auto rounded-full shadow-glow">
                  Book a Consultation
                </Button>
              </FadeIn>

            </article>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}