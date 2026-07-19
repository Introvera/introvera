import ProjectsGrid from "@/components/Projects/ProjectsGrid";
import FadeInSection from "@/components/ui/FadeInSection";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Our Projects & Portfolio | Introvera",
  description:
    "Explore Introvera's portfolio of successful websites, mobile apps, POS systems, admin panels, and business automation solutions delivered globally.",
  alternates: {
    canonical: "https://introvera.com/projects",
  },
  openGraph: {
    title: "Projects & Portfolio | Introvera",
    description:
      "See our work — websites, mobile apps, POS systems, admin panels, and custom software solutions built for businesses worldwide.",
    url: "https://introvera.com/projects",
    images: [
      {
        url: "/images/logo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Introvera Projects",
      },
    ],
  },
};

export default function ProjectsPage() {
  return (
    <div className="w-full bg-background min-h-screen pt-28 pb-20 overflow-hidden">
      <FadeInSection className="relative w-full py-16 md:py-24 mb-12 md:mb-16 overflow-visible">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-accent)] rounded-full opacity-[0.04] blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[40vw] h-[150px] bg-[linear-gradient(265.01deg,rgba(153,0,255,0.3)_17.05%,rgba(0,102,255,0.3)_83.46%)] blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-left flex flex-col items-start">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
            Our Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-foreground mb-6">
            Projects that define
            <br />
            the future.
          </h1>
          <p className="max-w-2xl text-foreground/70 text-base md:text-lg font-light leading-relaxed">
            Explore our diverse range of successful projects across industries.
            We combine flawless engineering and compelling design to deliver
            digital transformations.
          </p>
        </div>
      </FadeInSection>

      <ProjectsGrid />

      {/* Key Takeaways */}
      <FadeInSection className="max-w-7xl mx-auto px-6 relative z-10 mt-32 mb-32">
        <div className="bg-gradient-to-br from-[var(--color-accent)]/10 to-background border border-foreground/10 rounded-3xl p-10 md:p-14">
          <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8">
            What These Projects Show
          </h2>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div className="shrink-0 mt-1 rounded-full bg-[var(--color-accent)]/20 p-1.5 flex items-center justify-center">
                <Check
                  size={14}
                  strokeWidth={3}
                  className="text-[var(--color-accent)]"
                />
              </div>
              <p className="text-foreground/80 text-base leading-relaxed">
                <strong className="text-foreground">Industry Versatility</strong> :
                We build custom software solutions for diverse sectors including
                retail, e-commerce, healthcare, furniture, and logistics.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="shrink-0 mt-1 rounded-full bg-[var(--color-accent)]/20 p-1.5 flex items-center justify-center">
                <Check
                  size={14}
                  strokeWidth={3}
                  className="text-[var(--color-accent)]"
                />
              </div>
              <p className="text-foreground/80 text-base leading-relaxed">
                <strong className="text-foreground">Scalable Architecture</strong> :
                Every POS system, admin panel, and mobile app in our portfolio
                is engineered to handle growing user bases and expanding data
                needs securely.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="shrink-0 mt-1 rounded-full bg-[var(--color-accent)]/20 p-1.5 flex items-center justify-center">
                <Check
                  size={14}
                  strokeWidth={3}
                  className="text-[var(--color-accent)]"
                />
              </div>
              <p className="text-foreground/80 text-base leading-relaxed">
                <strong className="text-foreground">User-Centric Design</strong> : We
                prioritize UI/UX in every build. Complex ERP systems and
                e-commerce platforms are simplified into intuitive interfaces
                for end-users.
              </p>
            </li>
          </ul>
        </div>
      </FadeInSection>

      {/* FAQ Section */}
      <FadeInSection className="max-w-7xl mx-auto px-6 relative z-10 mb-32">
        <div className="text-center mb-16">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
            Project FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground">
            Common Questions About Our Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-foreground/[0.02] border border-foreground/5 rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-300">
            <h3 className="text-lg font-medium text-foreground mb-3">
              How do you approach a new software project?
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              We start with a deep-dive discovery phase. We analyze your
              business processes, define clear technical requirements, and
              prototype the user experience before writing any code.
            </p>
          </div>
          <div className="bg-foreground/[0.02] border border-foreground/5 rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-300">
            <h3 className="text-lg font-medium text-foreground mb-3">
              Can you take over an existing project?
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Yes. We frequently conduct code audits and take over legacy
              projects to modernize tech stacks, fix critical bugs, or add new
              features like mobile apps or admin panels.
            </p>
          </div>
          <div className="bg-foreground/[0.02] border border-foreground/5 rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-300">
            <h3 className="text-lg font-medium text-foreground mb-3">
              Do you provide hosting for the software?
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Yes. If you need a hassle-free environment, we offer reliable
              cloud hosting services and infrastructure setup to ensure your web
              platforms and admin panels run securely and smoothly.
            </p>
          </div>
          <div className="bg-foreground/[0.02] border border-foreground/5 rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-300">
            <h3 className="text-lg font-medium text-foreground mb-3">
              What happens after the project launches?
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              We don&apos;t just build and leave. We offer flexible ongoing
              maintenance contracts to keep your software updated, secure, and
              scaling efficiently alongside your business growth.
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Outgoing Internal Links */}
      <FadeInSection className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link
            href="/services"
            className="group relative overflow-hidden bg-foreground/[0.02] border border-foreground/10 rounded-2xl p-8 hover:border-[var(--color-accent)] transition-all flex-1 text-center"
          >
            <h3 className="text-2xl font-medium text-foreground mb-2 group-hover:text-[var(--color-accent)] transition-colors">
              How We Did It
            </h3>
            <p className="text-foreground/60 mb-4 text-sm">
              Explore the specific engineering services used to build these
              projects.
            </p>
            <span className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium text-sm">
              View Services <ArrowRight size={16} />
            </span>
          </Link>
          <Link
            href="/contact"
            className="group relative overflow-hidden bg-foreground/[0.02] border border-foreground/10 rounded-2xl p-8 hover:border-[var(--color-accent)] transition-all flex-1 text-center"
          >
            <h3 className="text-2xl font-medium text-foreground mb-2 group-hover:text-[var(--color-accent)] transition-colors">
              Start Your Project
            </h3>
            <p className="text-foreground/60 mb-4 text-sm">
              Ready to add your success story to our portfolio?
            </p>
            <span className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium text-sm">
              Get in Touch <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </FadeInSection>
    </div>
  );
}
