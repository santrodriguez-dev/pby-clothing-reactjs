import React from 'react'
// import { Modal } from 'materialize-css'
import { Button, TextField } from '@material-ui/core'

import styles from './Form_register_modal.module.scss'
import ImageCustomModal from '../image-custom-modal/ImageCustomModal'

const FormRegisterModal = (props: any) => {

  const { show, onClosed } = props

  return (
    <ImageCustomModal show={show} onClosed={() => onClosed(false)}>
      <div className={styles.container_form}>
        <h5>RECIBIR NOTICIAS Y OFERTAS DE PBY</h5>
        <p>Regístrate para recibir correos electrónicos y estar al tanto de ofertas y noticias especiales de la familia de marcas de Nike.</p>
        <form className="col s6">
          <div className={styles.inputs_content}>
            <TextField className={styles.subscribe_input} label="Correo" />
            <TextField className={styles.subscribe_input} label="Nombre" />
          </div>

          <div className={styles.buttons_content}>
            <Button variant="contained" color="primary">Enviar</Button>
          </div>
        </form>
      </div>
    </ImageCustomModal>
  )
}


export default FormRegisterModal

