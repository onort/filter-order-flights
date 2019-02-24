import React, { Component } from "react"

import styles from "./App.module.scss"
import { Header } from "./components"

class App extends Component {
  public render() {
    return (
      <div className={styles.app}>
        <Header />
      </div>
    )
  }
}

export default App
