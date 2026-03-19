import Image from "next/image";
import { Check } from "lucide-react";

export const metadata = {
  title: "Our Services | Introvera",
  description: "Comprehensive digital solutions tailored to transform your ideas into impactful products.",
};

const detailedServices = [
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "Our design process focuses on understanding your users and creating interfaces that are both beautiful and functional. We conduct user research, create wireframes and prototypes, and deliver pixel-perfect designs.",
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Design systems",
      "Usability testing",
    ],
    image: "/images/backgrounds/services-uiux.jpg", // Using existing placeholder images
    imageFirst: false,
  },
  {
    id: "backend-api",
    title: "Backend/API Development",
    description: "We architect and build robust backend systems that power your applications. From RESTful APIs to microservices, we ensure your infrastructure is secure, performant, and ready to scale.",
    features: [
      "RESTful and GraphQL APIs",
      "Database design and optimization",
      "Authentication and authorization",
      "Microservices architecture",
      "Real-time systems with WebSockets",
    ],
    image: "/images/backgrounds/services-backend.jpg",
    imageFirst: true,
  },
  {
    id: "consulting-strategy",
    title: "Consulting & Strategy",
    description: "Our consulting services help you make informed technology decisions. We analyze your current systems, identify opportunities for improvement, and create roadmaps that align technology with your business objectives.",
    features: [
      "Technology audits",
      "Architecture planning",
      "Digital transformation strategy",
      "Product roadmap planning",
      "Team augmentation",
    ],
    image: "/images/backgrounds/services-mobile.jpg",
    imageFirst: false,
  },
  {
    id: "qa",
    title: "Quality Assurance",
    description: "Quality is built into everything we do. Our QA team employs comprehensive testing strategies to ensure your software is reliable, secure, and performs well under all conditions.",
    features: [
      "Manual and automated testing",
      "Performance testing",
      "Security testing",
      "Cross-browser compatibility",
      "Continuous integration testing",
    ],
    image: "/images/backgrounds/services-devops.jpg",
    imageFirst: true,
  },
  {
    id: "consulting-strategy-2",
    title: "Consulting & Strategy",
    description: "Our consulting services help you make informed technology decisions. We analyze your current systems, identify opportunities for improvement, and create roadmaps that align technology with your business objectives.",
    features: [
      "Technology audits",
      "Architecture planning",
      "Digital transformation strategy",
      "Product roadmap mapping",
      "Team augmentation",
    ],
    image: "/images/backgrounds/services-uiux.jpg",
    imageFirst: false,
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full bg-black min-h-screen pt-28 pb-20 overflow-hidden">
      
      <section className="relative w-full py-16 md:py-24 mb-12 md:mb-16 overflow-visible">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.25)_0%,transparent_70%)] blur-[40px]" />
          <div className="absolute -top-10 right-0 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(153,0,255,0.2)_0%,transparent_70%)] blur-[50px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-left flex flex-col items-start">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-white mb-6">
            Solutions that drive<br />growth.
          </h1>
          <p className="max-w-2xl text-white/70 text-base md:text-lg font-light leading-relaxed">
            Comprehensive digital solutions tailored to transform your ideas into impactful products. We deliver end-to-end engineering excellence.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-24 lg:gap-32">
        {detailedServices.map((service) => (
          <div 
            key={service.id} 
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${service.imageFirst ? 'lg:flex-row-reverse' : ''}`}
          >
            
            <div className="flex-1 w-full">
              <h2 className="text-3xl md:text-4xl font-medium text-[var(--color-accent)] mb-6">
                {service.title}
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                {service.description}
              </p>
              
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="shrink-0 mt-1 rounded-full bg-[var(--color-accent)]/20 p-1 flex items-center justify-center">
                      <Check size={14} strokeWidth={3} className="text-[var(--color-accent)]" />
                    </div>
                    <span className="text-base text-white/90 font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 w-full relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden glass-card p-2 md:p-3 shadow-[0_0_40px_rgba(153,0,255,0.1)]">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0F0F13]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center opacity-70 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
            </div>

          </div>
        ))}
      </section>
      
    </div>
  );
}
