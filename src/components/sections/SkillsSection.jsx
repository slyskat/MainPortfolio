import Tech from "../Tech";
import styles from "./SkillsSection.module.css";
import { motion } from "framer-motion";

function SkillsSection() {
  const skillCategories = [
    {
      title: "Core Technologies",
      skills: [
        {
          name: "React",
          description: "Component architecture, hooks, state management",
        },
        {
          name: "JavaScript (ES6+)",
          description:
            "Modern syntax, async operations, functional programming",
        },
        {
          name: "TypeScript",
          description: "Type-safe development, interfaces, generics",
        },
        {
          name: "HTML5 & CSS3",
          description: "Semantic markup, responsive design, CSS Grid & Flexbox",
        },
      ],
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        {
          name: "React Router",
          description: "Client-side routing, dynamic navigation",
        },
        {
          name: "Framer Motion",
          description: "Smooth animations, gesture handling",
        },
      ],
    },
    {
      title: "Tools & Practices",
      skills: [
        {
          name: "Git & GitHub",
          description: "Version control, collaboration, CI/CD",
        },
        {
          name: "Responsive Design",
          description: "Mobile-first, progressive enhancement",
        },
        {
          name: "Web Accessibility",
          description: "WCAG compliance, ARIA, keyboard navigation",
        },
        {
          name: "Performance Optimization",
          description: "Code splitting, lazy loading, Core Web Vitals",
        },
      ],
    },
  ];
  return (
    <section id="skills" className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.heading}>Skills & Expertise</h2>
        <div className={styles.categories}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              className={styles.category}
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillGrid}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    className={styles.skillCard}
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                  >
                    <div className={styles.skillContent}>
                      <Tech techName={skill.name} />
                      <div className={styles.skillDetails}>
                        <p className={styles.skillDescription}>
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default SkillsSection;
