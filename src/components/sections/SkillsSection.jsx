import Tech from "../Tech";
import styles from "./SkillsSection.module.css";

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
      <div>
        <h2 className={styles.heading}>Skills & Expertise</h2>
        <div className={styles.categories}>
          {skillCategories.map((category) => (
            <div className={styles.category}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillGrid}>
                {category.skills.map((skill) => (
                  <div className={styles.skillCard} key={skill.name}>
                    <div className={styles.skillContent}>
                      <Tech techName={skill.name} />
                      <div className={styles.skillDetails}>
                        <p className={styles.skillDescription}>
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
