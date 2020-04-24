import React from 'react'
import styles from './ShoppingCart.module.scss'

import { Button } from 'react-materialize';

import imagePE1 from '../../assets/images_pby/ProductoEspecifico/1.jpeg'


const ShoppingCart = () => {
  return (
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

        <Button
          node="button"
          waves="light"
          className={styles.pay_button}
        >Pagar</Button>

      </div>

    </div>
  )
}

export default ShoppingCart


export const ItemShoppingCart = () => {
  return (
    <div className={styles.container_item_shopping}>
      <div className={styles.image}>
        <img src={imagePE1} alt="" />
      </div>

      <div className={styles.body}>
        <div className={styles.data_body}>
          <strong>Nike React Infinity Run Flyknit</strong>
          <span>Calzado de running para hombre</span>
          <span>Talla 9</span>
        </div>
        <span>$ 350.000</span>
      </div>

    </div>
  )
}
