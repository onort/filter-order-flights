import React from "react"
import { shallow } from "enzyme"

import Button from "../"

const testText = "Test"

describe("<Button />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Button text={testText} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should have text rendered", () => {
    const wrapper = shallow(<Button text={testText} />)
    expect(wrapper.find("button").text()).toBe(testText)
  })

  it("should render primary button", () => {
    const wrapper = shallow(<Button text={testText} primary={true} />)
    expect(wrapper.find("button").hasClass("primary")).toBe(true)
  })

  it("should render secondary button", () => {
    const wrapper = shallow(<Button text={testText} secondary={true} />)
    expect(wrapper.find("button").hasClass("secondary")).toBe(true)
  })

  it("should pass button type correctly", () => {
    const wrapper = shallow(<Button text={testText} type="submit" />)
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true)
  })

  it("should fire onClick when button is clicked", () => {
    const handleClick = jest.fn()
    const wrapper = shallow(<Button text={testText} onClick={handleClick} />)
    wrapper.find("button").simulate("click")
    expect(handleClick).toBeCalledTimes(1)
  })

  it("should be able to have a custom className", () => {
    const testClassName = "testClassName"
    const wrapper = shallow(
      <Button text={testText} className={testClassName} />
    )
    expect(wrapper.find("button").hasClass(testClassName)).toBe(true)
  })
})
