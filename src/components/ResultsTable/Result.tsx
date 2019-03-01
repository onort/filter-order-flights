import React, { Component } from "react"
import cx from "classnames"
import dayjs from "dayjs"

import styles from "./ResultsTable.module.scss"
import { Itinerary } from "../../types"
import { Button, ResultDetails } from "../"
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

  public toggleDetails = (e: React.MouseEvent<HTMLElement>) =>
    this.setState(curState => ({ showDetails: !curState.showDetails }))

  public render() {
    const classNames = cx(
      styles.row,
      { [styles.active]: this.state.showDetails },
      this.props.className
    )
    const {
      carriers,
      destination,
      duration,
      legs,
      lowestPrice,
      origin,
      pricingOptions,
      stops
    } = this.props.itinerary

    return (
      <>
        <Row className={classNames}>
          <Cell className={styles.carrierCell}>
            {carriers.length === 1 ? (
              <img
                className={styles.logo}
                src={carriers[0].imgUrl}
                alt={`${carriers[0].name} Logo`}
              />
            ) : (
              <>
                {carriers.map(carrier => (
                  <span key={carrier.id} className={styles.carrierName}>
                    {carrier.name}
                  </span>
                ))}
              </>
            )}
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
                {carriers.length === 1 ? (
                  <span className={styles.sub}>{carriers[0].name}</span>
                ) : (
                  <span className={styles.sub}>Farklı havayolları</span>
                )}
              </div>
              <div className={styles.buttonContainer}>
                <Button
                  className={styles.viewButton}
                  text="İncele"
                  onClick={this.toggleDetails}
                />
              </div>
            </div>
          </Cell>
        </Row>
        {this.state.showDetails && (
          <ResultDetails legs={legs} pricingOptions={pricingOptions} />
        )}
      </>
    )
  }
}

export default Result
