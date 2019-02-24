import React, { Component } from "react"

import styles from "./App.module.scss"
import { Plane as plane } from "./assets/icons"

class App extends Component {
  public render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={plane} className={styles.logo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className={styles.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
