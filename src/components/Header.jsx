import { Github, Linkedin, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import styles from "./Header.module.css";
import { format } from "date-fns";

function Header() {
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
        <button className={styles.logo}>AAM</button>

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

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferer"
            className={`${styles.iconButton} ${styles.socialLink}`}
          >
            <Github />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.iconButton} ${styles.socialLink}`}
          >
            <Linkedin />
          </a>

          <Button
            btnType="outlineAccent"
            size="small"
            className={styles.resumeButton}
          >
            <a href="#contact">Resume</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
