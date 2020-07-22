
import React from 'react'
import styles from './ProductList.module.scss'
import { Button } from '@material-ui/core'

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
              {i % 2 === 0 ?
                <div className={styles.sale_content}>
                  <span>SALE</span>
                </div> : null
              }
              <img
                src={getFistImage(item.Images) || 'https://image.freepik.com/free-photo/portrait-handsome-smiling-young-man-model-wearing-casual-shirt-clothes-fashion-stylish-man-posing_158538-5315.jpg'} alt="" />
              <div className={styles.button_container}>
                <Button color="primary" onClick={() => onClickItem(i)} variant="contained">Ver más</Button>
              </div>

            </div>

            <div className={styles.info_product}>
              <b>{item.Nombre_Coleccion}</b>
              <span>{item.Nombre_Producto}</span>
              <span>2 colours</span>
              <div className={styles.prices}>
                {item.C__Descuento > 0 ?
                  <b className={styles.normal_price}> € {item.Precio}</b>
                  : null
                }

                <b className={styles.price_sale}> € {getPrecioConDescuento(item.Precio, item.C__Descuento)}</b>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}