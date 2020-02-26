import React, { Fragment } from 'react'

import styles from './Home.module.scss'

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaTwitter,
  FaPhone,
  FaLocationArrow,
} from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";

import { Slider, FormRegisterModal } from '../index';

function Home() {
  return (
    <Fragment>
      <Slider />

      {/* Lista de imagenes */}
      <div className={styles.image_container}>
        <div className={styles.item_image}>
          <img src="./assets/img3.webp" alt="" />
          <div className={styles.item_hover}>
            <span>Backpacks</span>
          </div>
        </div>
        <div className={styles.item_image}>
          <img src="./assets/img5.webp" alt="" />
          <div className={styles.item_hover}>
            <span>DUFFLE BAGS</span>
          </div>
        </div>
        <div className={styles.item_image}>
          <img src="./assets/img3.webp" alt="" />
          <div className={styles.item_hover}>
            <span>TRAVEL PACKS</span>
          </div>
        </div>
      </div>

      <div className={styles.outstanding} style={{ background: `url('./assets/img4.webp')` }}>
        <div className={styles.text_outstanding}>
          <h2>Radar Concept</h2>
          <h4>New Capsule 20</h4>
        </div>
        <img src="./assets/img3.webp" alt="" />
      </div>


      {/* Contenedor About us */}
      {/* <div style={{ background: `url('./assets/img4.webp') no-repeat center center fixed` }} className={styles.aboutus_container}>
  <div className={styles.txt_aboutus_container}>
    <div className={styles.content}>
      <h2>ABOUT US</h2>
      <p>
        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and make changes to the font.
        I’m a great place for you to tell a story and let your users know a little more about you.
      </p>
    </div>
  </div>
</div> */}

      {/* Input Subscribe */}
      {/* <section className={styles.subscribe_container}>
  <form action="">
    <div className={styles.group}>
      <input type="text" required />
      <span className={styles.highlight}></span>
      <span className={styles.bar}></span>
      <label>Enter your email here*</label>
    </div>
    <button type="button" className={styles.btn}>
      <span>SUBSCRIBE</span>
    </button>

  </form>
</section> */}

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
            <img src="./assets/logo1.png" alt="" />
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home
