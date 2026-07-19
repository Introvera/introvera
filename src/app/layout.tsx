import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { LocalBusinessJsonLd, OrganizationJsonLd, ServicesJsonLd, WebSiteJsonLd } from "@/components/SEO/JsonLd";
import { FAQJsonLd, WebPageJsonLd } from "@/components/SEO/FAQJsonLd";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins-var",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://introvera.com"),
  title: {
    default: "Introvera | Custom Software, Website & Mobile Apps",
    template: "%s | Introvera",
  },
  description:
    "Introvera provides custom software development, websites, POS systems, admin panels, and mobile apps. We build scalable business solutions worldwide.",
  keywords: [
    // Core services
    "Custom Software Development",
    "POS System Development",
    "Point of Sale Software",
    "Admin Panel Development",
    "Mobile App Development",
    "Web Development",
    "Business Management Software",
    "Enterprise Software Solutions",
    "Custom Business Systems",
    "UI/UX Design Agency",
    "Backend Development API",
    "DevOps and Cloud Services",
    "Business Process Automation",
    "Quality Assurance Testing",
    "IT Consulting",
    // Regional — Sri Lanka
    "Software Development Sri Lanka",
    "Software Company Colombo",
    "IT Solutions Sri Lanka",
    // Regional — Europe
    "Software Development Company Europe",
    "Custom Software Europe",
    "App Development Company UK",
    // Regional — USA
    "Software Development Company USA",
    "App Development Company USA",
    "Custom Software Solutions USA",
    // Regional — UAE
    "Software Company UAE",
    "Software Development Dubai",
    "App Development UAE",
    // Regional — Australia
    "Software Development Australia",
    "App Development Company Australia",
    // Global
    "Offshore Software Development",
    "Remote Software Development Team",
    "Outsource Software Development",
    "Introvera",
  ],
  authors: [{ name: "Introvera" }],
  creator: "Introvera",
  publisher: "Introvera",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://introvera.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Introvera | Custom Software, Website & Mobile Apps",
    description: "Introvera provides custom software development, websites, POS systems, admin panels, and mobile apps. We build scalable business solutions worldwide.",
    url: "https://introvera.com",
    siteName: "Introvera",
    images: [
      {
        url: "/images/logo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Introvera — Custom Software Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Introvera | Custom Software, Website & Mobile Apps",
    description: "Introvera provides custom software development, websites, POS systems, admin panels, and mobile apps. We build scalable business solutions worldwide.",
    images: ["/images/logo/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <LocalBusinessJsonLd />
        <ServicesJsonLd />
        <FAQJsonLd />
        <WebPageJsonLd title="Introvera | Custom Software, Website & Mobile Apps" description="Introvera provides custom software development, websites, POS systems, admin panels, and mobile apps. We build scalable business solutions worldwide." url="https://introvera.com" />
      </head>
      <body className={`${poppins.variable} font-poppins`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
