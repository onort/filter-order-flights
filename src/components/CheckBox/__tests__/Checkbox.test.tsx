import React from "react"
import { shallow, mount } from "enzyme"

import CheckBox from "../"

const mockChange = jest.fn()

describe("<CheckBox />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<CheckBox label="Test" onChange={mockChange} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should have label rendered", () => {
    const testLabel = "Test"
    const wrapper = shallow(<CheckBox label="Test" onChange={mockChange} />)
    expect(wrapper.find("label").text()).toBe(testLabel)
  })

  it("should have checked class when checked prop has been passed", () => {
    const wrapper = shallow(
      <CheckBox label="Test" onChange={mockChange} checked={true} />
    )
    expect(wrapper.find(".checkmark").hasClass("checked")).toBe(true)
  })

  it("should fire onChange when input is clicked", () => {
    const handleChange = jest.fn()
    const wrapper = mount(<CheckBox label="Test" onChange={handleChange} />)
    wrapper.find("input").simulate("change", { target: { checked: true } })
    expect(handleChange).toBeCalledTimes(1)
    wrapper.unmount()
  })

  it("should be able to have a custom className", () => {
    const testClassName = "testClassName"
    const wrapper = shallow(
      <CheckBox className={testClassName} label="Test" onChange={mockChange} />
    )
    expect(wrapper.find("label").hasClass(testClassName)).toBe(true)
  })
})
