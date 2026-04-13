import { skills } from "../../data/skills";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>Skills</h2>

      <ul className={styles.list}>
        {skills.map((skill) => (
          <li key={skill.name} className={styles.item}>
            <div className={styles.header}>
              <span className={styles.name}>{skill.name}</span>
              <span className={styles.level}>{skill.level}%</span>
            </div>

            <div className={styles.bar}>
              <div
                className={styles.fill}
                style={{ width: `${skill.level}%` }}
              />
            </div>

            <p className={styles.note}>{skill.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}