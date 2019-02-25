import React, { Component } from "react"

import styles from "./App.module.scss"
import { Header, SearchBar } from "./components"

class App extends Component {
  public render() {
    return (
      <div className={styles.app}>
        <Header />
        <section className={styles.searchSection}>
          <SearchBar />
        </section>
      </div>
    )
  }
}

export default App
