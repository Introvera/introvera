import { ArrowDown, ChevronRight, CloudLightning, Lock, Users, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="w-full bg-black text-white pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-24">
          {/* Left Side */}
          <div className="lg:w-1/2">
            <h4 className="text-[var(--color-accent)] font-semibold tracking-wider uppercase text-sm mb-6">
              About Us
            </h4>
            <h2 className="text-5xl md:text-6xl lg:text-[64px] font-medium leading-[1.15] tracking-tight">
              <span className="text-[var(--color-accent)]">Driven by<br/>innovation,</span> Built for<br/>the future.
            </h2>
          </div>
          
          {/* Right Side (Card) */}
          <div className="lg:w-5/12 bg-[#121214] rounded-[32px] p-8 md:p-10 flex flex-col justify-between h-full">
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Introvera is a digital innovation studio where creativity meets technology. We design smart, scalable solutions that help businesses grow and people thrive.
            </p>
            
            <div className="flex">
              <span className="inline-flex rounded-full p-[6px] border border-[var(--color-accent)] bg-[var(--color-accent)]/15 transition-all duration-300">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-3 px-6 py-2.5 bg-[var(--color-accent)] text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
                >
                  Learn more
                  <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
                </Link>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Image (Left) */}
          <div className="lg:w-5/12 h-[500px] relative rounded-[32px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
              alt="Team innovating"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Details & Features (Right) */}
          <div className="lg:w-7/12 flex flex-col justify-between pt-4">
            
            {/* Core Values List */}
            <div className="space-y-12 mb-16 lg:mb-0">
              {/* Item 1 */}
              <div className="flex items-start gap-5">
                <div className="mt-1 w-7 h-7 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                  <ChevronRight size={14} className="text-white" strokeWidth={2} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr] gap-4 md:gap-8 w-full">
                  <h3 className="text-2xl font-medium leading-tight">Empowering<br/>Innovation</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    We offer AI solutions that turn ideas into outcomes, helping businesses thrive.
                  </p>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="flex items-start gap-5">
                <div className="mt-1 w-7 h-7 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                  <ChevronRight size={14} className="text-white" strokeWidth={2} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr] gap-4 md:gap-8 w-full">
                  <h3 className="text-2xl font-medium leading-tight">Agile Development<br/>Process</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    We work in fast, flexible sprints to deliver results quickly and efficiently.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-5">
                <div className="mt-1 w-7 h-7 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                  <ChevronRight size={14} className="text-white" strokeWidth={2} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr] gap-4 md:gap-8 w-full">
                  <h3 className="text-2xl font-medium leading-tight">Goal Driven<br/>Solutions</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Our solutions align with your goals, not just the tech. Results matter.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Features Row */}
            <div className="pb-4 relative">
              {/* Separators container overlay - for desktop */}
              <div className="hidden md:flex absolute inset-0 pointer-events-none w-full justify-between px-6 pt-2">
                <div className="w-[1px] h-10 bg-white/10 ml-[25%] mt-4"></div>
                <div className="w-[1px] h-10 bg-white/10 ml-[25%] mt-4"></div>
                <div className="w-[1px] h-10 bg-white/10 mr-[22%] mt-4"></div>
              </div>

              {/* Items container */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 relative z-10">
                <div className="flex flex-col items-center gap-4 text-center">
                  <CloudLightning size={32} className="text-white" strokeWidth={1.5} />
                  <span className="text-[13px] font-medium text-gray-400">Fast Delivery</span>
                </div>

                <div className="flex flex-col items-center gap-4 text-center">
                  <Lock size={32} className="text-white" strokeWidth={1.5} />
                  <span className="text-[13px] font-medium text-gray-400">Secure & Reliable</span>
                </div>
                
                <div className="flex flex-col items-center gap-4 text-center">
                  <Users size={32} className="text-white" strokeWidth={1.5} />
                  <span className="text-[13px] font-medium text-gray-400">Dedicated Team</span>
                </div>

                <div className="flex flex-col items-center gap-4 text-center">
                  <Clock size={32} className="text-white" strokeWidth={1.5} />
                  <span className="text-[13px] font-medium text-gray-400">24/7 Support</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
