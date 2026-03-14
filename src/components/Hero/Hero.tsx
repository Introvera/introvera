import { ArrowUpRight, CalendarRange, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pb-16">
      {/* Background Layer - Absolute but no z-index to keep in same stacking context */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/backgrounds/hero-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Accent glow effect */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)] rounded-full opacity-[0.07] blur-[150px]" />
        
        {/* Ellipse Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50vw] h-[200px] bg-[linear-gradient(265.01deg,rgba(153,0,255,0.8)_17.05%,rgba(0,102,255,0.8)_83.46%)] blur-[63.65px]"
        />
      </div>

      {/* Content - No z-index so it shares stacking context with background */}
      <div className="relative w-full max-w-7xl mx-auto px-6 pt-20">

        {/* Heading */}
        <h1
          className="text-8xl font-regular w-fit mx-auto text-left"
        >
          Innovating Tomorrow,
          One Line of Code at a Time
        </h1>

        {/* CTA Buttons */}
        
        <div
          className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          style={{ animation: "fadeInUp 0.8s ease-out 0.3s both" }}
        >
          <span className="hidden md:inline-flex rounded-full p-[6px] border border-[var(--color-accent)] bg-[var(--color-accent)]/40 transition-all duration-300">
            <Link
              href="#contact"
              className="inline-flex items-center gap-4 px-4 py-2 bg-[var(--color-accent)] text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
            >
              Get Started
              <ArrowUpRight size={22} />
            </Link>
          </span>

          <span className="hidden md:inline-flex rounded-full p-[6px] border border-white bg-white/30 transition-all duration-300">
            <Link
              href="#contact"
              className="inline-flex items-center gap-4 px-4 py-2 bg-white text-[var(--color-accent)] text-sm font-medium rounded-full transition-all duration-300"
            >
              View Our Work
              <ArrowUpRight size={22} />
            </Link>
          </span>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-6 mt-12">
          {/* Card 1 — Web & Mobile App Development */}
          <div className="glass-card relative rounded-2xl border border-[var(--color-accent)] p-6 flex flex-col gap-5 transition-all duration-300">
            {/* Top Icons */}
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                <CalendarRange size={22} className="text-white" />
              </div>
              {/* Overlapping Circles */}
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-[var(--color-accent)]" />
                <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-[var(--color-accent)]" />
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-[var(--color-accent)]" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold leading-tight">
              Web &amp; Mobile App<br />Development
            </h3>

            {/* Tags */}
            <div className="flex gap-3">
              <span className="px-4 py-1.5 rounded-full border border-white/30 text-sm text-white/80">
                Websites
              </span>
              <span className="px-4 py-1.5 rounded-full border border-white/30 text-sm text-white/80">
                Mobile Apps
              </span>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <span className="inline-flex rounded-full p-[5px] border border-[var(--color-accent)] bg-[var(--color-accent)]/15">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-3 px-5 py-2 bg-white text-[var(--color-accent)] text-sm font-semibold rounded-full transition-all duration-300 hover:bg-gray-100"
                >
                  Get Started
                  <ArrowUpRight size={18} />
                </Link>
              </span>
            </div>
          </div>

          {/* Card 2 — Custom Software Development */}
          <div className="relative rounded-2xl border border-[var(--color-accent)] min-h-[420px] transition-all duration-300 overflow-visible">
            {/* Robot Image — overflows top of card */}
            <div className="absolute inset-0 -top-16 overflow-hidden rounded-2xl">
              <Image
                src="/images/backgrounds/hero-robot.png"
                alt="Custom Software Development"
                fill
                className="object-cover object-top"
                quality={85}
              />
            </div>

            {/* Overlay content on top of image */}
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl">
              {/* Arrow Circle */}
              <div className="mb-4 w-10 h-10 rounded-full border border-white/50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                <ArrowUpRight size={18} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-center leading-tight pb-6">
                Custom Software<br />Development
              </h3>
            </div>
          </div>

          {/* Card 3 — DevOps & Cloud Services */}
          <div className="glass-card relative rounded-2xl border border-[var(--color-accent)] p-6 flex flex-col gap-4 transition-all duration-300">
            {/* Stats Row */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-4xl font-bold">99.7%</p>
                <p className="text-sm text-white/60 mt-1">Speed Optimize</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-[var(--color-accent)] flex items-center justify-center">
                <Globe size={20} className="text-[var(--color-accent)]" />
              </div>
            </div>

            {/* Chart Line */}
            <div className="flex-1 flex flex-col justify-center">
              <svg viewBox="0 0 300 80" className="w-full h-auto" fill="none">
                {/* Grid line */}
                <line x1="0" y1="60" x2="300" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                {/* Chart line */}
                <polyline
                  points="0,55 40,50 80,52 100,45 130,55 170,30 210,20 250,25 300,15"
                  stroke="var(--color-accent)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Dots */}
                <circle cx="0" cy="55" r="4" fill="var(--color-accent)" />
                <circle cx="80" cy="52" r="4" fill="var(--color-accent)" />
                <circle cx="130" cy="55" r="4" fill="var(--color-accent)" />
                <circle cx="210" cy="20" r="4" fill="var(--color-accent)" />
                <circle cx="300" cy="15" r="4" fill="var(--color-accent)" />
              </svg>

              {/* Data Labels */}
              <div className="flex items-center justify-between mt-3">
                <p className="text-sm text-white/60">Data backup</p>
                <p className="text-sm font-medium">75,6 GB</p>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-center leading-tight pt-2">
              DevOps &amp; Cloud<br />Services
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
