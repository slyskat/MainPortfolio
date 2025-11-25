import Button from "../ui/Button";
import styles from "./Hero.module.css";
import { ArrowDown, ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
function Hero({ scrollToSection }) {
  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.heroContent}
      >
        <div className={styles.heroText}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.greeting}
          >
            Hey, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className={styles.name}
          >
            <span className={styles.circles}>
              <motion.div
                className={`${styles.circle} ${styles.circle1}`}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)",
                }}
              ></motion.div>
              <motion.div
                className={`${styles.circle} ${styles.circle2}`}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0 0 30px rgba(8, 145, 178, 0.5)",
                }}
              ></motion.div>
              <motion.div
                className={`${styles.circle} ${styles.circle3}`}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0 0 30px rgba(14, 116, 144, 0.5)",
                }}
              ></motion.div>
            </span>
            Abdullahi Ayomide
          </motion.h1>

          <motion.p
            className={styles.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Front-End Developer specializing in accessible, performant React
            applications.
          </motion.p>
        </div>

        <motion.div
          className={styles.status}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className={styles.statusIndicator}>
            <span className={styles.statusPing}></span>
            <span className={styles.statusDot}></span>
          </span>
          Available for freelance projects
        </motion.div>

        <motion.div
          className={styles.ctaButtons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            size="large"
            btnType="accent"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
            <ChevronDown />
          </Button>

          <Button
            size="large"
            btnType="outlineAccent"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
            <ArrowRight />
          </Button>
        </motion.div>
      </motion.div>

      {/* <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>SCROLL</span>
        <div>
          <ArrowDown />
        </div>
      </div> */}
    </section>
  );
}

export default Hero;
