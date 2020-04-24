import React, { useState, useEffect } from 'react'
import styles from './ProductDetail.module.scss'
import { useParams, useRouteMatch } from 'react-router-dom';
import { ProductList } from '../../../components';
import ReactImageZoom from 'react-image-zoom';
import { Button, Card, Row, Col, Modal } from 'react-materialize';

import image1 from '../../../assets/images_pby/Noticias/1.jpg'
import image2 from '../../../assets/images_pby/Noticias/2.jpg'
import image3 from '../../../assets/images_pby/Noticias/3.jpg'

import imagePE1 from '../../../assets/images_pby/ProductoEspecifico/1.jpeg'
import imagePE2 from '../../../assets/images_pby/ProductoEspecifico/2.jpeg'
import imagePE3 from '../../../assets/images_pby/ProductoEspecifico/3.jpg'

const ProductDetail = ({ history }: any) => {

  const { newId } = useParams();
  let match = useRouteMatch();

  const productsInitial = [
    { name: '', description: '', colors: [], sizes: [], price: '', discount: '', imgSrc: image3 },
    { name: '', description: '', colors: [], sizes: [], price: '', discount: '', imgSrc: image2 },
    { name: '', description: '', colors: [], sizes: [], price: '', discount: '', imgSrc: image1 },
  ]

  const [productList, setproductList] = useState(productsInitial)

  const [productImages, setProductImages] = useState(
    [
      imagePE3,
      imagePE2,
      imagePE1,
    ]
  )

  useEffect(() => {
    window.scrollTo(0, 0)
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
          <strong className={styles.price}>€ 350</strong>
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
                <Button
                  flat
                  node="button"
                  waves="light"
                  disabled={true}
                  className={styles.button_item}
                >S</Button>
                <Button
                  flat
                  node="button"
                  waves="light"
                  disabled={false}
                  className={styles.button_item}
                >M</Button>

                <Button
                  node="button"
                  waves="light"
                  disabled={false}
                  className={styles.button_item}
                >L</Button>
                <Button
                  flat
                  node="button"
                  waves="light"
                  disabled={true}
                  className={styles.button_item}
                >XL</Button>
                <Button
                  flat
                  node="button"
                  waves="light"
                  disabled={false}
                  className={styles.button_item}
                >XXL</Button>
              </div>
              <span className="material-icons tooltipped" data-position="bottom" data-tooltip="Guía de tallas">info</span>
            </div>
          </div>

          <div className={styles.colors}>
            <span>Colour: </span>
            <div className={styles.colors_list}>
              <Button
                flat
                node="button"
                waves="light"
                disabled={true}
                className={styles.button_item}
              ><div></div>
              </Button>
              <Button
                flat
                node="button"
                waves="light"
                disabled={false}
                className={styles.button_item}
              ><div></div>
              </Button>
              <Button
                node="button"
                waves="light"
                disabled={false}
                className={styles.button_item}
              ><div></div>
              </Button>
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
            zoomWidth={'500'}
            zoomStyle={'opacity: 1;background-color: white;border:0px solid gray;'}
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

      <div className={styles.title_related_products}>
        <h2>Productos relacionados</h2>
        {/* <h4>subtitle</h4> */}
      </div>

      {/* <div className={styles.related_products}> */}
      <ProductList list={productList} onClickItem={(id: number) => {
        history.push({ pathname: `/productos/${id}` })
        window.scrollTo(0, 0)
      }} />
      {/* </div> */}

    </div>
  )
}

export default ProductDetail
