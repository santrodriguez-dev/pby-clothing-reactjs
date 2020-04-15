import React from 'react'
import styles from './Products.module.scss'
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import ProductDetail from './product-detail/Product-detail';
import { ProductList } from '../../components';

const Products = ({ history }: any) => {

  let match = useRouteMatch();

  return (

    <Switch>
      <Route path={`${match.url}/:productId`} component={ProductDetail} />

      <Route path={`${match.url}`}>
        <div className={styles.products_container}>
          <div className={styles.cover_image}>
            {/* <img src={require('../../assets/models/1.JPG')} alt="" /> */}
            <img src={'https://thumbs.dreamstime.com/z/horizontal-shot-pretty-cute-brunette-female-model-shares-multimedia-files-via-cell-phone-dressed-elegant-clothes-reads-pos-125090367.jpg'} alt="" />
          </div>

          <div className={styles.products_info}>
            <h4>MEN COATS & JACKETS</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          </div>

          <ProductList list={[0, 1, 2, 3, 4, 5]} onClickItem={(id: number) => {
            history.push({ pathname: `${match.url}/${id}` })
          }} />


        </div>
      </Route>
    </Switch>

  )
}



export default Products
