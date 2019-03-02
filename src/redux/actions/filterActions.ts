/* tslint:disable object-literal-sort-keys */

import { FilterActionTypes as types } from "./actionTypes"

export interface SelectAllAction {
  type:
    | types.SELECT_ALL_AIRLINES
    | types.SELECT_ALL_CLASSES
    | types.SELECT_ALL_STOPS

  airlines?: number[]
}

export interface SetFilterAction {
  type:
    | types.SET_DURATION_FILTER
    | types.SET_PRICE_FILTER
    | types.TOGGLE_AIRLINE_FILTER

  value: number
}

export interface ToggleFilterAction {
  type: types.TOGGLE_CLASS_FILTER | types.TOGGLE_STOP_FILTER

  value: string
}

export type FilterAction =
  | SelectAllAction
  | SetFilterAction
  | ToggleFilterAction

export const selectAllAirlines = (airlines: number[]) => ({
  type: types.SELECT_ALL_AIRLINES,
  airlines
})

export const selectAllClasses = () => ({
  type: types.SELECT_ALL_CLASSES
})

export const selectAllStops = () => ({
  type: types.SELECT_ALL_STOPS
})

export const setDurationFilter = (value: number) => ({
  type: types.SET_DURATION_FILTER,
  value
})

export const setPriceFilter = (value: number) => ({
  type: types.SET_PRICE_FILTER,
  value
})

export const toggleAirlineFilter = (value: number) => ({
  type: types.TOGGLE_AIRLINE_FILTER,
  value
})

export const toggleClassFilter = (value: string) => ({
  type: types.TOGGLE_CLASS_FILTER,
  value
})

export const toggleStopFilter = (value: string) => ({
  type: types.TOGGLE_STOP_FILTER,
  value
})
