import React, { Fragment } from 'react'

import styles from './Contact.module.scss'
import { ImageBanner } from '../../components'

const Contact = () => {
  return (
    <Fragment>
      <ImageBanner
        title={'Contacto'}
        // subtitle={'New Capsule 20'}
        imgSrc={'https://cdn.shopify.com/s/files/1/0071/3637/8998/files/Mens-street-style-vans-hi-sk8.jpg'}
      />

      <div className={styles.about_us_form}>

        <div className={styles.form_container}>
          <form>
            {/* <h3>Contacto</h3> */}
            <p style={{ margin: '3em 0', textAlign: 'center' }}>Please feel free to call us at (818) 444-7768 for help and support.
          Monday–Friday 9:00am–4:00pm PST To send a message, please fill out the form below.</p>

            <div className="row">
              <div className="input-field col s12">
                <input id="name" type="text" className="validate" />
                <label htmlFor="name">Nombre</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="text" className="validate" />
                <label htmlFor="email">Correo</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="message" className="materialize-textarea"></textarea>
                <label htmlFor="message">Mensaje</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button className="btn waves-effect waves-light" type="button" name="action">
                  Enviar
                </button>

              </div>
            </div>

          </form>

          <div className={styles.map_container}>
            <img src="https://ep01.epimg.net/tecnologia/imagenes/2019/11/13/actualidad/1573658897_566202_1573659544_noticia_normal.jpg" alt="" />
          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default Contact
