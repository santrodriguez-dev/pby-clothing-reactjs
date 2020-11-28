import React, { Fragment, useEffect, useState } from 'react'

import styles from './shopping-history.module.scss'
import { connect } from 'react-redux'
import { PbyService } from '../../services/pby-services'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'

function ShoppingHistory(props) {


  let { session } = props

  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    if (!session) return
    getHistoryProducts(session.PersonId)
  }, [session])

  const getHistoryProducts = (PersonId) => {
    PbyService.getHistoryProducts(PersonId).then(products => {
      if (!products) return
      setProducts(products)
    })
  }

  return (
    <div className={styles.Shopping_container}>
      <h5>Compras realizadas</h5>
      <br /><br />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Número Orden</TableCell>
              <TableCell align="right">Estado</TableCell>
              <TableCell align="right">Método de pago</TableCell>
              <TableCell align="right">Medio orden</TableCell>
              <TableCell align="right">Descripción</TableCell>
              <TableCell align="right">Fecha orden</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">{row.NumeroOrden}</TableCell>
                <TableCell align="right">{row.EstadoOrden}</TableCell>
                <TableCell align="right">{row.MetodoPago}</TableCell>
                <TableCell align="right">{row.MedioOrden}</TableCell>
                <TableCell align="right">{row.DescripcionOrden}</TableCell>
                <TableCell align="right">{row.FechaOrden}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

function mapStateToProps(state) {
  const { session } = state
  return { session: session.session }
}

export default connect(mapStateToProps)(ShoppingHistory)
