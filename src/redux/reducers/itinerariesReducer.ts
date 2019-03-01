import { Reducer } from "redux"

import { DataActionTypes, FetchDataAction } from "../actions"
import { Itinerary } from "../../types"

const itinerariesReducer: Reducer<Itinerary[], FetchDataAction> = (
  state = [],
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
