import React, { useState } from 'react'
import styles from './Login-modal.module.scss'

import { Button, TextField } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import ImageCustomModal from '../image-custom-modal/ImageCustomModal'
import { PbyService } from '../../services/pby-services';


const LoginModal = (props: any) => {

  const { show, onClosed, openRegisterModal } = props

  const [form, setForm] = useState({ user: '', password: '' })

  const handleChange = (event) => {
    const { target: { name, value } } = event
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  const handleSubmit = () => {
    PbyService.login(form.user, form.password).then(response => {
      console.log(response);
    })
  }

  return (
    <ImageCustomModal show={show} onClosed={() => onClosed(false)}>
      <h5 style={{ margin: 0 }}>INICIAR SESIÓN</h5>

      <ValidatorForm onSubmit={handleSubmit}>
        <div className={styles.inputs_content}>
          <TextValidator
            label="Usuario"
            onChange={handleChange}
            name="user"
            type="text"
            validators={['required']}
            errorMessages={['Usuario requerido']}
            value={form.user}
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
          <Button variant="contained" color="primary" type="submit">Iniciar sesión</Button>
          <Button variant="contained" color="primary" onClick={() => openRegisterModal()}>Registrarse</Button>
        </div>
      </ValidatorForm>
    </ImageCustomModal>
  )
}

export default LoginModal
