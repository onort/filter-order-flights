import React, { Component } from "react"
import cx from "classnames"
import dayjs from "dayjs"

import styles from "./ResultsTable.module.scss"
import { PegasusLogo } from "../../assets/images"
import { Itinerary } from "../../types"
import { Button } from "../"
import { Cell, DataCell, Row } from "./"
import { minsToString } from "../../utils"

interface State {
  showDetails: boolean
}

interface Props {
  className?: string
  itinerary: Itinerary
}

class Result extends Component<Props, State> {
  public state = { showDetails: false }

  public toggleDetails = () => ""

  public render() {
    const classNames = cx(styles.row, this.props.className)
    const {
      carriers,
      destination,
      duration,
      lowestPrice,
      origin,
      pricingOptions,
      stops
    } = this.props.itinerary

    return (
      <Row className={classNames}>
        <Cell>
          <img className={styles.logo} src={PegasusLogo} alt="Logo" />
        </Cell>
        <DataCell
          sub={origin.airportCode}
          val={dayjs(origin.time).format("HH:mm")}
        />
        <DataCell
          sub={destination.airportCode}
          val={dayjs(destination.time).format("HH:mm")}
        />
        <DataCell
          sub={minsToString(duration)}
          val={stops === 0 ? "Direkt" : `${stops} Aktarma`}
        />
        <Cell className={styles.priceCell}>
          <div className={styles.price}>
            <div className={styles.dataCell}>
              <span className={styles.val}>{lowestPrice} TL</span>
              <span className={styles.sub}>Turkish Airlines</span>
            </div>
            <div className={styles.buttonContainer}>
              <Button className={styles.viewButton} text="Incele" />
            </div>
          </div>
        </Cell>
      </Row>
    )
  }
}

export default Result
