import { useState } from "react";

import styles from "./ContactSection.module.css";
import { Check, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);

  async function toCopyEmail(e) {
    e.preventDefault();
    await navigator.clipboard.writeText("slycreates680@gmail.com");
    setEmailCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setEmailCopied(false), 2000);
  }
  return (
    <section id="contact" className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.heading}>Get In Touch</h2>

        <p className={styles.inquiryPrompt}>
          I'm currently available for freelance projects and open to discussing
          new opportunities. Whether you have a question or just want to say hi,
          feel free to reach out!
        </p>

        <div className={styles.contactDetails}>
          <motion.button
            onClick={toCopyEmail}
            className={styles.contactButton}
            whileHover={{ x: 5 }}
          >
            <motion.div
              className={styles.icon}
              animate={emailCopied ? { scale: [1, 1.2, 1] } : {}}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              {emailCopied ? <Check /> : <Mail />}
            </motion.div>
            <div className={styles.contactInfo}>
              <div className={styles.label}>
                {emailCopied ? "Email copied!" : "Click to copy"}
              </div>
              <div className={styles.info}>slycreates680@gmail.com</div>
            </div>
          </motion.button>

          <motion.div className={styles.contactButton} whileHover={{ x: 5 }}>
            <motion.div
              className={styles.icon}
              whileHover={{
                rotate: [0, -5, 5, -5, 5, 0],
                x: [0, -2, 2, -2, 2, 0],
                transition: { duration: 0.5, repeat: 2 },
              }}
            >
              <MapPin />
            </motion.div>
            <div className={styles.contactInfo}>
              <div className={styles.label}>Location</div>
              <div className={styles.info}>Lagos, Nigeria (WAT / GMT+1)</div>
            </div>
          </motion.div>
        </div>

        <div className={styles.socialLinks}>
          <span className={styles.socialLabel}>Connect with me:</span>

          <motion.a
            href="https://github.com/slyskat"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            aria-label="GitHub Profile"
          >
            <Github />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/abdullahiayomide/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            aria-label="LinkedIn Profile"
          >
            <Linkedin />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactSection;
