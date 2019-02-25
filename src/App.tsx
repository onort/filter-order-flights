import React, { Component } from "react"

import styles from "./App.module.scss"
import { Filters, Header, OrderResults, SearchBar } from "./components"

class App extends Component {
  public render() {
    return (
      <div className={styles.app}>
        <Header />
        <section className={styles.searchSection}>
          <SearchBar />
        </section>
        <OrderResults flightCount={25} />
        <main className={styles.main}>
          <Filters />
        </main>
      </div>
    )
  }
}

export default App
