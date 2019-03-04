import React from "react"
import { mount, shallow } from "enzyme"

import OrderResults from "../"
import { Dropdown } from "../../"
import { orderingOptions } from "../../../App"

const mockOnSelect = jest.fn()

describe("<OrderResults />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(
      <OrderResults
        flightCount={10}
        onOrderSelect={mockOnSelect}
        orderingOptions={orderingOptions}
        selectedOrder={orderingOptions[0]}
      />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should show correct flight amount", () => {
    const flightCount = 10
    const wrapper = shallow(
      <OrderResults
        flightCount={flightCount}
        onOrderSelect={mockOnSelect}
        orderingOptions={orderingOptions}
        selectedOrder={orderingOptions[0]}
      />
    )
    expect(wrapper.find(".flightCount").text()).toBe(
      `${flightCount} Uçuş Listeleniyor`
    )
  })

  it("should correct text if there are no flights", () => {
    const wrapper = shallow(
      <OrderResults
        flightCount={0}
        onOrderSelect={mockOnSelect}
        orderingOptions={orderingOptions}
        selectedOrder={orderingOptions[0]}
      />
    )
    expect(wrapper.find(".flightCount").text()).toBe(
      "Kriterlere Uygun Uçuş Bulunamadı"
    )
  })

  it("should have a Dropdown component as child", () => {
    const wrapper = mount(
      <OrderResults
        flightCount={0}
        onOrderSelect={mockOnSelect}
        orderingOptions={orderingOptions}
        selectedOrder={orderingOptions[0]}
      />
    )
    expect(wrapper.find(Dropdown).exists()).toBe(true)
    wrapper.unmount()
  })
})
