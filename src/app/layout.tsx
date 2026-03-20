import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
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
  title: {
    default: "Introvera | Software & App Development Company in Sri Lanka",
    template: "%s | Introvera",
  },
  description:
    "Introvera is a premier software development studio in Sri Lanka specializing in web development, mobile app development, UI/UX design, cloud services, and bespoke digital solutions for global clients.",
  keywords: [
    "Software Development Sri Lanka",
    "Web Development Sri Lanka",
    "Mobile App Development Sri Lanka",
    "Software Company Colombo",
    "UI/UX Design Agency",
    "Custom Software Solutions",
    "Backend Development API",
    "DevOps and Cloud Services",
    "IT Consulting Sri Lanka",
    "Quality Assurance Testing",
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
  openGraph: {
    title: "Introvera | Software & App Development Company in Sri Lanka",
    description: "Build premium digital experiences with Introvera's engineering excellence.",
    url: "https://introvera.com",
    siteName: "Introvera",
    images: [
      {
        url: "/images/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Introvera Cover Image",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Sri Lanka",
  },
  twitter: {
    card: "summary_large_image",
    title: "Introvera | Software & App Development Company",
    description: "Build premium digital experiences with cutting-edge technology and design.",
    images: ["/images/logo/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
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
