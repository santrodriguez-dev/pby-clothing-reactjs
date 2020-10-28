import React from 'react'
import styles from "./Slider.module.scss"

import Carousel from 'react-material-ui-carousel'

import image1 from '../../assets/images_pby/Home/1.jpg'

function Slider({ items = [] }: { items: any[] }) {

  return (
    <>
      <Carousel
        indicators={false}
        animation={'slide'}
        interval={6000}
        navButtonsAlwaysVisible={true}
        fullHeightHover={false}
        indicatorProps={{ className: '', style: {} }}
        activeIndicatorProps={{ className: '', style: {} }}
      >
        {items.map((item, i) => {
          return (
            <div key={i} className={styles.slider_container}>
              <img src={image1} alt={item.Nombre_Articulo} />
              <div className={styles.content_text + ' ' + styles.topRigth}>
                <h2>{item.Nombre_Articulo}</h2>
                <span>{item.Descripcion_Articulo}</span>
              </div>
            </div>
          )
        }
        )}
      </Carousel>
    </>
  )
}

export default Slider
