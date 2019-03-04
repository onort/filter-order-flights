import React from "react"
import { mount, shallow, ShallowWrapper } from "enzyme"

import ResultDetails from "../"

const legs = [
  {
    arrival: {
      airportCode: "ADB",
      airportName: "Izmir",
      time: "2017-04-14T09:10:00"
    },
    carrier: "Pegasus Airlines",
    departure: {
      airportCode: "ADA",
      airportName: "Adana",
      time: "2017-04-14T07:40:00"
    },
    duration: 90,
    flightCode: "PC 3011"
  }
]

const pricingOptions = [
  {
    agent: "Pegasus Airlines",
    price: 66.99
  },
  {
    agent: "AeroBilet",
    price: 70.34
  }
]

describe("<ResultDetails />", () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(
      <ResultDetails legs={legs} pricingOptions={pricingOptions} />
    )
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should have correct amount of legRows", () => {
    expect(wrapper.find(".legRow")).toHaveLength(1)
  })

  it("should have correct amount of priceOptions", () => {
    expect(wrapper.find(".priceOption")).toHaveLength(2)
  })
})
