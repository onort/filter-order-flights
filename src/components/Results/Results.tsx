import React, { Component } from "react"

import styles from "./Results.module.scss"

import { Card, ResultsTable } from "../"

class Results extends Component {
  public render() {
    return (
      <main className={styles.container}>
        <Card>
          <ResultsTable />
        </Card>
      </main>
    )
  }
}

export default Results
