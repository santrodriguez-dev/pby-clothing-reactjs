import React from 'react'
import styles from './News_detail.module.scss'
import { useParams } from 'react-router-dom';


const ProductDetail = () => {

  const { newId } = useParams();

  return (
    <>
      Product detail
    </>
  )
}

export default ProductDetail
