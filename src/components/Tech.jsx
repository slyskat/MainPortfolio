import styles from "./Tech.module.css";

function Tech({ techName }) {
  return <span className={styles.tech}>{techName}</span>;
}

export default Tech;
