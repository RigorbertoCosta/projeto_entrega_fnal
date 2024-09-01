import styles from "./Footer.module.css";
import FacebookLogo from '../../assets/img/facebook-logo.png'
import InstagramLogo from '../../assets/img/instagram-logo.png'
import WhatsAppLogo from '../../assets/img/whatsapp-logo.png'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          <strong>RR_StreetWear</strong> &copy; 2023
        </p>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <img src={FacebookLogo} alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <img src={InstagramLogo} alt="Instagram" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <img src={WhatsAppLogo} alt="WhatsApp" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
