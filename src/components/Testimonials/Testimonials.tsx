"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: `"What I admire most is their mindset. They approach every idea like engineers test, iterate, refine but they also bring a creative energy that makes their work stand out."`,
    name: "Anushka Eranga",
    role: "Lead Software Engineer at Creative Software",
    avatar: "" // Empty to act as placeholder
  },
  {
    id: 2,
    quote: `"What I admire most is their mindset. They approach every idea like engineers test, iterate, refine but they also bring a creative energy that makes their work stand out."`,
    name: "Anushka Eranga",
    role: "Lead Software Engineer at Creative Software",
    avatar: "" 
  },
  {
    id: 3,
    quote: `"What I admire most is their mindset. They approach every idea like engineers test, iterate, refine but they also bring a creative energy that makes their work stand out."`,
    name: "Anushka Eranga",
    role: "Lead Software Engineer at Creative Software",
    avatar: "" 
  },
  {
    id: 4,
    quote: `"What I admire most is their mindset. They approach every idea like engineers test, iterate, refine but they also bring a creative energy that makes their work stand out."`,
    name: "Anushka Eranga",
    role: "Lead Software Engineer at Creative Software",
    avatar: "" 
  },
];

export default function Testimonials() {

  return (
    <section className="relative w-full bg-black py-16 sm:py-20 overflow-hidden" id="testimonials">
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[300px] opacity-40 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(153,0,255,0.4)_0%,transparent_70%)] blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-[var(--color-accent)] text-sm font-semibold tracking-wider uppercase mb-4">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium leading-tight text-white mb-2">
              Stories of Trust & <br />
              Transformation.
            </h2>
          </div>
          
          <div className="shrink-0 md:pb-4">
            <span className="inline-flex rounded-full p-[6px] border border-[var(--color-accent)] bg-[var(--color-accent)]/40 transition-all duration-300">
              <Link
                href="#contact"
                className="inline-flex items-center gap-4 px-4 py-2 bg-[var(--color-accent)] text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
              >
                View More
                <ArrowUpRight size={22} />
              </Link>
            </span>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Section */}
      <div className="relative w-full z-10 py-10 flex flex-col gap-10">
        
        {/* Row 1 -> moving Left */}
        <div className="group flex overflow-hidden w-full relative">
          <div className="flex animate-marquee-left whitespace-nowrap gap-6 md:gap-8 hover:[animation-play-state:paused] px-4 w-max">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <TestimonialCard key={`row1-${idx}`} data={t} className="shrink-0" />
            ))}
          </div>
        </div>

        {/* Row 2 -> moving Right (optional if design needs two tracks, image shows offset cards) */}
        <div className="group flex overflow-hidden w-full relative">
          <div className="flex animate-marquee-right whitespace-nowrap gap-6 md:gap-8 hover:[animation-play-state:paused] px-4 w-max ml-[-20%]">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <TestimonialCard key={`row2-${idx}`} data={t} className="shrink-0" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

type TestimonialData = {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

function TestimonialCard({ data, className = "" }: { data: TestimonialData, className?: string }) {
  return (
    <div 
      className={`w-[320px] md:w-[420px] lg:w-[480px] p-8 md:p-10 rounded-[2rem] border-[1.5px] border-white/10 bg-[#280566]/80 backdrop-blur-md flex flex-col justify-between whitespace-normal shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-2 ${className}`}
      style={{
        boxShadow: "inset 0 0 40px rgba(153,0,255,0.2), 0 10px 40px rgba(0,0,0,0.5)"
      }}
    >
      <p className="text-white md:text-lg font-medium leading-relaxed mb-10">
        {data.quote}
      </p>

      <div className="flex items-center gap-5 mt-auto">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-300 shrink-0 border-[2px] border-white/20"></div>
        
        <div className="flex flex-col">
          <h4 className="text-xl md:text-2xl font-semibold text-white mb-1">
            {data.name}
          </h4>
          <span className="text-[10px] md:text-xs text-white/80 border border-white/40 rounded-full px-3 py-1 w-fit mt-1">
            {data.role}
          </span>
        </div>
      </div>
    </div>
  );
}
