import React, { useEffect, useState } from 'react'
import styles from './Products.module.scss'
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import ProductDetail from './product-detail/Product-detail';
import { ProductList, ImageBanner } from '../../components';

import image1 from '../../assets/images_pby/ProductoGeneral/1.jpeg'
import image2 from '../../assets/images_pby/ProductoGeneral/2.jpeg'
import image3 from '../../assets/images_pby/ProductoGeneral/3.jpeg'

import imageNoti1 from '../../assets/images_pby/Noticias/1.jpg'
import imageNoti2 from '../../assets/images_pby/Noticias/2.jpg'
import imageNoti3 from '../../assets/images_pby/Noticias/3.jpg'

import image4 from '../../assets/images_pby/Noticias/4.jpg'
import image5 from '../../assets/images_pby/Noticias/PopUp.jpg'
import encabezado from '../../assets/images_pby/Home/1.jpg'

const Products = ({ history }: any) => {

  let match = useRouteMatch();

  const productsInitial = [
    { name: '', description: '', colors: [], sizes: [], price: '', discount: '', imgSrc: image1 },
    { name: '', description: '', colors: [], sizes: [], price: '', discount: '', imgSrc: image2 },
    { name: '', description: '', colors: [], sizes: [], price: '', discount: '', imgSrc: image3 },
    { name: '', description: '', colors: [], sizes: [], price: '', discount: '', imgSrc: image4 },
    { name: '', description: '', colors: [], sizes: [], price: '', discount: '', imgSrc: image5 },
    { name: '', description: '', colors: [], sizes: [], price: '', discount: '', imgSrc: imageNoti2 },
  ]

  const [productList, setproductList] = useState(productsInitial)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Switch>
      <Route path={`${match.url}/:productId`} component={ProductDetail} />

      <Route path={`${match.url}`}>
        <ImageBanner
          title={'Colecciones'}
          // subtitle={'New Capsule 20'}
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

          <ProductList list={productList} onClickItem={(id: number) => {
            history.push({ pathname: `${match.url}/${id}` })
          }} />


        </div>
      </Route>
    </Switch >

  )
}



export default Products
