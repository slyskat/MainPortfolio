import { ArrowUp } from "lucide-react";
import styles from "./Footer.module.css";

function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <p className={styles.copyright}>© 2025 Abdullahi Ayomide Matthew</p>

        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>
            About
          </a>
          <a href="#skills" className={styles.navLink}>
            Skills
          </a>
          <a href="#projects" className={styles.navLink}>
            Projects
          </a>
          <a href="#contact" className={styles.navLink}>
            Contact
          </a>
        </nav>

        <button className={styles.backToTop} onClick={scrollToTop}>
          Back toTop
          <ArrowUp />
        </button>
      </div>

      <div className={styles.bottomRow}>
        <p className={styles.techStack}>
          Built with <span className={styles.highlight}>React</span> &{" "}
          <span className={styles.highlight}>CSS Modules</span>.
        </p>

        <p>Last updated: November 2025</p>
      </div>
    </footer>
  );
}

export default Footer;
