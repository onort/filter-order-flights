import React from "react"

import styles from "./OrderResults.module.scss"
import { OrderingOption } from "../../types"
import { Button, Container, Dropdown } from "../"

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
    <Container className={styles.container}>
      {flightCount > 0 ? (
        <span className={styles.flightCount}>
          {flightCount} Uçuş Listeleniyor
        </span>
      ) : (
        <span className={styles.flightCount}>
          Kriterlere Uygun Uçuş Bulunamadı
        </span>
      )}
      <div className={styles.buttonsContainer}>
        <Button text="Yeniden Ara" primary={true} className={styles.button} />
        <Button text="Filtrele" primary={true} className={styles.button} />
      </div>
      <Dropdown
        title="Sıralama"
        selectedOrder={selectedOrder}
        orderingOtions={orderingOptions}
        onSelect={onOrderSelect}
      />
    </Container>
  )
}

export default OrderResults
