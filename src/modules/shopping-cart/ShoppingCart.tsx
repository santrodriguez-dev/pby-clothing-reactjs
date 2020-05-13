import React from 'react'
import styles from './ShoppingCart.module.scss'

import { ItemShoppingCart } from './Item-shopping-cart/ItemShoppingCart';
import { TextField } from '@material-ui/core';


const ShoppingCart = (props: any) => {

  return (

    <div className={styles.container_shopping_cart}>

      <div className={styles.main_shopping_cart}>
        <div>
          <h4 className={styles.title_section}>Bolsa de compra</h4>
          <ItemShoppingCart />
          <ItemShoppingCart />
          <ItemShoppingCart />
        </div>

        <div className={styles.summary_content}>
          <h4 className={styles.title_section}>Resumen</h4>

          <div className={styles.line_summary}>
            <div className={styles.data}>
              <span className={styles.label}>¿Tienes un código promocional?</span>
              <span className="material-icons tooltipped" data-position="bottom" data-tooltip="Ayuda">help</span>
            </div>
            <div>
              <TextField label="Código" />
            </div>
            {/* <span>$ 240.000</span> */}
          </div>

          <div className={styles.line_summary}>
            <div className={styles.data}>
              <span className={styles.label}>Subtotal</span>
              <span className="material-icons tooltipped" data-position="bottom" data-tooltip="Ayuda">help</span>
            </div>
            <span>$ 240.000</span>
          </div>

          <div className={styles.line_summary}>
            <div className={styles.data}>
              <span className={styles.label}>Gastos de envío y gestión estimados</span>
              <span className="material-icons tooltipped" data-position="bottom" data-tooltip="Ayuda">help</span>
            </div>
            <span>$ 0</span>
          </div>

          <div className={styles.line_summary}>
            <div className={styles.data}>
              <span className={styles.label}>Impuestos estimados</span>
              <span className="material-icons tooltipped" data-position="bottom" data-tooltip="Ayuda">help</span>
            </div>
            <span>$ 0</span>
          </div>

          <div className={styles.total}>
            <span className={styles.label}>Total</span>
            <span className={styles.total_price}>$ 240.000</span>
          </div>

        </div>
      </div>

    </div>
  )
}



export default ShoppingCart