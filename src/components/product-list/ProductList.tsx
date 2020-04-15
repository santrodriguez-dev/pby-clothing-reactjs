
import React from 'react'
import styles from './ProductList.module.scss'

export function ProductList({ list = [], onClickItem }: any) {

  return (
    <div className={styles.list_products_container}>
      {list.map((item: any, i: number) =>
        (
          <div key={i} className={styles.item_product}>
            <div className={styles.image_product}>
              <img
                // src={require('../../assets/models/3.JPG')} alt=""
                src={'https://image.freepik.com/free-photo/portrait-handsome-smiling-young-man-model-wearing-casual-shirt-clothes-fashion-stylish-man-posing_158538-5315.jpg'} alt=""
                onClick={() => onClickItem(i)} />
            </div>

            <div className={styles.info_product}>
              <span>CLASSIC FIT</span>
              <b>THE LONG XENSINGTON HERITAGE TRENCH COAT</b>
              <span>2 colours</span>
              <b> € 1490</b>
            </div>
          </div>
        ))}
    </div>
  )
}