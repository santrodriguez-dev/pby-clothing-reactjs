import React, { Fragment, useEffect } from 'react'
import styles from "./Slider.module.scss"

import Carousel from 'react-material-ui-carousel'

import image1 from '../../assets/images_pby/Home/1.jpg'
import image2 from '../../assets/images_pby/Home/2.jpg'
import image6 from '../../assets/images_pby/Home/6.jpg'
import { Paper, Button } from '@material-ui/core';

function Slider() {

  useEffect(() => {
    const elem2 = document.querySelector('.slider');
    if (!elem2) return
    // SliderMaterial.init(elem2)
  }, [])

  return (
    <Carousel
      indicators={true}
      animation={'slide'}
      interval={100000}
    >
      <div className={styles.slider_container}>
        <img src={image1} />
        <p className={styles.legend}>Legend 2</p>
      </div>
      <div className={styles.slider_container}>
        <img src={image6} />
        <p className={styles.legend}>Legend 3</p>
      </div>
      <div className={styles.slider_container}>
        <img src={image2} />
        <p className={styles.legend}>Legend 3</p>
      </div>
      <div className={styles.slider_container}>
        <img src={image6} />
        <p className={styles.legend}>Legend 3</p>
      </div>
      <div className={styles.slider_container}>
        <img src={image1} />
        <p className={styles.legend}>Legend 3</p>
      </div>
    </Carousel>
    // <div className="slider">
    //   <ul className="slides">
    //     <li>
    //       <img src={image6} />
    //       <div className="caption center-align">
    //         <h2>PLAN YOUR ADVENTURE</h2>
    //         <h5 className="light grey-text text-lighten-3">SHOP NOW</h5>
    //       </div>
    //     </li>
    //     <li>
    //       <img src={image1} />
    //       <div className="caption left-align">
    //         <h2>Left Aligned Caption</h2>
    //         <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
    //       </div>
    //     </li>
    //     <li>
    //       <img src={image6} />
    //       <div className="caption right-align">
    //         <h2>Right Aligned Caption</h2>
    //         <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
    //       </div>
    //     </li>
    //     <li>
    //       <img src={image2} />
    //       <div className="caption center-align">
    //         <h2>This is our big Tagline!</h2>
    //         <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
    //       </div>
    //     </li>
    //   </ul>
    // </div >
  )
}

export default Slider

