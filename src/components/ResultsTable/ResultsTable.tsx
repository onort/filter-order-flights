import React from "react"

import styles from "./ResultsTable.module.scss"
import { Itinerary } from "../../types"
import { Cell, Result, Row } from "./"

interface Props {
  data: Itinerary[]
}

const ResultsTable: React.SFC<Props> = props => {
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
      {props.data.map(itinerary => (
        <Result key={itinerary.id} itinerary={itinerary} />
      ))}
    </div>
  )
}

export default ResultsTable
