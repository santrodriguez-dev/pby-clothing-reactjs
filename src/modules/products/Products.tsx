import React, { useEffect, useState } from 'react'
import styles from './Products.module.scss'
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import ProductDetail from './product-detail/Product-detail';
import { ProductList, ImageBanner } from '../../components';
import encabezado from '../../assets/images_pby/Home/1.jpg'

import { connect } from 'react-redux'

const Products = (props) => {

  const { history, products, menu } = props

  // const products: any[] = useSelector(state => state.products.products)
  let match = useRouteMatch();

  const [productsList, setProductsList] = useState<any[]>([])
  const [menuSelected, setMenuSelected] = useState<any>({})

  useEffect(() => {
    window.scrollTo(0, 0)
    if ((products.products as any[]).length === 0) return
    const currentProduct = (history.location.pathname as string).split('/')[2]
    applyFilterProducts(currentProduct)
  }, [products])

  // Cambio de filtro Nombre Coleccion
  useEffect(() => {
    if (!products.filter) return
    const newProducts = products.products.filter(item => (item.Nombre_Coleccion as string) === products.filter)
    setProductsList(newProducts)
  }, [products.filter])

  //Filtro principal Productos
  const applyFilterProducts = (param: string) => {
    let filter = ''
    switch (param) {
      case 'hombre':
        filter = 'hombre'
        break;
      case 'mujer':
        filter = 'mujer'
        break;
      case 'nino':
        filter = 'niño'
        break;
      case 'colecciones':
        filter = 'colecciones'
        break;
      default:
        break;
    }
    const newProducts = products.products.filter(item => (item.Sexo as string).toLowerCase() === filter)
    setProductsList(newProducts)
    const menuSelected = menu.menu.find(item => item.Nombre_Menu.toLowerCase() === filter)
    if (menuSelected)
      setMenuSelected(menuSelected)
  }

  return (
    <Switch>
      <Route path={`${match.url}/:productId`} component={ProductDetail} />

      <Route path={`${match.url}`}>
        <ImageBanner
          title={menuSelected.Nombre_Menu}
          subtitle={menuSelected.Descripcion_Menu || 'New Capsule 20'}
          // imgSrc={menuSelected.Imagen}
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

          <ProductList list={productsList} onClickItem={(id: number) => {
            history.push({ pathname: `/producto/${id}` })
          }} />

        </div>
      </Route>
    </Switch >

  )
}

function mapStateToProps(state) {
  const { products, menu } = state
  return { products, menu }
}

export default connect(mapStateToProps)(Products)
