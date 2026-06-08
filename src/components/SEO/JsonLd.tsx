export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Introvera",
    legalName: "Introvera Pvt Ltd",
    url: "https://introvera.com",
    logo: "https://introvera.com/images/logo/logo.png",
    description:
      "Introvera is a global software development company specializing in custom software, POS systems, admin panels, mobile apps, web development, UI/UX design, and cloud services.",
    foundingDate: "2025",
    address: {
      "@type": "PostalAddress",
      streetAddress: "275/3, New Kandy Road",
      addressLocality: "Biyagama",
      addressCountry: "LK",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+94-78-364-0894",
        contactType: "sales",
        email: "contact@introvera.com",
        availableLanguage: ["English","Sinhala"],
        areaServed: [
          { "@type": "Country", name: "Sri Lanka" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "Australia" },
          { "@type": "Country", name: "Qatar" },
          { "@type": "Country", name: "Germany" },
          { "@type": "Country", name: "Canada" },
          { "@type": "Place", name: "Worldwide" }
        ],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/introvera/",
      "https://web.facebook.com/profile.php?id=61577711031531",
      "https://www.instagram.com/team_introvera/",
      "https://www.fiverr.com/s/XL5o0l2",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Introvera",
    url: "https://introvera.com",
    description:
      "Custom software development, POS systems, admin panels, mobile apps, and business solutions for companies worldwide.",
    publisher: {
      "@type": "Organization",
      name: "Introvera",
      logo: {
        "@type": "ImageObject",
        url: "https://introvera.com/images/logo/logo.png",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Introvera Pvt Ltd",
    image: "https://introvera.com/images/logo/logo.png",
    url: "https://introvera.com",
    telephone: "+94-78-364-0894",
    email: "contact@introvera.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "275/3, New Kandy Road",
      addressLocality: "Biyagama",
      addressCountry: "LK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.9494852,
      longitude: 79.9916202,
    },
    priceRange: "$100-$1000000",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 6.9494852,
        longitude: 79.9916202,
      },
      geoRadius: "20000",
    },
    serviceArea: [
      { "@type": "Country", name: "Sri Lanka" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Qatar" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Place", name: "Worldwide" }
    ],
    knowsAbout: [
      "Custom Software Development",
      "POS System Development",
      "Admin Panel Development",
      "Mobile App Development",
      "Web Development",
      "UI/UX Design",
      "Cloud Services",
      "Business Process Automation",
      "DevOps",
      "Quality Assurance",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServicesJsonLd() {
  const services = [
    {
      name: "Custom Software Development",
      description:
        "End-to-end custom software solutions for businesses — from POS systems and admin panels to enterprise platforms.",
    },
    {
      name: "POS System Development",
      description:
        "Custom point-of-sale software solutions with inventory management, sales tracking, and reporting capabilities.",
    },
    {
      name: "Admin Panel Development",
      description:
        "Powerful admin dashboards and management panels to streamline business operations and data management.",
    },
    {
      name: "Mobile App Development",
      description:
        "Cross-platform mobile applications for iOS and Android using Flutter and native technologies.",
    },
    {
      name: "Web Development",
      description:
        "Modern, responsive websites and web applications built with Next.js, React, and cutting-edge technologies.",
    },
    {
      name: "UI/UX Design",
      description:
        "User-centered interface design with wireframing, prototyping, and visual design for digital products.",
    },
    {
      name: "Backend & API Development",
      description:
        "Secure, scalable backend systems with RESTful APIs, microservices, and database architecture.",
    },
    {
      name: "DevOps & Cloud Services",
      description:
        "Cloud infrastructure, CI/CD pipelines, containerization, and deployment automation.",
    },
    {
      name: "Business Process Automation",
      description:
        "Workflow automation, legacy system modernization, and AI-driven business process optimization.",
    },
  ];

  const schema = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Introvera",
      url: "https://introvera.com",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://introvera.com${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
