import { Mail, MapPin, Phone, ArrowRight, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/Contact/ContactForm";
import FadeInSection from "@/components/ui/FadeInSection";

export const metadata = {
  title: "Contact Us | Introvera Software Development",
  description:
    "Get a free consultation for your custom software, website, mobile app, or POS system project. Introvera builds robust digital solutions for global businesses.",
  alternates: {
    canonical: "https://introvera.com/contact",
  },
  openGraph: {
    title: "Contact Introvera | Free Consultation",
    description:
      "Get in touch with Introvera for your next software project. Custom software, mobile apps, POS systems, and more.",
    url: "https://introvera.com/contact",
    images: [
      {
        url: "/images/logo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Introvera Contact",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="w-full bg-black min-h-screen pt-28 pb-20 overflow-hidden">
      
      <FadeInSection className="relative w-full py-16 md:py-24 mb-12 md:mb-16 overflow-visible">
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
      </FadeInSection>

      <FadeInSection className="max-w-7xl mx-auto px-6 relative z-20">
         <div className="w-full bg-[#1c123d]/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-16">
               
               <div className="flex flex-col gap-8">
                  <h3 className="text-3xl font-medium text-white">Send Us a Message</h3>
                  <ContactForm />
               </div>

               <div className="flex flex-col gap-5">
                  
                  <a href="mailto:contact@introvera.com" className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:bg-white/10 transition-colors group cursor-pointer">
                     <div className="shrink-0">
                        <Mail size={32} strokeWidth={1.5} className="text-white group-hover:text-[var(--color-accent)] transition-colors" />
                     </div>
                     <div className="flex flex-col gap-1">
                        <h4 className="text-white font-semibold text-base">Email</h4>
                        <p className="text-white/70 text-sm">contact@introvera.com</p>
                     </div>
                  </a>

                  <a href="tel:+94783640894" className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:bg-white/10 transition-colors group cursor-pointer">
                     <div className="shrink-0">
                        <Phone size={32} strokeWidth={1.5} className="text-white group-hover:text-[var(--color-accent)] transition-colors" />
                     </div>
                     <div className="flex flex-col gap-1">
                        <h4 className="text-white font-semibold text-base">Phone</h4>
                        <p className="text-white/70 text-sm">+94 78 364 0894</p>
                     </div>
                  </a>

                  <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:bg-white/10 transition-colors group cursor-pointer">
                     <div className="shrink-0">
                        <MapPin size={32} strokeWidth={1.5} className="text-white group-hover:text-[var(--color-accent)] transition-colors" />
                     </div>
                     <div className="flex flex-col gap-1">
                        <h4 className="text-white font-semibold text-base">Location</h4>
                        <p className="text-white/70 text-sm leading-relaxed max-w-[200px]">Introvera Pvt Ltd, <br />275/3, New Kandy Road,<br/>Biyagama, Sri Lanka</p>
                     </div>
                  </div>

                  <a href="https://wa.me/94783640894" target="_blank" rel="noopener noreferrer" className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:bg-white/10 transition-colors group cursor-pointer">
                     <div className="shrink-0">
                        <FaWhatsapp size={32} className="text-white group-hover:text-[var(--color-accent)] transition-colors" />
                     </div>
                     <div className="flex flex-col gap-1">
                        <h4 className="text-white font-semibold text-base">WhatsApp</h4>
                        <p className="text-white/70 text-sm">Chat with us on WhatsApp</p>
                     </div>
                  </a>

               </div>
               
            </div>

            <div className="flex flex-col gap-8">
               <div className="flex flex-col gap-2">
                  <h3 className="text-3xl font-medium text-white">Find Us</h3>
                  <p className="text-white/70 text-lg font-light leading-relaxed">
                     We&apos;re based in Colombo, Sri Lanka, but work with clients worldwide.
                  </p>
               </div>

               <Link 
                  href="https://www.google.com/maps/place/Keells+-+Biyagama/@6.9490632,79.9914352,3a,90y,108.13h,87.05t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIDag4_dXQ!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAFfmt2ZdrxM6fFmmgxPn7c2-hmqk2t3Hjf3RaNIHF1zoF3ix3_Yq52iNquv3YYwqBt7XUOuoH2qRAxOZg5NDhA-AVYxuGI1h6DKw8O_b-uPW74rR3RLPwNJx7dIvAZjrfkTrpis2eu-_%3Dw900-h600-k-no-pi2.947124824684437-ya108.13116409537167-ro0-fo100!7i7680!8i3840!4m7!3m6!1s0x3ae257d5ba168f6f:0xf43a034e74261201!8m2!3d6.9494852!4d79.9916202!10e5!16s%2Fg%2F11h0b4ww39?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer block"
               >
                  <Image
                    src="/images/backgrounds/contact1.webp" 
                    alt="Our Location"
                    fill
                    className="object-cover object-center transition-transform duration-1000 group-hover:scale-110 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent mix-blend-multiply" />
                  
                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex flex-col gap-2">
                     <div className="flex items-center gap-2 text-white font-medium text-sm md:text-base">
                        <MapPin size={16} className="text-[var(--color-accent)]" />
                        Introvera Pvt Ltd, 275/3, New Kandy Road, Biyagama, Sri Lanka
                     </div>
                     <p className="text-white/50 text-xs md:text-sm pl-6 group-hover:text-white/80 transition-colors">
                        Click to view on Google Maps
                     </p>
                  </div>
               </Link>
            </div>

         </div>
      </FadeInSection>

      {/* Global Coverage Section */}
      <FadeInSection className="max-w-7xl mx-auto px-6 relative z-10 mt-20 mb-32">
        <div className="bg-[#0F0F13] border border-white/5 rounded-3xl p-10 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">Global Software Development Services</h2>
            <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">While our development center is proudly based in Sri Lanka, we operate on a global scale. We provide overlapping working hours and seamless remote communication for clients worldwide.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border-t border-white/10">
              <span className="block text-white font-medium mb-1">North America</span>
              <span className="text-[var(--color-accent)] text-xs uppercase tracking-wider font-semibold">Active Clients</span>
            </div>
            <div className="p-4 border-t border-white/10">
              <span className="block text-white font-medium mb-1">Europe</span>
              <span className="text-[var(--color-accent)] text-xs uppercase tracking-wider font-semibold">Active Clients</span>
            </div>
            <div className="p-4 border-t border-white/10">
              <span className="block text-white font-medium mb-1">Middle East</span>
              <span className="text-[var(--color-accent)] text-xs uppercase tracking-wider font-semibold">Active Clients</span>
            </div>
            <div className="p-4 border-t border-white/10">
              <span className="block text-white font-medium mb-1">Asia Pacific</span>
              <span className="text-[var(--color-accent)] text-xs uppercase tracking-wider font-semibold">Active Clients</span>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* How We Start Process */}
      <FadeInSection className="max-w-7xl mx-auto px-6 relative z-10 mb-32">
        <div className="text-center mb-16">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
            Next Steps
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-white">
            What Happens After You Contact Us?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)] font-bold text-lg">1</div>
            <h3 className="text-xl font-medium text-white">Initial Discovery Call</h3>
            <p className="text-white/70 text-sm leading-relaxed">Within 24 hours, we&apos;ll schedule a free consultation to understand your business goals, target audience, and the technical requirements of your POS system, mobile app, or custom software.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)] font-bold text-lg">2</div>
            <h3 className="text-xl font-medium text-white">Scope of Work & Proposal</h3>
            <p className="text-white/70 text-sm leading-relaxed">Our team will draft a detailed Scope of Work (SOW) including the project timeline, milestones, and a transparent cost estimate. Specific technical architecture details can also be provided upon request.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)] font-bold text-lg">3</div>
            <h3 className="text-xl font-medium text-white">Project Kickoff</h3>
            <p className="text-white/70 text-sm leading-relaxed">Once approved, we assemble your dedicated team of developers, designers, and project managers and immediately begin the UI/UX design and agile development process.</p>
          </div>
        </div>
      </FadeInSection>

      {/* FAQ Section */}
      <FadeInSection className="max-w-7xl mx-auto px-6 relative z-10 mb-32">
        <div className="text-center mb-16">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-white">
            Contact & Partnership Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0F0F13] border border-white/5 rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-300">
            <h3 className="text-lg font-medium text-white mb-3">Do you sign NDAs (Non-Disclosure Agreements)?</h3>
            <p className="text-white/70 text-sm leading-relaxed">Yes. We take your intellectual property and data security very seriously. We are happy to sign a standard NDA before you share any confidential details about your software project.</p>
          </div>
          <div className="bg-[#0F0F13] border border-white/5 rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-300">
            <h3 className="text-lg font-medium text-white mb-3">How do you handle time zone differences?</h3>
            <p className="text-white/70 text-sm leading-relaxed">We optimize our team schedules to ensure a minimum of 3-4 hours of overlapping time with your timezone (no matter where you are located) for daily standups and live collaboration.</p>
          </div>
          <div className="bg-[#0F0F13] border border-white/5 rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-300">
            <h3 className="text-lg font-medium text-white mb-3">What is the best way to contact support?</h3>
            <p className="text-white/70 text-sm leading-relaxed">For all inquiries and support, the best way to reach us is by emailing contact@introvera.com, sending us a message on WhatsApp, or calling our mobile line. We prioritize rapid responses across all these channels.</p>
          </div>
          <div className="bg-[#0F0F13] border border-white/5 rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-300">
            <h3 className="text-lg font-medium text-white mb-3">Do you offer white-label development services?</h3>
            <p className="text-white/70 text-sm leading-relaxed">Yes, we partner with marketing agencies and IT consultancies globally to provide white-label UI/UX design, mobile app development, and web development services under their brand.</p>
          </div>
        </div>
      </FadeInSection>

      {/* Outgoing Internal Links */}
      <FadeInSection className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link href="/services" className="group relative overflow-hidden bg-[#0F0F13] border border-white/10 rounded-2xl p-8 hover:border-[var(--color-accent)] transition-all flex-1 text-center">
             <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">Our Services</h3>
             <p className="text-white/60 mb-4 text-sm">Discover the engineering services we offer.</p>
             <span className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium text-sm">Explore Services <ArrowRight size={16} /></span>
          </Link>
          <Link href="/projects" className="group relative overflow-hidden bg-[#0F0F13] border border-white/10 rounded-2xl p-8 hover:border-[var(--color-accent)] transition-all flex-1 text-center">
             <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">Our Projects</h3>
             <p className="text-white/60 mb-4 text-sm">See the real-world impact of our custom software.</p>
             <span className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium text-sm">View Portfolio <ArrowRight size={16} /></span>
          </Link>
        </div>
      </FadeInSection>

    </div>
  );
}
