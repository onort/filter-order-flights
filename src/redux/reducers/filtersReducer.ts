import { Reducer } from "redux"

import {
  DataActionTypes,
  FetchDataAction,
  FilterActionTypes,
  SetFilterAction
} from "../actions"
import { FiltersState } from "../../types"

const initialState: FiltersState = {
  maxDuration: 0,
  maxPrice: 0
}

const filtersReducer: Reducer<
  FiltersState,
  SetFilterAction | FetchDataAction
> = (state = initialState, action: SetFilterAction | FetchDataAction) => {
  switch (action.type) {
    case DataActionTypes.FETCH_DATA:
      const { filteringOptions } = action.data
      return {
        maxDuration: filteringOptions.durationRange.max,
        maxPrice: filteringOptions.priceRange.max
      }
    case FilterActionTypes.SET_DURATION_FILTER:
      return { ...state, maxDuration: action.value }
    case FilterActionTypes.SET_PRICE_FILTER:
      return { ...state, maxPrice: action.value }
    default:
      return state
  }
}

export default filtersReducer
