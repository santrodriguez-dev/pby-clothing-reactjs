import React from 'react'
import styles from './SummaryShopping.module.scss'

import { TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';

const SummaryShopping = ({ history, showConditions = true, totalPrice = 0 }: any) => {

  return (
    <div className={styles.summary_content}>
      <h5>Resumen</h5>
      <div className={styles.line_summary}>
        <div className={styles.data}>
          <span className={styles.label}>¿Tienes un código promocional?
                {/* <span className="material-icons tooltipped" data-position="bottom" data-tooltip="Ayuda">help</span> */}
          </span>
        </div>
        <div>
          <TextField label="Código" />
        </div>
        {/* <span>$ 240.000</span> */}
      </div>

      <div className={styles.line_summary}>
        <div className={styles.data}>
          <span className={styles.label}>Subtotal
              {/* <span className="material-icons tooltipped" data-position="bottom" data-tooltip="Ayuda">help</span> */}
          </span>

        </div>
        <span>$ {totalPrice}</span>
      </div>

      <div className={styles.line_summary}>
        <div className={styles.data}>
          <span className={styles.label}>Gastos de envío y gestión estimados
              {/* <span className="material-icons tooltipped" data-position="bottom" data-tooltip="Ayuda">help</span> */}
          </span>

        </div>
        <span>$ 0</span>
      </div>

      <div className={styles.line_summary}>
        <div className={styles.data}>
          <span className={styles.label}>Impuestos estimados
              {/* <span className="material-icons tooltipped" data-position="bottom" data-tooltip="Ayuda">help</span> */}
          </span>

        </div>
        <span>$ 0</span>
      </div>

      <div className={styles.total}>
        <span className={styles.label}>Total</span>
        <span className={styles.total_price}>$ {totalPrice}</span>
      </div>

      {showConditions &&
        <FormControlLabel
          control={<Checkbox checked={false} onChange={() => { }} name="gilad" />}
          label={
            <>Acepta
              <a href=""> Términos y Condiciones</a> y <a href="">Política de Tratamiento de Datos</a>
            </>}
        />}



      <Button color="primary" style={{ width: '100%', marginTop: '1em' }} disabled={!totalPrice} onClick={() => {
        history.push({ pathname: '/datos-pago' })
      }} variant="contained">Comprar</Button>
    </div>
  )
}

export default SummaryShopping
