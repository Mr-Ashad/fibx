import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

/**
 * Home Page — Assembles all sections into a cohesive single-page layout.
 * Server component that imports client components where interactivity is needed.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Projects />
        <TechStack />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
