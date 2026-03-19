"use client";

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote: `"What I admire most is their mindset. They approach every idea like engineers test, iterate, refine but they also bring a creative energy that makes their work stand out."`,
    name: "Anushka Eranga",
    role: "Lead Software Engineer at Creative Software",
    avatar: "/images/testimonials/anushka.png"
  },
  {
    id: 2,
    quote: `“They've always been the kind of team who learn fast and build things that actually work. It's been inspiring watching them grow as developers.”`,
    name: "Sachini Pathinayaka",
    role: "Lead Software Engineer at IFS",
    avatar: "/images/testimonials/sachini.png"
  },
  {
    id: 3,
    quote: `“I've seen how passionate they are about learning and improving. They always push themselves to create something better each time.”`,
    name: "Rashen Iddamalgoda",
    role: "Senior System Engineer at Pristine Solutions",
    avatar: "/images/testimonials/rashen.png"
  },
  {
    id: 4,
    quote: `"What I admire most is their mindset. They approach every idea like engineers test, iterate, refine but they also bring a creative energy that makes their work stand out."`,
    name: "Anushka Eranga",
    role: "Lead Software Engineer at Creative Software",
    avatar: "/images/testimonials/anushka.png"
  },
];

export default function Testimonials() {

  return (
    <section className="relative w-full bg-black py-16 sm:py-20 overflow-hidden" id="testimonials">
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[300px] opacity-40 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(153,0,255,0.4)_0%,transparent_70%)] blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-[var(--color-accent)] text-sm font-semibold tracking-wider uppercase mb-4">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[50px] font-medium leading-tight text-white mb-2">
              Stories of Trust & <br />
              Transformation.
            </h2>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Section */}
      <div className="relative w-full z-10 flex flex-col gap-10">
        
        {/* Row 1 -> moving Left */}
        <div className="group flex overflow-hidden w-full relative py-2">
          <div className="flex animate-marquee-left whitespace-nowrap gap-6 md:gap-8 hover:[animation-play-state:paused] px-4 w-max">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <TestimonialCard key={`row1-${idx}`} data={t} className="shrink-0" />
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
      className={`w-[280px] md:w-[360px] lg:w-[400px] p-6 md:p-8 rounded-[1.5rem] border-[1.5px] border-white/10 bg-[#280566]/80 backdrop-blur-md flex flex-col justify-between whitespace-normal shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-2 ${className}`}
      style={{
        boxShadow: "inset 0 0 40px rgba(153,0,255,0.2), 0 10px 40px rgba(0,0,0,0.5)"
      }}
    >
      <p className="text-white text-sm md:text-base font-medium leading-relaxed mb-6">
        {data.quote}
      </p>

      <div className="flex items-center gap-4 mt-auto">
        <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden shrink-0 border-[2px] border-white/20">
          <Image 
            src={data.avatar}
            alt={data.name}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex flex-col">
          <h4 className="text-sm md:text-base font-semibold text-white mb-1">
            {data.name}
          </h4>
          <span className="text-[10px] md:text-xs text-white/80 w-fit">
            {data.role}
          </span>
        </div>
      </div>
    </div>
  );
}
