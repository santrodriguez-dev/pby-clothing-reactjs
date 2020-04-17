import React, { useState, useEffect } from 'react'
import styles from './ProductDetail.module.scss'
import { useParams, useRouteMatch } from 'react-router-dom';
import { ProductList } from '../../../components';
import ReactImageZoom from 'react-image-zoom';

const ProductDetail = ({ history }: any) => {

  const { newId } = useParams();
  let match = useRouteMatch();

  const [productImages, setProductImages] = useState(
    [
      'https://sc01.alicdn.com/kf/HTB1BxksKpXXXXbdapXXq6xXFXXXl/205604048/HTB1BxksKpXXXXbdapXXq6xXFXXXl.jpg',
      'https://image.freepik.com/free-photo/portrait-handsome-smiling-young-man-model-wearing-casual-summer-pink-clothes-fashion-stylish-man-posing_158538-5353.jpg',
      'https://image.freepik.com/free-photo/portrait-handsome-smiling-young-man-model-wearing-casual-shirt-clothes-fashion-stylish-man-posing_158538-5315.jpg',
    ]
  )

  useEffect(() => {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, {});
  }, [])

  return (
    <div className={styles.product_detail_container}>

      <nav>
        <div className="nav-wrapper">
          <a className="breadcrumb">Colección</a>
          <a className="breadcrumb">Hombre</a>
          <a className="breadcrumb">Camisa</a>
        </div>
      </nav>

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
            <div className={styles.sizes_container}>
              <div className={styles.sizes_list}>
                <span>S</span>
                <b>M</b>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
              </div>
              <span className="material-icons tooltipped" data-position="bottom" data-tooltip="Guía de tallas">info</span>
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
          <ReactImageZoom
            img={productImages[0]}
            // scale={2}
            width={'500'}
            zoomWidth={'600'}
            zoomStyle={'opacity: 1;background-color: white;border:1px solid gray;'}
            zoomPosition={'original'}
          // offset={{ vertical: 0, horizontal: 0 }}
          />
          {/* <img src={productImages[0]} alt="" /> */}
        </div>
        <div className={styles.product_view2} onClick={() => {
          const imgTemp = productImages[0]

          productImages[0] = productImages[1]
          productImages[1] = imgTemp

          // productImages.splice(1, 1)
          // productImages.unshift(imgTemp)

          setProductImages([...productImages])
        }}>
          {/* <img src={require('../../../assets/models/1.JPG')} alt="" /> */}
          <img src={productImages[1]} alt="" />
        </div>
        <div className={styles.product_view3} onClick={() => {
          const imgTemp = productImages[0]

          productImages[0] = productImages[2]
          productImages[2] = imgTemp

          setProductImages([...productImages])
        }}>
          {/* <img src={require('../../../assets/models/1.JPG')} alt="" /> */}
          <img src={productImages[2]} alt="" />
        </div>
      </div>

      <div className={styles.related_products}>
        <ProductList list={[0, 1, 2]} onClickItem={(id: number) => {
          history.push({ pathname: `/productos/${id}` })
          window.scrollTo(0, 0)
        }} />
      </div>

    </div>
  )
}

export default ProductDetail
