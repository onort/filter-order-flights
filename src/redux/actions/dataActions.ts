/* tslint:disable object-literal-sort-keys */

import { DataActionTypes as types } from "./actionTypes"

import mockData from "../../data/mockData.json"
import { formatData } from "../../utils"
import { FormattedData } from "../../types"

export interface FetchDataAction {
  type: types.FETCH_DATA
  data: FormattedData
}

export const fetchData = (): FetchDataAction => ({
  type: types.FETCH_DATA,
  data: formatData(mockData.result.Itineraries)
})

export type DataAction = FetchDataAction
