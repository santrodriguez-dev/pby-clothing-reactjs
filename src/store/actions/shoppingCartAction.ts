import { ADD_PRODUCT, REMOVE_PRODUCT, ADD_QUANTITY_PRODUCT, ADD_PROMOTIONAL_CODE } from '../types'

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

export function addPromotionalCodeAction(code, discountValue) {
  return (dispatch) => { dispatch(addPromotionalCode(code, discountValue)) }
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

const addPromotionalCode = (code, discountValue) => ({
  type: ADD_PROMOTIONAL_CODE,
  payload: { code, discountValue }
})