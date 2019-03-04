/* tslint:disable object-literal-sort-keys */

import { DataActionTypes as types } from "./actionTypes"
import axios, { AxiosResponse } from "axios"
import { Dispatch } from "redux"

import mockData from "../../data/mockData.json"
import { formatData } from "../../utils"
import { FormattedData } from "../../types"

export interface FetchDataAction {
  type: types.FETCH_DATA
  data: FormattedData
}

export interface FetchDataRequest {
  type: types.FETCH_DATA_REQUEST
}

export interface FetchDataSuccess {
  type: types.FETCH_DATA_SUCCESS
  data: FormattedData
}

export interface FetchDataError {
  type: types.FETCH_DATA_ERROR
  error: any
}

// fetchDataAsync not functional
// No 'Access-Control-Allow-Origin' header is present on the requested resource
const apiUrl = "https://json-uzchmiqrkj.now.sh"

export const fetchDataAsync = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDataRequest())
    try {
      const response: AxiosResponse<any> = await axios.get(apiUrl, {
        headers: { "Access-Control-Allow-Origin": "*" }
      })
      dispatch(fetchDataSuccess(formatData(response.data.result.Itineraries)))
    } catch (e) {
      dispatch(fetchDataError(e))
    }
  }
}

const fetchDataRequest = () => ({ type: types.FETCH_DATA_REQUEST })
const fetchDataSuccess = (data: FormattedData) => ({
  type: types.FETCH_DATA_SUCCESS,
  data
})
const fetchDataError = (error: any) => ({ type: types.FETCH_DATA_ERROR, error })

export const fetchData = (): FetchDataAction => ({
  type: types.FETCH_DATA,
  data: formatData(mockData.result.Itineraries)
})

export type DataAction = FetchDataAction
