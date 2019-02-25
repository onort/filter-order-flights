import React from "react"
import { shallow } from "enzyme"

import Slider from "../"

const mockChange = jest.fn()

describe("<Slider />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(
      <Slider onChange={mockChange} max={10} min={0} currentValue={0} />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should fire onChange function when a change occurs", () => {
    const handleChange = jest.fn()
    const wrapper = shallow(
      <Slider onChange={handleChange} max={10} min={0} currentValue={0} />
    )
    wrapper.find("input").simulate("change", { target: { value: 1 } })
    expect(handleChange).toBeCalledTimes(1)
    expect(handleChange).toBeCalledWith({ target: { value: 1 } })
  })

  it("should be able to have a custom className", () => {
    const testClassName = "testClassName"
    const wrapper = shallow(
      <Slider
        className={testClassName}
        onChange={mockChange}
        max={10}
        min={0}
        currentValue={0}
      />
    )
    expect(wrapper.find("div.container").hasClass(testClassName)).toBe(true)
  })
})
