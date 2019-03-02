import React from "react"
import { shallow } from "enzyme"

import Dropdown from "../"

const testTitle = "Dropdown"
const mockOnSelect = jest.fn
const orderingOptions = [
  { text: "Ucuzdan Pahalıya", value: "minPrice" },
  { text: "Pahalıdan Ucuza", value: "maxPrice" },
  { text: "Tarihe Göre Yakın", value: "closest" },
  { text: "Tarihe Göre Uzak", value: "farthest" }
]
const selectedOrder = orderingOptions[0]

describe("<Dropdown />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(
      <Dropdown
        title={testTitle}
        onSelect={mockOnSelect}
        orderingOtions={orderingOptions}
        selectedOrder={selectedOrder}
      />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should render title when passed", () => {
    const wrapper = shallow(
      <Dropdown
        title={testTitle}
        onSelect={mockOnSelect}
        orderingOtions={orderingOptions}
        selectedOrder={selectedOrder}
      />
    )
    expect(wrapper.find(".title").text()).toBe(testTitle)
  })

  it("should show select list when clicked", () => {
    const wrapper = shallow(
      <Dropdown
        title={testTitle}
        onSelect={mockOnSelect}
        orderingOtions={orderingOptions}
        selectedOrder={selectedOrder}
      />
    )
    expect(wrapper.find(".dropdownList").exists()).toBe(false)
    wrapper.find(".selected").simulate("click")
    expect(wrapper.find(".dropdownList").exists()).toBe(true)
  })

  it("should have correct amount of list items", () => {
    const wrapper = shallow(
      <Dropdown
        title={testTitle}
        onSelect={mockOnSelect}
        orderingOtions={orderingOptions}
        selectedOrder={selectedOrder}
      />
    )
    wrapper.find(".selected").simulate("click")
    expect(wrapper.find("li")).toHaveLength(orderingOptions.length)
  })

  it("should fire onSelect when a list item is clicked", () => {
    const onSelect = jest.fn()
    const wrapper = shallow(
      <Dropdown
        title={testTitle}
        onSelect={onSelect}
        orderingOtions={orderingOptions}
        selectedOrder={selectedOrder}
      />
    )
    wrapper.find(".selected").simulate("click")
    wrapper
      .find("li")
      .at(2)
      .simulate("click")
    expect(onSelect).toBeCalledTimes(1)
    expect(onSelect).toBeCalledWith(orderingOptions[2].value)
  })
})
