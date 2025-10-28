import styles from "./AboutSection.module.css";

function AboutSection() {
  return (
    <section className={styles.section} id="about">
      <h2 className={styles.heading}>About</h2>
      <div className={styles.content}>
        <p>
          I'm a self-taught front-end developer passionate about creating
          thoughtful user experiences through clean code and modern web
          technologies. My journey into web development started with curiosity
          and evolved into a commitment to building production-ready
          applications.
        </p>
        <p>
          My focus is on <span className={styles.highlight}>React</span>{" "}
          development—writing reusable components, implementing responsive
          layouts, and delivering interfaces that are both beautiful and
          accessible. I take pride in component-driven architecture and ensuring
          every project maintains high standards for performance and user
          experience.
        </p>
        <p>
          With a strong foundation in{" "}
          <span className={styles.highlight}>HTML</span>,{" "}
          <span className={styles.highlight}>CSS</span>, and{" "}
          <span className={styles.highlight}>JavaScript</span>, I've developed
          practical expertise in modern front-end development practices. I
          believe in continuous learning through hands-on projects—each
          application I build teaches me something new about crafting better web
          experiences.
        </p>
        <p>
          When I'm not coding, you'll find me exploring music, gaming, playing
          chess, or watching films. I believe diverse interests fuel creativity
          and bring fresh perspectives to problem-solving.{" "}
          <a href="#contact" className={styles.link}>
            Let's connect →
          </a>
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
