import React from 'react';
import styles from './Footer.module.scss'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <span>© 2020 by PBY Proudly created Softeam Design</span>
      </div>
    </footer>
  )
}

export default Footer;
