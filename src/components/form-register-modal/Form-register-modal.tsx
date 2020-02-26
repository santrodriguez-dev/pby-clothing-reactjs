import React, { useEffect, Fragment } from 'react'
import { Modal } from 'materialize-css';

function FormRegisterModal() {

  var instance: any = null

  useEffect(() => {

    var elem = document.querySelector('.modal');
    if (!elem) return
    Modal.init(elem, {})
    instance = Modal.getInstance(elem)
  }, [])

  return (
    <Fragment>
      <button className="btn waves-effect waves-light" type="submit" name="action"
        onClick={() => {
          instance.open()
        }}>Submit
        </button>
      {/* <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a> */}
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <button className="btn waves-effect waves-light" type="submit" name="action" onClick={() => {
            instance.close()
          }}>
            Submit
        </button>
        </div>
      </div>
    </Fragment>

  )
}


export default FormRegisterModal

