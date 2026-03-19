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
    slug: "dream-auto",
    title: "Dream Auto",
    images: [
      "/images/projects/dream-auto/dreamautomain.jpeg",
      "/images/projects/dream-auto/dreamauto01.jpeg",
      "/images/projects/dream-auto/dreamauto02.jpeg",
      "/images/projects/dream-auto/dreamauto03.jpeg"
    ],
    tags: ["Web", "AI/ML", "Backend"],
    link: "https://dreamautomart.com",
    description: "Our vehicle recommendation platform is built to transform the way people buy vehicles especially those who feel overwhelmed by the complexity of choosing the right car. Whether you're a first time buyer, a busy professional, or someone simply unsure of how to navigate loans and insurance, our intelligent and user friendly progressive web app is designed with you in mind.\n\nUsing machine learning, we provide smart, personalized vehicle suggestions tailored to your budget, lifestyle, and driving needs. From fuel economy to loan compatibility, our system considers every factor that matters and gets smarter with every use. Alongside this, our integrated chatbot breaks down finance and insurance options step by step, so even those with no prior knowledge can make confident decisions.\n\nWhether you're looking for a budget car, a sustainable EV, or a high end investment vehicle, our platform is built to make the process smarter, faster, and easier for everyone, no expertise required.",
    client: "Dream Auto",
    duration: "6 Months",
    services: ["React", "Python", "Flask API", "PostgreSQL"],
    challenge: "Car buyers often struggle to navigate the overwhelming number of options available, leading to decision fatigue and potential regret with their purchase.",
    solution: "We developed an AI powered recommendation engine that analyzes user preferences, driving habits, and budget constraints to suggest the most suitable vehicles. The platform includes detailed comparisons, virtual tours, and dealer connections."
  },
  {
    id: 2,
    slug: "schoolify",
    title: "Schoolify",
    images: [
      "/images/projects/schoolify/schoolifymain.jpeg",
      "/images/projects/schoolify/schoolify01.jpeg",
      "/images/projects/schoolify/schoolify02.jpeg",
      "/images/projects/schoolify/schoolify03.jpeg",
      "/images/projects/schoolify/schoolify04.jpeg"
    ],
    tags: ["Web", "Backend"],
    link: "https://getschoolify.com",
    description: "Schoolify is a unified digital platform designed to bridge the communication and management gaps in Sri Lankan schools, especially in rural and public education sectors. By centralizing essential school operations, Schoolify empowers teachers, students, and parents to stay connected, informed, and engaged, all from one place.\n\nWith features like real time notifications, digital attendance tracking, assignment and grade management, and a centralized school calendar, Schoolify ensures that no student or parent misses critical academic updates. It reduces the administrative burden on educators while increasing parental involvement and student accountability.\n\nThrough its intuitive interface and resource sharing capabilities, Schoolify supports high quality, accessible education by enabling remote access to study materials, progress reports, and school announcements.",
    client: "Schoolify",
    duration: "4 Months",
    services: ["Next.js", "PostgreSQL"],
    challenge: "Educational institutions needed a modern, unified platform to manage remote and hybrid learning while keeping students engaged and tracking their progress.",
    solution: "We built a full featured LMS with course management, live video classes, assignment submission, automated grading, and detailed analytics for educators and administrators."
  },
  {
    id: 3,
    slug: "we-neighbour",
    title: "We Neighbour",
    images: [
      "/images/projects/weneighbour/weneighbourmain.jpeg",
      "/images/projects/weneighbour/weneighbour01.jpeg",
      "/images/projects/weneighbour/weneighbour02.jpeg",
      "/images/projects/weneighbour/weneighbour03.jpeg",
      "/images/projects/weneighbour/weneighbour04.jpeg",
      "/images/projects/weneighbour/weneighbour05.jpeg",
      "/images/projects/weneighbour/weneighbour06.jpeg"
    ],
    tags: ["Mobile", "Backend"],
    link: "https://weneighbour.live",
    description: "We Neighbour is a modern, free community management platform designed specifically for apartment residents. Our mission is to build safer, more connected, and resourceful communities by simplifying daily living and encouraging meaningful engagement among neighbours.\n\nResidents gain verified access to a secure environment through manager approved profiles, ensuring privacy and safety. From real time safety alerts and maintenance tracking to event calendars, amenity bookings, and visitor check ins with QR codes, every feature is designed to improve communication and convenience within your building.\n\nBy supporting local businesses and making it easier for residents to connect, collaborate, and care for their shared spaces, We Neighbour transforms apartment living into a truly communal experience.",
    client: "We Neighbour",
    duration: "5 Months",
    services: ["Flutter", "Spring Boot", "MongoDB"],
    challenge: "Residential communities lacked an effective way to communicate, share resources, and manage common facilities, leading to disconnected neighborhoods.",
    solution: "We created a community platform with features for announcements, event planning, facility booking, maintenance requests, and local marketplace all designed to foster stronger neighborhood connections."
  },
  {
    id: 4,
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
    duration: "3 Months",
    services: ["Next.js", "PostgreSQL"],
    challenge: "Ultracraft.lk needed a professional online presence that truly reflected their premium craftsmanship and bespoke interior services, while making it easy for customers to explore their furniture collections and request consultations.",
    solution: "We designed and developed a clean, elegant website with high quality imagery showcasing their curated collections, clear service pages for custom interiors, space planning, and renovations, along with streamlined navigation and easy content management for the Ultracraft team."
  },
  {
    id: 5,
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
    duration: "4 Months",
    services: ["MongoDB", "Express.js", "React", "Node.js"],
    challenge: "The fashion brand needed to establish a strong online presence with a store that could handle high traffic during sales and provide an excellent mobile shopping experience.",
    solution: "We built a performant e commerce platform with advanced filtering, wishlists, size guides, and a streamlined checkout process. The admin panel enables easy inventory and order management."
  },
  {
    id: 6,
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
    id: 1,
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
    duration: "2 Months",
    services: ["Wix"],
    challenge: "The client's manual dispatch process was inefficient, leading to delayed deliveries, poor route planning, and difficulty tracking inventory across multiple warehouses.",
    solution: "We built a comprehensive dispatch system with real time inventory tracking, automated route optimization, driver mobile apps, and customer delivery notifications."
  },
];
