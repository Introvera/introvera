import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find(p => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full bg-black min-h-screen pt-28 pb-32 overflow-hidden">
      
      <section className="relative w-full pt-10 pb-20 mb-6 overflow-visible">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(153,0,255,0.2)_0%,transparent_70%)] blur-[50px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-8">
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium w-fit">
             <ArrowLeft size={16} />
             Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap gap-2 mb-6">
                 {project.tags.map(tag => (
                   <span key={tag} className="px-3 py-1 rounded-full border border-[var(--color-accent)]/30 text-[10px] text-[var(--color-accent)] bg-[var(--color-accent)]/10 uppercase tracking-wider font-semibold">
                      {tag}
                   </span>
                 ))}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight text-white mb-6">
                {project.title}
              </h1>
              <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6 lg:items-end">
               <span className="inline-flex rounded-full p-[6px] border border-white bg-white/30 transition-all duration-300">
                 <Link
                   href={project.link}
                   target="_blank"
                   className="inline-flex items-center gap-4 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:bg-gray-200"
                 >
                   Visit Live Site
                   <ArrowUpRight size={20} className="text-[var(--color-accent)]" />
                 </Link>
               </span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 relative z-20 mb-20">
        <div className="w-full aspect-[21/9] md:aspect-[2.5/1] rounded-[2.5rem] overflow-hidden glass-card relative p-2 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
           <div className="relative w-full h-full rounded-3xl overflow-hidden bg-[#0F0F13]">
             <Image
               src={project.image}
               alt={project.title}
               fill
               className="object-cover object-center opacity-80 mix-blend-screen"
             />
           </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
         <div className="lg:w-1/3 flex flex-col gap-10">
           <div className="flex flex-col gap-6 bg-[#0F0F13] border border-white/5 rounded-3xl p-8 shadow-2xl">
             <div>
               <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">Client</p>
               <p className="text-white font-medium text-lg">{project.client}</p>
             </div>
             <div className="w-full h-[1px] bg-white/5" />
             <div>
               <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">Timeline</p>
               <p className="text-white font-medium text-lg">{project.duration}</p>
             </div>
             <div className="w-full h-[1px] bg-white/5" />
             <div>
               <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">Services Provided</p>
               <ul className="flex flex-col gap-3">
                 {project.services.map(s => (
                   <li key={s} className="flex items-center gap-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                     <span className="text-white/80">{s}</span>
                   </li>
                 ))}
               </ul>
             </div>
           </div>
         </div>

         <div className="lg:w-2/3 flex flex-col gap-16">
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl font-medium text-white">The Challenge</h3>
              <p className="text-white/70 text-lg font-light leading-relaxed">
                {project.challenge}
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl font-medium text-[var(--color-accent)]">The Solution</h3>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-500 hover:border-white/20">
                <p className="text-white/90 text-lg font-light leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
         </div>
      </section>

    </div>
  );
}
