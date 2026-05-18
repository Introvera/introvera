import ProjectCarousel from "@/components/Projects/ProjectCarousel";
import { BreadcrumbJsonLd } from "@/components/SEO/JsonLd";
import { projectsData } from "@/data/projects";
import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeInSection from "@/components/ui/FadeInSection";


export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const shortDescription = project.description.split("\n")[0].slice(0, 160);

  return {
    title: `${project.title} | Case Study`,
    description: shortDescription,
    alternates: {
      canonical: `https://introvera.com/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Built by Introvera`,
      description: shortDescription,
      url: `https://introvera.com/projects/${project.slug}`,
      images: [
        {
          url: project.mainImage,
          width: 1200,
          height: 630,
          alt: `${project.title} project by Introvera`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Introvera`,
      description: shortDescription,
      images: [project.mainImage],
    },
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find(p => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full bg-black min-h-screen pt-28 pb-32 overflow-hidden">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
          { name: project.title, href: `/projects/${project.slug}` },
        ]}
      />
      
      <FadeInSection className="relative w-full pt-10 pb-8 mb-4 overflow-visible">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(153,0,255,0.2)_0%,transparent_70%)] blur-[50px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-8">
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium w-fit">
             <ArrowLeft size={16} />
             Back to Projects
          </Link>

          <div className="flex flex-wrap gap-2">
             {project.tags.map(tag => (
               <span key={tag} className="px-3 py-1 rounded-full border border-[var(--color-accent)]/30 text-[10px] text-[var(--color-accent)] bg-[var(--color-accent)]/10 uppercase tracking-wider font-semibold">
                  {tag}
               </span>
             ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight text-white">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              {project.demoUrl && (
                <span className="inline-flex rounded-full p-[6px] border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 transition-all duration-300 shrink-0 w-fit">
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--color-accent)] text-white text-sm font-medium rounded-full transition-all duration-300 hover:opacity-90"
                  >
                    View Demo
                    <Play size={18} fill="currentColor" />
                  </Link>
                </span>
              )}
              {project.appStoreUrl && (
                <span className="inline-flex rounded-full p-[6px] border border-white bg-white/30 transition-all duration-300 shrink-0 w-fit">
                  <Link
                    href={project.appStoreUrl}
                    target="_blank"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:bg-gray-200"
                  >
                    App Store
                    <svg viewBox="0 0 384 512" width="20" height="20" fill="currentColor" className="text-black">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                    </svg>
                  </Link>
                </span>
              )}
              {project.playStoreUrl && (
                <span className="inline-flex rounded-full p-[6px] border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 transition-all duration-300 shrink-0 w-fit">
                  <Link
                    href={project.playStoreUrl}
                    target="_blank"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--color-accent)] text-white text-sm font-medium rounded-full transition-all duration-300 hover:opacity-90"
                  >
                    Play Store
                    <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor" className="text-white">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                    </svg>
                  </Link>
                </span>
              )}
              {project.link !== "#" && (
                <span className="inline-flex rounded-full p-[6px] border border-white bg-white/30 transition-all duration-300 shrink-0 w-fit">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-4 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:bg-gray-200"
                  >
                    Visit Live Site
                    <ArrowUpRight size={20} className="text-[var(--color-accent)]" />
                  </Link>
                </span>
              )}
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="max-w-7xl mx-auto px-6 relative z-20 mb-12">
        <ProjectCarousel images={project.images} title={project.title} />
      </FadeInSection>

      <FadeInSection className="max-w-7xl mx-auto px-6 relative z-10 mb-20">
        <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed whitespace-pre-line">
          {project.description}
        </p>
      </FadeInSection>

      <FadeInSection className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
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
               <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">Tech Stack</p>
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
      </FadeInSection>

    </div>
  );
}
