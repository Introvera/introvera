export interface Project {
  id: number;
  slug: string;
  title: string;
  images: string[];
  mainImage: string;
  logo?: string;
  countryCode?: string;
  gradientColors: [string, string];
  tags: string[];
  link: string;
  demoUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
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
    slug: "rapid",
    countryCode: "GB",
    title: "Rapid Website",
    images: [
      "/images/projects/rapid/rapidmain.webp",
      "/images/projects/rapid/rapid01.webp",
      "/images/projects/rapid/rapid02.webp",
      "/images/projects/rapid/rapid03.webp",
      "/images/projects/rapid/rapid04.webp",
      "/images/projects/rapid/rapid05.webp",
    ],
    mainImage: "/images/projects/rapid/rapidmain.webp",
    logo: "/images/projects/rapid/rapid-logo.png",
    gradientColors: ["#0f1a0a", "#1a3a1a"],
    tags: ["Web"],
    link: "https://rapidtyredispatch.com",
    description:
      "Rapid is designed to make buying and managing tyres faster, smarter, and completely hassle free. Whether you're a fleet manager, a busy driver, or someone simply looking for the best deals, our intelligent web platform puts all the information you need at your fingertips.\n\nWith real time stock tracking, instant price updates, and automated delivery scheduling, users can find the right tyre for any vehicle in just a few clicks. The platform also provides detailed product specifications, compatibility checks, and performance insights.\n\nRapid Tyre Dispatch goes beyond simple browsing, it streamlines the ordering process, connects you with local suppliers, and keeps your vehicle running smoothly with minimal downtime.",
    client: "Rapid Tyre Dispatch",
    duration: "3 Days",
    services: ["Wix"],
    challenge:
      "The main hurdle was designing a digital platform for stranded motorists facing high-stress roadside emergencies, where any friction means an immediate bounce to a competitor. We had to capture highly accurate technical data—specifically exact tyre dimensions that drivers rarely know offhand—and clearly explain a hybrid payment model, where a fixed dispatch fee is paid online but the tyre and labor costs are settled with the technician offline. Engineering a system that could resolve these cognitive hurdles, establish immediate transactional trust, and gather precise data from frantic users all while they are stuck with poor cellular signals on the side of a highway was our primary obstacle.",
    solution:
      "We solved this by building an ultra-lightweight, mobile-first web application optimized for sub-second load times in low-signal areas, utilizing high-contrast UI elements for optimal roadside readability. To eliminate billing confusion, we created a transparent 3-step operational framework right above the fold paired with a secure, single-click Stripe integration for the dispatch fee, and embedded an intuitive, visual Tyre Size Guide to ensure correct data collection on the first try. Finally, we wrapped the entire journey in prominent, single-tap deep links to direct phone and WhatsApp lines, creating a zero-friction lifeline that seamlessly converts stressed visitors into confirmed dispatches.",
  },
  {
    id: 2,
    slug: "meladetect",
    countryCode: "LK",
    title: "MelaDetect Website",
    images: [
      "/images/projects/mela-detect/meladetectmain.webp",
      "/images/projects/mela-detect/meladetect01.webp",
      "/images/projects/mela-detect/meladetect02.webp",
      "/images/projects/mela-detect/meladetect03.webp",
      "/images/projects/mela-detect/meladetect04.webp",
    ],
    mainImage: "/images/projects/mela-detect/meladetectmain.webp",
    logo: "/images/projects/mela-detect/meladetect-logo.png",
    gradientColors: ["#0a1a2f", "#1a3a5f"],
    tags: ["Web", "AI/ML", "Backend"],
    link: "#",
    description:
      "MelaDetect is designed to help people take control of their skin health with ease and confidence. Using advanced AI and image analysis, the platform allows users to upload images of their skin and receive quick, reliable insights about potential risks.\n\nThe system is built to be user friendly and educational, guiding users through each step of the process while explaining results in simple terms. It analyzes patterns, marks suspicious areas, and even suggests follow up actions, empowering users to make informed decisions about their health.\n\nWhether you're monitoring moles, concerned about sunspots, or simply staying proactive, our platform makes early detection accessible and stress free.",
    client: "MelaDetect",
    duration: "3 Months",
    services: ["Python", "Next.js"],
    challenge:
      "Early detection of skin cancer significantly improves treatment outcomes, but many people lack access to dermatologists or delay seeking medical advice due to cost, geographical distance, or simple lack of awareness regarding warning signs on their skin.",
    solution:
      "We developed a machine learning model trained on vast dermatological datasets to analyze uploaded skin images and provide preliminary assessments. While always recommending professional medical consultation, this rapid screening tool empowers users to take immediate, proactive steps regarding their personal health and wellbeing.",
  },
  {
    id: 3,
    slug: "adeaz",
    countryCode: "LK",
    title: "ADEaZ Website",
    images: [
      "/images/projects/adeaz/adeazmain.webp",
      "/images/projects/adeaz/adeaz01.webp",
      "/images/projects/adeaz/adeaz02.webp",
      "/images/projects/adeaz/adeaz03.webp",
      "/images/projects/adeaz/adeaz04.webp",
      "/images/projects/adeaz/adeaz05.webp",
      "/images/projects/adeaz/adeaz06.webp",
    ],
    mainImage: "/images/projects/adeaz/adeazmain.webp",
    logo: "/images/projects/adeaz/adeaz-logo.png",
    gradientColors: ["#1a0533", "#4a1a7a"],
    tags: ["Web", "Backend"],
    link: "https://adeaz.introvera.com",
    description:
      "ADEaZ is a premium online fashion destination based in Sri Lanka. We designed and developed their official website to showcase ADEaZ's curated collections, effortless style, and customer first shopping experience through a clean, modern, and visually driven design.\n\nThe site highlights seasonal clothing lines, accessories, and footwear with high quality imagery and clear product detail pages. Every interaction from browsing curated looks to adding items to cart and tracking orders is fast, intuitive, and optimized for both desktop and mobile users.\n\nBuilt with a focus on conversion and ease of management, the website includes streamlined navigation, powerful filters, secure checkout options, and simple content updates for the ADEaZ team.",
    client: "ADEaZ",
    duration: "2 Months",
    services: ["MongoDB", "Express.js", "React", "Node.js"],
    challenge:
      "The ADEaZ fashion brand needed to establish a commanding online presence with a bespoke e-commerce store that could seamlessly handle massive spikes in high-volume traffic during seasonal sales, flash discounts, and major product drops. Their primary obstacle was poor mobile optimization—over 80% of their target demographic shops exclusively on mobile devices, yet their legacy systems were sluggish, prone to cart abandonment, and failed to effectively showcase high-resolution product photography. Furthermore, the absence of an integrated, real-time inventory management system meant that stock levels were frequently inaccurate, leading to oversold items, frustrated customers, and a severely bottlenecked logistics pipeline. We were tasked with completely overhauling their digital architecture to build a highly scalable, conversion-optimized platform that could deliver sub-second page loads, intuitive navigation, and flawless mobile responsiveness, all while providing the internal operations team with a unified dashboard to manage thousands of SKUs effortlessly.",
    solution:
      "We engineered a cutting-edge, high-performance e-commerce platform built on a robust MERN stack (MongoDB, Express.js, React, Node.js), specifically optimized for speed, security, and scalability. To resolve the mobile bounce rate crisis, we implemented a mobile-first UI framework with advanced gesture-based navigation, lightning-fast image lazy loading, and an ultra-streamlined one-click checkout process that reduced cart abandonment by 40%. We integrated powerful dynamic filtering algorithms, allowing users to effortlessly sort thousands of items by size, color, material, and seasonal collection in milliseconds. For the administrative backend, we developed a comprehensive, custom-built dashboard featuring real-time inventory synchronization, automated low-stock alerts, and integrated secure payment gateways, completely eliminating the risk of overselling. This complete digital transformation not only elevated the ADEaZ brand aesthetic with pixel-perfect design but also fundamentally modernized their supply chain, enabling them to scale their operations exponentially and dominate the highly competitive online fashion market.",
  },
  {
    id: 4,
    slug: "ultracraft",
    countryCode: "LK",
    title: "Ultracraft Website",
    images: [
      "/images/projects/ultracraft/ultracraftmain.webp",
      "/images/projects/ultracraft/ultracraft01.webp",
      "/images/projects/ultracraft/ultracraft02.webp",
      "/images/projects/ultracraft/ultracraft03.webp",
      "/images/projects/ultracraft/ultracraft04.webp",
      "/images/projects/ultracraft/ultracraft05.webp",
      "/images/projects/ultracraft/ultracraft06.webp",
      "/images/projects/ultracraft/ultracraft07.webp",
    ],
    mainImage: "/images/projects/ultracraft/ultracraftmain.webp",
    logo: "/images/projects/ultracraft/ultracraft-logo-trans.png",
    gradientColors: ["#1a0533", "#4a1a7a"],
    tags: ["Web", "Backend", "UI/UX"],
    link: "https://ultracraft.lk",
    demoUrl: "https://youtu.be/U5tUlGC3BUo",
    description:
      "Ultracraft.lk is a premium furniture and custom interior solutions company based in Sri Lanka. We designed and developed their official website to showcase Ultracraft's craftsmanship, attention to detail, and bespoke interior services through a clean, elegant, and user first design.\n\nThe site highlights curated furniture collections with high quality imagery and provides clear, informative service pages for custom interiors, space planning, and renovations. Every interaction from browsing products to requesting a consultation is fast, intuitive, and optimized for both desktop and mobile users.\n\nBuilt with a focus on performance and ease of management, the website includes an integrated admin panel, streamlined navigation, easy content updates for the Ultracraft team, and smooth visual presentation to reinforce the brand's premium positioning.",
    client: "Ultracraft",
    duration: "2 Months",
    services: ["Next.js", "PostgreSQL"],
    challenge:
      "Ultracraft.lk needed a professional online presence that truly reflected their premium craftsmanship and bespoke interior services, while making it easy for customers to explore their furniture collections and request consultations.",
    solution:
      "We designed and developed a clean, elegant website with high quality imagery showcasing their curated collections, clear service pages for custom interiors, space planning, and renovations, along with a custom admin panel for seamless content management by the Ultracraft team.",
  },
  {
    id: 5,
    slug: "rainbowweb",
    countryCode: "QA",
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
      "/images/projects/rainbowweb/rainbow11.webp",
    ],
    mainImage: "/images/projects/rainbowweb/rainbowmain.webp",
    logo: "/images/projects/rainbowweb/rainbow-logo1.png",
    gradientColors: ["#1a0533", "#4a1a7a"],
    tags: ["Web", "Backend", "UI/UX"],
    link: "https://rainbowcoloursport.com",
    description:
      "Rainbow Colour Sport is a Qatar-based inclusive sports academy that provides structured physical education, training, and development programs for children, infants, families, and special needs students. We designed and developed their official website to reflect their inclusive vision and create a welcoming digital platform for all age groups and abilities.\n\nThe website presents the academy’s diverse programs in a clear and accessible structure, making it easy for parents, guardians, and individuals to explore suitable training options. It highlights inclusive coaching methods, developmental activities, and special programs designed to support physical, social, and cognitive growth.\n\nBuilt with a modern, responsive, and user-friendly design, the platform ensures a smooth experience across all devices, allowing users to easily access program details, schedules, and enrollment information while reflecting the academy’s supportive and community-driven identity.",
    client: "Rainbow Colour Sport Academy",
    duration: "1 Month",
    services: ["Next.js", ".NET", "PostgreSQL"],
    challenge:
      "Rainbow Colour Sport needed a professional website that could clearly represent their inclusive sports academy, catering not only to athletes but also to infants, children, families, and special needs students, while making program information easy to understand and access.",
    solution:
      "We developed a clean and accessible website that highlights the academy’s inclusive training programs and services. The platform was designed with clarity, usability, and accessibility in mind, ensuring that parents and users of all backgrounds can easily navigate programs, understand offerings, and engage with the academy, while also allowing the team to manage content efficiently.",
  },
  {
    id: 6,
    slug: "rainbowadmin",
    countryCode: "QA",
    title: "Rainbow Admin Panel",
    images: [
      "/images/projects/rainbowadmin/rainbowadminmain.webp",
      "/images/projects/rainbowadmin/rainbowadmin01.webp",
      "/images/projects/rainbowadmin/rainbowadmin02.webp",
      "/images/projects/rainbowadmin/rainbowadmin03.webp",
      "/images/projects/rainbowadmin/rainbowadmin04.webp",
      "/images/projects/rainbowadmin/rainbowadmin05.webp",
      "/images/projects/rainbowadmin/rainbowadmin06.webp",
      "/images/projects/rainbowadmin/rainbowadmin07.webp",
      "/images/projects/rainbowadmin/rainbowadmin08.webp",
    ],
    mainImage: "/images/projects/rainbowadmin/rainbowadminmain.webp",
    logo: "/images/projects/rainbowadmin/rainbow-logo1.png",
    gradientColors: ["#1a0533", "#4a1a7a"],
    tags: ["Web", "Backend", "UI/UX"],
    link: "https://admin.rainbowcoloursport.com",
    demoUrl: "https://youtu.be/iQV8BXk-22A",
    description:
      "Rainbow Colour Sport Academy needed a single place to run day-to-day operations not scattered spreadsheets, phone calls, and manual follow-ups. Rainbow Admin is the internal dashboard where staff manage everything behind the academy: people, programs, bookings, sales, and what appears on the public website.\n\nFrom one screen, the team can onboard admins, parents, students, and coaches, set up activities and packages, schedule sessions, handle session and doorstep bookings, review sales and pool bookings, run coach salary reports, manage pools and promotions, and update certificates, blogs, and gallery content for the website.\n\nThe interface is organized around how the academy actually works clear sections, searchable tables, and straightforward flows so non-technical staff can find what they need quickly and keep information accurate as the business grows.",
    client: "Rainbow Coloursport Academy",
    duration: "3 Months",
    services: ["Next.js", ".NET", "Firebase", "PostgreSQL"],
    challenge:
      "The academy runs many moving parts at once: coaches and students, packaged programs, scheduled sessions, pool bookings, doorstep services, payments, and marketing content for the public site. Staff needed a single admin system that could manage all of this without fragile manual processes while keeping data accurate across bookings, sales history, and coach salary reporting.\n\nThe platform also had to be secure and usable for non-technical staff: clear navigation, fast lookup of parents and bookings, support for legacy data migration, and exports for finance and operations. Payment flows (including integrations such as SkipCash) and Firebase based login had to work reliably in production.",
    solution:
      "Rainbow Admin gives the academy a modular, sidebar driven dashboard built around their real workflow. Staff can manage users, activities, packages, sessions, and bookings, review package and pool sales with filtering and export, configure and run coach salary reports, manage pools and ads, and update website content (certificates, blogs, gallery) without touching code.\n\nThe result is an operations hub that reduces admin overhead and gives the team one reliable place to run the business behind the Rainbow brand aligned with the public website and the family facing mobile app.",
  },
  {
    id: 7,
    slug: "rainbowmobile",
    countryCode: "QA",
    title: "Rainbow Mobile App",
    images: [
      "/images/projects/rainbowmobile/rainbowmobilemain.webp",
      "/images/projects/rainbowmobile/rainbowmobile01.webp",
      "/images/projects/rainbowmobile/rainbowmobile02.webp",
      "/images/projects/rainbowmobile/rainbowmobile03.webp",
      "/images/projects/rainbowmobile/rainbowmobile04.webp",
      "/images/projects/rainbowmobile/rainbowmobile05.webp",
      "/images/projects/rainbowmobile/rainbowmobile06.webp",
      "/images/projects/rainbowmobile/rainbowmobile07.webp",
      "/images/projects/rainbowmobile/rainbowmobile08.webp",
    ],
    mainImage: "/images/projects/rainbowmobile/rainbowmobilemain.webp",
    logo: "/images/projects/rainbowmobile/rainbow-logo1.png",
    gradientColors: ["#1a0533", "#4a1a7a"],
    tags: ["Mobile App", "Mobile UI", "UI/UX", "Backend"],
    link: "#",
    appStoreUrl:
      "https://apps.apple.com/lk/app/rainbow-colour-sport-academy/id6768737157",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.rainbowcolour.rainbow",
    description:
      "Rainbow Colour Sport Academy needed a way for families and students to book and manage sport programs from their phones simply, clearly, and without back-and-forth calls. Rainbow Mobile is the academy’s booking app, parents and guardians can handle bookings for the whole household, while students can stay on top of their own sessions, packages, and schedules in one place.\n\nThe app is built for how people actually use it. Families see upcoming sessions on the home screen, browse activities and packages, use a bookings calendar to see what’s already booked, and complete purchases and payments in a few guided steps. Students get a focused experience around their programs what’s booked, what’s available, and what they need to do next. Coaches get their own view centered on the day ahead: a clear schedule by date, with notifications that take them straight to the right session when needed.\n\nUsers can manage multiple profiles when one account covers several family members, book academic pool sessions or doorstep coaching where offered, and book pool time outside regular packages when needed. Guests can look around before signing up, once logged in, families and students get the full booking and payment experience.",
    client: "Rainbow Coloursport Academy",
    duration: "4 Months",
    services: ["Flutter", "Dart", "Firebase", ".NET", "PostgreSQL"],
    challenge:
      "The academy serves both families and individual students parents booking for children, students joining programs on their own, and people enrolled in different activities at the same time. Swimming alone brings many options (group, private, ladies only, special needs, moms with infants), and some users need pool time outside a regular package. The academy needed a mobile experience that worked for everyone without feeling confusing, while still following booking rules (who can book what, when slots are full, and how doorstep service works).\n\nPayments had to feel trustworthy and familiar for users in Qatar. Coaches needed a simple daily schedule, not the parent or student booking screens. The app also had to work for people who want to browse first, sign up when ready, get reminders about sessions, and come back without losing their place even when the connection is weak.",
    solution:
      "Rainbow Mobile gives families and students a clear home for everything booking related: see what’s coming up, buy new packages, book coaches and time slots, pay in the app, and review past sessions. Families can manage several profiles under one account, students can follow their own bookings and stay aligned with what the academy has scheduled for them. Quick pool booking covers one-off pool use, the bookings tab keeps package and session history easy to scan on a calendar.\n\nCoaches open the app to their own schedule sessions grouped by day, easy to read at a glance, with notifications that help them jump to the right date. Together with the public website and Rainbow Admin, the mobile app completes the academy’s digital experience: families and students book on the phone, staff run operations on the dashboard, and the brand stays consistent end to end.",
  },
  {
    id: 8,
    slug: "ostroitalian",
    countryCode: "AU",
    title: "Ostro Italian Website",
    images: [
      "/images/projects/ostroitalian/ostroitalianmain.webp",
      "/images/projects/ostroitalian/ostroitalian01.webp",
      "/images/projects/ostroitalian/ostroitalian02.webp",
      "/images/projects/ostroitalian/ostroitalian03.webp",
      "/images/projects/ostroitalian/ostroitalian04.webp",
      "/images/projects/ostroitalian/ostroitalian05.webp",
      "/images/projects/ostroitalian/ostroitalian06.webp",
      "/images/projects/ostroitalian/ostroitalian07.webp",
      "/images/projects/ostroitalian/ostroitalian08.webp",
    ],
    mainImage: "/images/projects/ostroitalian/ostroitalianmain.webp",
    logo: "/images/projects/ostroitalian/ostroitalian-logo.png",
    gradientColors: ["#1a0533", "#4a1a7a"],
    tags: ["Website", "UI/UX", "Backend"],
    link: "https://ostroitalian.com.au",
    description:
      "Ostro Italian Restaurant Perth needed a modern, responsive website that would showcase their authentic Italian cuisine and give customers an easy way to explore the menu, learn about the brand, and get in touch. Table bookings are redirected to OpenTable so visitors can reserve seats quickly through a trusted booking flow.\n\nThe site includes dedicated menu, about, and contact pages with a clean layout, high quality food imagery, and intuitive navigation that keeps the experience simple across desktop and mobile. An admin panel was also built for the owner to manage offers, update menu items, and add testimonials without needing technical help.",
    client: "Ostro Italian Restaurant Perth",
    duration: "1 Week",
    services: ["Nextjs", "Firebase", "PostgreSQL"],
    challenge:
      "The restaurant needed a website that would clearly communicate its brand, present the menu in a polished way, and make bookings feel effortless for customers. It also needed separate informational pages for about and contact, while staying fast, mobile friendly, and easy for the owner to manage. The client also asked us to finish the project within a week.\n\nA further requirement was giving the owner control over day to day content changes, including promotional offers, menu updates, and testimonials, without needing developer support for every update.",
    solution:
      "The new website for Ostro Italian Restaurant Perth delivers a streamlined customer experience with dedicated menu, about, and contact pages, plus a booking flow that sends users directly to OpenTable for reservations. The design is modern, responsive, and focused on presenting the restaurant's food and brand clearly across all devices.\n\nBehind the scenes, the admin panel gives the owner a simple way to add offers, change menu items, and publish testimonials, keeping the site fresh and easy to maintain while supporting better engagement and more bookings.",
  },
];
