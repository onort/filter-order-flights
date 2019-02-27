/* tslint:disable jsx-key */
import React from "react"
import { mount, shallow } from "enzyme"

import { ThyLogo } from "../../../assets/images"
import Footer, {
  menuGroupA,
  menuGroupB,
  menuGroupC,
  menuGroupD
} from "../Footer"
import { FooterMenuGroup } from "../../"

describe("<Footer />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should have correct children", () => {
    const wrapper = mount(<Footer />)
    expect(
      wrapper.containsAllMatchingElements([
        <img src={ThyLogo} alt="Logo" />,
        <FooterMenuGroup title={menuGroupA.title} links={menuGroupA.links} />,
        <FooterMenuGroup title={menuGroupB.title} links={menuGroupB.links} />,
        <FooterMenuGroup title={menuGroupC.title} links={menuGroupC.links} />,
        <FooterMenuGroup title={menuGroupD.title} links={menuGroupD.links} />
      ])
    )
    wrapper.unmount()
  })
})
