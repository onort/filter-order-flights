import React from "react"
import { shallow } from "enzyme"

import FooterMenuGroup from "../"
import { menuGroupD } from "../../Footer/Footer"

describe("<FooterMenuGroup />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(
      <FooterMenuGroup title={menuGroupD.title} links={menuGroupD.links} />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should have correct title", () => {
    const wrapper = shallow(
      <FooterMenuGroup title={menuGroupD.title} links={menuGroupD.links} />
    )
    expect(wrapper.find("h5").text()).toBe(menuGroupD.title)
  })

  it("should have correct amount of links", () => {
    const wrapper = shallow(
      <FooterMenuGroup title={menuGroupD.title} links={menuGroupD.links} />
    )
    expect(wrapper.find("a")).toHaveLength(menuGroupD.links.length)
  })
})
