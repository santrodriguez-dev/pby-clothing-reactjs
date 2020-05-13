import React, { useState, useEffect } from 'react'
import styles from './ProductDetail.module.scss'
import { useParams, useRouteMatch } from 'react-router-dom';
import { ProductList, ImageCustomModal } from '../../../components';
import ReactImageZoom from 'react-image-zoom';
// import { Button, Card, Row, Col, Modal } from 'react-materialize';

import image1 from '../../../assets/images_pby/Noticias/1.jpg'
import image2 from '../../../assets/images_pby/Noticias/2.jpg'
import image3 from '../../../assets/images_pby/Noticias/3.jpg'

import imagePE1 from '../../../assets/images_pby/ProductoEspecifico/1.jpeg'
import imagePE2 from '../../../assets/images_pby/ProductoEspecifico/2.jpeg'
import imagePE3 from '../../../assets/images_pby/ProductoEspecifico/3.jpg'
import { Breadcrumbs, Link, Typography, Button, ButtonGroup } from '@material-ui/core';

const ProductDetail = ({ history }: any) => {

  const { newId } = useParams();
  let match = useRouteMatch();
  const [showModal, setShowModal] = useState<boolean>(false)

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
    // var elems = document.querySelectorAll('.tooltipped');
    // var instances = M.Tooltip.init(elems, {});
  }, [])

  return (
    <div className={styles.product_detail_container}>

      <ImageCustomModal show={showModal} onClosed={() => setShowModal(false)} showImage={false}>
        <img src="https://www.liveabout.com/thmb/OmbUp9oxj9aNTvX-fzO6nxUO6z0=/743x393/filters:no_upscale():max_bytes(150000):strip_icc()/womens-clothes-56a3df805f9b58b7d0d43a3d.JPG" alt="" className={styles.imageModal} />
      </ImageCustomModal>

      <Breadcrumbs aria-label="breadcrumb" style={{ margin: '1.8em 0 1.8em 0' }}>
        <Link color="inherit" href="/#" >Colección</Link>
        <Link color="inherit" href="/#/" >Hombre</Link>
        <Typography color="textPrimary">Camisa</Typography>
      </Breadcrumbs>

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
                <ButtonGroup size="small" aria-label="small outlined button group">
                  <Button>S</Button>
                  <Button>M</Button>
                  <Button>L</Button>
                  <Button>XL</Button>
                </ButtonGroup>
              </div>
              <span className="material-icons tooltipped" data-position="bottom" data-tooltip="Guía de tallas"
                onClick={() => setShowModal(true)}
              >info</span>
            </div>
          </div>

          <div className={styles.colors}>
            <span>Colour: </span>
            <div className={styles.colors_list}>
              <ButtonGroup size="small" aria-label="small outlined button group">
                <Button>Red</Button>
                <Button>Green</Button>
                <Button>Gray</Button>
              </ButtonGroup>
            </div>
          </div>
          <br />
          <div className={styles.buttons}>
            <Button variant="contained" color="primary">Agregar al carrito</Button>
            <Button variant="contained" color="primary">Buscar en tienda</Button>
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
        <h3>Productos relacionados</h3>
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
