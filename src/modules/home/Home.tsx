import React, { Fragment, useEffect } from 'react'

import styles from './Home.module.scss'
import { Slider } from '../../components';

// import img3 from '../../assets/img3.webp';
import img4 from '../../assets/img4.webp';

import image3 from '../../assets/images_pby/Home/3.jpg'
import image4 from '../../assets/images_pby/Home/4.jpg'
import image5 from '../../assets/images_pby/Home/5.jpg'

import image6 from '../../assets/images_pby/Home/6.jpg'
// import video from '../../assets/videos/RASAR.mp4'
import image7 from '../../assets/images_pby/Home/7.jpg'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import ReactPlayer from 'react-player'

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  return (
    <Fragment>
      <Slider />
      {/* <Button variant="contained">Default</Button> */}

      {/* Lista de imagenes */}
      <div className={styles.image_container}>
        <div className={styles.item_image}>
          <img src={image3} alt="" />
          <div className={styles.item_hover}>
            <span>CAMISETAS</span>
          </div>
        </div>
        <div className={styles.item_image}>
          <img src={image4} alt="" />
          <div className={styles.item_hover}>
            <span>JERSEY</span>
          </div>
        </div>
        <div className={styles.item_image}>
          <img src={image5} alt="" />
          <div className={styles.item_hover}>
            <span>CHAQUETAS</span>
          </div>
        </div>
      </div>

      <div className={styles.outstanding} style={{ background: `url('${image6}')` }}>
        <div className={styles.text_outstanding}>
          <h2>Radar Concept</h2>
          <h4>New Capsule 20</h4>
        </div>
        {/* <img src={image7} alt="" /> */}
        <div className={styles.video_container}>
          {/* <ReactPlayer url={video} playing muted controls /> */}
        </div>
      </div>

      {/* Input Subscribe */}
      <section className={styles.subscribe_container}>
        <div className={styles.content_subscribe}>
          <h2>Suscribirse</h2>

          <form noValidate autoComplete="on">
            <TextField color="secondary" className={styles.subscribe_input} label="Correo electrónico" />
            <Button color="secondary" variant="outlined">Enviar</Button>
          </form>

        </div>
      </section>

    </Fragment>
  )
}

export default Home
