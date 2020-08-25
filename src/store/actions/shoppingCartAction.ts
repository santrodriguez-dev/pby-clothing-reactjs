import { ADD_PRODUCT, REMOVE_PRODUCT, ADD_QUANTITY_PRODUCT } from '../types'

// añadir products
export function addProductAction(product) {
  return (dispatch) => { dispatch(addProcuct(product)) }
}

export function removeProductAction(id, talla) {
  return (dispatch) => { dispatch(removeProcuct(id, talla)) }
}

export function addQuantityProductAction(id, talla, cantidad) {
  return (dispatch) => { dispatch(addQuantityProduct(id, talla, cantidad)) }
}

const addProcuct = (product) => ({
  type: ADD_PRODUCT,
  payload: product
})

const removeProcuct = (id, talla) => ({
  type: REMOVE_PRODUCT,
  payload: { id, talla }
})

const addQuantityProduct = (id, talla, cantidad) => ({
  type: ADD_QUANTITY_PRODUCT,
  payload: { id, talla, cantidad }
})