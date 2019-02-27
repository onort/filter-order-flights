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

class App extends Component {
  public render() {
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
