import React, { Fragment } from 'react';
import styles from './App.module.scss'
import { Header, Footer } from './components';
// import { IoIosArrowDown } from "react-icons/io";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const App = () => {
  return (
    <Fragment>
      <Header />

      {/* Contenedor Imagen Principal */}
      <div className={styles.container_main_image}>
        <img src={'./assets/img1.webp'} alt="" className={styles.main_image} />
        <div className={styles.main_title}>
          <h1>PLAN YOUR ADVENTURE</h1>
          <a href="./">SHOP NOW</a>
        </div>
        {/* <IoIosArrowDown size={50} style={{ display: 'block', margin: 'auto', marginTop: '5em' }} /> */}
      </div>

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

      {/* Contenedor About us */}
      <div style={{ background: `url('../assets/img4.webp') no-repeat center center fixed` }} className={styles.aboutus_container}>
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
        {/* <img src="./assets/img4.webp" alt="" className={styles.main_image} /> */}
      </div>

      {/* Input Subscribe */}
      <section className={styles.subscribe_container}>
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
      </section>

      {/* Redes Sociales */}
      <section className={styles.social_networks_container}>
        <div className={styles.social_content}>
          <div className={styles.icons}>
            <FaFacebookF /><FaInstagram /><FaPinterestP /><FaYoutube /><FaTwitter />
          </div>
          <ul className={styles.list_social}>
            <li>FAQ</li>
            <li>Shipping and returns</li>
            <li>Store Policy</li>
            <li>Payment Methods</li>
          </ul>
        </div>
      </section>

      <Footer />
    </Fragment>
  )
}

export default App;
