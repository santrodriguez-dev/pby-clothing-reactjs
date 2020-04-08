import React from 'react'
import styles from './News.module.scss'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import NewsDetail from './news-detail/News-detail';

const News = ({ history }: any) => {

  let match = useRouteMatch();
  const newsList = [
    { id: 1, title: 'title', subtitle: 'subtitle', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to', img: '../../assets/t_eiffel.jpg' },
    { id: 2, title: 'title', subtitle: 'subtitle', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to', img: '../../assets/t_eiffel.jpg' },
    { id: 3, title: 'title', subtitle: 'subtitle', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to', img: '../../assets/t_eiffel.jpg' },
    { id: 4, title: 'title', subtitle: 'subtitle', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to', img: '../../assets/t_eiffel.jpg' },
    { id: 5, title: 'title', subtitle: 'subtitle', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to', img: '../../assets/t_eiffel.jpg' },
    { id: 6, title: 'title', subtitle: 'subtitle', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to', img: '../../assets/t_eiffel.jpg' },
    { id: 7, title: 'title', subtitle: 'subtitle', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to', img: '../../assets/t_eiffel.jpg' },
    { id: 8, title: 'title', subtitle: 'subtitle', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to', img: '../../assets/t_eiffel.jpg' },
    { id: 9, title: 'title', subtitle: 'subtitle', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to', img: '../../assets/t_eiffel.jpg' },
    { id: 10, title: 'title', subtitle: 'subtitle', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer to', img: '../../assets/t_eiffel.jpg' },
  ]

  return (
    <Switch>
      <Route path={`${match.url}/:newId`} component={NewsDetail} />

      <Route path={`${match.url}`}>
        <div className={styles.main_image_news}>
          <img src={require('../../assets/models/7.jpg')} alt="" />
        </div>
        <div className={styles.container_list_news}>
          {newsList.map((item, i) => (
            <div key={i} className={styles.item_news}>
              <div className={styles.image_item}>
                <img
                  src={require('../../assets/t_eiffel.jpg')} alt={item.title}
                  onClick={() => {
                    history.push({ pathname: '/noticias/' + item.id })
                  }} />
              </div>
              <div className={styles.content_item}>
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
