import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle2, MessageSquare, ShieldCheck, Target, Clock, Users } from "lucide-react";

export const metadata = {
  title: "About Us | Introvera",
  description: "Innovation at the heart of everything we do.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-black min-h-screen pt-28 pb-20 overflow-hidden">
      
      <section className="relative w-full py-16 md:py-24 mb-12 md:mb-16 overflow-visible">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-accent)] rounded-full opacity-[0.04] blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[40vw] h-[150px] bg-[linear-gradient(265.01deg,rgba(153,0,255,0.3)_17.05%,rgba(0,102,255,0.3)_83.46%)] blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-left flex flex-col items-start">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-white mb-6">
            Innovation at our<br />core.
          </h1>
          <p className="max-w-2xl text-white/70 text-base md:text-lg font-light leading-relaxed">
            We are a digital innovation studio where creativity meets technology. We design smart, scalable solutions that help businesses grow and people thrive.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 relative z-20 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-[2rem] p-10 h-[400px] flex flex-col justify-end bg-[#0F0F13] border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
             <Image
                src="/images/backgrounds/our-vision.png"
                alt="Our Vision"
                fill
                className="object-cover object-center opacity-40 mix-blend-screen transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
             <div className="relative z-10 w-full max-w-md">
                <h3 className="text-3xl font-medium text-[var(--color-accent)] mb-4">Our Vision</h3>
                <p className="text-white/80 leading-relaxed text-[15px]">
                  To be a global leader in tech innovation, recognized for our commitment to quality, creativity, and customer success. We aim to shape a smarter, more connected future through transformative technology and meaningful digital experiences.
                </p>
             </div>
          </div>

          <div className="group relative overflow-hidden rounded-[2rem] p-10 h-[400px] flex flex-col justify-end bg-[#0F0F13] border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
             <Image
                src="/images/backgrounds/our-mission.png"
                alt="Our Mission"
                fill
                className="object-cover object-center opacity-40 mix-blend-screen transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
             <div className="relative z-10 w-full max-w-md">
                <h3 className="text-3xl font-medium text-[var(--color-accent)] mb-4">Our Mission</h3>
                <p className="text-white/80 leading-relaxed text-[15px]">
                  To drive digital transformation by providing cutting edge technology solutions that are reliable, scalable, and user friendly. We strive to help our clients achieve their goals through innovation, collaboration, and excellence.
                </p>
             </div>
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 relative z-10 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-center">
          <div className="lg:col-span-6 2xl:col-span-7 flex flex-col gap-6 text-[#A1A1AA] text-base lg:text-lg leading-relaxed font-light">
             <p>
               <span className="text-white font-normal">At Introvera, innovation</span> is at the heart of everything we do. We are a team of thinkers, creators, and engineers dedicated to designing digital solutions that help <span className="text-white font-normal">businesses and individuals</span> thrive in a fast changing, connected world.
             </p>
             <p>
               Our strength lies in <span className="text-white font-normal">blending</span> creativity, strategy, and technology to build software that&apos;s not only functional <span className="text-white font-normal">but</span> also transformative. From scalable web platforms to intelligent digital tools, we focus on creating solutions that solve real problems, drive growth, and inspire progress.
             </p>
             <p>
               We believe great technology starts with understanding people, their goals, their challenges, and their vision for the future. That&apos;s why every project at Introvera is <span className="text-white font-normal">guided by collaboration, innovation,</span> and a shared commitment to quality.
             </p>
             <p>
               With a passion for <span className="text-white font-normal">progress</span> and a mindset for excellence, we&apos;re shaping a future where technology empowers possibility, one idea, one experience, and one solution at a time.
             </p>
          </div>

          <div className="lg:col-span-6 2xl:col-span-5 relative h-[500px] sm:h-[600px] w-full mt-10 lg:mt-0">
             <div className="absolute top-0 right-0 w-[55%] h-[40%] rounded-2xl overflow-hidden glass-card">
               <Image 
                 src="/images/backgrounds/services-uiux.jpg" 
                 alt="Collaboration" 
                 fill 
                 className="object-cover opacity-80"
               />
             </div>

             <div className="absolute top-[25%] left-0 w-[60%] h-[45%] rounded-2xl overflow-hidden glass-card z-10">
               <Image 
                 src="/images/backgrounds/services-backend.jpg" 
                 alt="Engineering" 
                 fill 
                 className="object-cover opacity-80"
               />
             </div>

             <div className="absolute bottom-0 left-[20%] w-[55%] h-[45%] rounded-2xl overflow-hidden glass-card z-20">
               <Image 
                 src="/images/backgrounds/services-mobile.jpg" 
                 alt="Development" 
                 fill 
                 className="object-cover opacity-80"
               />
             </div>

          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
           
           <div className="flex-1 max-w-2xl">
              <p className="text-[var(--color-accent)] text-sm font-semibold tracking-wider uppercase mb-5">
                 Why Choose Us?
              </p>
              <h2 className="text-xl font-regular text-white leading-tight">
                We don&apos;t just deliver software, we deliver confidence. Our process is built on transparency, efficiency, and technical excellence.
              </h2>
           </div>

           <div className="shrink-0 flex flex-col items-start md:items-end gap-6">
              <h3 className="text-xl md:text-2xl font-medium text-white">What&apos;s Your Next Idea?</h3>
              <div className="flex items-center gap-4">
                 <span className="inline-flex rounded-full p-[6px] border border-[var(--color-accent)] bg-[var(--color-accent)]/40 transition-all duration-300">
                   <Link 
                     href="#contact" 
                     className="inline-flex items-center gap-4 px-4 py-2 bg-[var(--color-accent)] text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
                   >
                     Get Started
                     <ArrowRight size={22} />
                   </Link>
                 </span>
              </div>
           </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center">
            
            <div className="bg-[#0F0F13] border border-white/5 rounded-3xl p-8 lg:p-10 shadow-lg h-fit lg:self-end order-2 lg:order-1">
               <div className="flex flex-col gap-10">
                  <div className="flex items-start gap-5">
                     <div className="shrink-0 w-10 h-10 rounded-full border border-[var(--color-accent)]/30 flex items-center justify-center bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                        <CheckCircle2 size={18} />
                     </div>
                     <div>
                        <h4 className="text-base font-semibold text-white mb-1">Clean Code</h4>
                        <p className="text-xs text-white/70 leading-relaxed">We write readable, maintainable code that&apos;s easy to scale and built to last.</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-5">
                     <div className="shrink-0 w-10 h-10 rounded-full border border-[var(--color-accent)]/30 flex items-center justify-center bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                        <Target size={18} />
                     </div>
                     <div>
                        <h4 className="text-base font-semibold text-white mb-1">Agile Process</h4>
                        <p className="text-xs text-white/70 leading-relaxed">We work in fast, flexible sprints to deliver results quickly and efficiently.</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-5">
                     <div className="shrink-0 w-10 h-10 rounded-full border border-[var(--color-accent)]/30 flex items-center justify-center bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                        <MessageSquare size={18} />
                     </div>
                     <div>
                        <h4 className="text-base font-semibold text-white mb-1">Clear Communication</h4>
                        <p className="text-xs text-white/70 leading-relaxed">We keep you updated every step of the way, no surprises, just transparency.</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="relative w-full aspect-[3/4] lg:h-[500px] rounded-3xl overflow-hidden order-1 lg:order-2">
               <Image
                 src="/images/backgrounds/about-choose-us.png"
                 alt="Robot Concept"
                 fill
                 className="object-cover object-top"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent mix-blend-multiply" />
               
               
            </div>

            <div className="bg-[#0F0F13] border border-white/5 rounded-3xl p-8 lg:p-10 shadow-lg h-fit lg:self-start order-3">
               <div className="flex flex-col gap-10">
                  <div className="flex items-start gap-5">
                     <div className="shrink-0 w-10 h-10 rounded-full border border-[var(--color-accent)]/30 flex items-center justify-center bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                        <ShieldCheck size={18} />
                     </div>
                     <div>
                        <h4 className="text-base font-semibold text-white mb-1">Business Focused</h4>
                        <p className="text-xs text-white/70 leading-relaxed">Our solutions align with your goals, not just the tech. Results matter.</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-5">
                     <div className="shrink-0 w-10 h-10 rounded-full border border-[var(--color-accent)]/30 flex items-center justify-center bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                        <Clock size={18} />
                     </div>
                     <div>
                        <h4 className="text-base font-semibold text-white mb-1">On Time Delivery</h4>
                        <p className="text-xs text-white/70 leading-relaxed">We plan realistically and hit deadlines without drama or excuses.</p>
                     </div>
                  </div>
                  
                  <div className="flex items-start gap-5">
                     <div className="shrink-0 w-10 h-10 rounded-full border border-[var(--color-accent)]/30 flex items-center justify-center bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                        <Users size={18} />
                     </div>
                     <div>
                        <h4 className="text-base font-semibold text-white mb-1">Skilled Team</h4>
                        <p className="text-xs text-white/70 leading-relaxed">Experienced developers, designers, and strategists on every project.</p>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </section>

    </div>
  );
}
