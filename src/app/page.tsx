import About from "@/components/About/About";
import CTA from "@/components/CTA/CTA";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";

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
