import React from "react"
import { mount, shallow } from "enzyme"

import { Result } from "../"
import testData, { itineraryWithMultipleCarriers } from "../../../data/testData"

describe("<Result />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Result itinerary={testData[0]} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should toggle details when button is clicked", () => {
    const wrapper = mount(<Result itinerary={testData[0]} />)
    expect(wrapper.find("ResultDetails").exists()).toBe(false)
    wrapper.find("Button").simulate("click")
    expect(wrapper.find("ResultDetails").exists()).toBe(true)
    wrapper.find("Button").simulate("click")
    expect(wrapper.find("ResultDetails").exists()).toBe(false)
    wrapper.unmount()
  })

  it("should have carrier names instead of logos if there are more than one carriers", () => {
    const wrapper = shallow(
      <Result itinerary={itineraryWithMultipleCarriers} />
    )
    expect(wrapper.find(".logo").exists()).toBe(false)
    expect(wrapper.find(".carrierName")).toHaveLength(2)
  })

  it("should have multiple airlines text in priceCell if there are more than one carriers", () => {
    const wrapper = mount(<Result itinerary={itineraryWithMultipleCarriers} />)
    expect(wrapper.find(".price .dataCell .sub").text()).toBe(
      "Farklı havayolları"
    )
    wrapper.unmount()
  })
})
