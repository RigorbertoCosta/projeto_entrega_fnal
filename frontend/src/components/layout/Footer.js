import styles from "./Footer.module.css";
import InstagramLogo from '../../assets/img/instagram-logo.png'
import WhatsAppLogo from '../../assets/img/whatsapp-logo.png'

//preciso trabalar aqui, deixar fixo embaixo da tela, independente do tamanho dos arquivos contidos


function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          <strong>RR_StreetWear</strong> &copy; 2023
        </p>
        <div className={styles.socialLinks}>
          <a href="https://instagram.com/rr__streetwear" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <img src={InstagramLogo} alt="Instagram" />
          </a>
          <a href="https://chat.whatsapp.com/JPUBKRhrN3v9IWpIrvOach" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <img src={WhatsAppLogo} alt="WhatsApp" />
          </a>
        </div>
        <div className={styles.opinions}>
          <p>"Ótimo serviço, super recomendo!" - Ana</p>
          <p>"Atendimento impecável, muito satisfeito." - João</p>
          <p>"A melhor experiência que já tive!" - Maria</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
