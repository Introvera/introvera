import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const poppins = Poppins({
  variable: "--font-poppins-var",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Introvera — Redefine Your Digital Experience",
  description:
    "Introvera helps you build premium digital experiences with cutting-edge technology and design.",
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
      </body>
    </html>
  );
}
