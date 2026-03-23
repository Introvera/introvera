import { ArrowDown, ChevronRight, CloudLightning, Lock, Users, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";

export default function About() {
  return (
    <section id="about" className="w-full bg-black text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-16">
          <FadeInSection className="lg:w-1/2">
            <h4 className="text-[var(--color-accent)] font-semibold tracking-wider uppercase text-sm mb-6">
              About Us
            </h4>
            <h2 className="text-5xl md:text-6xl lg:text-[50px] font-medium leading-[1.15] tracking-tight">
              <span className="text-[var(--color-accent)]">Driven by innovation,</span> Built for the future.
            </h2>
          </FadeInSection>
          
          <FadeInSection className="lg:w-6/12 bg-[#121214] rounded-[32px] p-8 md:p-7 flex flex-col justify-between h-full">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Introvera is a digital innovation studio where creativity meets technology. We design smart, scalable solutions.
            </p>
            
            <div className="flex">
              <span className="inline-flex rounded-full p-[6px] border border-[var(--color-accent)] bg-[var(--color-accent)]/15 transition-all duration-300">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-6 py-2.5 bg-[var(--color-accent)] text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
                >
                  Learn more
                  <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
                </Link>
              </span>
            </div>
          </FadeInSection>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <FadeInSection className="lg:w-5/12 h-[500px] relative rounded-[32px] overflow-hidden">
            <Image
              src="/images/backgrounds/about-us.webp"
              alt="Team innovating"
              fill
              className="object-cover"
            />
          </FadeInSection>

          <div className="lg:w-7/12 flex flex-col justify-between pt-4">
            
            <div className="space-y-12 mb-16 lg:mb-0">
              <FadeInSection className="flex items-start gap-5">
                <div className="mt-1 w-7 h-7 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                  <ChevronRight size={14} className="text-white" strokeWidth={2} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr] gap-4 md:gap-8 w-full">
                  <h3 className="text-2xl font-medium leading-tight">Empowering<br/>Innovation</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    We offer AI solutions that turn ideas into outcomes, helping businesses thrive.
                  </p>
                </div>
              </FadeInSection>
              
              <FadeInSection className="flex items-start gap-5">
                <div className="mt-1 w-7 h-7 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                  <ChevronRight size={14} className="text-white" strokeWidth={2} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr] gap-4 md:gap-8 w-full">
                  <h3 className="text-2xl font-medium leading-tight">Agile Development<br/>Process</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    We work in fast, flexible sprints to deliver results quickly and efficiently.
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection className="flex items-start gap-5">
                <div className="mt-1 w-7 h-7 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                  <ChevronRight size={14} className="text-white" strokeWidth={2} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr] gap-4 md:gap-8 w-full">
                  <h3 className="text-2xl font-medium leading-tight">Goal Driven<br/>Solutions</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Our solutions align with your goals, not just the tech. Results matter.
                  </p>
                </div>
              </FadeInSection>
            </div>

            <FadeInSection className="pb-4">
              <div className="grid grid-cols-2 md:flex md:items-center md:justify-between gap-y-10">
                <div className="flex flex-col items-center gap-4 text-center flex-1">
                  <CloudLightning size={32} className="text-white" strokeWidth={1.5} />
                  <span className="text-[13px] font-medium text-gray-400">Fast Delivery</span>
                </div>

                <div className="hidden md:block w-[1px] h-10 bg-white/25 shrink-0" />

                <div className="flex flex-col items-center gap-4 text-center flex-1">
                  <Lock size={32} className="text-white" strokeWidth={1.5} />
                  <span className="text-[13px] font-medium text-gray-400">Secure & Reliable</span>
                </div>
                
                <div className="hidden md:block w-[1px] h-10 bg-white/25 shrink-0" />

                <div className="flex flex-col items-center gap-4 text-center flex-1">
                  <Users size={32} className="text-white" strokeWidth={1.5} />
                  <span className="text-[13px] font-medium text-gray-400">Dedicated Team</span>
                </div>

                <div className="hidden md:block w-[1px] h-10 bg-white/25 shrink-0" />

                <div className="flex flex-col items-center gap-4 text-center flex-1">
                  <Clock size={32} className="text-white" strokeWidth={1.5} />
                  <span className="text-[13px] font-medium text-gray-400">24/7 Support</span>
                </div>
              </div>
            </FadeInSection>
            
          </div>
        </div>

      </div>
    </section>
  );
}
