import { Reducer } from "redux"

import { DataActionTypes, FetchDataAction } from "../actions"
import { FilteringOptions } from "../../types"

const initialState = {
  airlineCodes: [],
  airlines: [],
  durationRange: { max: 0, min: 0 },
  priceRange: { max: 0, min: 0 },
  stops: { direct: 0, singleStop: 0, multipleStops: 0 }
}

const filteringOptionsReducer: Reducer<FilteringOptions, FetchDataAction> = (
  state = initialState,
  action: FetchDataAction
) => {
  switch (action.type) {
    case DataActionTypes.FETCH_DATA:
      return action.data.filteringOptions
    default:
      return state
  }
}

export default filteringOptionsReducer
