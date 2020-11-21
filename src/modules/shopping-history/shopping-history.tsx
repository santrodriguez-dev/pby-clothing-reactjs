import React, { Fragment, useEffect, useState } from 'react'

import styles from './shopping-history.module.scss'
import { connect } from 'react-redux'
import { PbyService } from '../../services/pby-services'

function ShoppingHistory(props) {

  let { session } = props

  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    getHistoryProducts()
  }, [])

  useEffect(() => {
    if (!session) return
    console.log(session);
  }, [session])

  const getHistoryProducts = () => {
    PbyService.getHistoryProducts().then(products => {
      setProducts(products)
    })
  }

  return (
    <div className={styles.Shopping_container}>
      <h5>Productos comprados</h5>
    </div>
  )
}

function mapStateToProps(state) {
  const { session } = state
  return { session: session.session }
}

export default connect(mapStateToProps)(ShoppingHistory)
