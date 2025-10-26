import Button from "../ui/Button";
import styles from "./Hero.module.css";
import { ArrowDown, ArrowRight } from "lucide-react";

function Hero({ scrollToSection }) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <p className={styles.greeting}>Hey, I'm</p>
          <h1 className={styles.name}>
            <span className={styles.circles}>
              <div className={`${styles.circle} ${styles.circle1}`}></div>
              <div className={`${styles.circle} ${styles.circle2}`}></div>
              <div className={`${styles.circle} ${styles.circle3}`}></div>
            </span>
            Abdullahi Ayomide
          </h1>

          <p className={styles.title}>
            Front-End Developer specializing in accessible, performant React
            applications.
          </p>
        </div>

        <div className={styles.status}>
          <span className={styles.statusIndicator}>
            <span className={styles.statusPing}></span>
            <span className={styles.statusDot}></span>
          </span>
          Available for freelance projects
        </div>

        <div className={styles.ctaButtons}>
          <Button onClick={() => scrollToSection("projects")}>
            View My Work
            <ArrowDown />
          </Button>

          <Button onClick={() => scrollToSection("contact")}>
            Get In Touch
            <ArrowRight />
          </Button>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>SCROLL</span>
        <div>
          <ArrowDown />
        </div>
      </div>
    </section>
  );
}

export default Hero;
