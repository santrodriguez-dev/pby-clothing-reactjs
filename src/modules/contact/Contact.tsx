import React, { Fragment, useEffect, useState } from 'react'

import styles from './Contact.module.scss'
import { ImageBanner } from '../../components'

import image2 from '../../assets/images_pby/Home/2.jpg'
import { TextField, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { CONTACT } from '../../consts/clothe-names'

const Contact = ({ menu }) => {

  const [menuSelected, setMenuSelected] = useState<any>({})

  useEffect(() => {
    window.scrollTo(0, 0)
    selectMenu()
  }, [menu])

  const selectMenu = () => {
    const menuSelected = menu.find(item => item.Nombre_Menu === CONTACT)
    if (menuSelected)
      setMenuSelected(menuSelected)
  }

  return (
    <Fragment>
      <ImageBanner
        title={menuSelected.Nombre_Menu}
        subtitle={menuSelected.Descripcion_Menu || 'New Capsule 20'}
        imgSrc={menuSelected.Imagen}
      // imgSrc={image2}
      />

      <div className={styles.about_us_form}>

        <div className={styles.form_container}>

          <form noValidate autoComplete="off">
            <p style={{ margin: '3em 0', textAlign: 'center' }}>Please feel free to call us at (818) 444-7768 for help and support.
          Monday–Friday 9:00am–4:00pm PST To send a message, please fill out the form below.</p>

            <div className={styles.inputs_content}>
              <TextField className={styles.subscribe_input} label="Nombre" />
              <TextField className={styles.subscribe_input} label="Correo" />
              <TextField className={styles.subscribe_input} label="Mensaje" multiline rows={3} rowsMax={4} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained" color="primary">Enviar</Button>
            </div>
          </form>


          <div className={styles.map_container}>
            <img src="https://ep01.epimg.net/tecnologia/imagenes/2019/11/13/actualidad/1573658897_566202_1573659544_noticia_normal.jpg" alt="" />
          </div>
        </div>
      </div>

    </Fragment>
  )
}

function mapStateToProps(state) {
  const { menu } = state
  return { menu: menu.menu }
}

export default connect(mapStateToProps)(Contact)

