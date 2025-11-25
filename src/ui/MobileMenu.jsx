import { useEffect } from "react";
import { X } from "lucide-react";
import styles from "./MobileMenu.module.css";

export function MobileMenu({ isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className={styles.overlay}
        onClick={onClose}
        data-state={isOpen ? "open" : "closed"}
      ></div>
      <div className={styles.panel} data-state={isOpen ? "open" : "closed"}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </>
  );
}
