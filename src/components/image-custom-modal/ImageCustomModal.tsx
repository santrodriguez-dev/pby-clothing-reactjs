import React from 'react'
// import { Modal } from 'materialize-css'
import { Dialog } from '@material-ui/core'

import styles from './ImageCustomModal.module.scss'

const ImageCustomModal = (props: any) => {

  const { show, onClosed, children, showImage = true } = props

  return (
    <Dialog
      open={show}
      onClose={onClosed}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
    >
      <div className={styles.register_containter} style={{ gridTemplateColumns: showImage ? '50% 50%' : '100%' }}>
        <i
          className={styles.close_icon + ' material-icons'}
          onClick={() => onClosed()}
        >highlight_off</i>

        {showImage ? (
          <>
            <div className={styles.image_content}>
              <img src={require('../../assets/images_pby/PopUp.jpg')} alt="" />
            </div>
            <div className={styles.register_form}>
              {children}
            </div>
          </>
        ) : children}
      </div>

    </Dialog>
  )
}


export default ImageCustomModal