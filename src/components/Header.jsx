import { Github, Linkedin, Menu, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import styles from "./Header.module.css";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { MobileMenu } from "../ui/MobileMenu";

const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(function () {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dateInWAT = format(currentTime, "HH:mm:ss");

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          AAM
        </motion.button>

        <div className={styles.links}>
          <div className={styles.timeWidget}>
            <span className={styles.statusIndicator}>
              <span className={styles.statusPing}></span>
              <span className={styles.statusDot}></span>
            </span>

            <span className={styles.timeText}>{dateInWAT}</span>
            <span className={styles.timeZone}>WAT</span>
          </div>

          <button className={styles.iconButton}>
            <Moon />
          </button>

          <motion.a
            href="https://github.com/slyskat"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.iconButton} ${styles.socialLink}`}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="GitHub Profile"
          >
            <Github />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/abdullahiayomide/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`${styles.iconButton} ${styles.socialLink}`}
            aria-label="LinkedIn Profile"
          >
            <Linkedin />
          </motion.a>

          <Button
            btnType="outlineAccent"
            size="small"
            className={styles.resumeButton}
          >
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Button>

          <div className={styles.mobileMenuButton}>
            <Button
              btnType="outlineAccent"
              size="small"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu />
            </Button>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <nav className={styles.mobileNav}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={styles.mobileNavLink}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </MobileMenu>
    </header>
  );
}

export default Header;
