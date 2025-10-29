import { User, Briefcase, Code, FolderOpen, Mail } from "lucide-react";
import styles from "./Sidebar.module.css";

const navItems = [
  { id: "about", label: "ABOUT", icon: User },
  { id: "skills", label: "SKILLS", icon: Code },
  { id: "projects", label: "PROJECTS", icon: FolderOpen },
  { id: "contact", label: "CONTACT", icon: Mail },
];

function Sidebar({ currentSection, scrollToSection }) {
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.nav}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentSection === item.id;

          const handleClick = (e) => {
            if (typeof scrollToSection === "function") {
              e.preventDefault();
              scrollToSection(item.id);
            }
          };

          return (
            <li key={item.id} className={styles.navItem}>
              <a
                href={`#${item.id}`}
                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                onClick={handleClick}
                title={item.label}
              >
                <Icon className={styles.icon} size={18} />
                <span className={styles.label}>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
