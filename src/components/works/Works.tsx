import { works } from "../../data/works.ts";
import WorkCard from "./WorkCard";
import styles from "./Works.module.css";

export default function Works() {
  return (
    <section id="works" className={styles.works}>
      <h2 className={styles.heading}>Works</h2>

      <div className={styles.grid}>
        {works.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </section>
  );
}