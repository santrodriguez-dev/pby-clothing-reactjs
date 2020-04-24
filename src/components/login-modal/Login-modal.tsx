import React, { useEffect, Fragment } from 'react'
import { Modal } from 'materialize-css'

import styles from './Login-modal.module.scss'

const LoginModal = (props: any) => {

  const { show, onClosed, openRegisterModal } = props

  let instance: any = null

  useEffect(() => {
    const elem = document.querySelector('#modal2');
    if (!elem) return
    Modal.init(elem, { onCloseEnd: onClosed })// Callback für Modal schließen.
    instance = Modal.getInstance(elem)
    if (show)
      instance.open()
  }, [show])

  const closeModal = () => {
    const elem = document.querySelector('#modal2');
    if (!elem) return
    instance = Modal.getInstance(elem)
    if (show)
      instance.close()
  }

  return (
    <div className={'modal ' + styles.form_login_containter} id="modal2">
      <div className={'row ' + styles.form_content}>

        <div className={'col s12'} style={{ marginBottom: '1em' }}>
          <div className="col s12 center-align">
            <h5 style={{ margin: 0 }}>INICIO DE SESIÓN</h5>
          </div>
        </div>

        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Nombre de Usuario" id="name"
                type="text" className="active validate" />
              <label htmlFor="name">Usuario</label>
            </div>

            <div className="input-field col s12">
              <label htmlFor="password">Contraseña</label>
              <input id="password" type="password" placeholder="Contraseña"
                className="validate" />
            </div>
          </div>

          <div className={styles.buttons_content}>
            <button className="btn waves-effect waves-light" type="button" name="action" onClick={() => {
              closeModal()
              openRegisterModal()
            }}
            >Registrarse</button>
            <button className="btn waves-effect waves-light" type="button" name="action">Iniciar Sesión</button>
          </div>
        </form>

      </div>

    </div>
  )
}

export default LoginModal
