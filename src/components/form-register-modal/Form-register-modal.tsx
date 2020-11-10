import React, { useState } from 'react'
// import { Modal } from 'materialize-css'
import { Button, TextField } from '@material-ui/core'

import styles from './Form_register_modal.module.scss'
import ImageCustomModal from '../image-custom-modal/ImageCustomModal'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { PbyService } from '../../services/pby-services';

const FormRegisterModal = (props: any) => {

  const { show, onClosed } = props

  const [form, setForm] = useState({ name: '', email: '' })

  const handleChange = (event) => {
    const { target: { name, value } } = event
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = () => {
    PbyService.newsLetterRegister(form.name, form.email).then(response => {
      console.log(response);
    })
  }

  return (
    <ImageCustomModal show={show} onClosed={() => onClosed(false)}>
      <div className={styles.container_form}>
        <h5>RECIBIR NOTICIAS Y OFERTAS DE PBY</h5>
        <p>Regístrate para recibir correos electrónicos y estar al tanto de ofertas y noticias especiales de la familia de marcas de Nike.</p>
        <ValidatorForm onSubmit={handleSubmit}>
          <div className={styles.inputs_content}>
            <TextValidator
              label="Nombre"
              onChange={handleChange}
              name="name"
              type="text"
              validators={['required']}
              errorMessages={['Campo requerido']}
              value={form.name}
            />
            <TextValidator
              label="Correo"
              onChange={handleChange}
              name="email"
              type="text"
              validators={['required', 'isEmail']}
              errorMessages={['Campo requerido', 'Correo no válido']}
              value={form.email}
            />
          </div>
          <div className={styles.buttons_content}>
            <Button variant="contained" color="primary" type="submit">Enviar</Button>
          </div>
        </ValidatorForm>
      </div>
    </ImageCustomModal>
  )
}


export default FormRegisterModal

