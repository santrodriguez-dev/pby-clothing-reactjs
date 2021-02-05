import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styles from './PurchaseOrder.module.scss'

import { PbyService } from '../../services/pby-services'
import { useParams } from 'react-router-dom'

function PurchaseOrder(props) {

  let { session } = props
  const [order, setOrder] = useState(null)
  const params: any = useParams();

  useEffect(() => {
    if (!session) return
    getHistoryProducts(session.PersonId)
  }, [session])

  const getHistoryProducts = (PersonId) => {
    PbyService.OrderBuyHistoryByPerson(PersonId).then(orders => {
      if (!orders) return
      console.log(orders);
      const orderFind = orders.find(item => item.NumeroOrden.toString() === params.id)
      setOrder(orderFind)
    })
  }

  return (
    <div className={styles.Shopping_container}>
      <h3>Orden de Compra</h3>
      <pre>{JSON.stringify(order, null, 2)}</pre>
      <div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  const { session } = state
  return { session: session.session }
}

export default connect(mapStateToProps)(PurchaseOrder)
