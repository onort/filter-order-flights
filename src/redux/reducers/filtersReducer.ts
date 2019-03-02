import { Reducer } from "redux"

import {
  DataActionTypes,
  FetchDataAction,
  FilterActionTypes,
  SelectAllAction,
  SetFilterAction,
  ToggleFilterAction
} from "../actions"
import { FiltersState } from "../../types"

const initialState: FiltersState = {
  airlines: [],
  classes: ["economy", "business", "corporate"],
  maxDuration: 0,
  maxPrice: 0,
  stops: ["direct", "singleStop", "multipleStops"]
}

const filtersReducer: Reducer<
  FiltersState,
  SelectAllAction | SetFilterAction | FetchDataAction | ToggleFilterAction
> = (
  state: FiltersState = initialState,
  action:
    | SelectAllAction
    | SetFilterAction
    | FetchDataAction
    | ToggleFilterAction
) => {
  switch (action.type) {
    case DataActionTypes.FETCH_DATA:
      const { filteringOptions } = action.data
      return {
        ...state,
        airlines: filteringOptions.airlines.map(airline => airline.id),
        maxDuration: filteringOptions.durationRange.max,
        maxPrice: filteringOptions.priceRange.max
      }

    case FilterActionTypes.SELECT_ALL_AIRLINES:
      if (action.airlines) return { ...state, airlines: action.airlines }
      return state

    case FilterActionTypes.SELECT_ALL_CLASSES:
      return { ...state, classes: initialState.classes }

    case FilterActionTypes.SELECT_ALL_STOPS:
      return { ...state, stops: initialState.stops }

    case FilterActionTypes.SET_DURATION_FILTER:
      return { ...state, maxDuration: action.value }

    case FilterActionTypes.SET_PRICE_FILTER:
      return { ...state, maxPrice: action.value }

    case FilterActionTypes.TOGGLE_AIRLINE_FILTER:
      const airlines = [...state.airlines]
      const airlineIndex = airlines.findIndex(
        airline => airline === action.value
      )
      if (airlineIndex === -1) airlines.push(action.value)
      else airlines.splice(airlineIndex, 1)
      return { ...state, airlines }

    case FilterActionTypes.TOGGLE_CLASS_FILTER:
      const classes = [...state.classes]
      const classIndex = classes.findIndex(cl => cl === action.value)
      if (classIndex === -1) classes.push(action.value)
      else classes.splice(classIndex, 1)
      return { ...state, classes }

    case FilterActionTypes.TOGGLE_STOP_FILTER:
      const stops = [...state.stops]
      const stopIndex = stops.findIndex(cl => cl === action.value)
      if (stopIndex === -1) stops.push(action.value)
      else stops.splice(stopIndex, 1)
      return { ...state, stops }

    default:
      return state
  }
}

export default filtersReducer
