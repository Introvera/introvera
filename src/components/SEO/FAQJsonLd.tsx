export function FAQJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What software development services does Introvera offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Introvera offers a comprehensive suite of digital services including custom software development, mobile app development (iOS and Android), full-stack web development, POS systems, enterprise ERPs, admin dashboards, UI/UX design, and cloud infrastructure management.",
        },
      },
      {
        "@type": "Question",
        name: "Does Introvera build custom POS systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in building highly scalable, custom Point of Sale (POS) systems that integrate seamlessly with your existing inventory management, accounting, and e-commerce platforms.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Introvera located and who do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Introvera is headquartered in Sri Lanka, but we operate globally. We provide custom software solutions to clients across the United States, United Kingdom, Europe, UAE, Australia, and Canada.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebPageJsonLd({ title, description, url }: { title: string; description: string; url: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    datePublished: "2024-01-01T08:00:00+08:00",
    dateModified: new Date().toISOString(),
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
