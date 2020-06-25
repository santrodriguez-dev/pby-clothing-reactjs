import React from 'react'
import styles from "./Slider.module.scss"

import Carousel from 'react-material-ui-carousel'

import image1 from '../../assets/images_pby/Home/1.jpg'
import image2 from '../../assets/images_pby/Home/2.jpg'
import image6 from '../../assets/images_pby/Home/6.jpg'

function Slider() {

  return (
    <Carousel
      indicators={false}
      animation={'slide'}
      interval={6000}
      navButtonsAlwaysVisible={true}
      fullHeightHover={false}
    >
      <div className={styles.slider_container}>
        <img src={image1} />
        <div className={styles.content_text + ' ' + styles.topRigth}>
          <h2>Legend 2</h2>
          <span>Description</span>
        </div>
      </div>
      <div className={styles.slider_container}>
        <img src={image6} />
        <div className={styles.content_text + ' ' + styles.topLeft}>
          <h2>Legend 2</h2>
          <span>Description</span>
        </div>
      </div>
      <div className={styles.slider_container}>
        <img src={image2} />
        <div className={styles.content_text + ' ' + styles.topRigth}>
          <h2>Legend 2</h2>
          <span>Description</span>
        </div>
      </div>
      <div className={styles.slider_container}>
        <img src={image6} />
        <div className={styles.content_text + ' ' + styles.bottom}>
          <h2>Legend 2</h2>
          <span>Description</span>
        </div>
      </div>
      <div className={styles.slider_container}>
        <img src={image1} />
        <div className={styles.content_text}>
          <h2>Legend 2</h2>
          <span>Description</span>
        </div>
      </div>
    </Carousel>
  )
}

export default Slider

