import React, { useEffect, Fragment } from 'react'
import { Modal } from 'materialize-css';

const FormRegisterModal = (props: any) => {

  const { show, onClosed } = props

  let instance: any = null

  useEffect(() => {
    const elem = document.querySelector('.modal');
    if (!elem) return
    Modal.init(elem, { onCloseEnd: onClosed })// Callback für Modal schließen.
    instance = Modal.getInstance(elem)
    if (show)
      instance.open()
  }, [show])

  return (
    <div className="modal" id="modal1">
      <div className="modal-content">
        <h4>Registro</h4>
        <p></p>
      </div>
      <div className="modal-footer">
        <button className="btn" type="button" name="action"
          onClick={() => instance.close()}>Cerrar
        </button>
      </div>
    </div>
  )
}


export default FormRegisterModal

