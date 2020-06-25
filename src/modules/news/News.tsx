import React, { useEffect } from 'react'
import styles from './News.module.scss'
import { ImageBanner } from '../../components';

import encabezado from '../../assets/images_pby/Home/1.jpg'

import image1 from '../../assets/images_pby/Noticias/1.jpg'
import image2 from '../../assets/images_pby/Noticias/2.jpg'
import image3 from '../../assets/images_pby/Noticias/3.jpg'
import image4 from '../../assets/images_pby/Noticias/4.jpg'


const News = ({ history }: any) => {

  const newsList = [
    { id: 1, title: 'title', subtitle: 'subtitle', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to', imgSrc: image1 },
    { id: 2, title: 'title', subtitle: 'subtitle', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to', imgSrc: image2 },
    { id: 3, title: 'title', subtitle: 'subtitle', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to', imgSrc: image3 },
    { id: 4, title: 'title', subtitle: 'subtitle', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to', imgSrc: image4 },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ImageBanner
        title={'Noticias'}
        subtitle={'New Capsule 20'}
        imgSrc={encabezado}
      />
      <div className={styles.container_list_news}>
        {newsList.map((item, i) => (
          <div key={i} className={styles.item_news}>
            <div className={styles.image_item}>

              <img
                // src={image2}
                // src={require('../../assets/images_pby/Noticias/1.JPG')}
                src={item.imgSrc}
                alt={item.title}
                onClick={() => {
                  history.push({ pathname: '/noticias/' + item.id })
                }} />
            </div>
            <div className={styles.content_item} onClick={() => {
              history.push({ pathname: '/noticias/' + item.id })
            }}>
              <h4>{item.title.toUpperCase()}</h4>
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
