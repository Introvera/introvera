import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import FadeInSection from "@/components/ui/FadeInSection";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="w-full bg-black min-h-screen pt-28 pb-20 overflow-hidden">
      
      <FadeInSection className="relative w-full py-16 md:py-24 mb-12 md:mb-16 overflow-visible">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-accent)] rounded-full opacity-[0.04] blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[40vw] h-[150px] bg-[linear-gradient(265.01deg,rgba(153,0,255,0.3)_17.05%,rgba(0,102,255,0.3)_83.46%)] blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-left flex flex-col items-start">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
            Our Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-white mb-6">
            Projects that define<br />the future.
          </h1>
          <p className="max-w-2xl text-white/70 text-base md:text-lg font-light leading-relaxed">
            Explore our diverse range of successful projects across industries. We combine flawless engineering and compelling design to deliver digital transformations.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection className="max-w-7xl mx-auto px-6 relative z-20">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
           {projectsData.map((project) => (
               <Link 
                 href={`/projects/${project.slug}`} 
                 key={project.id} 
                 className="group relative block w-full rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(153,0,255,0.2)]"
                 style={{
                   background: 'linear-gradient(160deg, #2D1D4F 0%, #0C0123 100%)',
                 }}
               >
                 {/* Top Content Area */}
                 <div className="relative z-10 p-6 lg:p-8">
                   {/* Arrow Button - top right */}
                   <div className="flex justify-between items-start mb-4">
                     <div className="flex-1">
                       <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">
                         {project.title} Website
                       </h3>
                       <p className="text-white/60 text-xs lg:text-sm leading-relaxed line-clamp-3">
                         {project.description.split('\n')[0]}
                       </p>
                     </div>
                     <span className="shrink-0 ml-3 w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/50">
                       <ArrowUpRight size={18} className="text-white" />
                     </span>
                   </div>

                   {/* Tags */}
                   <div className="flex flex-wrap gap-2">
                     {project.tags.map(tag => (
                       <span key={tag} className="px-3 py-1 rounded-full border border-white/25 text-[11px] text-white/80 bg-white/5 backdrop-blur-sm">
                         {tag}
                       </span>
                     ))}
                   </div>
                 </div>

                 {/* Mockup Image Area - natural height */}
                 <div className="relative w-full">
                   <Image
                     src={project.mainImage}
                     alt={`${project.title} mockup`}
                     width={800}
                     height={600}
                     className="w-full h-auto object-contain object-center px-4 lg:px-6 transition-transform duration-700 group-hover:scale-[1.03]"
                   />
                 </div>

                 {/* Logo below the mockup image */}
                 {project.logo && (
                   <div className="relative z-10 flex items-center gap-2.5 px-6 lg:px-8 py-4 justify-end">
                     <div className="w-10 h-10 lg:w-12 lg:h-12 relative shrink-0 rounded-lg overflow-hidden p-1.5">
                       <Image
                         src={project.logo}
                         alt={`${project.title} logo`}
                         fill
                         className="object-contain p-0.5"
                       />
                     </div>
                   </div>
                 )}
              </Link>
           ))}
         </div>
      </FadeInSection>
    </div>
  );
}
