"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { projectsData } from "@/data/projects";

const orderedProjects = [...projectsData].reverse();

import { motion } from "framer-motion";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % orderedProjects.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Calculate the circular shift for 3D carousel effect
  const getSlideAdjustments = (index: number) => {
    const len = orderedProjects.length;
    let shift = (index - currentIndex) % len;
    // Keep shift between -2 and 2 (since len is 5)
    if (shift < -Math.floor(len / 2)) shift += len;
    if (shift > Math.floor(len / 2)) shift -= len;
    return shift;
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full bg-background py-16 sm:py-20 overflow-hidden" 
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <p className="text-[var(--color-accent)] text-sm font-semibold tracking-wider uppercase mb-4">
              Our Projects
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[50px] font-medium leading-tight text-foreground">
              Showcase of<br />
              <span className="text-[var(--color-accent)]">Innovation</span>
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col items-start md:items-end gap-6 shrink-0 md:pb-4"
          >
            <h3 className="text-xl md:text-2xl font-medium text-foreground">Our Work Speaks for Itself</h3>
            <span className="inline-flex rounded-full p-[6px] border border-[var(--color-accent)] bg-[var(--color-accent)]/40 transition-all duration-300">
              <Link
                href="/projects"
                className="inline-flex items-center gap-4 px-4 py-2 bg-[var(--color-accent)] text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
              >
                View More
                <ArrowUpRight size={22} />
              </Link>
            </span>
          </motion.div>
        </div>

        {/* 3D Offset Carousel */}
        <div className="relative w-full h-[450px] md:h-[600px] flex justify-center items-center mt-10 md:mt-16">
          {orderedProjects.map((project, idx) => {
            const shift = getSlideAdjustments(idx);
            const isCenter = shift === 0;
            
            let transformClasses = "";
            let zIndex = 0;
            let opacityBlur = "";

            if (shift === 0) {
              transformClasses = "scale-100 translate-x-0";
              zIndex = 30;
              opacityBlur = "opacity-100 blur-0";
            } else if (shift === 1) {
              transformClasses = "scale-[0.85] translate-x-[45%] sm:translate-x-[50%] lg:translate-x-[65%]";
              zIndex = 20;
              opacityBlur = "opacity-70 blur-[1px]";
            } else if (shift === -1) {
              transformClasses = "scale-[0.85] -translate-x-[45%] sm:-translate-x-[50%] lg:-translate-x-[65%]";
              zIndex = 20;
              opacityBlur = "opacity-70 blur-[1px]";
            } else if (shift === 2) {
              transformClasses = "scale-[0.70] translate-x-[80%] sm:translate-x-[90%] lg:translate-x-[115%]";
              zIndex = 10;
              opacityBlur = "opacity-30 blur-[2px]";
            } else if (shift === -2) {
              transformClasses = "scale-[0.70] -translate-x-[80%] sm:-translate-x-[90%] lg:-translate-x-[115%]";
              zIndex = 10;
              opacityBlur = "opacity-30 blur-[2px]";
            } else {
              // Fallback for larger arrays
              transformClasses = "scale-50 opacity-0 translate-x-0 pointer-events-none";
              zIndex = 0;
            }

            return (
              <div 
                key={project.id}
                onClick={() => {
                  if (isCenter) {
                    router.push(`/projects/${project.slug}`);
                  } else {
                    setCurrentIndex(idx);
                  }
                }}
                className={`absolute w-[220px] sm:w-[300px] lg:w-[400px] h-[320px] sm:h-[420px] lg:h-[550px] transition-all duration-700 ease-out cursor-pointer rounded-2xl overflow-hidden ${transformClasses} ${opacityBlur}`}
                style={{ zIndex }}
              >
                 {/* Card Wrapper with dynamic border/glow exclusively for active center item */}
                 <div 
                   className={`w-full h-full relative rounded-2xl overflow-hidden transition-all duration-700 flex flex-col ${isCenter ? 'border-[3px] border-[var(--color-accent)] shadow-[0_0_40px_rgba(153,0,255,0.35)]' : 'border border-foreground/10'}`}
                   style={{
                     background: 'var(--theme-project-card-bg)',
                   }}
                 >
                   {/* Top Content Area */}
                   <div className={`relative z-10 p-5 md:p-8 pb-0 transition-opacity duration-500 delay-100 ${!isCenter ? 'pointer-events-none' : ''}`}>
                     {/* Arrow Button - top right */}
                     <div className="flex justify-between items-start mb-3 md:mb-4">
                       <div className="flex-1">
                         <h3 
                           className="text-lg md:text-2xl font-semibold mb-2 line-clamp-1"
                           style={{ color: 'var(--theme-project-card-text)' }}
                         >
                           {project.title}
                         </h3>
                         <p 
                           className="text-[10px] md:text-sm leading-relaxed line-clamp-2 md:line-clamp-3"
                           style={{ color: 'var(--theme-project-card-text-subtle)' }}
                         >
                           {project.description.split('\n')[0]}
                         </p>
                       </div>
                       <Link 
                         href={`/projects/${project.slug}`}
                         aria-label={`View ${project.title} project details`}
                         onClick={(e) => { 
                           if (!isCenter) e.preventDefault(); 
                           e.stopPropagation(); 
                         }}
                         className="shrink-0 ml-3 w-8 h-8 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-white/50 pointer-events-auto"
                         style={{ borderColor: 'var(--theme-project-card-btn-border)' }}
                       >
                         <ArrowUpRight size={16} style={{ color: 'var(--theme-project-card-btn-text)' }} />
                       </Link>
                     </div>

                     {/* Tags */}
                     <div className="flex flex-wrap gap-2 mb-2 md:mb-6">
                       {project.tags.slice(0, 3).map(tag => (
                         <span 
                           key={tag} 
                           className="px-2 py-1 md:px-3 rounded-full border text-[9px] md:text-[11px] backdrop-blur-sm"
                           style={{ 
                             borderColor: 'var(--theme-project-card-tag-border)', 
                             backgroundColor: 'var(--theme-project-card-tag-bg)',
                             color: 'var(--theme-project-card-tag-text)'
                           }}
                         >
                           {tag}
                         </span>
                       ))}
                     </div>
                   </div>

                   {/* Mockup Image Area */}
                   <div className="relative w-full flex-1 -mt-2 md:-mt-6 mb-2 transition-all duration-700">
                     <Image
                       src={project.mainImage}
                       alt={`${project.title} mockup`}
                       fill
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                       priority={idx === 0}
                       className="object-contain object-center px-4 md:px-6 transition-transform duration-700"
                     />
                   </div>

                   {/* Logo and Flag below the mockup image */}
                   {(project.logo || project.countryCode) && (
                     <div className="relative z-10 flex items-center justify-between gap-2 px-5 md:px-8 py-3 md:py-4 mt-auto h-[50px] md:h-[70px]">
                       {project.countryCode ? (
                         <div 
                           className="relative flex w-6 h-6 md:w-8 md:h-8 shrink-0 items-center justify-center overflow-hidden rounded-full border opacity-80"
                           style={{ 
                             borderColor: 'var(--theme-project-card-border)',
                             backgroundColor: 'var(--theme-project-card-tag-bg)'
                           }}
                         >
                           <img
                             src={`https://flagcdn.com/w40/${project.countryCode.toLowerCase()}.png`}
                             srcSet={`https://flagcdn.com/w80/${project.countryCode.toLowerCase()}.png 2x`}
                             alt={`${project.countryCode} flag`}
                             className="w-full h-full object-cover"
                           />
                         </div>
                       ) : (
                         <div />
                       )}
                       
                       {project.logo && (
                         <div className="w-8 h-8 md:w-12 md:h-12 relative shrink-0 rounded-lg overflow-hidden p-1 md:p-1.5 opacity-80 ml-auto">
                           <Image
                             src={project.logo}
                             alt={`${project.title} logo`}
                             fill
                             sizes="100px"
                             className="object-contain p-0.5"
                           />
                         </div>
                       )}
                     </div>
                   )}
                 </div>
              </div>
            );
          })}
        </div>

        {/* Dot Pagination */}
        <div className="flex gap-2.5 justify-center mt-6 md:mt-8">
           {orderedProjects.map((_, i) => (
              <button 
                 key={i} 
                 onClick={() => setCurrentIndex(i)}
                 aria-label={`Go to slide ${i + 1}`}
                 className={`h-2.5 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-[var(--color-accent)] w-8 shadow-[0_0_12px_var(--color-accent)]" : "bg-[var(--color-accent)]/30 w-2.5 hover:bg-[var(--color-accent)]/60"}`}
              />
           ))}
        </div>
      </div>
    </motion.section>
  );
}
