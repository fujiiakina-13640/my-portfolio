import { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";


const ScrollToTop = () => {
  const [Visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY >= 300);
  };

  window.addEventListener("scroll", onScroll);

  return () => {
    window.removeEventListener("scroll", onScroll);
  };
}, []);

const  handleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

if (!Visible) {
  return null;
}
return (
    <button className={styles.button} onClick={handleClick}>
      <img
        src="/images/icon/back-btn.png"
        alt="ページ上部へ戻る"
      />
    </button>
  );
};

export default ScrollToTop;