import filtersReducer, { initialState } from "../filtersReducer"
import { FilterActionTypes } from "../../actions/actionTypes"

describe("filters reducer", () => {
  it("should handle selectAllAirlines correctly", () => {
    const airlines = [1, 2, 3]
    expect(
      filtersReducer(initialState, {
        airlines,
        type: FilterActionTypes.SELECT_ALL_AIRLINES
      })
    ).toEqual({ ...initialState, airlines })
  })

  it("should handle selectAllStops correctly", () => {
    const stops: string[] = ["direct"]
    expect(
      filtersReducer(
        { ...initialState, stops },
        {
          type: FilterActionTypes.SELECT_ALL_STOPS
        }
      )
    ).toEqual(initialState)
  })

  it("should handle selectAllClasses correctly", () => {
    const classes: string[] = ["economy"]
    expect(
      filtersReducer(
        { ...initialState, classes },
        {
          type: FilterActionTypes.SELECT_ALL_CLASSES
        }
      )
    ).toEqual(initialState)
  })

  it("should handle setPriceFilter correctly", () => {
    const value = 10
    expect(
      filtersReducer(initialState, {
        type: FilterActionTypes.SET_PRICE_FILTER,
        value
      })
    ).toEqual({ ...initialState, maxPrice: value })
  })

  it("should handle setDurationFilter correctly", () => {
    const value = 10
    expect(
      filtersReducer(initialState, {
        type: FilterActionTypes.SET_DURATION_FILTER,
        value
      })
    ).toEqual({ ...initialState, maxDuration: value })
  })

  it("should handle toggleAirlineFilter correctly", () => {
    expect(
      filtersReducer(initialState, {
        type: FilterActionTypes.TOGGLE_AIRLINE_FILTER,
        value: 1
      })
    ).toEqual({ ...initialState, airlines: [1] })
    expect(
      filtersReducer(
        { ...initialState, airlines: [1] },
        {
          type: FilterActionTypes.TOGGLE_AIRLINE_FILTER,
          value: 1
        }
      )
    ).toEqual(initialState)
  })

  it("should handle toggleClassFilter correctly", () => {
    expect(
      filtersReducer(initialState, {
        type: FilterActionTypes.TOGGLE_CLASS_FILTER,
        value: "economy"
      })
    ).toEqual({ ...initialState, classes: ["business", "corporate"] })
    expect(
      filtersReducer(
        { ...initialState, classes: ["business", "corporate"] },
        {
          type: FilterActionTypes.TOGGLE_CLASS_FILTER,
          value: "economy"
        }
      )
    ).toEqual({
      ...initialState,
      classes: ["business", "corporate", "economy"]
    })
  })

  it("should handle toggleStopsFilter correctly", () => {
    expect(
      filtersReducer(initialState, {
        type: FilterActionTypes.TOGGLE_STOP_FILTER,
        value: "direct"
      })
    ).toEqual({ ...initialState, stops: ["singleStop", "multipleStops"] })
    expect(
      filtersReducer(
        { ...initialState, stops: ["singleStop", "multipleStops"] },
        {
          type: FilterActionTypes.TOGGLE_STOP_FILTER,
          value: "direct"
        }
      )
    ).toEqual({
      ...initialState,
      stops: ["singleStop", "multipleStops", "direct"]
    })
  })
})
