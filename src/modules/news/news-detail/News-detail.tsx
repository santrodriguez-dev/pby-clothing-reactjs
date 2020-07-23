import React, { useEffect, useState } from 'react'
import styles from './News_detail.module.scss'
import { ImageBanner } from '../../../components';

import imageBanner from '../../../assets/images_pby/Home/6.jpg'

import { connect } from 'react-redux'

const NewsDetail = (props) => {

  let { articles } = props

  const [itemUs, setItemUs] = useState<any>({})

  useEffect(() => {
    if (articles.length === 0) return
    window.scrollTo(0, 0)
    getItemUs()
  }, [articles])

  const getItemUs = () => {
    const itemUs = (articles as any[]).find(item => item.Tipo_Contenido === 'Nosotros')
    console.log(itemUs);
    setItemUs(itemUs)
  }

  return (
    <>
      <ImageBanner
        title={'Radar Concept'}
        subtitle={'New Capsule 20'}
        imgSrc={imageBanner}
      />

      <div className={styles.content}>
        <h4>{itemUs.Nombre_Articulo}</h4>
        <p>{itemUs.Contenido}</p>
      </div>
    </>
  )
}

function mapStateToProps(state) {
  const { articles } = state
  return articles
}

export default connect(mapStateToProps)(NewsDetail)
