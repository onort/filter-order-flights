import React from "react"
import { shallow } from "enzyme"

import Pagination from "../"

const mockClickHandler = jest.fn()

describe("<Pagination />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(
      <Pagination activeIndex={1} totalPages={2} onClick={mockClickHandler} />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should have correct amount of button elements", () => {
    const totalPages = 5
    const wrapper = shallow(
      <Pagination
        activeIndex={1}
        totalPages={totalPages}
        onClick={mockClickHandler}
      />
    )
    expect(wrapper.find("button")).toHaveLength(totalPages)
  })

  it("should have active class on correct child", () => {
    const wrapper = shallow(
      <Pagination activeIndex={2} totalPages={2} onClick={mockClickHandler} />
    )
    expect(wrapper.find(".active").text()).toBe("2")
  })

  it("should fire onClick when pageNumber is clicked", () => {
    const handleClick = jest.fn()
    const wrapper = shallow(
      <Pagination activeIndex={1} totalPages={3} onClick={handleClick} />
    )
    wrapper
      .find("button")
      .at(2)
      .simulate("click")
    expect(handleClick).toBeCalledTimes(1)
    expect(handleClick).toBeCalledWith(3)
  })
})
