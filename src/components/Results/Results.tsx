import React, { Component } from "react"

import styles from "./Results.module.scss"

import { Itinerary } from "../../types"
import { Card, ResultsTable } from "../"

interface Props {
  data: Itinerary[]
}

class Results extends Component<Props> {
  public render() {
    return (
      <main className={styles.container}>
        <Card className={styles.tableWrapper}>
          <ResultsTable data={this.props.data} />
        </Card>
      </main>
    )
  }
}

export default Results
