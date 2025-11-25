import { ArrowRight, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import styles from "./ProjectsSection.module.css";
import Tech from "../Tech";
import Button from "../../ui/Button";
import { motion } from "framer-motion";

function ProjectsSection() {
  const projects = [
    {
      title: "Job Search App",
      description:
        "A comprehensive job search application featuring real-time filtering, location-based search, job statistics dashboard, and persistent storage for saved opportunities.",
      image: "/src/images/job-board.png",
      tech: ["React", "CSS Modules", "Lucide React", "date-fns"],
      liveUrl: "https://job-board-aggregator.vercel.app/",
      codeUrl: "https://github.com/slyskat/Job-Board-Aggregator",
    },
    {
      title: "Learning Tracker",
      description:
        "Full-featured CRUD application for tracking learning goals with localStorage persistence, interactive pie chart visualizations, and progress monitoring.",
      image: "/src/images/learning-tracker.png",
      tech: ["React", "CSS Modules", "localStorage", "Chart Integration"],
      liveUrl: "https://learning-tracker-xi.vercel.app/",
      codeUrl: "https://github.com/slyskat/Learning-Tracker",
    },
  ];

  return (
    <motion.section
      id="projects"
      className={styles.section}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <motion.div
            className={styles.projectCard}
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <div className={styles.projectContainer}>
              <div className={styles.imageContiner}>
                <motion.img
                  className={styles.image}
                  src={project.image}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  alt={`${project.title} preview`}
                />
              </div>

              <div className={styles.projectDetails}>
                <div className={styles.titleContainer}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <ArrowRight className={styles.arrow} />
                </div>

                <p className={styles.description}>{project.description}</p>

                <div className={styles.techList}>
                  {project.tech.map((tech) => (
                    <Tech key={tech} techName={tech} />
                  ))}
                </div>

                <div className={styles.buttons}>
                  <Button size="small" btnType="accent">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live <ExternalLink />
                    </a>
                  </Button>
                  <Button size="small" btnType="outlineAccent">
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live <Github />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <a href="#" className={styles.archiveLink}>
          View Full Project Archive
          <ArrowUpRight />
        </a>
      </motion.div>
    </motion.section>
  );
}

export default ProjectsSection;
