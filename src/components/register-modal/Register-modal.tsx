import React, { useEffect, Fragment } from 'react'
// import { Modal } from 'materialize-css'

import { Button, Card, Row, Col, Modal } from 'react-materialize';

import styles from './Register-modal.module.scss'

const RegisterModal = (props: any) => {

  const { show, onClosed } = props

  let instance: any = null

  // useEffect(() => {
  //   const elem = document.querySelector('#modal3');
  //   if (!elem) return
  //   Modal.init(elem, { onCloseEnd: onClosed })// Callback für Modal schließen.
  //   instance = Modal.getInstance(elem)
  //   if (show)
  //     instance.open()
  // }, [show])

  // const closeModal = () => {
  //   const elem = document.querySelector('#modal3');
  //   if (!elem) return
  //   instance = Modal.getInstance(elem)
  //   if (show)
  //     instance.close()
  // }

  return (
    <Modal
      actions={[
        <Button
          node="button"
          waves="light"
          onClick={() => onClosed()}
        >Registrarse</Button>
      ]}
      // bottomSheet={false}
      // fixedFooter={false}
      header="Registro"
      // id="Modal-0"
      open={show}
      options={{
        onCloseEnd: () => { onClosed() },
        // dismissible: true,
        // endingTop: '10%',
        // inDuration: 250,
        // onCloseEnd: null,
        // onCloseStart: null,
        // onOpenEnd: null,
        // onOpenStart: null,
        // opacity: 0.5,
        // outDuration: 250,
        // preventScrolling: true,
        // startingTop: '20px'
      }}
    >
      <form className="col s12">
        <div className="row">
          {/* <div className="input-field col s12">
            <input placeholder="" id="name"
              type="text" className="active validate" />
            <label htmlFor="name">Nombre</label>
          </div> */}
          <div className="input-field col s12">
            <input placeholder="" id="name"
              type="text" className="active validate" />
            <label htmlFor="name">Tipo de documento</label>
          </div>
          <div className="input-field col s12">
            <input placeholder="" id="name"
              type="text" className="active validate" />
            <label htmlFor="name">No Documento</label>
          </div>
          <div className="input-field col s12">
            <input placeholder="" id="name"
              type="text" className="active validate" />
            <label htmlFor="name">Correo</label>
          </div>
          <div className="input-field col s12">
            <input placeholder="" id="name"
              type="text" className="active validate" />
            <label htmlFor="name">Contraseña</label>
          </div>
        </div>
        {/* 
        <div className={styles.buttons_content}>
          <Button
            node="button"
            style={{
              marginRight: '5px'
            }}
            waves="light"
          >Registrarse</Button>
        </div> */}
      </form>
    </Modal>
  )
}

export default RegisterModal
