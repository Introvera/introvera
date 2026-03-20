import Image from "next/image";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us | Introvera",
  description: "Get in touch with Introvera for your next digital idea.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-black min-h-screen pt-28 pb-20 overflow-hidden">
      
      <section className="relative w-full py-16 md:py-24 mb-12 md:mb-16 overflow-visible">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-accent)] rounded-full opacity-[0.04] blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[40vw] h-[150px] bg-[linear-gradient(265.01deg,rgba(153,0,255,0.3)_17.05%,rgba(0,102,255,0.3)_83.46%)] blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-left flex flex-col items-start">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-white mb-6">
            Let&apos;s build something<br />together.
          </h1>
          <p className="max-w-2xl text-white/70 text-base md:text-lg font-light leading-relaxed">
            Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 relative z-20">
         <div className="w-full bg-[#1c123d]/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-16">
               
               <div className="flex flex-col">
                  <form className="flex flex-col gap-6">
                     
                     <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-white/80 text-sm font-medium">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          placeholder="Your Name" 
                          className="w-full bg-white/5 border border-white/10 focus:border-[var(--color-accent)] rounded-xl px-5 py-4 text-white text-sm outline-none transition-all placeholder:text-white/30"
                        />
                     </div>

                     <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-white/80 text-sm font-medium">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          placeholder="your@gmail.com" 
                          className="w-full bg-white/5 border border-white/10 focus:border-[var(--color-accent)] rounded-xl px-5 py-4 text-white text-sm outline-none transition-all placeholder:text-white/30"
                        />
                     </div>

                     <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-white/80 text-sm font-medium">Message</label>
                        <textarea 
                          id="message" 
                          rows={4}
                          placeholder="Tell us about your project..." 
                          className="w-full bg-white/5 border border-white/10 focus:border-[var(--color-accent)] rounded-xl px-5 py-4 text-white text-sm outline-none transition-all placeholder:text-white/30 resize-none"
                        />
                     </div>

                     <div className="w-fit mt-2">
                       <span className="inline-flex rounded-full p-[6px] border border-white bg-white/30 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                         <button 
                           type="submit"
                           className="inline-flex items-center gap-4 px-4 py-2 bg-white text-[var(--color-accent)] text-sm font-medium rounded-full transition-all duration-300 group"
                         >
                           Send Message
                           <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                         </button>
                       </span>
                     </div>

                  </form>
               </div>

               <div className="flex flex-col gap-5">
                  
                  <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:bg-white/10 transition-colors group cursor-pointer">
                     <div className="shrink-0">
                        <Mail size={32} strokeWidth={1.5} className="text-white group-hover:text-[var(--color-accent)] transition-colors" />
                     </div>
                     <div className="flex flex-col gap-1">
                        <h4 className="text-white font-semibold text-base">Email</h4>
                        <p className="text-white/70 text-sm">contact@introvera.com</p>
                     </div>
                  </div>

                  <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:bg-white/10 transition-colors group cursor-pointer">
                     <div className="shrink-0">
                        <Phone size={32} strokeWidth={1.5} className="text-white group-hover:text-[var(--color-accent)] transition-colors" />
                     </div>
                     <div className="flex flex-col gap-1">
                        <h4 className="text-white font-semibold text-base">Phone</h4>
                        <p className="text-white/70 text-sm">+94 78 364 0894</p>
                     </div>
                  </div>

                  <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:bg-white/10 transition-colors group cursor-pointer">
                     <div className="shrink-0">
                        <MapPin size={32} strokeWidth={1.5} className="text-white group-hover:text-[var(--color-accent)] transition-colors" />
                     </div>
                     <div className="flex flex-col gap-1">
                        <h4 className="text-white font-semibold text-base">Location</h4>
                        <p className="text-white/70 text-sm leading-relaxed max-w-[200px]">275/3, New Kandy Road,<br/>Biyagama, Sri Lanka</p>
                     </div>
                  </div>

                  <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:bg-white/10 transition-colors group cursor-pointer">
                     <div className="shrink-0">
                        <MessageCircle size={32} strokeWidth={1.5} className="text-white group-hover:text-[var(--color-accent)] transition-colors" />
                     </div>
                     <div className="flex flex-col gap-1">
                        <h4 className="text-white font-semibold text-base">WhatsApp</h4>
                        <p className="text-white/70 text-sm">Chat with us on WhatsApp</p>
                     </div>
                  </div>

               </div>
               
            </div>

            <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
               <Image
                 src="/images/backgrounds/hero-robot.png" 
                 alt="Our Location"
                 fill
                 className="object-cover object-center transition-transform duration-1000 group-hover:scale-110 opacity-60"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent mix-blend-multiply" />
               
               <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-white font-medium text-sm md:text-base">
                     <MapPin size={16} className="text-[var(--color-accent)]" />
                     275/3, New Kandy Road, Biyagama, Sri Lanka
                  </div>
                  <p className="text-white/50 text-xs md:text-sm pl-6">
                     Click to view on Google Maps
                  </p>
               </div>
            </div>

         </div>
      </section>

    </div>
  );
}
