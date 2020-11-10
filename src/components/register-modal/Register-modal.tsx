import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'

import styles from './Register-modal.module.scss'
import ImageCustomModal from '../image-custom-modal/ImageCustomModal'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { PbyService } from '../../services/pby-services';

const RegisterModal = (props: any) => {

  const { show, onClosed, openLoginModal } = props

  const [form, setForm] = useState({
    tipoDocumento: '',
    noDocumento: '',
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    const { target: { name, value } } = event
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = () => {
    PbyService.register(form.tipoDocumento, form.noDocumento, form.name, form.email, form.password).then(response => {
      console.log(response);
    })
  }

  return (
    <ImageCustomModal show={show} onClosed={() => onClosed(false)} large>
      <div className={styles.dialog_container}>
        <h5 style={{ margin: 0 }}>REGISTRARSE</h5>

        <ValidatorForm onSubmit={handleSubmit}>
          <div className={styles.inputs_content}>
            <TextValidator
              label="Tipo documento"
              onChange={handleChange}
              name="tipoDocumento"
              type="text"
              validators={['required']}
              errorMessages={['Campo requerido']}
              value={form.tipoDocumento}
            />
            <TextValidator
              label="No documento"
              onChange={handleChange}
              name="noDocumento"
              type="text"
              validators={['required']}
              errorMessages={['Campo requerido']}
              value={form.noDocumento}
            />
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
            <TextValidator
              label="Contraseña"
              onChange={handleChange}
              name="password"
              type="password"
              validators={['required']}
              errorMessages={['Contraseña requerida']}
              value={form.password}
            />
          </div>
          <div className={styles.buttons_content}>
            <Button variant="contained" color="primary" type="submit">Registrarse</Button>
            <Button variant="contained" color="primary" onClick={() => openLoginModal()}>Iniciar sesión</Button>
          </div>
        </ValidatorForm>
      </div>
    </ImageCustomModal>

  )
}

export default RegisterModal
