import React from 'react'
import styles from './ShoppingCart.module.scss'

import { ItemShoppingCart } from './Item-shopping-cart/ItemShoppingCart';
import SummaryShopping from './summary-shopping/SummaryShopping';


const ShoppingCart = ({ history }: any) => {

  return (

    <div className={styles.container_shopping_cart}>

      <div className={styles.main_shopping_cart}>
        <div>
          <h4 className={styles.title_section}>Bolsa de compra</h4>
          <ItemShoppingCart />
          <ItemShoppingCart />
          <ItemShoppingCart />
        </div>
        <SummaryShopping history={history} showConditions={false} />
      </div>

    </div>
  )
}



export default ShoppingCart