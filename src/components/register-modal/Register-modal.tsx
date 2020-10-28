import React from 'react'

import { Button, TextField } from '@material-ui/core'

import styles from './Register-modal.module.scss'
import ImageCustomModal from '../image-custom-modal/ImageCustomModal'

const RegisterModal = (props: any) => {

  const { show, onClosed } = props

  return (
    <ImageCustomModal show={show} onClosed={() => onClosed(false)}>
      <div className={styles.dialog_container}>
        <h5 style={{ margin: 0 }}>REGISTRARSE</h5>
        <form noValidate autoComplete="off">
          <div className={styles.inputs_content}>
            <TextField className={styles.subscribe_input} label="Tipo documento" />
            <TextField className={styles.subscribe_input} label="No Documento" />
            <TextField className={styles.subscribe_input} label="Correo" />
            <TextField className={styles.subscribe_input} label="Contraseña" />
          </div>
          <div className={styles.buttons_content}>
            <Button variant="contained" color="primary">Registrarse</Button>
          </div>
        </form>
      </div>
    </ImageCustomModal>

  )
}

export default RegisterModal
