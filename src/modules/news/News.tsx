import React from 'react'
import styles from './News.module.scss'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import NewsDetail from './news-detail/News-detail';
import { ImageBanner } from '../../components';

import image1 from '../../assets/images_pby/Noticias/1.jpg'
import image2 from '../../assets/images_pby/Noticias/2.jpg'
import image3 from '../../assets/images_pby/Noticias/3.jpg'
import image4 from '../../assets/images_pby/Noticias/4.jpg'


const News = ({ history }: any) => {

  let match = useRouteMatch();
  const newsList = [
    { id: 1, title: 'title', subtitle: 'subtitle', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to', imgSrc: image1 },
    { id: 2, title: 'title', subtitle: 'subtitle', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to', imgSrc: image2 },
    { id: 3, title: 'title', subtitle: 'subtitle', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to', imgSrc: image3 },
    { id: 4, title: 'title', subtitle: 'subtitle', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to', imgSrc: image4 },
  ]

  return (
    <Switch>
      <Route path={`${match.url}/:newId`} component={NewsDetail} />

      <Route path={`${match.url}`}>
        {/* <div className={styles.main_image_news}>
          <img src={'https://st3.depositphotos.com/1273429/18700/i/1600/depositphotos_187007928-stock-photo-horizontal-portrait-stylish-attractive-female.jpg'} alt="" />
        </div> */}

        <ImageBanner
          title={'Noticias'}
          // subtitle={'New Capsule 20'}
          imgSrc={'https://picsum.photos/900/500'}
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
      </Route>
    </Switch>
  )
}

export default News
