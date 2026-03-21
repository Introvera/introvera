import { ArrowUpRight, CalendarRange, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-black">
      <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none overflow-hidden [mask-image:linear-gradient(to_bottom,black_60%,transparent_90%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_90%)]">
        <Image
          src="/images/backgrounds/hero-bg.webp"
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)] rounded-full opacity-[0.07] blur-[150px]" />
        
        <div
          className="absolute top-2/3 left-1/2 -translate-x-1/2 w-[50vw] h-[200px] bg-[linear-gradient(265.01deg,rgba(153,0,255,0.8)_17.05%,rgba(0,102,255,0.8)_83.46%)] blur-[63.65px]"
        />
      </div>

      <div className="relative w-full min-h-screen flex flex-col justify-between max-w-7xl mx-auto px-6 pt-60 pb-8 md:pb-16">
        
        <div className="flex-1 flex flex-col justify-center mb-12 px-0 md:px-16">
          <div className="relative w-fit flex flex-col items-start px-2 md:mt-16">
            
            <div className="absolute -top-[120px] left-0 md:-left-12 flex flex-col z-10 pointer-events-none scale-[0.85] md:scale-100 origin-bottom-left font-medium">
              <span className="px-6 py-2 rounded-full border border-[var(--color-accent)] text-[15px] text-white bg-black/80 backdrop-blur-md w-fit">
                Insight
              </span>
              <span className="px-6 py-2 rounded-full border border-[var(--color-accent)] text-[15px] text-white bg-black/80 backdrop-blur-md w-fit ml-8">
                Innovation
              </span>
              <span className="px-6 py-2 rounded-full border border-[var(--color-accent)] text-[15px] text-white bg-black/80 backdrop-blur-md w-fit -mt-2 rotate-[8deg] origin-top-left">
                Introvera
              </span>
            </div>

            <h1
              className="text-6xl md:text-8xl lg:text-[100px] font-medium leading-tight md:leading-none text-left tracking-tight"
            >
              Build What Matters
            </h1>
            
            <p className="mt-6 text-base md:text-lg text-white/70 max-w-3xl text-left leading-relaxed">
              We transform ideas into impactful digital experiences that move the world forward, crafting solutions that are smart, scalable, and full of purpose.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center gap-4 pt-8"
              style={{ animation: "fadeInUp 0.8s ease-out 0.3s both" }}
            >
              <span className="hidden md:inline-flex rounded-full p-[6px] border border-[var(--color-accent)] bg-[var(--color-accent)]/40 transition-all duration-300">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 px-4 py-2 bg-[var(--color-accent)] text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
                >
                  Get Started
                  <ArrowUpRight size={22} />
                </Link>
              </span>

              <span className="hidden md:inline-flex rounded-full p-[6px] border border-white bg-white/30 transition-all duration-300">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-4 px-4 py-2 bg-white text-[var(--color-accent)] text-sm font-medium rounded-full transition-all duration-300"
                >
                  View Our Work
                  <ArrowUpRight size={22} />
                </Link>
              </span>
            </div>
          </div>
        </div>

        <div className="relative w-full mt-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[70%] max-w-[1000px] h-[250px] md:h-[350px] bg-gradient-to-r from-[#5a1cff]/70 via-[#4000ff]/60 to-[#004cf3]/70 blur-[100px] md:blur-[130px] rounded-[100%] pointer-events-none z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-6 relative z-10 w-full">
          <div className="glass-card relative rounded-2xl border border-[var(--color-accent)] p-6 flex flex-col gap-5 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                <CalendarRange size={22} className="text-white" />
              </div>
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-[var(--color-accent)] overflow-hidden relative">
                  <Image src="/images/projects/ultracraft/ultracraft-logo.png" alt="Ultracraft" fill className="object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[var(--color-accent)] overflow-hidden relative">
                  <Image src="/images/projects/caffissimo/caffissimo-logo.png" alt="Caffissimo" fill className="object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[var(--color-accent)] overflow-hidden relative">
                  <Image src="/images/projects/rainbow-color-sport/rainbow-logo.png" alt="Rainbow Color Sport" fill className="object-cover" />
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-regular leading-tight">
              Web &amp; Mobile App<br />Development
            </h3>

            <div className="flex gap-3">
              <span className="px-4 py-1.5 rounded-full border border-white/30 text-sm text-white/80">
                Websites
              </span>
              <span className="px-4 py-1.5 rounded-full border border-white/30 text-sm text-white/80">
                Mobile Apps
              </span>
            </div>

            <div className="pt-2">
              <span className="inline-flex rounded-full p-[6px] border border-white bg-white/30 transition-all duration-300">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 px-4 py-2 bg-white text-[var(--color-accent)] text-sm font-medium rounded-full transition-all duration-300"
                >
                  Get Started
                  <ArrowUpRight size={22} />
                </Link>
              </span>
            </div>
          </div>

          <div className="glass-card relative rounded-2xl  min-h-[420px] transition-all duration-300 overflow-visible">
            <div className="absolute inset-0 -top-32 overflow-hidden rounded-2xl">
              <Image
                src="/images/backgrounds/hero-robot.webp"
                alt="Custom Software Development"
                fill
                className="object-cover object-top"
                quality={85}
              />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-end rounded-2xl pb-8 z-10">
              <Link href="/services" className="mb-6 w-12 h-12 rounded-full border border-white/50 flex items-center justify-center bg-black/30 backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer">
                <ArrowUpRight size={20} className="text-white" />
              </Link>

              <h3 className="text-2xl font-regular text-center leading-tight">
                Custom Software<br />Development
              </h3>
            </div>
          </div>

          <div className="glass-card relative rounded-2xl border border-[var(--color-accent)] p-6 flex flex-col gap-4 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-4xl font-light tracking-tight">99.9%</p>
                <p className="text-xs text-white/50 mt-1 uppercase tracking-widest font-semibold">Guaranteed Uptime</p>
              </div>
              <div className="inline-flex rounded-full p-[6px] border border-white bg-white/30 transition-all duration-300">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Globe size={20} className="text-[var(--color-accent)]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-1 justify-center my-2">
              <div className="w-full flex-col flex">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-white/60">System Status</span>
                  <div className="flex items-center gap-1.5">
                     <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse shadow-[0_0_8px_var(--color-accent)]" />
                     <span className="text-xs font-semibold text-[var(--color-accent)]">Operational</span>
                  </div>
                </div>
                <div className="w-full h-[65px] flex items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                  <svg 
                    viewBox="0 0 400 40" 
                    className="w-[200%] h-full fill-none overflow-visible stroke-[var(--color-accent)] flex-shrink-0"
                    style={{ filter: "drop-shadow(0px 0px 4px rgba(153, 0, 255, 0.6))" }}
                    preserveAspectRatio="none"
                  >
                    <g>
                      <animateTransform
                        attributeName="transform"
                        type="translate"
                        from="0 0"
                        to="-400 0"
                        dur="8s"
                        repeatCount="indefinite"
                      />
                      <path 
                        d="M0,20 L20,20 C25,20 25,12 30,12 C35,12 35,20 40,20 L70,20 C75,20 75,30 80,30 C85,30 85,5 95,5 C105,5 105,25 110,25 C115,25 115,20 120,20 L170,20 C175,20 175,10 180,10 C185,10 185,35 190,35 C195,35 195,20 200,20 L220,20 C230,20 240,15 250,15 C260,15 270,25 280,25 C290,25 295,20 300,20 L340,20 C345,20 345,8 350,8 C355,8 355,20 360,20 L400,20 L420,20 C425,20 425,12 430,12 C435,12 435,20 440,20 L470,20 C475,20 475,30 480,30 C485,30 485,5 495,5 C505,5 505,25 510,25 C515,25 515,20 520,20 L570,20 C575,20 575,10 580,10 C585,10 585,35 590,35 C595,35 595,20 600,20 L620,20 C630,20 640,15 650,15 C660,15 670,25 680,25 C690,25 695,20 700,20 L740,20 C745,20 745,8 750,8 C755,8 755,20 760,20 L800,20" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-medium text-center leading-tight pt-2">
              DevOps &amp; Cloud<br />Services
            </h3>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
