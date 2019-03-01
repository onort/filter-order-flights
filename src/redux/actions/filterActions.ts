/* tslint:disable object-literal-sort-keys */

import { FilterActionTypes as types } from "./actionTypes"

export interface SetFilterAction {
  type: types.SET_DURATION_FILTER | types.SET_PRICE_FILTER
  value: number
}

export const setDurationFilter = (value: number) => ({
  type: types.SET_DURATION_FILTER,
  value
})

export const setPriceFilter = (value: number) => ({
  type: types.SET_PRICE_FILTER,
  value
})
