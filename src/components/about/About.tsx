import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about}>

      <h2 className={styles.title}>About Me</h2>

      <p className={styles.text}>
        プログラミングスクールでWeb制作を学び、
        現在はフリーランスでWebコーダーとして活動しています。
      </p>
      <a
        href="https://crowdworks.jp/public/employees/6455902"
        target="_blank"
        rel="noopener noreferrer"
      >
        クラウドワークスのプロフィールを見る
      </a>
    </section>
  );
};
