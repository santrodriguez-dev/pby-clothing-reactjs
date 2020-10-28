import React, { useState, useEffect } from 'react'
import styles from './ProductDetail.module.scss'
import { ProductList, ImageCustomModal } from '../../../components';
import ReactImageZoom from 'react-image-zoom';

import image2 from '../../../assets/images_pby/Noticias/2.jpg'

import imagePE1 from '../../../assets/images_pby/ProductoEspecifico/1.jpeg'
import imagePE2 from '../../../assets/images_pby/ProductoEspecifico/2.jpeg'
import { Breadcrumbs, Button, ButtonGroup } from '@material-ui/core';
import { PbyService } from '../../../services/pby-services';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addProductAction } from '../../../store/actions';

import { toast } from 'react-toastify';
import NumberFormat from 'react-number-format';

const ProductDetail = ({ history, products, shoppingCart }: any) => {

  const dispatch = useDispatch()

  // const { newId } = useParams();
  // let match = useRouteMatch();
  const [showModal, setShowModal] = useState<boolean>(false)

  const [dataProduct, setDataProduct] = useState<any>({ images: [] })
  const [sizesList, setSizesList] = useState<any[]>([])
  const [relatedProductList, setRelatedProductList] = useState([])
  const [sizeSelected, setSizeSelected] = useState(null)
  const [productImages, setProductImages] = useState(
    [imagePE2, imagePE2, imagePE1]
  )

  useEffect(() => {
    window.scrollTo(0, 0)
    const idCurrentProduct = (history.location.pathname as string).split('/')[2]
    getProductDetail(idCurrentProduct)
  }, [history.location.pathname])

  useEffect(() => {
    if ((products.products as any[]).length === 0 || !dataProduct.Id_Producto) return
    const relatedProducts = products.products.filter(item => (item.Sexo === dataProduct.Sexo && item.Id_Producto !== dataProduct.Id_Producto)).slice(0, 5)
    setRelatedProductList(relatedProducts)

  }, [products, dataProduct])

  const getProductDetail = (id: string) => {
    PbyService.getProductDetail(id).then((response: any[]) => {
      if (!response || response.length === 0) return
      const sizes = response.map(({ Cantidad, Talla }) => {
        return { Cantidad, Talla }
      }).sort((a, b) => b.Talla.localeCompare(a.Talla))
      setSizesList(sizes)
      const dataProduct = {
        ...response[0],
        images: response[0].Images ? (response[0].Images as string).split(',').map(item => item.trim()) : []
      }
      setDataProduct(dataProduct)
    })
  }

  const getPrecioConDescuento = (price: number, dto: number) => {
    const finalPrice = price - ((price * dto) / 100)
    return finalPrice
  }

  const addProductToCart = (sizeSelected) => {
    const inxFind = shoppingCart.products.findIndex(item => item.Id_Producto === dataProduct.Id_Producto && item.Talla === sizeSelected.Talla)
    if (inxFind >= 0) {
      toast.warning('Este producto ya se encuentra en el carrito de compras!')
      return
    }

    const product = { ...dataProduct, ...sizeSelected, CantidadCompra: 1 }
    dispatch(addProductAction(product))
    toast.dark(`El producto ${dataProduct.Nombre_Producto} se ha agredado al carrito de compras`)
  }

  return (
    <div className={styles.product_detail_container}>

      <ImageCustomModal show={showModal} onClosed={() => setShowModal(false)} showImage={false}>
        <img src="https://www.liveabout.com/thmb/OmbUp9oxj9aNTvX-fzO6nxUO6z0=/743x393/filters:no_upscale():max_bytes(150000):strip_icc()/womens-clothes-56a3df805f9b58b7d0d43a3d.JPG" alt="" className={styles.imageModal} />
      </ImageCustomModal>

      <Breadcrumbs aria-label="breadcrumb" style={{ margin: '1.8em 0 1.8em 0' }}>
        {/* <Link color="inherit" href="/#" >{dataProduct.Nombre_Coleccion}</Link> */}
        <NavLink to={`/${dataProduct.Sexo?.toLowerCase()}`}>{dataProduct.Sexo}</NavLink>
        <span>{dataProduct.Tipo_Producto}</span>
      </Breadcrumbs>

      <div className={styles.product_detail}>

        <div className={styles.product_info}>
          <h5>{dataProduct.Nombre_Producto}</h5>
          <div className={styles.price}>
            <strong style={{ textDecoration: dataProduct.Aplica_Descuento ? 'line-through' : '' }}>
              <NumberFormat value={dataProduct.Precio} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </strong>

            {dataProduct.Aplica_Descuento ?
              <strong className={styles.price_sale}>
                <NumberFormat value={getPrecioConDescuento(dataProduct.Precio, dataProduct.C__Descuento)} displayType={'text'} thousandSeparator={true} prefix={'$'} />

              </strong>
              : null}
          </div>
          <br />

          <p>{dataProduct.Descripcion_Producto}</p>

          <div className={styles.main_data}>
            <span>Código Producto: {dataProduct.Codigo_Producto}</span>
            <span>Color: {dataProduct.Color}</span>
            <span>Material: {dataProduct.Material}</span>
            <span>Sexo: {dataProduct.Sexo}</span>
            <span>Garantia: {dataProduct.Garantia}</span>
            <span>Colección: {dataProduct.Descripcion_Coleccion}</span>
            <span>Descripción: {dataProduct.Descripcion_Producto}</span>
            {/* <span>Outer: 100% polyester</span>
            <span>Trim: 100% polyester</span>
            <span>Lining: 100% polyester</span>
            <span>Zip closure</span>
            <span>Chest zip pocket</span>
            <span>Side zip pockets</span>
            <span>Dry clean</span>
            <span>Imported:</span>
            <span>Item: 8011565</span> */}
          </div>

          <div className={styles.sizes}>
            <span>Tallas: </span>
            <div className={styles.sizes_container}>
              <div className={styles.sizes_list}>
                <ButtonGroup size="small" aria-label="small outlined button group">
                  {sizesList.map((item, i) => {
                    const { Cantidad, Talla, active } = item
                    return (<Button key={i} disabled={Cantidad === 0} className={active ? styles.button_active : ''} disableTouchRipple={true} title={`${Cantidad} disponible(s)`} onClick={() => {
                      if (sizesList[i].active) return
                      const newSizes = sizesList.map((item, index) => {
                        return { ...item, active: index === i }
                      })
                      setSizesList(newSizes)
                      setSizeSelected(item)
                    }}>{Talla}</Button>
                    )
                  })}
                </ButtonGroup>
              </div>
              <span className="material-icons tooltipped" data-position="bottom" data-tooltip="Guía de tallas"
                onClick={() => setShowModal(true)}>info</span>
            </div>
          </div>
          <br />
          <div className={styles.buttons}>
            <Button variant="contained" color="primary" disabled={!sizeSelected} onClick={() => addProductToCart(sizeSelected)}>Agregar al carrito</Button>
            {/* <Button variant="contained" color="primary">Buscar en tienda</Button> */}
          </div>

        </div>

        <div className={styles.product_view1}>
          <ReactImageZoom
            // img={dataProduct.images[0] || ''}
            img={image2}
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
      <ProductList list={relatedProductList} onClickItem={(sexo: string, id: number) => {
        history.push({ pathname: `/${sexo.toLowerCase()}/${id}` })
        window.scrollTo(0, 0)
      }} />
      {/* </div> */}

    </div>
  )
}

function mapStateToProps(state) {
  const { products, shoppingCart } = state
  return { products, shoppingCart }
}

export default connect(mapStateToProps)(ProductDetail)