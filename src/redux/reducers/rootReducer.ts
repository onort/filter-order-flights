import { combineReducers, Reducer } from "redux"

import { filteringOptionsReducer, filtersReducer, itinerariesReducer } from "./"
import { FilteringOptions, FiltersState, Itinerary } from "../../types"

export interface ApplicationState {
  readonly filteringOptions: FilteringOptions
  readonly filters: FiltersState
  readonly itineraries: Itinerary[]
}

export const rootReducer: Reducer = combineReducers({
  filteringOptions: filteringOptionsReducer,
  filters: filtersReducer,
  itineraries: itinerariesReducer
})

export default rootReducer
