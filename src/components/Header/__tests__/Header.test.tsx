/* tslint:disable jsx-key */
import React from "react"
import { mount, shallow } from "enzyme"

import { Contact, Help, Home, Sale } from "../../../assets/icons"
import { ThyLogo } from "../../../assets/images"
import { Header, NavItem } from "../../"

describe("<Header />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should have correct NavItems", () => {
    const wrapper = mount(<Header />)
    expect(
      wrapper.containsAllMatchingElements([
        <img src={ThyLogo} alt="Logo" />,
        <NavItem title="Ana Sayfa" icon={Home} active={true} uri="#" />,
        <NavItem title="Süper Fırsatlar" icon={Sale} uri="#" />,
        <NavItem title="Yardım" icon={Help} uri="#" />,
        <NavItem title="İletişim" icon={Contact} uri="#" />
      ])
    )
    wrapper.unmount()
  })
})
