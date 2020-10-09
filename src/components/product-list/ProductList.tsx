
import React from 'react'
import styles from './ProductList.module.scss'
import { Button } from '@material-ui/core'
import NumberFormat from 'react-number-format';

export function ProductList({ list = [], onClickItem }: any) {

  const getFistImage = (images: string) => {
    if (!images) return null
    const img = images.split(',')[0]
    return img || null
  }

  const getPrecioConDescuento = (price: number, dto: number) => {
    const finalPrice = price - ((price * dto) / 100)
    return finalPrice
  }

  return (
    <div className={styles.list_products_container}>
      {list.map((item: any, i: number) =>
        (
          <div key={i} className={styles.item_product}>
            <div className={styles.image_product}>
              {item.Aplica_Descuento ?
                <div className={styles.sale_content}>
                  <span>SALE</span>
                </div> : null}
              <img
                src={getFistImage(item.Images) || 'https://image.freepik.com/free-photo/portrait-handsome-smiling-young-man-model-wearing-casual-shirt-clothes-fashion-stylish-man-posing_158538-5315.jpg'} alt="" />
              <div className={styles.button_container}>
                <Button color="primary" onClick={() => onClickItem(item.Sexo, item.Id_Producto)} variant="contained">Ver más</Button>
              </div>

            </div>

            <div className={styles.info_product}>
              <b>{item.Nombre_Producto}</b>
              {/* <b>{item.Sexo}</b> */}
              <span>{item.Nombre_Coleccion}</span>
              <span>Color {item.Color}</span>
              <div className={styles.prices}>
                <b className={styles.normal_price} style={{ textDecoration: item.Aplica_Descuento ? 'line-through' : '' }}>
                  <NumberFormat value={item.Precio} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                </b>

                {item.Aplica_Descuento ?
                  <b className={styles.price_sale}>
                    <NumberFormat value={getPrecioConDescuento(item.Precio, item.C__Descuento)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                  </b>
                  : null}
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}