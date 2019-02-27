import React, { Component } from "react"

import styles from "./App.module.scss"
import {
  Filters,
  Footer,
  Header,
  OrderResults,
  SearchForm,
  SearchBar
} from "./components"

class App extends Component {
  public render() {
    return (
      <div className={styles.app}>
        <Header />
        <SearchBar type="primary" />
        <OrderResults flightCount={25} />
        <main className={styles.main}>
          <Filters />
        </main>
        <SearchBar type="secondary" />
        <Footer />
      </div>
    )
  }
}

export default App
