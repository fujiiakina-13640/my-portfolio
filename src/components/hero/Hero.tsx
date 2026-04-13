import styles from './Hero.module.css';

export default function Hero() {
  return ( 
    <section className={styles.hero}>

      <div className={styles.profileImageContainer}>
        <img src="/images/icon/profile.png" alt="Profile Image" />
      </div>

      <h1 className={styles.name}>藤井愛和 / ふじい あきな</h1>
      <p className = {styles.text}>
        フリーランスwebコーダーのfuji1403です。
        <br />
        コーディングを中心にWeb制作を行っております。
      </p>
    </section>
  );
};
