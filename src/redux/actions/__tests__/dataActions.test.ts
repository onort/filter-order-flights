/* tslint:disable object-literal-sort-keys */

import { fetchData, DataActionTypes } from "../"

import mockData from "../../../data/mockData.json"
import { formatData } from "../../../utils"

describe("data actions", () => {
  it("should fire a fetchData action", () => {
    const expectedAction = {
      type: DataActionTypes.FETCH_DATA,
      data: formatData(mockData.result.Itineraries)
    }
    expect(fetchData()).toEqual(expectedAction)
  })
})
