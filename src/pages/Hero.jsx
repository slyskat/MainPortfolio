import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import styles from "./Hero.module.css";

function Hero() {
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
  });

  useEffect(function () {
    const handleScroll = () => {
      const sections = ["about", "experience", "skills", "progress", "contact"];
      const currentScrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            currentScrollPosition >= offsetTop &&
            currentScrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(section);
            break;
          }
        }
      }

    };

window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
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
      <div
        className={styles.scrollProgress}
        style={{ scaleX: scrollProgress / 100 }}
      ></div>
      <Header />
      <Sidebar />
    </div>
  );
}

export default Hero;
