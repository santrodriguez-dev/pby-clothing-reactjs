import React, { useState, useEffect } from 'react'
import styles from './PurchaseData.module.scss'
import { TextField, Button, Select, MenuItem, FormControlLabel, Checkbox } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';

import SummaryShopping from '../shopping-cart/summary-shopping/SummaryShopping'

// Redux
import { connect } from 'react-redux'
import { PbyService } from '../../services/pby-services'
import { toast } from 'react-toastify';

const PurchaseData = ({ history, products }: any) => {

  const [totalPrice, setTotalPrice] = useState(0)
  const [dataForm, setDataForm] = useState<any>({})
  const [paises, setPaises] = useState([])
  const [ciudades, setCiudades] = useState([])

  useEffect(() => {
    let total = 0
    products.forEach(item => {
      total += (item.CantidadCompra * getPrecioConDescuento(item.Precio, item.C__Descuento))
    })
    setTotalPrice(total)
  }, [products])

  useEffect(() => {
    getPaises()
  }, [])

  const getPrecioConDescuento = (price: number, dto: number) => {
    const finalPrice = price - ((price * dto) / 100)
    return finalPrice
  }

  const getPaises = () => {
    PbyService.getCountries('').then(countries => {
      setPaises(countries)
    })
  }

  const getCiudades = (countyCode: string) => {
    PbyService.getCities(countyCode).then(ciudades => {
      setCiudades(ciudades)
    })
  }

  const changeValDataForm = (name, value) => {
    const newDataForm = {
      ...dataForm,
      [name]: value
    }
    setDataForm(newDataForm)
    console.log(newDataForm);
  }

  const onBuy = () => {
    PbyService.newOrderBuy(dataForm).then(response => {
      console.log(response)
      if (!response.Status) {
        toast.error(response.Message[0])
        return
      }
      toast.success('La compra se ha realizado satisfactoriamente')
    })
  }

  return (
    <div className={styles.purchase_content}>

      <form noValidate>
        <div className={styles.head_contact}>
          <h5>Información de Contacto</h5>
          <span>¿Ya tienes una Cuenta? INICIAR SESIÓN</span>
        </div>
        <div className={styles.inputs_content}>
          <TextField
            className={styles.subscribe_input}
            onChange={event => changeValDataForm('Correo', event.target.value)}
            label="Correo electrónico o número de telefono móvil" />
          <FormControlLabel
            control={
              <Checkbox
                value={dataForm.AceptaNovedades}
                onChange={(e, newVal) => {
                  changeValDataForm(e.target.name, newVal)
                }}
                name="AceptaNovedades"
                color="primary"
              />
            }
            label="Desea recibir Novedades y Promociones"
          />
        </div>


        <h5>Datos de Envío</h5>
        <div className={styles.inputs_content}>
          <div className={styles.inputs_col2}>
            <TextField
              value={dataForm.Nombre}
              className={styles.subscribe_input}
              // onChange={event => changeValDataForm('Nombre', event.target.value)}
              label="Nombre" />
            <TextField
              className={styles.subscribe_input}
              onChange={event => changeValDataForm('Apellido', event.target.value)}
              label="Apellido" />
          </div>
          <TextField
            type="number"
            className={styles.subscribe_input}
            onChange={event => changeValDataForm('Telefono', event.target.value)}
            label="Teléfono" />
          <TextField
            className={styles.subscribe_input}
            onChange={event => changeValDataForm('Direccion', event.target.value)}
            label="Dirección" />
          <TextField
            className={styles.subscribe_input}
            onChange={event => changeValDataForm('DescripcionDireccion', event.target.value)}
            label="Descripción Dirección" />

          {/* <Select
            label="País"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select> */}
          {/* <TextField className={styles.subscribe_input} select label="País">
            {paises.map((option: any, i) => (
              <MenuItem key={option.Value} value={option.Value}>
                {option.Text}
              </MenuItem>
            ))}
          </TextField> */}

          <Autocomplete
            options={paises}
            // style={{ width: '100%' }}
            onChange={(e, itemSelected: any) => {
              getCiudades(itemSelected.Value)
              changeValDataForm('CodigoPais', itemSelected.Value)
            }}
            getOptionLabel={(option: any) => option.Text}
            renderInput={(params) => <TextField {...params} label="País" />}
          />

          <Autocomplete
            options={ciudades}
            // style={{ width: '100%' }}
            onChange={(e, itemSelected: any) => changeValDataForm('CodigoCuidad', itemSelected.Value)}
            getOptionLabel={(option: any) => option.Text}
            renderInput={(params) => <TextField {...params} label="Ciudad" />}
          />

        </div>

      </form>

      <SummaryShopping history={history} totalPrice={totalPrice} onBuy={e => onBuy()} />


    </div>
  )
}

function mapStateToProps(state) {
  const { shoppingCart } = state
  return { products: shoppingCart.products }
}

export default connect(mapStateToProps)(PurchaseData)