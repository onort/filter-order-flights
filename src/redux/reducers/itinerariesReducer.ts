import { Reducer } from "redux"

import { DataActionTypes, FetchDataAction } from "../actions"

const itinerariesReducer: Reducer<{}, FetchDataAction> = (
  state = {},
  action: FetchDataAction
) => {
  switch (action.type) {
    case DataActionTypes.FETCH_DATA:
      return action.data.itineraries
    default:
      return state
  }
}

export default itinerariesReducer
