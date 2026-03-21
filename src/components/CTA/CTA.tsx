import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative w-full bg-black py-16 sm:py-20" id="cta">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-20">
        
        <div className="flex-1 flex flex-col items-start text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-[50px] font-medium leading-[1.15] text-white tracking-tight mb-10 mt-6 lg:mt-0">
            Let&apos;s Build Something<br />
            Great Together
          </h2>
          
          <div className="flex flex-wrap items-center justify-start gap-4">
            <span className="inline-flex rounded-full p-[6px] border border-[var(--color-accent)] bg-[var(--color-accent)]/40 transition-all duration-300">
              <Link
                href="#projects"
                className="inline-flex items-center gap-4 px-4 py-2 bg-[var(--color-accent)] text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
              >
                View Our Work
                <ArrowUpRight size={22} />
              </Link>
            </span>

            <span className="inline-flex rounded-full p-[6px] border border-white bg-white/30 transition-all duration-300">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-4 py-2 bg-white text-[var(--color-accent)] text-sm font-medium rounded-full transition-all duration-300"
              >
                Start Your Project Now
                <ArrowUpRight size={22} />
              </Link>
            </span>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-start lg:justify-end mb-6 lg:mb-0">
          <div className="relative w-full max-w-[600px] aspect-[21/9] sm:aspect-[2/1] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(153,0,255,0.15)] border border-[var(--color-accent)]/20">
            <Image
              src="/images/backgrounds/hero-robot.webp" 
              alt="Bulb Idea"
              fill
              className="object-cover object-center opacity-80 mix-blend-screen"
            />
            
            <div className="absolute inset-0 bg-gradient-to-r from-[#280566]/90 via-[#280566]/70 to-[#280566]/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-[var(--color-accent)]/10" />
            
            <div className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 w-48 h-48 bg-[var(--color-accent)] rounded-full opacity-30 blur-[40px]" />
          </div>
        </div>

      </div>
    </section>
  );
}
