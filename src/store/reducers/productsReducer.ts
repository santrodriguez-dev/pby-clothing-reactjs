import { ADD_PRODUCTS } from '../types'
// Cada reducer tiene su propio state
const initialState = {
  products: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return { ...state, products: action.payload }
    default:
      return state
  }
}