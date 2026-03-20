import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="w-full bg-black min-h-screen pt-28 pb-20 overflow-hidden">
      
      <section className="relative w-full py-16 md:py-24 mb-12 md:mb-16 overflow-visible">
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
      </section>

      <section className="max-w-7xl mx-auto px-6 relative z-20">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
           {projectsData.map((project) => (
              <div key={project.id} className="group relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#0F0F13] border border-white/5 transition-all duration-500 hover:border-[var(--color-accent)]/50 hover:shadow-[0_0_40px_rgba(153,0,255,0.15)] flex flex-col justify-end">
                 <Image
                   src={project.images[0]}
                   alt={project.title}
                   fill
                   className="object-cover object-center opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80 mix-blend-screen"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                 
                 <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                   <div className="flex justify-end">
                     <span className="inline-flex rounded-full p-[4px] border border-white/20 bg-black/40 backdrop-blur-md opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                       <Link
                         href={`/projects/${project.slug}`}
                         className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
                       >
                         <ArrowUpRight size={20} className="text-black" />
                       </Link>
                     </span>
                   </div>
                   <div>
                     <h3 className="text-2xl font-medium text-white mb-3">
                       {project.title}
                     </h3>
                     <div className="flex flex-wrap gap-2">
                       {project.tags.map(tag => (
                         <span key={tag} className="px-3 py-1 rounded-full border border-white/20 text-[10px] text-white/80 bg-white/5 uppercase tracking-wider">
                            {tag}
                         </span>
                       ))}
                     </div>
                   </div>
                 </div>
              </div>
           ))}
         </div>
      </section>
    </div>
  );
}
