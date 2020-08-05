import React, { useEffect, useState } from 'react'
import styles from './News_detail.module.scss'
import { ImageBanner } from '../../../components';

import imageBanner from '../../../assets/images_pby/Home/6.jpg'

import { connect } from 'react-redux'

const NewsDetail = (props) => {

  let { articles, menu } = props

  const [menuSelected, setMenuSelected] = useState<any>({})
  const [itemUs, setItemUs] = useState<any>({})

  useEffect(() => {
    if (articles.length === 0) return
    window.scrollTo(0, 0)
    getItemUs()
    selectMenu()
  }, [articles, menu])

  const getItemUs = () => {
    const itemUs = (articles as any[]).find(item => item.Tipo_Contenido === 'Nosotros')
    setItemUs(itemUs)
  }

  const selectMenu = () => {
    const menuSelected = menu.find(item => item.Nombre_Menu.toLowerCase() === 'nosotros')
    if (menuSelected)
      setMenuSelected(menuSelected)
  }

  return (
    <>
      <ImageBanner
        title={menuSelected.Nombre_Menu}
        subtitle={menuSelected.Descripcion_Menu || 'New Capsule 20'}
        // imgSrc={menuSelected.Imagen}
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
  const { articles, menu } = state
  return { articles: articles.articles, menu: menu.menu }
}

export default connect(mapStateToProps)(NewsDetail)
