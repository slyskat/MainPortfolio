import { User, Briefcase, Code, FolderOpen, Mail } from "lucide-react";
import styles from "./Sidebar.module.css";

const navItems = [
  { id: "about", label: "ABOUT", icon: User },
  { id: "experience", label: "EXPERIENCE", icon: Briefcase },
  { id: "skills", label: "SKILLS", icon: Code },
  { id: "projects", label: "PROJECTS", icon: FolderOpen },
  { id: "contact", label: "CONTACT", icon: Mail },
];

function Sidebar({ activeSection }) {
  return (
    <>
      <aside className={styles.sidebar}>
        <ul className={styles.nav}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <a
                  href={`${item.id}`}
                  className={`${isActive} ? 'active' : 'none'`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
