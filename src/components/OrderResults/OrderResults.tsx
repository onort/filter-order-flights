import React from "react"

import styles from "./OrderResults.module.scss"
import { Dropdown } from "../"

interface Props {
  className?: string
  flightCount: number
}

const OrderResults: React.SFC<Props> = props => {
  const { flightCount } = props
  return (
    <section className={styles.container}>
      {flightCount > 0 && (
        <span className={styles.flightCount}>
          {flightCount} Uçuş Listeleniyor
        </span>
      )}
      <Dropdown title="Sıralama" selectedItem="Option A" />
    </section>
  )
}

export default OrderResults
