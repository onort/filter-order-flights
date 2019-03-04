import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import "normalize.css"
import store from "./redux/store"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
serviceWorker.unregister()
