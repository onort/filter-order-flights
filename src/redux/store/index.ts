import { applyMiddleware, compose, createStore, Store } from "redux"
import thunk from "redux-thunk"

import { rootReducer, ApplicationState } from "../reducers"

const enhancer = compose(
  applyMiddleware(thunk),
  (window as any) && (window as any).__REDUX_DEVTOOLS_EXTENSION__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    : (f: any) => f
)

const store: Store<ApplicationState> = createStore(rootReducer, enhancer)

export default store
