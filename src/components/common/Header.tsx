import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>My Portfolio</h1>

       {/* ハンバーガーボタン */}
      <button
        className={styles.menuButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="メニュー"
      >
        <span />
        <span />
        <span />
      </button>

      {/* ナビゲーション */}
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
      <ul className={styles.navList}>
        <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
        <li><a href="#works" onClick={() => setIsOpen(false)}>Works</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
      </nav>
    </header>
  );
};

export default Header;