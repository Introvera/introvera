export interface Project {
  id: number;
  slug: string;
  title: string;
  image: string;
  tags: string[];
  link: string;
  description: string;
  client: string;
  duration: string;
  services: string[];
  challenge: string;
  solution: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    slug: "adeaz-website",
    title: "ADEaZ Website",
    image: "/images/backgrounds/hero-robot.png",
    tags: ["Websites", "E-Commerce"],
    link: "https://example.com/adeaz",
    description: "A complete overhaul of the ADEaZ e-commerce platform focusing on conversion rate optimization and mobile-first design.",
    client: "ADEaZ Retail",
    duration: "12 Weeks",
    services: ["UX/UI Design", "Frontend Development", "CMS Integration"],
    challenge: "The client was struggling with high cart abandonment rates and a slow, outdated mobile experience that failed to convert traffic into sales.",
    solution: "We engineered a headless commerce solution using Next.js and Shopify, resulting in a 40% increase in mobile conversions and sub-second page loads."
  },
  {
    id: 2,
    slug: "brain-ai-platform",
    title: "Brain AI Platform",
    image: "/images/backgrounds/services-backend.jpg", 
    tags: ["AI", "Machine Learning"],
    link: "https://example.com/brain",
    description: "An enterprise AI platform enabling automated decision making and predictive analytics for healthcare providers.",
    client: "NeuroTech Solutions",
    duration: "6 Months",
    services: ["AI Modeling", "Backend Architecture", "Data Pipeline"],
    challenge: "Processing enormous datasets of patient records securely while generating real-time predictive models without latency.",
    solution: "Developed a distributed microservices architecture utilizing edge computing and specialized LLM fine-tuning to deliver instant, HIPAA-compliant patient insights."
  },
  {
    id: 3,
    slug: "cyber-security-dashboard",
    title: "Cyber Security Dashboard",
    image: "/images/backgrounds/services-uiux.jpg",
    tags: ["SaaS", "Security"],
    link: "https://example.com/cyber",
    description: "A centralized monitoring dashboard for threat intelligence and network attack surface management.",
    client: "ShieldX Security",
    duration: "4 Months",
    services: ["Dashboard UI", "Real-time Metrics", "API Integration"],
    challenge: "Abstracting complex, overwhelming threat data into an intuitive, actionable interface for both analysts and executives.",
    solution: "Implemented a customizable bento-grid widget system with WebSockets for live threat mapping, significantly reducing incident response time."
  },
  {
    id: 4,
    slug: "mobile-fintech-app",
    title: "Mobile FinTech App",
    image: "/images/backgrounds/services-mobile.jpg",
    tags: ["Mobile Apps", "Finance"],
    link: "https://example.com/fintech",
    description: "A cross-platform mobile banking application redefining peer-to-peer payments and micro-investing.",
    client: "Vault Financial",
    duration: "8 Months",
    services: ["React Native", "Bank APIs", "UI Animation"],
    challenge: "Creating a completely frictionless onboarding experience while maintaining strict KYC and AML regulatory compliance.",
    solution: "Designed a gamified onboarding flow with biometric authentication, reducing account setup time by 60% compared to legacy banking apps."
  },
  {
    id: 5,
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    image: "/images/backgrounds/services-devops.jpg",
    tags: ["DevOps", "Cloud"],
    link: "https://example.com/cloud",
    description: "A fully automated, multi-region cloud deployment pipeline ensuring 99.99% uptime for global applications.",
    client: "Global SaaS Inc",
    duration: "3 Months",
    services: ["AWS", "Kubernetes", "CI/CD"],
    challenge: "The client suffered from frequent downtime during deployments and lacked a viable disaster recovery protocol.",
    solution: "Architected an active-active multi-region Kubernetes cluster with automated failover, cutting deployment times from hours to minutes."
  }
];
