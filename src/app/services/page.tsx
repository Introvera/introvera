import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";

export const metadata = {
  title: "Software Development Services | Web, Mobile, POS & Cloud Solutions",
  description:
    "Introvera offers custom software development, POS systems, admin panels, mobile apps, web development, UI/UX design, and cloud services. Serving clients in Sri Lanka, Europe, USA, UAE, Australia and worldwide.",
  alternates: {
    canonical: "https://introvera.com/services",
  },
  openGraph: {
    title: "Software Development Services | Introvera",
    description:
      "Custom software, POS systems, mobile apps, admin panels & cloud solutions for global businesses.",
    url: "https://introvera.com/services",
  },
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
    image: "/images/backgrounds/services-uiux.webp",
    imageFirst: false,
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "We design and develop modern, high-performance websites that elevate your brand and deliver seamless user experiences. From responsive landing pages to full-scale web applications, we ensure your site is fast, secure, and built to convert.",
    features: [
      "Custom website design and development",
      "Responsive and mobile-first UI/UX",
      "E-commerce solutions and integrations",
      "SEO optimization and performance tuning",
      "Content management systems (CMS)",
      "Web app development with modern frameworks",
    ],
    image: "/images/backgrounds/services-web.webp",
    imageFirst: true,
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "We build high-quality mobile applications that deliver smooth performance and exceptional user experiences across iOS and Android. From idea to deployment, we ensure your app is scalable, secure, and optimized for real-world usage.",
    features: [
      "Cross-platform app development (Flutter)",
      "Intuitive UI/UX design for mobile",
      "API integration and backend connectivity",
      "Real-time features (chat, notifications, live updates)",
      "App performance optimization and testing",
      "App Store & Google Play deployment support",
    ],
    image: "/images/backgrounds/services-mobile.webp",
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
    image: "/images/backgrounds/services-backend.webp",
    imageFirst: true,
  },
  {
    id: "devops-and-cloud-services",
    title: "DevOps & Cloud Services",
    description: "We implement scalable DevOps and cloud solutions that streamline your development workflow and ensure reliable, high-performance deployments. From infrastructure setup to continuous delivery, we help you build, deploy, and manage applications with speed, security, and efficiency.",
    features: [
      "Cloud infrastructure setup and management",
      "CI/CD pipeline design and automation",
      "Containerization with Docker and Kubernetes",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Monitoring, logging, and performance optimization",
      "Security, compliance, and backup strategies",
      "Auto-scaling and high availability architecture",
    ],
    image: "/images/backgrounds/services-devops.webp",
    imageFirst: false,
  },
{
    id: "auto",
    title: "Business Process Automation",
    description: " We help businesses save time, reduce manual work, and improve efficiency through smart automation.",
    features: [
      "Workflow Automation",
      "⁠⁠n8n Integration",
      "⁠⁠Legacy System Modernization",
      "Replace Manual Excel Processes",
      "AI-Driven Automation",
    ],
    image: "/images/backgrounds/service-automation.webp",
    imageFirst: true,
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
    image: "/images/backgrounds/services-qa.webp",
    imageFirst: false,
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
    image: "/images/backgrounds/services-consults.webp",
    imageFirst: true,
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full bg-black min-h-screen pt-28 pb-20 overflow-hidden">
      
      <FadeInSection className="relative w-full py-16 md:py-24 mb-12 md:mb-16 overflow-visible">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-accent)] rounded-full opacity-[0.04] blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[40vw] h-[150px] bg-[linear-gradient(265.01deg,rgba(153,0,255,0.3)_17.05%,rgba(0,102,255,0.3)_83.46%)] blur-[80px]" />
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
      </FadeInSection>

      <section className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-24 lg:gap-32">
        {detailedServices.map((service) => (
          <FadeInSection 
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
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#0F0F13]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center opacity-70 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>

          </FadeInSection>
        ))}
      </section>

      {/* How We Work Process Section */}
      <FadeInSection className="max-w-7xl mx-auto px-6 relative z-10 mt-32 mb-32">
        <div className="text-center mb-16">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
            How We Work
          </h2>
          <p className="max-w-2xl mx-auto text-white/70 text-base md:text-lg font-light leading-relaxed">
            <strong className="text-white/90">Our proven four step development process ensures every project is delivered on time, within budget, and to the highest quality standards.</strong> We follow agile methodology with regular client check-ins at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#0F0F13] border border-white/5 rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-300">
             <span className="text-4xl font-bold text-[var(--color-accent)]/30 mb-4 block">01</span>
             <h3 className="text-xl font-medium text-white mb-3">Discovery & Planning</h3>
             <p className="text-sm text-white/70 leading-relaxed">We start by understanding your business goals, target audience, and technical requirements. Through workshops and research, we define the project scope, timeline, and deliverables.</p>
          </div>
          <div className="bg-[#0F0F13] border border-white/5 rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-300">
             <span className="text-4xl font-bold text-[var(--color-accent)]/30 mb-4 block">02</span>
             <h3 className="text-xl font-medium text-white mb-3">Design & Prototype</h3>
             <p className="text-sm text-white/70 leading-relaxed">Our designers create wireframes and interactive prototypes, ensuring the user experience is intuitive and aligned with your brand before any code is written.</p>
          </div>
          <div className="bg-[#0F0F13] border border-white/5 rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-300">
             <span className="text-4xl font-bold text-[var(--color-accent)]/30 mb-4 block">03</span>
             <h3 className="text-xl font-medium text-white mb-3">Development & Testing</h3>
             <p className="text-sm text-white/70 leading-relaxed">Our engineers build your solution using modern technologies and best practices. Every feature is thoroughly tested for performance, security, and cross-platform compatibility.</p>
          </div>
          <div className="bg-[#0F0F13] border border-white/5 rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-300">
             <span className="text-4xl font-bold text-[var(--color-accent)]/30 mb-4 block">04</span>
             <h3 className="text-xl font-medium text-white mb-3">Launch & Support</h3>
             <p className="text-sm text-white/70 leading-relaxed">We deploy your solution to production, provide training for your team, and offer ongoing maintenance and support to ensure long-term success.</p>
          </div>
        </div>
      </FadeInSection>

      {/* Key Definitions Section */}
      <FadeInSection className="max-w-7xl mx-auto px-6 relative z-10 mb-32">
        <div className="text-center mb-16">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
            What We Build
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-white">
            Software Solutions Explained
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="bg-[#0F0F13] border border-white/5 rounded-2xl p-8">
            <h3 className="text-xl font-medium text-[var(--color-accent)] mb-4">What Is a POS System?</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              <strong className="text-white/90">A Point of Sale (POS) system is software that manages sales transactions, inventory tracking, and business reporting at the point where a customer makes a purchase.</strong> Modern POS systems go beyond simple cash registers they integrate with payment gateways, manage stock levels in real time, generate sales analytics, and can connect with accounting software. Introvera builds custom POS solutions tailored to retail stores, restaurants, and service businesses.
            </p>
          </article>

          <article className="bg-[#0F0F13] border border-white/5 rounded-2xl p-8">
            <h3 className="text-xl font-medium text-[var(--color-accent)] mb-4">What Is an ERP System?</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              <strong className="text-white/90">Enterprise Resource Planning (ERP) is software that integrates core business processes finance, HR, supply chain, manufacturing, and operations into a single unified system.</strong> An ERP eliminates data silos and provides real time visibility across your entire organization. Introvera develops custom ERP solutions that fit your unique workflow, unlike rigid off-the-shelf alternatives.
            </p>
          </article>

          <article className="bg-[#0F0F13] border border-white/5 rounded-2xl p-8">
            <h3 className="text-xl font-medium text-[var(--color-accent)] mb-4">What Is an Admin Portal?</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              <strong className="text-white/90">An admin portal is a web based dashboard that allows business owners and administrators to manage their application&apos;s data, users, content, and operations from a central interface.</strong> Admin portals provide role based access control, data visualization, reporting tools, and content management capabilities. We build custom admin panels that give your team complete control over your digital products.
            </p>
          </article>

          <article className="bg-[#0F0F13] border border-white/5 rounded-2xl p-8">
            <h3 className="text-xl font-medium text-[var(--color-accent)] mb-4">What Is an HR Management System?</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              <strong className="text-white/90">A Human Resource Management System (HRMS) is software that automates employee management including recruitment, payroll, attendance tracking, performance reviews, and leave management.</strong> A custom HR system streamlines HR operations, reduces paperwork, ensures compliance, and provides self service portals for employees. Introvera builds HR systems tailored to your organization&apos;s size and processes.
            </p>
          </article>
        </div>
      </FadeInSection>

      {/* Key Takeaways */}
      <FadeInSection className="max-w-7xl mx-auto px-6 relative z-10 mb-32">
        <div className="bg-gradient-to-br from-[#1c123d]/60 to-[#0F0F13] border border-white/10 rounded-3xl p-10 md:p-14">
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-8">Key Takeaways</h2>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div className="shrink-0 mt-1 rounded-full bg-[var(--color-accent)]/20 p-1.5 flex items-center justify-center">
                <Check size={14} strokeWidth={3} className="text-[var(--color-accent)]" />
              </div>
              <p className="text-white/80 text-base leading-relaxed"><strong className="text-white">Full-stack development expertise</strong> : Introvera provides end-to-end software development from UI/UX design through backend engineering, mobile apps, and DevOps deployment.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="shrink-0 mt-1 rounded-full bg-[var(--color-accent)]/20 p-1.5 flex items-center justify-center">
                <Check size={14} strokeWidth={3} className="text-[var(--color-accent)]" />
              </div>
              <p className="text-white/80 text-base leading-relaxed"><strong className="text-white">Specialized in business software</strong> : We build custom POS systems, ERP platforms, admin portals, HR systems, and mobile apps that solve real operational challenges.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="shrink-0 mt-1 rounded-full bg-[var(--color-accent)]/20 p-1.5 flex items-center justify-center">
                <Check size={14} strokeWidth={3} className="text-[var(--color-accent)]" />
              </div>
              <p className="text-white/80 text-base leading-relaxed"><strong className="text-white">Global service, competitive pricing</strong> : Based in Sri Lanka, we serve clients globally and deliver world-class quality at competitive rates.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="shrink-0 mt-1 rounded-full bg-[var(--color-accent)]/20 p-1.5 flex items-center justify-center">
                <Check size={14} strokeWidth={3} className="text-[var(--color-accent)]" />
              </div>
              <p className="text-white/80 text-base leading-relaxed"><strong className="text-white">Proven agile process</strong> : Our four-step methodology (Discovery, Design, Development, Launch) ensures transparent delivery with regular client communication.</p>
            </li>
          </ul>
        </div>
      </FadeInSection>

      {/* FAQ Section */}
      <FadeInSection className="max-w-7xl mx-auto px-6 relative z-10 mb-32">
        <div className="text-center mb-16">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <article className="bg-[#0F0F13] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
            <h3 className="text-lg font-medium text-white mb-4">What types of custom software does Introvera develop?</h3>
            <p className="text-white/70 text-sm leading-relaxed">Introvera develops a wide range of custom software solutions including POS (Point of Sale) systems, ERP (Enterprise Resource Planning) platforms, mobile applications for iOS and Android, admin portals and dashboards, HR management systems, e-commerce platforms, booking systems, and business process automation tools. Every solution is tailored to your specific business requirements.</p>
          </article>
          <article className="bg-[#0F0F13] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
            <h3 className="text-lg font-medium text-white mb-4">How long does a typical software development project take?</h3>
            <p className="text-white/70 text-sm leading-relaxed">Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while a custom mobile app or admin panel may take 2–4 months. Complex enterprise solutions like ERP or POS systems can take 3–6 months. We provide detailed timelines during the discovery phase and use agile methodology to deliver working features incrementally.</p>
          </article>
          <article className="bg-[#0F0F13] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
            <h3 className="text-lg font-medium text-white mb-4">Do you work with international clients?</h3>
            <p className="text-white/70 text-sm leading-relaxed">Yes, Introvera serves clients internationally across the globe. We use remote collaboration tools, overlapping work hours, and regular meetings to ensure seamless communication regardless of your timezone or location.</p>
          </article>
          <article className="bg-[#0F0F13] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
            <h3 className="text-lg font-medium text-white mb-4">What technologies does Introvera use?</h3>
            <p className="text-white/70 text-sm leading-relaxed">We use modern, industry-standard technologies including Next.js, React, Flutter, .NET, Node.js, Python, PostgreSQL, MongoDB, Firebase, Docker, and Kubernetes. We select the best technology stack for each project based on performance requirements, scalability needs, and long-term maintainability.</p>
          </article>
        </div>
      </FadeInSection>

      {/* Related Projects */}
      <FadeInSection className="max-w-7xl mx-auto px-6 relative z-10 mb-32">
        <div className="text-center mb-12">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
            Case Studies
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-white">
            See Our Services in Action
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/projects/rainbowadmin" className="group bg-[#0F0F13] border border-white/5 rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-300">
            <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">Rainbow Admin Panel</h3>
            <p className="text-white/60 text-sm mb-4">Full-stack admin dashboard with user management, booking systems, and sales reporting.</p>
            <span className="text-[var(--color-accent)] text-sm font-medium inline-flex items-center gap-2">View Case Study <ArrowRight size={14} /></span>
          </Link>

          <Link href="/projects/rainbowmobile" className="group bg-[#0F0F13] border border-white/5 rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-300">
            <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">Rainbow Mobile App</h3>
            <p className="text-white/60 text-sm mb-4">Cross-platform Flutter app with booking, payments, and multi-profile family management.</p>
            <span className="text-[var(--color-accent)] text-sm font-medium inline-flex items-center gap-2">View Case Study <ArrowRight size={14} /></span>
          </Link>

          <Link href="/projects/ultracraft" className="group bg-[#0F0F13] border border-white/5 rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-300">
            <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">Ultracraft Website</h3>
            <p className="text-white/60 text-sm mb-4">Premium furniture brand website with CMS, product catalog, and consultation booking.</p>
            <span className="text-[var(--color-accent)] text-sm font-medium inline-flex items-center gap-2">View Case Study <ArrowRight size={14} /></span>
          </Link>
        </div>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-[var(--color-accent)]/20 to-transparent border border-[var(--color-accent)]/20 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">Ready to Build Your Software?</h2>
          <p className="max-w-2xl mx-auto text-white/70 text-base md:text-lg font-light leading-relaxed mb-10">
            Tell us about your project and get a free consultation. Whether you need a POS system, mobile app, ERP solution, or custom software — we&apos;re here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="inline-flex rounded-full p-[6px] border border-[var(--color-accent)] bg-[var(--color-accent)]/40 transition-all duration-300">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-6 py-3 bg-[var(--color-accent)] text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </Link>
            </span>
            <span className="inline-flex rounded-full p-[6px] border border-white bg-white/30 transition-all duration-300">
              <Link
                href="/projects"
                className="inline-flex items-center gap-4 px-6 py-3 bg-white text-black text-sm font-medium rounded-full transition-all duration-300 hover:bg-gray-200"
              >
                View Our Projects
                <ArrowRight size={18} />
              </Link>
            </span>
          </div>
        </div>
      </FadeInSection>
      
    </div>
  );
}
