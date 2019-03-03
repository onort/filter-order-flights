import React from "react"

import styles from "./OrderResults.module.scss"
import { OrderingOption } from "../../types"
import { Dropdown } from "../"

interface Props {
  className?: string
  flightCount: number
  onOrderSelect: (value: string) => void
  orderingOptions: OrderingOption[]
  selectedOrder: OrderingOption
}

const OrderResults: React.SFC<Props> = props => {
  const { flightCount, onOrderSelect, orderingOptions, selectedOrder } = props
  return (
    <section className={styles.container}>
      {flightCount > 0 ? (
        <span className={styles.flightCount}>
          {flightCount} Uçuş Listeleniyor
        </span>
      ) : (
        <span className={styles.flightCount}>
          Kriterlere Uygun Uçuş Bulunamadı
        </span>
      )}
      <Dropdown
        title="Sıralama"
        selectedOrder={selectedOrder}
        orderingOtions={orderingOptions}
        onSelect={onOrderSelect}
      />
    </section>
  )
}

export default OrderResults
