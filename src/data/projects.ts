export interface Project {
  id: number;
  slug: string;
  title: string;
  images: string[];
  mainImage: string;
  logo?: string;
  gradientColors: [string, string];
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
    slug: "ultracraft",
    title: "Ultracraft",
    images: [
      "/images/projects/ultracraft/ultracraftmain.webp",
      "/images/projects/ultracraft/ultracraft01.webp",
      "/images/projects/ultracraft/ultracraft02.webp",
      "/images/projects/ultracraft/ultracraft03.webp",
      "/images/projects/ultracraft/ultracraft04.webp",
      "/images/projects/ultracraft/ultracraft05.webp",
      "/images/projects/ultracraft/ultracraft06.webp",
      "/images/projects/ultracraft/ultracraft07.webp"
    ],
    mainImage: "/images/projects/ultracraft/ultracraftmain.webp",
    logo: "/images/projects/ultracraft/ultracraft-logo-trans.png",
    gradientColors: ["#1a0533", "#4a1a7a"],
    tags: ["Web", "Backend", "UI/UX"],
    link: "https://ultracraft.lk",
    description: "Ultracraft.lk is a premium furniture and custom interior solutions company based in Sri Lanka. We designed and developed their official website to showcase Ultracraft's craftsmanship, attention to detail, and bespoke interior services through a clean, elegant, and user first design.\n\nThe site highlights curated furniture collections with high quality imagery and provides clear, informative service pages for custom interiors, space planning, and renovations. Every interaction from browsing products to requesting a consultation is fast, intuitive, and optimized for both desktop and mobile users.\n\nBuilt with a focus on performance and ease of management, the website includes streamlined navigation, easy content updates for the Ultracraft team, and smooth visual presentation to reinforce the brand's premium positioning.",
    client: "Ultracraft",
    duration: "2 Months",
    services: ["Next.js", "PostgreSQL"],
    challenge: "Ultracraft.lk needed a professional online presence that truly reflected their premium craftsmanship and bespoke interior services, while making it easy for customers to explore their furniture collections and request consultations.",
    solution: "We designed and developed a clean, elegant website with high quality imagery showcasing their curated collections, clear service pages for custom interiors, space planning, and renovations, along with streamlined navigation and easy content management for the Ultracraft team."
  },
  {
    id: 2,
    slug: "rainbowweb",
    title: "Rainbow Website",
    images: [
      "/images/projects/rainbowweb/rainbowmain.webp",
      "/images/projects/rainbowweb/rainbow01.webp",
      "/images/projects/rainbowweb/rainbow02.webp",
      "/images/projects/rainbowweb/rainbow03.webp",
      "/images/projects/rainbowweb/rainbow04.webp",
      "/images/projects/rainbowweb/rainbow05.webp",
      "/images/projects/rainbowweb/rainbow06.webp",
      "/images/projects/rainbowweb/rainbow07.webp",
      "/images/projects/rainbowweb/rainbow08.webp",
      "/images/projects/rainbowweb/rainbow09.webp",
      "/images/projects/rainbowweb/rainbow10.webp",
      "/images/projects/rainbowweb/rainbow11.webp"
    ],
    mainImage: "/images/projects/rainbowweb/rainbowmain.webp",
    logo: "/images/projects/rainbowweb/rainbow-logo1.png",
    gradientColors: ["#1a0533", "#4a1a7a"],
    tags: ["Web", "Backend"],
    link: "https://rainbowcoloursport.com",
    description: "Rainbow Colour Sport is a Qatar-based inclusive sports academy that provides structured physical education, training, and development programs for children, infants, families, and special needs students. We designed and developed their official website to reflect their inclusive vision and create a welcoming digital platform for all age groups and abilities.\n\nThe website presents the academy’s diverse programs in a clear and accessible structure, making it easy for parents, guardians, and individuals to explore suitable training options. It highlights inclusive coaching methods, developmental activities, and special programs designed to support physical, social, and cognitive growth.\n\nBuilt with a modern, responsive, and user-friendly design, the platform ensures a smooth experience across all devices, allowing users to easily access program details, schedules, and enrollment information while reflecting the academy’s supportive and community-driven identity.",
    client: "Rainbow Colour Sport Academy",
    duration: "1 Month",
    services: ["Next.js", ".NET", "PostgreSQL"],
    challenge: "Rainbow Colour Sport needed a professional website that could clearly represent their inclusive sports academy, catering not only to athletes but also to infants, children, families, and special needs students, while making program information easy to understand and access.",
    solution: "We developed a clean and accessible website that highlights the academy’s inclusive training programs and services. The platform was designed with clarity, usability, and accessibility in mind, ensuring that parents and users of all backgrounds can easily navigate programs, understand offerings, and engage with the academy, while also allowing the team to manage content efficiently."
  },
  {
    id: 3,
    slug: "adeaz",
    title: "ADEaZ",
    images: [
      "/images/projects/adeaz/adeazmain.webp",
      "/images/projects/adeaz/adeaz01.webp",
      "/images/projects/adeaz/adeaz02.webp",
      "/images/projects/adeaz/adeaz03.webp",
      "/images/projects/adeaz/adeaz04.webp",
      "/images/projects/adeaz/adeaz05.webp",
      "/images/projects/adeaz/adeaz06.webp"
    ],
    mainImage: "/images/projects/adeaz/adeazmain.webp",
    logo: "/images/projects/adeaz/adeaz-logo.png",
    gradientColors: ["#1a0533", "#4a1a7a"],
    tags: ["Web", "Backend"],
    link: "https://adeaz-website.vercel.app",
    description: "ADEaZ is a premium online fashion destination based in Sri Lanka. We designed and developed their official website to showcase ADEaZ's curated collections, effortless style, and customer first shopping experience through a clean, modern, and visually driven design.\n\nThe site highlights seasonal clothing lines, accessories, and footwear with high quality imagery and clear product detail pages. Every interaction from browsing curated looks to adding items to cart and tracking orders is fast, intuitive, and optimized for both desktop and mobile users.\n\nBuilt with a focus on conversion and ease of management, the website includes streamlined navigation, powerful filters, secure checkout options, and simple content updates for the ADEaZ team.",
    client: "ADEaZ",
    duration: "2 Months",
    services: ["MongoDB", "Express.js", "React", "Node.js"],
    challenge: "The fashion brand needed to establish a strong online presence with a store that could handle high traffic during sales and provide an excellent mobile shopping experience.",
    solution: "We built a performant e commerce platform with advanced filtering, wishlists, size guides, and a streamlined checkout process. The admin panel enables easy inventory and order management."
  },
  {
    id: 4,
    slug: "meladetect",
    title: "MelaDetect",
    images: [
      "/images/projects/mela-detect/meladetectmain.webp",
      "/images/projects/mela-detect/meladetect01.webp",
      "/images/projects/mela-detect/meladetect02.webp",
      "/images/projects/mela-detect/meladetect03.webp",
      "/images/projects/mela-detect/meladetect04.webp"
    ],
    mainImage: "/images/projects/mela-detect/meladetectmain.webp",
    logo: "/images/projects/mela-detect/meladetect-logo.png",
    gradientColors: ["#0a1a2f", "#1a3a5f"],
    tags: ["Web", "AI/ML", "Backend"],
    link: "#",
    description: "MelaDetect is designed to help people take control of their skin health with ease and confidence. Using advanced AI and image analysis, the platform allows users to upload images of their skin and receive quick, reliable insights about potential risks.\n\nThe system is built to be user friendly and educational, guiding users through each step of the process while explaining results in simple terms. It analyzes patterns, marks suspicious areas, and even suggests follow up actions, empowering users to make informed decisions about their health.\n\nWhether you're monitoring moles, concerned about sunspots, or simply staying proactive, our platform makes early detection accessible and stress free.",
    client: "MelaDetect",
    duration: "3 Months",
    services: ["Python", "Next.js"],
    challenge: "Early detection of skin cancer significantly improves treatment outcomes, but many people lack access to dermatologists or delay seeking medical advice.",
    solution: "We developed a machine learning model trained on dermatological datasets to analyze uploaded skin images and provide preliminary assessments, always recommending professional medical consultation."
  },
  {
    id: 5,
    slug: "rapid",
    title: "Rapid",
    images: [
      "/images/projects/rapid/rapidmain.webp",
      "/images/projects/rapid/rapid01.webp",
      "/images/projects/rapid/rapid02.webp",
      "/images/projects/rapid/rapid03.webp",
      "/images/projects/rapid/rapid04.webp",
      "/images/projects/rapid/rapid05.webp"
    ],
    mainImage: "/images/projects/rapid/rapidmain.webp",
    logo: "/images/projects/rapid/rapid-logo.png",
    gradientColors: ["#0f1a0a", "#1a3a1a"],
    tags: ["Web"],
    link: "https://rapidtyredispatch.com",
    description: "Rapid is designed to make buying and managing tyres faster, smarter, and completely hassle free. Whether you're a fleet manager, a busy driver, or someone simply looking for the best deals, our intelligent web platform puts all the information you need at your fingertips.\n\nWith real time stock tracking, instant price updates, and automated delivery scheduling, users can find the right tyre for any vehicle in just a few clicks. The platform also provides detailed product specifications, compatibility checks, and performance insights.\n\nRapid Tyre Dispatch goes beyond simple browsing, it streamlines the ordering process, connects you with local suppliers, and keeps your vehicle running smoothly with minimal downtime.",
    client: "Rapid Tyre Dispatch",
    duration: "3 Days",
    services: ["Wix"],
    challenge: "The client's manual dispatch process was inefficient, leading to delayed deliveries, poor route planning, and difficulty tracking inventory across multiple warehouses.",
    solution: "We built a comprehensive dispatch system with real time inventory tracking, automated route optimization, driver mobile apps, and customer delivery notifications."
  },
];
