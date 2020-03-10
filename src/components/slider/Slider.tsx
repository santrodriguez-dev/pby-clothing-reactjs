import React, { Fragment, useEffect } from 'react'

import "./Slider.scss";
import { toast, Slider as SliderMaterial, Modal } from 'materialize-css';

function Slider() {

  useEffect(() => {
    const elem2 = document.querySelector('.slider');
    if (!elem2) return
    SliderMaterial.init(elem2)
  }, [])

  return (
    <Fragment>
      <div className="slider">
        <ul className="slides">
          <li>
            <img src={require('../../assets/img1.webp')} />
            <div className="caption center-align">
              <h2>PLAN YOUR ADVENTURE</h2>
              <h5 className="light grey-text text-lighten-3">SHOP NOW</h5>
            </div>
          </li>
          <li>
            <img src="https://materializecss.com/images/sample-1.jpg" />
            <div className="caption left-align">
              <h2>Left Aligned Caption</h2>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img src={require('../../assets/img1.webp')} />
            <div className="caption right-align">
              <h2>Right Aligned Caption</h2>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img src="https://materializecss.com/images/sample-1.jpg" />
            <div className="caption center-align">
              <h2>This is our big Tagline!</h2>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
        </ul>
      </div >

    </Fragment >
  )
}

export default Slider

