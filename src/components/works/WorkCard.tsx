import type { Work } from "../../types/work";
import styles  from "./WorkCard.module.css";


interface WorkCardProps {
  work: Work;
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <article className={styles.card}>
      <img
        src={work.image}
        alt={work.title}
        className={styles.image}
      />
      <h3 className={styles.title}>{work.title}</h3>
      <p className={styles.description}>{work.description}</p>

      {/* 技術スタック */}
      <ul className={styles.techList}>
          {work.techs.map((techs) => (
            <li key={techs} className={styles.techBadge}>
              {techs}
            </li>
          ))}
      </ul>

      <a
        href={work.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        サイトを見る
      </a> 

    </article>
  );
};


