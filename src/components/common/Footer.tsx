import style from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={style.Footer}>
      <small className={style.FooterText}>&copy; fuji1403 2026</small>
      <address>
        <a className={style.FooterLink} href="https://x.com/fuji1403" target="_blank">
          <img src="public/images/icon/X-logo.png" alt="X logo" width="30" height="30"/>
        </a>
        <a className={style.FooterLink} href="https://www.instagram.com/fuji.1403/" target="_blank">
          <img src="public/images/icon/Instagram_logo.png" alt="Instagram logo" width="30" height="30"/>
        </a>
      </address>
      
    </section>
  );
};

export default Footer;