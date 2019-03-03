import React from "react"

import styles from "./ResultsTable.module.scss"
import { Itinerary } from "../../types"
import { Cell, Result, Row } from "./"
import { Card } from "../"

interface Props {
  data: Itinerary[]
}

const ResultsTable: React.SFC<Props> = props => {
  return props.data.length > 0 ? (
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
  ) : (
    <Card className={styles.noResult}>
      <span>Aradığınız kriterlere uygun uçuş bulunamadı.</span>
    </Card>
  )
}

export default ResultsTable
