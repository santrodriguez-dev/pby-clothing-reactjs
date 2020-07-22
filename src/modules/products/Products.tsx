import React, { useEffect, useState } from 'react'
import styles from './Products.module.scss'
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import ProductDetail from './product-detail/Product-detail';
import { ProductList, ImageBanner } from '../../components';
import encabezado from '../../assets/images_pby/Home/1.jpg'

import { useSelector } from 'react-redux'

const Products = ({ history }: any) => {

  let match = useRouteMatch();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const products = useSelector(state => state.products.products)

  return (
    <Switch>
      <Route path={`${match.url}/:productId`} component={ProductDetail} />

      <Route path={`${match.url}`}>
        <ImageBanner
          title={'Colecciones'}
          subtitle={'New Capsule 20'}
          imgSrc={encabezado}
        />
        <div className={styles.products_container}>


          {/* <div className={styles.cover_image}>
          <img src={''} alt="" />
        </div> */}

          <div className={styles.products_info}>
            <h4>MEN COATS & JACKETS</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          </div>

          <ProductList list={products} onClickItem={(id: number) => {
            history.push({ pathname: `/producto/${id}` })
          }} />


        </div>
      </Route>
    </Switch >

  )
}



export default Products
