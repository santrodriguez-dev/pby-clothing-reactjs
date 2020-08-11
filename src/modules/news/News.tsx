import React, { useEffect, useState } from 'react'
import styles from './News.module.scss'
import { ImageBanner } from '../../components'
import encabezado from '../../assets/images_pby/Home/1.jpg'

import { connect } from 'react-redux'
import { NEWS, NEW } from '../../consts/clothe-names'

const News = (props) => {

  let { articles, history, menu } = props

  const [menuSelected, setMenuSelected] = useState<any>({})
  const [itemsNews, setItemsNews] = useState<any[]>([])

  useEffect(() => {
    if (articles.length === 0) return
    window.scrollTo(0, 0)
    getItemsNews()
    selectMenu()
  }, [articles, menu])

  const getItemsNews = () => {
    const itemNews = (articles as any[]).filter(item => item.Tipo_Contenido === NEW)
    setItemsNews(itemNews)
  }

  const selectMenu = () => {
    const menuSelected = menu.find(item => item.Nombre_Menu === NEWS)
    if (menuSelected)
      setMenuSelected(menuSelected)
  }

  return (
    <>
      <ImageBanner
        title={menuSelected.Nombre_Menu}
        subtitle={menuSelected.Descripcion_Menu || 'New Capsule 20'}
        // imgSrc={menuSelected.Imagen}
        imgSrc={encabezado}
      />
      <div className={styles.container_list_news}>
        {itemsNews.map((item, i) => (
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

function mapStateToProps(state) {
  const { articles, menu } = state
  return { articles: articles.articles, menu: menu.menu }
}

export default connect(mapStateToProps)(News)
