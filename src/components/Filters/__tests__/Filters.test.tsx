import React from "react"
import { shallow, ShallowWrapper } from "enzyme"

import { Filters } from "../Filters"
import { initialState as filtersInitialState } from "../../../redux/reducers/filtersReducer"
import { initialState as filteringOptionsInitialState } from "../../../redux/reducers/filteringOptionsReducer"

describe("<Filters />", () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    const allAirlines = jest.fn()
    const allClasses = jest.fn()
    const allStops = jest.fn()
    const setDuration = jest.fn()
    const setPrice = jest.fn()
    const toggleAirline = jest.fn()
    const toggleClass = jest.fn()
    const toggleStop = jest.fn()

    wrapper = shallow(
      <Filters
        allAirlines={allAirlines}
        allClasses={allClasses}
        allStops={allStops}
        setDuration={setDuration}
        setPrice={setPrice}
        toggleAirline={toggleAirline}
        toggleClass={toggleClass}
        toggleStop={toggleStop}
        filteringOptions={filteringOptionsInitialState}
        filters={filtersInitialState}
      />
    )
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
