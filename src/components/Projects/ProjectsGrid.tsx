"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import { projectsData, type Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProjectFilter =
  | "all"
  | "websites"
  | "mobileapps"
  | "e-commerce"
  | "admin-panel";

const filterTabs: { label: string; value: ProjectFilter }[] = [
  { label: "All", value: "all" },
  { label: "Websites", value: "websites" },
  { label: "Mobile Apps", value: "mobileapps" },
  { label: "E-Commerce", value: "e-commerce" },
  { label: "Admin Panels", value: "admin-panel" },
];

function getProjectFilters(project: Project): ProjectFilter[] {
  const searchableText = [
    project.title,
    project.description,
    project.tags.join(" "),
  ]
    .join(" ")
    .toLowerCase();

  const filters: ProjectFilter[] = [];
  const isMobileApp =
    Boolean(project.appStoreUrl || project.playStoreUrl) ||
    searchableText.includes("mobile app") ||
    searchableText.includes("mobile ui");

  if (isMobileApp) {
    filters.push("mobileapps");
  } else {
    filters.push("websites");
  }

  if (
    searchableText.includes("e-commerce") ||
    searchableText.includes("ecommerce") ||
    searchableText.includes("shopping") ||
    searchableText.includes("checkout") ||
    searchableText.includes("cart") ||
    project.slug === "adeaz"
  ) {
    filters.push("e-commerce");
  }

  if (
    searchableText.includes("admin panel") ||
    searchableText.includes("admin dashboard") ||
    searchableText.includes("admin") ||
    project.slug.includes("admin")
  ) {
    filters.push("admin-panel");
  }

  return filters;
}

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const orderedProjects = [...projectsData].reverse();

  const visibleProjects =
    activeFilter === "all"
      ? orderedProjects
      : orderedProjects.filter((project) =>
          getProjectFilters(project).includes(activeFilter),
        );

  return (
    <FadeInSection className="max-w-7xl mx-auto px-6 relative z-20">
      <div className="mb-12 flex flex-wrap gap-3">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.value;

          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveFilter(tab.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 sm:px-5 ${
                isActive
                  ? "bg-[var(--color-accent)] text-white shadow-[0_0_24px_rgba(153,0,255,0.28)]"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
              aria-pressed={isActive}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 auto-rows-min md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.length > 0 ? (
          visibleProjects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.id}
              className="group relative block w-full overflow-hidden rounded-[2rem] transition-all duration-500 hover:shadow-[0_0_50px_rgba(153,0,255,0.2)]"
              style={{
                background: "linear-gradient(160deg, #2D1D4F 0%, #0C0123 100%)",
              }}
            >
              <div className="relative z-10 p-6 lg:p-8">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-white lg:text-2xl">
                      {project.title}
                    </h3>
                    <p className="line-clamp-3 text-xs leading-relaxed text-white/60 lg:text-sm">
                      {project.description.split("\n")[0]}
                    </p>
                  </div>
                  <span className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:border-white/50 group-hover:bg-white/10 lg:h-12 lg:w-12">
                    <ArrowUpRight size={18} className="text-white" />
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/25 bg-white/5 px-3 py-1 text-[11px] text-white/80 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative w-full">
                <Image
                  src={project.mainImage}
                  alt={`${project.title} mockup`}
                  width={800}
                  height={600}
                  className="h-auto w-full object-contain object-center px-4 transition-transform duration-700 group-hover:scale-[1.03] lg:px-6"
                />
              </div>

              {project.logo && (
                <div className="relative z-10 flex items-center justify-end gap-2.5 px-6 py-4 lg:px-8">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg p-1.5 lg:h-12 lg:w-12">
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
          ))
        ) : (
          <div className="rounded-3xl border border-white/10 bg-[#0F0F13] p-8 text-white/70 md:col-span-2 lg:col-span-3">
            No projects found for this category.
          </div>
        )}
      </div>
    </FadeInSection>
  );
}
