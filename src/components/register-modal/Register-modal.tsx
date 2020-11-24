import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'

import styles from './Register-modal.module.scss'
import ImageCustomModal from '../image-custom-modal/ImageCustomModal'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { PbyService } from '../../services/pby-services';
import { toast } from 'react-toastify';
import { Autocomplete } from '@material-ui/lab';

const RegisterModal = (props: any) => {

  const { show, onClosed, openLoginModal } = props

  const [form, setForm] = useState({
    tipoDocumento: '',
    noDocumento: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    const { target: { name, value } } = event
    setForm({ ...form, [name]: value })
  }

  const typeDocuments = [
    { id: 1, value: 'Cédula de Ciudadanía' },
    { id: 2, value: 'NIT' },
    { id: 46, value: 'Tarjeta de Identidad' },
    { id: 47, value: 'Cédula de Extranjería' },
    { id: 48, value: 'Pasaporte' },
  ]

  const handleSubmit = () => {
    PbyService.register(form.tipoDocumento, form.noDocumento, form.firstName, form.lastName, form.email, form.password).then(response => {
      if (!response.status) {
        console.log(response);
        toast.error(response.Message)
        return
      }
      toast.success('Registro exitoso')
      onClosed(true)
    })
  }

  return (
    <ImageCustomModal show={show} onClosed={() => onClosed(false)} large>
      <div className={styles.dialog_container}>
        <h5 style={{ margin: 0 }}>REGISTRARSE</h5>

        <ValidatorForm onSubmit={handleSubmit}>
          <Autocomplete
            options={typeDocuments}
            // style={{ width: '100%' }}
            onChange={(e, itemSelected: any) => {
              const value = itemSelected ? itemSelected.value : null
              handleChange({ target: { name: 'tipoDocumento', value: value } })
            }}
            getOptionLabel={(option: any) => option.value}
            renderInput={(params) => <TextField {...params} label="Tipo de documento" />}
          />
          <div className={styles.inputs_content}>
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
              name="firstName"
              type="text"
              validators={['required']}
              errorMessages={['Campo requerido']}
              value={form.firstName}
            />
            <TextValidator
              label="Apellido"
              onChange={handleChange}
              name="lastName"
              type="text"
              validators={['required']}
              errorMessages={['Campo requerido']}
              value={form.lastName}
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
