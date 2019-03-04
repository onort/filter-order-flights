import React from "react"
import { shallow, mount } from "enzyme"

import ResultsTable from "../"
import testData from "../../../data/testData"

describe("<ResultsTable />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<ResultsTable data={testData} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should have table header", () => {
    const wrapper = shallow(<ResultsTable data={testData} />)
    expect(wrapper.find(".header").exists()).toBe(true)
  })

  it("should not have a table header if data array is empty", () => {
    const wrapper = shallow(<ResultsTable data={[]} />)
    expect(wrapper.find(".header").exists()).toBe(false)
  })

  it("should show no result card if data array is empty", () => {
    const wrapper = shallow(<ResultsTable data={[]} />)
    expect(wrapper.find(".noResult").exists()).toBe(true)
  })

  it("should have correct amount of result items", () => {
    const wrapper = mount(<ResultsTable data={testData} />)
    expect(wrapper.find("Result")).toHaveLength(1)
    wrapper.unmount()
  })
})
