import React from 'react'
import styles from './ImageBanner.module.scss'

const ImageBanner = (props: any) => {

  const { title, subtitle, imgSrc } = props

  return (
    <>
      <div className={styles.new_title}>
        <div className={styles.new_title_content}>
          <h2>{title}</h2>
          {subtitle && <h4>{subtitle}</h4>}
        </div>
      </div>
      <div className={styles.main_image_news}>
        {/* <img src={require('../../../assets/t_eiffel.jpg')} alt="" /> */}
        <img src={imgSrc} alt="" />
      </div>
    </>
  )
}

export default ImageBanner