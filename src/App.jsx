import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./pages/Hero";
import { useState, useEffect } from "react";

import styles from "./App.module.css";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";
import { Toaster } from "sonner";

function App() {
  const [currentSection, setCurrentSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(function () {
    const handleScrollProgress = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScrollProgress);
    return () => window.removeEventListener("scroll", handleScrollProgress);
  }, []);

  useEffect(function () {
    const sections = document.querySelectorAll("section");

    const options = {
      root: null,
      rootMargin: "0px 0px -60% 0px",
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }

  return (
    <div className={styles.container}>
      <Toaster position="top-right" />
      <div
        className={styles.scrollProgress}
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      ></div>
      <Header />
      <Sidebar
        currentSection={currentSection}
        scrollToSection={scrollToSection}
      />
      <main className={styles.main}>
        <Hero scrollToSection={scrollToSection} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
export default App;
