import React, { useEffect, useState } from 'react'
import styles from './News.module.scss'
import { ImageBanner } from '../../components'
import encabezado from '../../assets/images_pby/Home/1.jpg'

// import image1 from '../../assets/images_pby/Noticias/1.jpg'
// import image2 from '../../assets/images_pby/Noticias/2.jpg'
// import image3 from '../../assets/images_pby/Noticias/3.jpg'
// import image4 from '../../assets/images_pby/Noticias/4.jpg'
// import { PbyService } from '../../services/pby-services';

import { useSelector } from 'react-redux'

const News = ({ history }: any) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const acticles = useSelector(state => state.articles.articles)

  return (
    <>
      <ImageBanner
        title={'Noticias'}
        subtitle={'New Capsule 20'}
        imgSrc={encabezado}
      />
      <div className={styles.container_list_news}>
        {acticles.map((item, i) => (
          <div key={i} className={styles.item_news}>
            <div className={styles.image_item}>

              <img
                src={item.Imagen}
                alt={item.Imagen}
                onClick={() => {
                  history.push({ pathname: '/noticias/' + item.id })
                }} />
            </div>
            <div className={styles.content_item} onClick={() => {
              history.push({ pathname: '/noticias/' + item.id })
            }}>
              <h4>{item.Contenido.toUpperCase()}</h4>
              <h5>{item.subtitle}</h5>
              <br />
              <p>{item.text}</p>
            </div>
          </div>
        ))
        }
      </div>
    </>

  )
}

export default News
