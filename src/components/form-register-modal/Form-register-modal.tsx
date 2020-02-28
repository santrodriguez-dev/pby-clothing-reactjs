import React, { useEffect, Fragment } from 'react'
import { Modal } from 'materialize-css'

import styles from './Form_register_modal.module.scss'

const FormRegisterModal = (props: any) => {

  const { show, onClosed } = props

  let instance: any = null

  useEffect(() => {
    const elem = document.querySelector('.modal');
    if (!elem) return
    Modal.init(elem, { onCloseEnd: onClosed })// Callback für Modal schließen.
    instance = Modal.getInstance(elem)
    if (show)
      instance.open()
  }, [show])

  return (
    <div className="modal" id="modal1">

      <div className={styles.register_containter}>

        <div className={styles.register_form}>
          <h5>RECIBIR NOTICIAS Y OFERTAS DE PBY</h5>
          <p>Regístrate para recibir correos electrónicos y estar al tanto de ofertas y noticias especiales de la familia de marcas de Nike.</p>

          <form className="col s6">
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="text" className="validate" />
                <label htmlFor="email">Dirección de correo</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="name" type="text" className="validate" />
                <label htmlFor="name">Nombre</label>
              </div>
            </div>
            <div className="row" style={{ marginBottom: 0 }}>
              <div className="input-field col s12" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 0 }}>
                <button className="btn waves-effect waves-light" type="button" name="action">
                  Enviar
                </button>
              </div>
            </div>
          </form>

        </div>

        <div className={styles.image_content}>
          <img src="https://cartelurbano.com/sites/default/files/editores/alejandro-gallego-1991-estadio-medellin.jpg" alt="" />
        </div>
      </div>


      {/* <div className="modal-footer">
        <button className="btn" type="button" name="action"
          onClick={() => instance.close()}>Cerrar
        </button>
      </div> */}
    </div>
  )
}


export default FormRegisterModal

