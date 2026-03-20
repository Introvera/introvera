import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { SiFiverr } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0514] pt-20 pb-8 relative overflow-hidden text-white" id="footer">
      
      <div className="absolute inset-0 pointer-events-none z-0">
         <Image
           src="/images/backgrounds/footer-bg.png"
           alt=""
           fill
           className="object-cover object-center mix-blend-screen"
         />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="mb-6">
              <Image
                src="/images/logo/logo.png"
                alt="Introvera"
                width={160}
                height={40}
                className="object-contain"
              />
            </Link>
            
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-sm mb-10 font-[var(--font-poppins)]">
              Empowering businesses with intelligent, scalable, and secure software solutions.
              We build with passion and purpose for the digital future.
            </p>

            <div className="flex items-center gap-6">
              <Link href="https://www.linkedin.com/company/introvera/" className="text-white hover:text-[var(--color-accent)] transition-colors">
                <Linkedin size={24} strokeWidth={1.5} />
              </Link>
              <Link href="https://web.facebook.com/profile.php?id=61577711031531&_rdc=1&_rdr" className="text-white hover:text-[var(--color-accent)] transition-colors">
                <Facebook size={24} strokeWidth={1.5} />
              </Link>
              <Link href="https://www.instagram.com/team_introvera/" className="text-white hover:text-[var(--color-accent)] transition-colors">
                <Instagram size={24} strokeWidth={1.5} />
              </Link>
              <Link href="https://www.fiverr.com/s/XL5o0l2" className="text-white hover:text-[var(--color-accent)] transition-colors">
                <TbBrandFiverr size={24} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7 flex flex-col gap-6 font-medium">
             <Link href="/" className="text-white hover:text-[var(--color-accent)] transition-colors w-fit">
               Home
             </Link>
             <Link href="/services" className="text-white hover:text-[var(--color-accent)] transition-colors w-fit">
               Service
             </Link>
             <Link href="/projects" className="text-white hover:text-[var(--color-accent)] transition-colors w-fit">
               Projects
             </Link>
             <Link href="/about" className="text-white hover:text-[var(--color-accent)] transition-colors w-fit">
               About
             </Link>
             <Link href="/contact" className="text-white hover:text-[var(--color-accent)] transition-colors w-fit">
               Contact
             </Link>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-10">
            <div>
              <h4 className="text-white font-medium mb-3">Contact Us</h4>
              <p className="text-white/80 text-sm mb-1">+94 78 364 0 894</p>
              <Link href="mailto:contact@introvera.com" className="text-white/80 text-sm hover:text-[var(--color-accent)] transition-colors">
                contact@introvera.com
              </Link>
            </div>

            <div>
              <h4 className="text-white font-medium mb-3">Location</h4>
              <p className="text-white/80 text-sm leading-relaxed max-w-[200px]">
                Introvera Pvt Ltd,<br /> 275/3, New Kandy Road,<br />
                Biyagama, Sri Lanka
              </p>
            </div>
          </div>

        </div>

        <div className="w-full border-t border-white/40 pt-8 flex text-center justify-center">
            <p className="text-white/70 text-sm">
              &copy; 2026 Introvera Pvt Ltd. All rights reserved.
            </p>
        </div>

      </div>
    </footer>
  );
}
