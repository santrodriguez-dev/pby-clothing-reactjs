
import React from 'react'
import styles from './ProductList.module.scss'
import { Button } from '@material-ui/core'

export function ProductList({ list = [], onClickItem }: any) {

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
                src={item.imgSrc || 'https://image.freepik.com/free-photo/portrait-handsome-smiling-young-man-model-wearing-casual-shirt-clothes-fashion-stylish-man-posing_158538-5315.jpg'} alt="" />
              <div className={styles.button_container}>
                <Button color="primary" onClick={() => onClickItem(i)} variant="contained">Ver más</Button>
              </div>

            </div>

            <div className={styles.info_product}>
              <b>CLASSIC FIT</b>
              <span>THE LONG XENSINGTON HERITAGE TRENCH COAT</span>
              <span>2 colours</span>
              <div className={styles.prices}>
                <b className={styles.normal_price}> € 1490</b>
                <b className={styles.price_sale}> € 1390</b>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}