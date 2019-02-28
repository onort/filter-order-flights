import { combineReducers, Reducer } from "redux"

import { filteringOptionsReducer, itinerariesReducer } from "./"

export interface ApplicationState {
  readonly filteringOptions: object
  readonly itineraries: any[]
}

export const rootReducer: Reducer = combineReducers({
  filteringOptions: filteringOptionsReducer,
  itineraries: itinerariesReducer
})

export default rootReducer
