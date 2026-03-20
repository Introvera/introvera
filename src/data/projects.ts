export interface Project {
  id: number;
  slug: string;
  title: string;
  images: string[];
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
      "/images/projects/ultracraft/ultracraftmain.jpeg",
      "/images/projects/ultracraft/ultracraft01.jpeg",
      "/images/projects/ultracraft/ultracraft02.jpeg",
      "/images/projects/ultracraft/ultracraft03.jpeg",
      "/images/projects/ultracraft/ultracraft04.jpeg",
      "/images/projects/ultracraft/ultracraft05.jpeg",
      "/images/projects/ultracraft/ultracraft06.jpeg",
      "/images/projects/ultracraft/ultracraft07.jpeg"
    ],
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
    slug: "adeaz",
    title: "ADEaZ",
    images: [
      "/images/projects/adeaz/adeazmain.jpeg",
      "/images/projects/adeaz/adeaz01.png",
      "/images/projects/adeaz/adeaz02.png",
      "/images/projects/adeaz/adeaz03.png",
      "/images/projects/adeaz/adeaz04.png",
      "/images/projects/adeaz/adeaz05.png",
      "/images/projects/adeaz/adeaz06.png"
    ],
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
    id: 3,
    slug: "meladetect",
    title: "MelaDetect",
    images: [
      "/images/projects/mela-detect/meladetectmain.jpeg",
      "/images/projects/mela-detect/meladetect01.jpeg",
      "/images/projects/mela-detect/meladetect02.jpeg",
      "/images/projects/mela-detect/meladetect03.jpeg",
      "/images/projects/mela-detect/meladetect04.jpeg"
    ],
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
    id: 4,
    slug: "rapid",
    title: "Rapid",
    images: [
      "/images/projects/rapid/rapidmain.jpeg",
      "/images/projects/rapid/rapid01.jpeg",
      "/images/projects/rapid/rapid02.jpeg",
      "/images/projects/rapid/rapid03.jpeg",
      "/images/projects/rapid/rapid04.jpeg",
      "/images/projects/rapid/rapid05.jpeg"
    ],
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
