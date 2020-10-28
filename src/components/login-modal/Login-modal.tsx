import React from 'react'

import styles from './Login-modal.module.scss'
import { Button, TextField } from '@material-ui/core'
import ImageCustomModal from '../image-custom-modal/ImageCustomModal'

const LoginModal = (props: any) => {

  const { show, onClosed, openRegisterModal } = props

  return (
    <ImageCustomModal show={show} onClosed={() => onClosed(false)}>
      <h5 style={{ margin: 0 }}>INICIO DE SESIÓN</h5>
      <form noValidate>
        <div className={styles.inputs_content}>
          <TextField className={styles.subscribe_input} label="Usuario" />
          <TextField className={styles.subscribe_input} label="Contraseña" />
        </div>

        <div className={styles.buttons_content}>
          <Button variant="contained" color="primary" onClick={() => openRegisterModal()}>Registrarse</Button>
          <Button variant="contained" color="primary">Iniciar sesión</Button>
        </div>
      </form>
    </ImageCustomModal>
  )
}

export default LoginModal
