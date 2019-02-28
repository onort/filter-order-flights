import { Reducer } from "redux"

import { DataActionTypes, FetchDataAction } from "../actions"

const filteringOptionsReducer: Reducer<{}, FetchDataAction> = (
  state = {},
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
