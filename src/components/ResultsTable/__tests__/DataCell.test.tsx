import React from "react"
import { shallow } from "enzyme"

import { DataCell } from "../"

describe("<DataCell />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<DataCell sub="Sub" val="Val" />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should render sub and value texts", () => {
    const wrapper = shallow(<DataCell sub="Sub" val="Val" />)
    expect(wrapper.find(".sub").text()).toBe("Sub")
    expect(wrapper.find(".val").text()).toBe("Val")
  })

  it("should have detailCell className if detailCell props is passed", () => {
    const wrapper = shallow(<DataCell sub="Sub" val="Val" detailCell={true} />)
    expect(wrapper.find(".detailCell").exists()).toBe(true)
  })

  it("should be able to have a custom className", () => {
    const testClassName = "testClassName"
    const wrapper = shallow(
      <DataCell className={testClassName} sub="Sub" val="Val" />
    )
    expect(wrapper.find(".dataCell").hasClass(testClassName)).toBe(true)
  })
})
