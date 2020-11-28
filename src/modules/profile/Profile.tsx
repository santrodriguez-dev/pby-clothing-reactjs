import React, { useEffect, useState } from 'react'

import styles from './Profile.module.scss'

import Button from '@material-ui/core/Button';
import { FormControl, FormLabel, TextField } from '@material-ui/core'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';


import { connect } from 'react-redux'
import { Autocomplete } from '@material-ui/lab';
import { PbyService } from '../../services/pby-services';
import { toast } from 'react-toastify';
import { typeDocuments } from '../../shared/mockups/type-documents';

function Profile(props) {

  let { session } = props

  const [dataForm, setDataForm] = useState<any>({
    IdentificationTypeId: '',
    Identification: '',
    FirstName: '',
    LastName: '',
    Phone: '',
    Direction: '',
    ComplementDirection: '',
    Email: '',
    BirthDate: '',
    GenderId: '',
    CountrySelected: null,
    CitySelected: null,
  })
  const [paises, setPaises] = useState<any[]>([])
  const [ciudades, setCiudades] = useState<any[]>([])

  useEffect(() => {
    getPaises()
    if (!session) return
    if (session.Country) getCiudades(session.Country)
    setDataForm(
      {
        ...dataForm,
        ...session,
        Direction: session.Address,
        ComplementDirection: session.DescriptionAddress,
      })
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
    let isValid = true
    const arrayKeys = ['IdentificationTypeId', 'Identification', 'FirstName', 'LastName', 'Phone', 'Email', 'Direction', 'ComplementDirection', 'CountrySelected', 'CitySelected', 'GenderId', 'BirthDate']
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
    console.log(dataForm);
    dataForm.Country = dataForm.CitySelected ? dataForm.CitySelected.Value : ''
    dataForm.City = dataForm.CountrySelected ? dataForm.CountrySelected.Value : ''
    PbyService.updatePerson(dataForm).then(response => {
      if (!response) return
      if (response.status) {
        toast.error(response.Message)
      }
      toast.success('La información se ha actualizado exitosamente')
    })

  }

  return (
    <div className={styles.Profile_container}>
      <div className={styles.inputs_content}>
        <h5>Información de cuenta</h5>
        <div className={styles.inputs_col2}>
          <Autocomplete
            options={typeDocuments}
            // style={{ width: '100%' }}
            onChange={(e, itemSelected: any) => {
              const value = itemSelected ? itemSelected.value : null
              changeValDataForm('IdentificationTypeId', value)
            }}
            getOptionLabel={(option: any) => option.value}
            renderInput={(params) => <TextField {...params} label="Tipo de documento *" />}
          />
          <TextField
            value={dataForm.Identification}
            required
            type="number"
            className={styles.subscribe_input}
            onChange={event => changeValDataForm('Identification', event.target.value)}
            label="No documento" />
        </div>
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
        <FormControl component="fieldset">
          <FormLabel component="legend">Género</FormLabel>
          <RadioGroup
            row
            name="GenderId"
            value={dataForm.GenderId}
            onChange={event => {
              changeValDataForm('GenderId', event.target.value)
            }}>
            <FormControlLabel value={'3'} control={<Radio color="primary" />} label="Femenino" />
            <FormControlLabel value={'4'} control={<Radio color="primary" />} label="Masculino" />
          </RadioGroup>
        </FormControl>

        <TextField
          required
          label="Fecha de nacimiento"
          value={dataForm.BirthDate}
          // format="DD-MM-YYYY"
          type="date"
          InputLabelProps={{ shrink: true }}
          onChange={event => changeValDataForm('BirthDate', event.target.value)}
        />

        <div className={styles.inputs_col2}>
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
        </div>

        <div className={styles.inputs_col2}>
          <TextField
            value={dataForm.Direction}
            required
            className={styles.subscribe_input}
            onChange={event => changeValDataForm('Direction', event.target.value)}
            label="Dirección" />
          <TextField
            value={dataForm.ComplementDirection}
            required
            className={styles.subscribe_input}
            onChange={event => changeValDataForm('ComplementDirection', event.target.value)}
            label="Descripción dirección" />
        </div>
        <div className={styles.inputs_col2}>
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
        </div>
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
