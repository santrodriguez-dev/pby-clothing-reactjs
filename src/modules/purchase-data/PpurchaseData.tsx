import React from 'react'
import styles from './PurchaseData.module.scss'
import { TextField, Button, Select, MenuItem, FormControlLabel, Checkbox } from '@material-ui/core'
import SummaryShopping from '../shopping-cart/summary-shopping/SummaryShopping'


const PurchaseData = ({ history }: any) => {

  return (
    <div className={styles.purchase_content}>

      <form noValidate>
        <div className={styles.head_contact}>
          <h5>Información de Contacto</h5>
          <span>¿Ya tienes una Cuenta? INICIAR SESIÓN</span>
        </div>
        <div className={styles.inputs_content}>
          <TextField className={styles.subscribe_input} label="Correo electrónico o número de telefono móvil" />
          <FormControlLabel
            control={
              <Checkbox
                checked={true}
                onChange={(e) => { }}
                name="checkedB"
                color="primary"
              />
            }
            label="Desea recibir Novedades y Promociones"
          />
        </div>


        <h5>Datos de Envío</h5>
        <div className={styles.inputs_content}>
          <div className={styles.inputs_col2}>
            <TextField className={styles.subscribe_input} label="Nombre" />
            <TextField className={styles.subscribe_input} label="Apellido" />
          </div>
          <TextField className={styles.subscribe_input} label="Teléfono" />
          <TextField className={styles.subscribe_input} label="Dirección" />
          <TextField className={styles.subscribe_input} label="Descripción Dirección" />
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
          <TextField className={styles.subscribe_input} label="País" />
          <TextField className={styles.subscribe_input} label="Ciudad" />
        </div>

      </form>


      <SummaryShopping history={history} />


    </div>
  )
}

export default PurchaseData