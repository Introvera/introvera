"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";

const services = [
  {
    id: "backend",
    title: "Backend/API\nDevelopment",
    description: "Developing secure and scalable backend systems with robust APIs that power seamless digital experiences.",
    image: "/images/backgrounds/services-backend.webp", // Placeholder until exact image is known/provided
    colSpan: "col-span-1 border border-white/5",
    rowSpan: "row-span-1",
    aspectRatio: "aspect-square md:aspect-[4/3] lg:aspect-auto min-h-[280px]",
    titleColor: "text-[var(--color-accent)]",
  },
  {
    id: "uiux",
    title: "UI/UX\nDesign",
    description: "Designing intuitive and engaging user experiences that turn ideas into meaningful digital products.",
    image: "/images/backgrounds/services-uiux.webp",
    colSpan: "col-span-1 border border-white/5",
    rowSpan: "row-span-1",
    aspectRatio: "aspect-square md:aspect-[4/3] lg:aspect-auto min-h-[280px]",
    titleColor: "text-[var(--color-accent)]",
  },
  {
    id: "web",
    title: "Web\nDevelopment",
    description: "Building fast, responsive, and modern websites that perform seamlessly across all devices.",
    image: "/images/backgrounds/services-web.webp",
    colSpan: "col-span-1 border border-white/5",
    rowSpan: "row-span-2",
    aspectRatio: "aspect-square max-h-[320px] md:max-h-none md:aspect-[3/4] lg:aspect-auto h-full",
    titleColor: "text-[var(--color-accent)]",
  },
  {
    id: "quality",
    title: "Quality\nAssurance",
    description: "Ensuring every product is reliable, polished, and ready for launch through careful testing and validation.",
    image: "/images/backgrounds/services-qa.webp",
    colSpan: "col-span-1 border border-white/5 flex-row", // Different visual layout
    rowSpan: "row-span-1",
    aspectRatio: "aspect-square max-h-[320px] md:max-h-none md:aspect-[2/1] lg:aspect-[3/1] xl:aspect-auto min-h-[280px]",
    titleColor: "text-[var(--color-accent)]",
  },
  {
    id: "mobile",
    title: "Mobile App\nDevelopment",
    description: "Creating user-friendly mobile applications that deliver smooth experiences on iOS and Android platforms.",
    image: "/images/backgrounds/services-mobile.webp",
    colSpan: "col-span-1 border border-white/5",
    rowSpan: "row-span-2",
    aspectRatio: "aspect-square max-h-[320px] md:max-h-none md:aspect-[3/4] lg:aspect-auto min-h-[350px]", // Aligning correctly to cover specific area
    titleColor: "text-[var(--color-accent)]",
  },
  {
    id: "devops",
    title: "DevOps &\nCloud Services",
    description: "Optimizing deployment, infrastructure, and cloud environments for performance, reliability, and growth.",
    image: "/images/backgrounds/services-devops.webp",
    colSpan: "col-span-1 md:col-span-2 border border-white/5",
    rowSpan: "row-span-1",
    aspectRatio: "aspect-square max-h-[320px] md:max-h-none md:aspect-[2/1] lg:aspect-[4/1] xl:aspect-auto min-h-[280px]",
    titleColor: "text-[var(--color-accent)]",
  },
  {
    id: "consulting",
    title: "Consulting &\nStrategy",
    description: "Helping businesses shape clear digital strategies and practical solutions that support long-term success.",
    image: "/images/backgrounds/services-consults.webp",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-1 border border-white/5",
    rowSpan: "row-span-1",
    aspectRatio: "aspect-square max-h-[320px] md:max-h-none md:aspect-[2/1] lg:aspect-[4/1] xl:aspect-auto min-h-[280px]",
    titleColor: "text-[var(--color-accent)]",
  }
];

export default function Services() {
  return (
    <FadeInSection className="relative w-full bg-[#050505] py-16 sm:py-20 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-[var(--color-accent)] text-sm font-semibold tracking-wider uppercase mb-4">
              What We Provide
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[50px] font-medium leading-tight">
              Turn Ideas into Impact,<br />
              Without Boundaries
            </h2>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-6 shrink-0 md:pb-4">
            <h3 className="text-xl md:text-2xl font-medium">What&apos;s Your Next Idea?</h3>
            <div className="flex items-center gap-4">
              <span className="inline-flex rounded-full p-[6px] border border-[var(--color-accent)] bg-[var(--color-accent)]/40 transition-all duration-300">
                <Link href="/services" className="inline-flex items-center gap-4 px-4 py-2 bg-[var(--color-accent)] text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-[var(--color-accent-hover)]">
                  Get Started
                  <ArrowUpRight size={22} />
                </Link>
              </span>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-min">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4 md:gap-6">
            <ServiceCard data={services[0]} className="flex-1" />
            <ServiceCard data={services[1]} className="flex-1" />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 md:gap-6">
            <ServiceCard data={services[2]} className="flex-1" />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col md:flex-row lg:flex-col gap-4 md:gap-6 md:col-span-2 lg:col-span-1">
            <ServiceCard data={services[3]} className="flex-1 w-full" />
            <ServiceCard data={services[4]} className="flex-1 w-full" />
          </div>

          {/* Bottom Row spanning columns */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
             <div className="md:col-span-1 lg:col-span-2 h-full w-full">
               <ServiceCard data={services[5]} className="h-full w-full" />
             </div>
             <div className="md:col-span-1 lg:col-span-1 h-full w-full">
               <ServiceCard data={services[6]} className="h-full w-full" />
             </div>
          </div>

        </div>
      </div>
    </FadeInSection>
  );
}

type ServiceData = {
  id: string;
  title: string;
  description: string;
  image: string;
  colSpan: string;
  rowSpan: string;
  aspectRatio: string;
  titleColor: string;
};

function ServiceCard({ data, className = "" }: { data: ServiceData, className?: string }) {
  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl bg-[#0F0F13] ${data.colSpan} ${data.aspectRatio} ${className} flex flex-col justify-end p-6 md:p-8 w-full max-w-[100vw] overflow-x-hidden max-h-[350px] md:max-h-none`}
    >
      {/* Background Image layer with Masking Gradient */}
      {data.image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={data.image}
            alt={data.title.replace('\n', ' ')}
            fill
            className="object-cover object-center opacity-60 mix-blend-screen transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay gradient to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent"></div>
        </div>
      )}

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col gap-3 mt-auto">
        <h3 className={`text-2xl font-medium whitespace-pre-line ${data.titleColor}`}>
          {data.title}
        </h3>
        <p className="text-sm text-white/60 leading-relaxed max-w-[85%]">
          {data.description}
        </p>
      </div>
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none border border-[var(--color-accent)]/30 rounded-2xl shadow-[inset_0_0_20px_rgba(153,0,255,0.1)]"></div>
    </div>
  );
}
