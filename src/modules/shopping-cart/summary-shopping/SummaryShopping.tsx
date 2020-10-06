import React, { useState, useEffect } from 'react'
import styles from './SummaryShopping.module.scss'

import { TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import { PbyService } from '../../../services/pby-services';
import { toast } from 'react-toastify';

// Redux
import { addPromotionalCodeAction } from '../../../store/actions/shoppingCartAction';
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'

const SummaryShopping = ({ history, showConditions = true, totalPrice = 0, promotionalCode }: any) => {

  const dispatch = useDispatch()

  const [aceptaTerminos, setAceptaTerminos] = useState(false)
  const [descuento, setDescuento] = useState(0)

  useEffect(() => {
    if (!promotionalCode) return
    setDescuento(promotionalCode.discountValue)
  }, [promotionalCode])

  const validationCode = (code: string) => {
    PbyService.validationCode(code).then(response => {
      if (!response.Status) {
        toast.warning('El código ingresado es inválido');
        return
      }
      dispatch(addPromotionalCodeAction(response.PromotionalCode, response.PercentValue))
      toast.success(`Codigo aplicado exitosamente`);
    })
  }

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
          <TextField label="Código" onBlur={(e) => {
            const val = e.target.value
            if (!val) return
            validationCode(val)
          }} />
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

      {descuento ?
        <div className={styles.line_summary}>
          <div className={styles.data}>
            <span className={styles.label}>Descuento aplicado (-{promotionalCode.discountValue}%)
              {/* <span className="material-icons tooltipped" data-position="bottom" data-tooltip="Ayuda">help</span> */}
            </span>

          </div>
          <span>$ {(totalPrice * promotionalCode.discountValue) / 100}</span>
        </div>
        : null}

      <div className={styles.total}>
        <span className={styles.label}>Total</span>
        <span className={styles.total_price}>$ {totalPrice - ((totalPrice * descuento) / 100)}</span>
      </div>

      {showConditions &&
        <FormControlLabel
          control={<Checkbox
            value={aceptaTerminos}
            onChange={(e, newVal) => setAceptaTerminos(newVal)}
            name="gilad"
            color="primary" />}
          label={
            <>Acepta&nbsp;
              <a href="">Términos y Condiciones</a> y <a href="">Política de Tratamiento de Datos</a>
            </>}
        />}

      <Button color="primary" style={{ width: '100%', marginTop: '1em' }} disabled={!totalPrice || (showConditions && !aceptaTerminos)} onClick={() => {
        history.push({ pathname: '/datos-pago' })
      }} variant="contained">Comprar</Button>
    </div >
  )
}

function mapStateToProps(state) {
  const { shoppingCart } = state
  return { promotionalCode: shoppingCart.promotionalCode }
}

export default connect(mapStateToProps)(SummaryShopping)