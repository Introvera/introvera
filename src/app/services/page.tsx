import FadeInSection from "@/components/ui/FadeInSection";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Software Services & Cloud Solutions | Introvera",
  description:
    "Introvera offers custom software development,website development, POS systems, admin panels, mobile apps, web development, UI/UX design, and cloud solutions worldwide.",
  alternates: {
    canonical: "https://introvera.com/services",
  },
  openGraph: {
    title: "Software Development Services | Introvera",
    description:
      "Custom software, POS systems, mobile apps, admin panels & cloud solutions for global businesses.",
    url: "https://introvera.com/services",
    images: [
      {
        url: "/images/logo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Introvera Services",
      },
    ],
  },
};

const detailedServices = [
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "We design beautiful and easy-to-use interfaces. We study your users to build clear wireframes. Then, we deliver designs that look perfect and work great.",
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
    description: "We build fast and modern websites that grow your brand. We create everything from simple landing pages to large web apps. Your site will be secure, easy to use, and built to get results.",
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
    description: "We build fast mobile apps for iOS and Android. Your app will run smoothly and look great on any phone. We handle everything from the first idea to launching it on the app store.",
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
    description: "We build strong backend systems to power your apps. We create secure APIs and databases. Your system will be fast, safe, and ready to grow.",
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
    description: "We set up fast and secure cloud systems. This makes your app easy to update and scale. We manage your servers so you can focus entirely on growing your business.",
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
    description: "Quality is built into everything we do. Our team runs tests to make sure your software is safe, fast, and ready for users. We find and fix bugs early.",
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
    description: "We help you make smart choices about technology. We look at your current systems and find ways to improve them. Then, we create a clear plan to reach your goals.",
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
    <div className="w-full bg-background min-h-screen pt-28 pb-20 overflow-hidden">
      
      <FadeInSection className="relative w-full py-16 md:py-24 mb-12 md:mb-16 overflow-visible">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-accent)] rounded-full opacity-[0.04] blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[40vw] h-[150px] bg-[linear-gradient(265.01deg,rgba(153,0,255,0.3)_17.05%,rgba(0,102,255,0.3)_83.46%)] blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-left flex flex-col items-start">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-foreground mb-6">
            Solutions that drive<br />growth.
          </h1>
          <p className="max-w-2xl text-foreground/70 text-base md:text-lg font-light leading-relaxed">
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
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                {service.description}
              </p>
              
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="shrink-0 mt-1 rounded-full bg-[var(--color-accent)]/20 p-1 flex items-center justify-center">
                      <Check size={14} strokeWidth={3} className="text-[var(--color-accent)]" />
                    </div>
                    <span className="text-base text-foreground/90 font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 w-full relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-foreground/[0.02]">
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
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
            How We Work
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/70 text-base md:text-lg font-light leading-relaxed">
            <strong className="text-foreground/90">Our proven four step development process ensures every project is delivered on time, within budget, and to the highest quality standards.</strong> We follow agile methodology with regular client check-ins at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-foreground/[0.02] border border-foreground/10 rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-300">
             <span className="text-4xl font-bold text-[var(--color-accent)]/30 mb-4 block">01</span>
             <h3 className="text-xl font-medium text-foreground mb-3">Discovery & Planning</h3>
             <p className="text-sm text-foreground/70 leading-relaxed">We start by understanding your business goals, target audience, and technical requirements. Through workshops and research, we define the project scope, timeline, and deliverables.</p>
          </div>
          <div className="bg-foreground/[0.02] border border-foreground/10 rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-300">
             <span className="text-4xl font-bold text-[var(--color-accent)]/30 mb-4 block">02</span>
             <h3 className="text-xl font-medium text-foreground mb-3">Design & Prototype</h3>
             <p className="text-sm text-foreground/70 leading-relaxed">Our designers create wireframes and interactive prototypes, ensuring the user experience is intuitive and aligned with your brand before any code is written.</p>
          </div>
          <div className="bg-foreground/[0.02] border border-foreground/10 rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-300">
             <span className="text-4xl font-bold text-[var(--color-accent)]/30 mb-4 block">03</span>
             <h3 className="text-xl font-medium text-foreground mb-3">Development & Testing</h3>
             <p className="text-sm text-foreground/70 leading-relaxed">Our engineers build your solution using modern technologies and best practices. Every feature is thoroughly tested for performance, security, and cross-platform compatibility.</p>
          </div>
          <div className="bg-foreground/[0.02] border border-foreground/10 rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-300">
             <span className="text-4xl font-bold text-[var(--color-accent)]/30 mb-4 block">04</span>
             <h3 className="text-xl font-medium text-foreground mb-3">Launch & Support</h3>
             <p className="text-sm text-foreground/70 leading-relaxed">We deploy your solution to production, provide training for your team, and offer ongoing maintenance and support to ensure long-term success.</p>
          </div>
        </div>
      </FadeInSection>

      {/* Key Definitions Section */}
      <FadeInSection className="max-w-7xl mx-auto px-6 relative z-10 mb-32">
        <div className="text-center mb-16">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
            What We Build
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground">
            Software Solutions Explained
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="bg-foreground/[0.02] border border-foreground/10 rounded-2xl p-8">
            <h3 className="text-xl font-medium text-[var(--color-accent)] mb-4">What Is a POS System?</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              <strong className="text-foreground/90">A Point of Sale (POS) system handles sales and tracks stock when a customer buys something.</strong> Modern POS systems do much more than a cash register. They connect to online payments, track live stock data, and create sales reports. We build custom POS software for shops, food, and services.
            </p>
          </article>

          <article className="bg-foreground/[0.02] border border-foreground/10 rounded-2xl p-8">
            <h3 className="text-xl font-medium text-[var(--color-accent)] mb-4">What Is an ERP System?</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              <strong className="text-foreground/90">Enterprise Resource Planning (ERP) connects your whole business into one system.</strong> It links finance, HR, stock, and operations. This stops data getting lost and lets you see everything live. We build custom ERP systems that fit exactly how your team works.
            </p>
          </article>

          <article className="bg-foreground/[0.02] border border-foreground/10 rounded-2xl p-8">
            <h3 className="text-xl font-medium text-[var(--color-accent)] mb-4">What Is an Admin Portal?</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              <strong className="text-foreground/90">An admin portal is a secure website where you manage your app data and users.</strong> These portals give you tools to view reports, add content, and control who can see what. We build custom admin dashboards that give you full control over your digital products.
            </p>
          </article>

          <article className="bg-foreground/[0.02] border border-foreground/10 rounded-2xl p-8">
            <h3 className="text-xl font-medium text-[var(--color-accent)] mb-4">What Is an HR Management System?</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              <strong className="text-foreground/90">A Human Resource System (HRMS) automates managing your staff.</strong> It handles hiring, pay, attendance, reviews, and time off. A custom system cuts down on paperwork and gives staff their own login to manage their details. We build HR software matched to your company size.
            </p>
          </article>
        </div>
      </FadeInSection>

      {/* Key Takeaways */}
      <FadeInSection className="max-w-7xl mx-auto px-6 relative z-10 mb-32">
        <div className="bg-gradient-to-br from-[var(--color-accent)]/10 to-background border border-foreground/10 rounded-3xl p-10 md:p-14">
          <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8">Key Takeaways</h2>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div className="shrink-0 mt-1 rounded-full bg-[var(--color-accent)]/20 p-1.5 flex items-center justify-center">
                <Check size={14} strokeWidth={3} className="text-[var(--color-accent)]" />
              </div>
              <p className="text-foreground/80 text-base leading-relaxed"><strong className="text-foreground">Full-stack development expertise</strong> : Introvera provides end-to-end software development from UI/UX design through backend engineering, mobile apps, and DevOps deployment.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="shrink-0 mt-1 rounded-full bg-[var(--color-accent)]/20 p-1.5 flex items-center justify-center">
                <Check size={14} strokeWidth={3} className="text-[var(--color-accent)]" />
              </div>
              <p className="text-foreground/80 text-base leading-relaxed"><strong className="text-foreground">Specialized in business software</strong> : We build custom POS systems, ERP platforms, admin portals, HR systems, and mobile apps that solve real operational challenges.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="shrink-0 mt-1 rounded-full bg-[var(--color-accent)]/20 p-1.5 flex items-center justify-center">
                <Check size={14} strokeWidth={3} className="text-[var(--color-accent)]" />
              </div>
              <p className="text-foreground/80 text-base leading-relaxed"><strong className="text-foreground">Global service, competitive pricing</strong> : Based in Sri Lanka, we serve clients globally and deliver world-class quality at competitive rates.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="shrink-0 mt-1 rounded-full bg-[var(--color-accent)]/20 p-1.5 flex items-center justify-center">
                <Check size={14} strokeWidth={3} className="text-[var(--color-accent)]" />
              </div>
              <p className="text-foreground/80 text-base leading-relaxed"><strong className="text-foreground">Proven agile process</strong> : Our four-step methodology (Discovery, Design, Development, Launch) ensures transparent delivery with regular client communication.</p>
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
          <h2 className="text-3xl md:text-4xl font-medium text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <article className="bg-foreground/[0.02] border border-foreground/10 rounded-2xl p-8 hover:border-foreground/10 transition-colors">
            <h3 className="text-lg font-medium text-foreground mb-4">What types of custom software does Introvera develop?</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">Introvera develops a wide range of custom software solutions including POS (Point of Sale) systems, ERP (Enterprise Resource Planning) platforms, mobile applications for iOS and Android, admin portals and dashboards, HR management systems, e-commerce platforms, booking systems, and business process automation tools. Every solution is tailored to your specific business requirements.</p>
          </article>
          <article className="bg-foreground/[0.02] border border-foreground/10 rounded-2xl p-8 hover:border-foreground/10 transition-colors">
            <h3 className="text-lg font-medium text-foreground mb-4">How long does a typical software development project take?</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while a custom mobile app or admin panel may take 2–4 months. Complex enterprise solutions like ERP or POS systems can take 3–6 months. We provide detailed timelines during the discovery phase and use agile methodology to deliver working features incrementally.</p>
          </article>
          <article className="bg-foreground/[0.02] border border-foreground/10 rounded-2xl p-8 hover:border-foreground/10 transition-colors">
            <h3 className="text-lg font-medium text-foreground mb-4">Do you work with international clients?</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">Yes, Introvera serves clients internationally across the globe. We use remote collaboration tools, overlapping work hours, and regular meetings to ensure seamless communication regardless of your timezone or location.</p>
          </article>
          <article className="bg-foreground/[0.02] border border-foreground/10 rounded-2xl p-8 hover:border-foreground/10 transition-colors">
            <h3 className="text-lg font-medium text-foreground mb-4">What technologies does Introvera use?</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">We use modern, industry-standard technologies including Next.js, React, Flutter, .NET, Node.js, Python, PostgreSQL, MongoDB, Firebase, Docker, and Kubernetes. We select the best technology stack for each project based on performance requirements, scalability needs, and long-term maintainability.</p>
          </article>
        </div>
      </FadeInSection>

      {/* Related Projects */}
      <FadeInSection className="max-w-7xl mx-auto px-6 relative z-10 mb-32">
        <div className="text-center mb-12">
          <p className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
            Case Studies
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground">
            See Our Services in Action
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/projects/rainbowadmin" className="group bg-foreground/[0.02] border border-foreground/10 rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-300">
            <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-[var(--color-accent)] transition-colors">Rainbow Admin Panel</h3>
            <p className="text-foreground/60 text-sm mb-4">Full-stack admin dashboard with user management, booking systems, and sales reporting.</p>
            <span className="text-[var(--color-accent)] text-sm font-medium inline-flex items-center gap-2">View Case Study <ArrowRight size={14} /></span>
          </Link>

          <Link href="/projects/rainbowmobile" className="group bg-foreground/[0.02] border border-foreground/10 rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-300">
            <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-[var(--color-accent)] transition-colors">Rainbow Mobile App</h3>
            <p className="text-foreground/60 text-sm mb-4">Cross-platform Flutter app with booking, payments, and multi-profile family management.</p>
            <span className="text-[var(--color-accent)] text-sm font-medium inline-flex items-center gap-2">View Case Study <ArrowRight size={14} /></span>
          </Link>

          <Link href="/projects/ultracraft" className="group bg-foreground/[0.02] border border-foreground/10 rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-300">
            <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-[var(--color-accent)] transition-colors">Ultracraft Website</h3>
            <p className="text-foreground/60 text-sm mb-4">Premium furniture brand website with CMS, product catalog, and consultation booking.</p>
            <span className="text-[var(--color-accent)] text-sm font-medium inline-flex items-center gap-2">View Case Study <ArrowRight size={14} /></span>
          </Link>
        </div>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-[var(--color-accent)]/20 to-transparent border border-[var(--color-accent)]/20 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">Ready to Build Your Software?</h2>
          <p className="max-w-2xl mx-auto text-foreground/70 text-base md:text-lg font-light leading-relaxed mb-10">
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
            <span className="inline-flex rounded-full p-[6px] border border-foreground bg-foreground/30 transition-all duration-300">
              <Link
                href="/projects"
                className="inline-flex items-center gap-4 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full transition-all duration-300 hover:bg-gray-200"
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
