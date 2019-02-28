/* tslint:disable no-console */
import React, { Component } from "react"

import styles from "./App.module.scss"
import {
  Filters,
  Footer,
  Header,
  OrderResults,
  Results,
  SearchBar
} from "./components"
import data from "./data/mockData.json"
import { formatData, getFilters } from "./utils"

class App extends Component {
  public render() {
    console.log(data.result.Itineraries.find(d => d.Filter.Carriers.length > 1))
    console.log(data.result.Carriers)
    console.log("Format Data", formatData(data.result.Itineraries))
    return (
      <div className={styles.app}>
        <Header />
        <SearchBar type="primary" />
        <OrderResults flightCount={25} />
        <div className={styles.main}>
          <Filters />
          <Results />
        </div>
        <SearchBar type="secondary" />
        <Footer />
      </div>
    )
  }
}

export default App
