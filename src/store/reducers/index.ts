import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import articlesReducer from './articlesReducer'

export default combineReducers({
  products: productsReducer,
  articles: articlesReducer
})