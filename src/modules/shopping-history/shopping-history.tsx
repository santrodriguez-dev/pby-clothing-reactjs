import React, { useEffect, useState } from 'react'

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
              <TableCell align="center">Número orden</TableCell>
              <TableCell align="center">Estado</TableCell>
              <TableCell align="center">Método de pago</TableCell>
              <TableCell align="center">Medio orden</TableCell>
              <TableCell align="center">Descripción</TableCell>
              <TableCell align="center">Fecha orden</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row, i) => (
              <TableRow key={i}>
                <TableCell align="center">{row.NumeroOrden}</TableCell>
                <TableCell align="center">{row.EstadoOrden}</TableCell>
                <TableCell align="center">{row.MetodoPago}</TableCell>
                <TableCell align="center">{row.MedioOrden}</TableCell>
                <TableCell align="center">{row.DescripcionOrden}</TableCell>
                <TableCell align="center">{row.FechaOrden}</TableCell>
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
