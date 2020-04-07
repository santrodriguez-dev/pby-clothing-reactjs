import React from 'react'
import styles from './Products.module.scss'
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import ProductDetail from './product-detail/Product-detail';

const Products = ({ history }: any) => {

  let match = useRouteMatch();

  return (

    <Switch>
      <Route path={`${match.url}/:productId`} component={ProductDetail} />

      <Route path={`${match.url}`}>
        <div className={styles.products_container}>
          <div className={styles.cover_image}>
            <img src={require('../../assets/models/1.JPG')} alt="" />
          </div>

          <div className={styles.products_info}>
            <h4>MEN COATS & JACKETS</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          </div>

          <div className={styles.list_products_container}>

            {[0, 1, 2, 3, 4, 5].map((item, i) =>
              (
                <div key={i} className={styles.item_product}>
                  <div className={styles.image_product}>
                    <img
                      src={require('../../assets/models/3.JPG')} alt=""
                      onClick={() => {
                        history.push({ pathname: `${match.url}/${i}` })
                      }} />
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

        </div>
      </Route>
    </Switch>

  )
}

export default Products
