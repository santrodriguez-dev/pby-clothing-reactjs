import React from 'react'
import styles from './ItemShoppingCart.module.scss'

import imagePE1 from '../../../assets/images_pby/ProductoEspecifico/1.jpeg'
import Select from '@material-ui/core/Select'
import { MenuItem } from '@material-ui/core'

export const ItemShoppingCart = (props: any) => {

  const { preview = false } = props

  return (
    <div className={!preview ? styles.container_item_shopping : styles.container_item_shopping_preview}>
      <div className={styles.image}>
        <img src={imagePE1} alt="" />
      </div>

      <div className={styles.body}>
        <div className={styles.header}>
          <strong>Nike React Infinity Run</strong>
          <strong>Talla</strong>
          <strong>Cantidad</strong>
          <strong>Precio</strong>
          <strong></strong>

        </div>
        <div className={styles.data_body}>
          <span className={styles.desc_text}>Calzado de running para hombre</span>

          {preview ? <span>32</span> :
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={32}
              // onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={32}>32</MenuItem>
              <MenuItem value={34}>34</MenuItem>
            </Select>
          }

          {preview ? <span>2</span> :
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={2}
              // onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          }


          {/* <TextInput type="number" value={2} className={styles.quantity} inputClassName={styles.quantity} id={'dee'} /> */}
          {/* <div className={styles.quantity}>
            <input id="first_name" type="number" defaultValue={2} />
          </div> */}
          <span>$ 350.000</span>

          {!preview ? (
            <div className={styles.delete_icon}>
              <span>Eliminar</span>
            </div>
          ) : null}

        </div>


        {/* <div className={styles.data_body}>

          <strong>Nike React Infinity Run Flyknit</strong>
        </div>
        <div>
          <span>$ 700.000</span>
        </div> */}
      </div>

    </div>
  )
}