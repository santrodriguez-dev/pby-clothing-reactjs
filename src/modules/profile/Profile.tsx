import React, { Fragment, useEffect, useState } from 'react'

import styles from './Profile.module.scss'

import Button from '@material-ui/core/Button';
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { TextField } from '@material-ui/core'


import { connect } from 'react-redux'
import { Autocomplete } from '@material-ui/lab';
import { PbyService } from '../../services/pby-services';
import { toast } from 'react-toastify';

function Profile(props) {

  let { session } = props

  const [dataForm, setDataForm] = useState<any>({
    FirstName: '',
    LastName: '',
    Phone: '',
    Address: '',
    DescriptionAddress: '',
    Email: '',
    CountrySelected: null,
    CitySelected: null,
  })
  const [paises, setPaises] = useState<any[]>([])
  const [ciudades, setCiudades] = useState<any[]>([])

  useEffect(() => {
    getPaises()
    if (!session) return
    if (session.Country) getCiudades(session.Country)
    setDataForm({ ...dataForm, ...session })
  }, [session])

  useEffect(() => {
    if (!paises || paises.length === 0 || !dataForm) return
    const countryFind = paises.find(item => item.Value === dataForm.Country)
    if (countryFind) changeValDataForm('CountrySelected', countryFind)
  }, [paises])

  useEffect(() => {
    if (!ciudades || ciudades.length === 0 || !dataForm) return
    const countryFind = ciudades.find(item => item.Value === dataForm.City)
    if (countryFind) changeValDataForm('CitySelected', countryFind)
  }, [ciudades])

  const changeValDataForm = (name, value) => {
    const newDataForm = {
      ...dataForm,
      [name]: value
    }
    setDataForm({ ...newDataForm })
  }

  const getPaises = () => {
    PbyService.getCountries('').then(countries => {
      setPaises(countries)
    })
  }

  const getCiudades = (countyCode: string) => {
    if (!countyCode) return
    PbyService.getCities(countyCode).then(ciudades => {
      setCiudades(ciudades)
    })
  }

  const onSubmit = () => {
    console.log(dataForm);
    let isValid = true
    const arrayKeys = ['FirstName', 'LastName', 'Phone', 'Email', 'Address', 'DescriptionAddress', 'CodigoPais', 'CodigoCuidad']
    for (const key of arrayKeys) {
      if (!dataForm[key]) {
        isValid = false
        break
      }
    }

    if (!isValid) {
      toast.warning(`Debe diligenciar los campos obligatorios`)
      return
    }
  }

  return (
    <div className={styles.Profile_container}>
      <div className={styles.inputs_content}>
        <h5>Información de cuenta</h5>
        <div className={styles.inputs_col2}>
          <TextField
            required
            value={dataForm.FirstName}
            className={styles.subscribe_input}
            onChange={event => changeValDataForm('FirstName', event.target.value)}
            label="Nombre" />
          <TextField
            required
            value={dataForm.LastName}
            className={styles.subscribe_input}
            onChange={event => changeValDataForm('LastName', event.target.value)}
            label="Apellido" />
        </div>

        <TextField
          value={dataForm.Phone}
          required
          type="number"
          className={styles.subscribe_input}
          onChange={event => changeValDataForm('Phone', event.target.value)}
          label="Teléfono" />
        <TextField
          value={dataForm.Email}
          required
          type="email"
          className={styles.subscribe_input}
          onChange={event => changeValDataForm('Email', event.target.value)}
          label="Correo" />
        <TextField
          value={dataForm.Address}
          required
          className={styles.subscribe_input}
          onChange={event => changeValDataForm('Address', event.target.value)}
          label="Dirección" />
        <TextField
          value={dataForm.DescriptionAddress}
          required
          className={styles.subscribe_input}
          onChange={event => changeValDataForm('DescriptionAddress', event.target.value)}
          label="Descripción dirección" />
        <Autocomplete
          options={paises}
          value={dataForm.CountrySelected}
          // defaultValue={dataForm.CodigoPais}
          // style={{ width: '100%' }}
          onChange={(e, itemSelected: any) => {
            const value = itemSelected ? itemSelected : null
            getCiudades(value.Value)
            changeValDataForm('CountrySelected', value)
          }}
          getOptionLabel={(option: any) => option.Text}
          renderInput={(params) => <TextField {...params} label="País *" />}
        />

        <Autocomplete
          options={ciudades}
          value={dataForm.CitySelected}
          onChange={(e, itemSelected: any) => {
            const value = itemSelected ? itemSelected : null
            changeValDataForm('CitySelected', value)
          }}
          getOptionLabel={(option: any) => option.Text}
          renderInput={(params) => <TextField {...params} label="Ciudad *" />}
        />
        <Button variant="contained" color="primary" type="submit" className={styles.btn_submit}
          onClick={() => onSubmit()}
        >Guardar Datos</Button>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  const { session } = state
  return { session: session.session }
}

export default connect(mapStateToProps)(Profile)
