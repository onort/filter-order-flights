/* tslint:disable object-literal-sort-keys */

import { FilterActionTypes } from "../"
import * as filterActions from "../filterActions"

describe("filter actions", () => {
  it("should fire selectAllAirlines action", () => {
    const expectedAction = {
      type: FilterActionTypes.SELECT_ALL_AIRLINES,
      airlines: [1, 2, 3]
    }
    expect(filterActions.selectAllAirlines([1, 2, 3])).toEqual(expectedAction)
  })

  it("should fire selectAllClasses action", () => {
    const expectedAction = {
      type: FilterActionTypes.SELECT_ALL_CLASSES
    }
    expect(filterActions.selectAllClasses()).toEqual(expectedAction)
  })

  it("should fire selectAllStops action", () => {
    const expectedAction = {
      type: FilterActionTypes.SELECT_ALL_STOPS
    }
    expect(filterActions.selectAllStops()).toEqual(expectedAction)
  })

  it("should fire setDurationFilter action", () => {
    const expectedAction = {
      type: FilterActionTypes.SET_DURATION_FILTER,
      value: 10
    }
    expect(filterActions.setDurationFilter(10)).toEqual(expectedAction)
  })

  it("should fire setPriceFilter action", () => {
    const expectedAction = {
      type: FilterActionTypes.SET_PRICE_FILTER,
      value: 10
    }
    expect(filterActions.setPriceFilter(10)).toEqual(expectedAction)
  })

  it("should fire toggleAirlineFilter action", () => {
    const expectedAction = {
      type: FilterActionTypes.TOGGLE_AIRLINE_FILTER,
      value: 10
    }
    expect(filterActions.toggleAirlineFilter(10)).toEqual(expectedAction)
  })

  it("should fire toggleClassFilter action", () => {
    const expectedAction = {
      type: FilterActionTypes.TOGGLE_CLASS_FILTER,
      value: "economy"
    }
    expect(filterActions.toggleClassFilter("economy")).toEqual(expectedAction)
  })

  it("should fire toggleStopFilter action", () => {
    const expectedAction = {
      type: FilterActionTypes.TOGGLE_STOP_FILTER,
      value: "direct"
    }
    expect(filterActions.toggleStopFilter("direct")).toEqual(expectedAction)
  })
})
