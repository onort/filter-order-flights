import React from "react"
import dayjs from "dayjs"

import styles from "./ResultDetails.module.scss"
import { Leg, PricingOption } from "../../types"
import { Cell, DataCell, Row } from "../"
import { minsToString } from "../../utils"

interface Props {
  legs: Leg[]
  pricingOptions: PricingOption[]
}

const ResultDetails: React.SFC<Props> = props => {
  return (
    <Row className={styles.row}>
      <Cell className={styles.legs}>
        {props.legs.map(leg => (
          <Row key={leg.flightCode} className={styles.legRow}>
            <DataCell
              className={styles.origin}
              detailCell={true}
              sub={`${leg.departure.airportName} ${leg.departure.airportCode}`}
              val={dayjs(leg.departure.time).format("HH:mm")}
            />
            <Cell className={styles.durationContainer}>
              <span className={styles.duration}>
                {minsToString(leg.duration)}
              </span>
              <div className={styles.pointedLine} />
            </Cell>
            <DataCell
              className={styles.destination}
              detailCell={true}
              sub={`${leg.arrival.airportName} ${leg.arrival.airportCode} `}
              val={dayjs(leg.arrival.time).format("HH:mm")}
            />
            <DataCell
              className={styles.flightInfo}
              detailCell={true}
              sub={`${leg.flightCode} Ekonomi`}
              val={leg.carrier}
            />
          </Row>
        ))}
      </Cell>
      <Cell className={styles.prices}>
        {props.pricingOptions.map(option => (
          <div key={option.agent} className={styles.priceOption}>
            <span className={styles.price}>{option.price} TL</span>
            <span className={styles.agent}>&#64;{option.agent}</span>
          </div>
        ))}
      </Cell>
    </Row>
  )
}

export default ResultDetails
