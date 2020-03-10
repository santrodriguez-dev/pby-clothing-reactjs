import React, { Fragment } from 'react';
import styles from './Footer.module.scss'
import { FaLocationArrow, FaPhone, FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaTwitter } from 'react-icons/fa';
import { AiOutlineSchedule } from 'react-icons/ai';


const Footer = () => {
  return (
    <Fragment>
      {/* Redes Sociales */}
      <section className={styles.social_networks_container}>
        <div className={styles.social_content}>
          <div className={styles.info}>
            <div className={styles.content_info}>
              <div className={styles.icon_content}>
                <FaLocationArrow size="1.4em" />
              </div>
              <p className={styles.text}>Calle 19 # 36-16, El poblado, Medellín</p>
            </div>
            <div className={styles.content_info}>
              <div className={styles.icon_content}>
                <AiOutlineSchedule size="1.4em" />
              </div>
              <div>
                <p>Lunes a Sábado 10am - 8pm</p>
                <p>Domingos y festivos 11am - 6pm</p>
              </div>
            </div>
            <div className={styles.content_info}>
              <div className={styles.icon_content}>
                <FaPhone size="1.4em" />
              </div>
              <p>+57 310 545 86 40</p>
            </div>
          </div>
          <div className={styles.contact}>
            <div className={styles.icons}>
              <FaFacebookF /><FaInstagram /><FaPinterestP /><FaYoutube /><FaTwitter />
            </div>

            <div className={styles.text_contact}>
              <p>Formas de Pago</p>
              <p>Términos y Condiciones</p>
              <p>Contacto</p>
            </div>

          </div>
          <div className={styles.logo}>
            <img src={require('../../assets/logo1.png')} alt="" />
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footer_content}>
          <span>© 2020 by PBY Proudly created Softeam Design</span>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer;
