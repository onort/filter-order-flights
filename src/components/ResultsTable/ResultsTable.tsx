import React from "react"

import styles from "./ResultsTable.module.scss"
import { Cell, Result, Row } from "./"

const ResultsTable: React.SFC = props => {
  return (
    <div className={styles.container}>
      <Row className={styles.header}>
        <Cell>Havayolu</Cell>
        <Cell>Kalkış</Cell>
        <Cell>Varış</Cell>
        <Cell>Aktarma / Süre</Cell>
        <Cell>Fiyat</Cell>
        <Cell>Satın Al</Cell>
      </Row>
      <Result />
      <Result />
      <Result />
    </div>
  )
}

export default ResultsTable
