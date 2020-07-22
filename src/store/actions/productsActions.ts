import { ADD_PRODUCTS } from '../types'

// añadir products
export function addProductsAction(products) {
  return (dispatch) => {
    console.log(products);
    [].slice()
    dispatch(addProducts(products))
  }
}

const addProducts = (products) => ({
  type: ADD_PRODUCTS,
  payload: products
})