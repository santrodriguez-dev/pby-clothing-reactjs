// Cada reducer tiene su propio state

import { ADD_PRODUCT, REMOVE_PRODUCT, ADD_QUANTITY_PRODUCT, ADD_PROMOTIONAL_CODE } from "../types"

const initialState: { products: any[], promotionalCode: any } = {
  products: [],
  promotionalCode: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROMOTIONAL_CODE:
      return { ...state, promotionalCode: action.payload }
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] }
    case REMOVE_PRODUCT:
      const { id, talla } = action.payload
      return {
        ...state,
        products: state.products.filter(item => item.Id_Producto !== id || item.Talla !== talla)
      }
    case ADD_QUANTITY_PRODUCT:
      const dataProd = action.payload

      const preoductsUpdated = state.products.map(item => {
        if (item.Id_Producto === dataProd.id && item.Talla === dataProd.talla)
          return { ...item, CantidadCompra: dataProd.cantidad }
        return item
      })
      return { ...state, products: preoductsUpdated }
    default:
      return state
  }
}