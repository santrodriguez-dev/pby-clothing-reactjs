import React from 'react'
import styles from './ProductDetail.module.scss'
import { useParams, useRouteMatch } from 'react-router-dom';
import { ProductList } from '../../../components';

const ProductDetail = ({ history }: any) => {

  const { newId } = useParams();
  let match = useRouteMatch();

  return (
    <div className={styles.product_detail_container}>

      <div className={styles.product_detail}>

        <div className={styles.product_info}>
          <h5>Vintage Check FLEECE JACKET</h5>
          <span>€ 350</span>
          <br />

          <p>A practical jacket in Vintage check fleece with a breathable mesh lining</p>

          <div className={styles.main_data}>
            <span>Outer: 100% polyester</span><span></span>
            <span>Trim: 100% polyester</span><span></span>
            <span>Lining: 100% polyester</span><span></span>
            <span>Zip closure</span><span></span>
            <span>Chest zip pocket</span><span></span>
            <span>Side zip pockets</span><span></span>
            <span>Dry clean</span><span></span>
            <span>Imported:</span><span></span>
            <span>Item: 8011565</span><span></span>
          </div>

          <div className={styles.sizes}>
            <span>Size: </span>
            <div className={styles.sizes_list}>
              <span>S</span>
              <b>M</b>
              <span>L</span>
              <span>XL</span>
              <span>XXL</span>
            </div>
          </div>

          <div className={styles.colors}>
            <span>Colour: </span>
            <div className={styles.colors_list}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <br />
          <div className={styles.buttons}>
            <button className="btn waves-effect waves-light" type="button" name="action">Agregar al carrito</button>
            <button className="btn waves-effect waves-light" type="button" name="action">Buscar en tienda</button>
          </div>

        </div>

        <div className={styles.product_view1}>
          <img src={require('../../../assets/models/1.JPG')} alt="" />
        </div>
        <div className={styles.product_view2}>
          <img src={require('../../../assets/models/1.JPG')} alt="" />
        </div>
        <div className={styles.product_view3}>
          <img src={require('../../../assets/models/1.JPG')} alt="" />
        </div>
      </div>

      <div className={styles.related_products}>
        <ProductList list={[0, 1, 2, 3, 4, 5]} onClickItem={(id: number) => {
          history.push({ pathname: `/productos/${id}` })
        }} />
      </div>

    </div>
  )
}

export default ProductDetail
