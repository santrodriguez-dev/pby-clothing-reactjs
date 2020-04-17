import React, { Fragment } from 'react'

import styles from './Home.module.scss'
import { Slider } from '../index';

// import img3 from '../../assets/img3.webp';
import img4 from '../../assets/img4.webp';

import image3 from '../../assets/images_pby/Home/3.jpg'
import image4 from '../../assets/images_pby/Home/4.jpg'
import image5 from '../../assets/images_pby/Home/5.jpg'


function Home() {
  return (
    <Fragment>
      <Slider />

      {/* Lista de imagenes */}
      <div className={styles.image_container}>
        <div className={styles.item_image}>
          <img src={image3} alt="" />
          <div className={styles.item_hover}>
            <span>CAMISETAS</span>
          </div>
        </div>
        <div className={styles.item_image}>
          <img src={image4} alt="" />
          <div className={styles.item_hover}>
            <span>JERSEY</span>
          </div>
        </div>
        <div className={styles.item_image}>
          <img src={image5} alt="" />
          <div className={styles.item_hover}>
            <span>CHAQUETAS</span>
          </div>
        </div>
      </div>

      <div className={styles.outstanding} style={{ background: `url('${img4}')` }}>
        <div className={styles.text_outstanding}>
          <h2>Radar Concept</h2>
          <h4>New Capsule 20</h4>
        </div>
        <img src={require('../../assets/img3.webp')} alt="" />
      </div>


      {/* Contenedor About us */}
      {/* <div style={{ background: `url({require('./assets/img4.webp')}) no-repeat center center fixed` }} className={styles.aboutus_container}>
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
      <section className={styles.subscribe_container}>
        <div className={styles.content_subscribe}>
          <h2>Suscribirse</h2>
          <form action="">
            <div className="row valign-wrapper" style={{ margin: 0 }}>
              <div className="input-field col s7">
                <input id="last_name" type="text" />
                <label htmlFor="last_name">Correo electrónico</label>
              </div>
              <div className="input-field col s5">
                <button className="waves-effect waves-light btn" type="button" name="action">Enviar</button>
              </div>
            </div>
          </form>

        </div>
      </section>

    </Fragment>
  )
}

export default Home
