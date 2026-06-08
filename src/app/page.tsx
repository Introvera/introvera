import Hero from "@/components/Hero/Hero";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/About/About"));
const Services = dynamic(() => import("@/components/Services/Services"));
const Projects = dynamic(() => import("@/components/Projects/Projects"));
const Testimonials = dynamic(() => import("@/components/Testimonials/Testimonials"));
const CTA = dynamic(() => import("@/components/CTA/CTA"));

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <CTA />
    </>
  );
}
