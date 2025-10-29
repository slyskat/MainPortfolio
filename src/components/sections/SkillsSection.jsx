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
    <section>
      <div>
        <h2>Skills & Expertise</h2>
        <div>
          {skillCategories.map((category) => (
            <div>
              <h3>{category.title}</h3>
              <div>
                {category.skills.map((skill) => (
                  <div>
                    <div>
                      <div>{skill.name}</div>
                      <div>
                        <p>{skill.description}</p>
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
