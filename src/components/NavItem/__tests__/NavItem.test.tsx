import React from "react"
import { shallow } from "enzyme"

import NavItem from "../"
import { Home } from "../../../assets/icons"

describe("<NavItem />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<NavItem title="Home" icon={Home} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should have a active classname when active prop has been passed", () => {
    const wrapper = shallow(<NavItem title="Home" icon={Home} active={true} />)
    expect(wrapper.find("a").hasClass("active")).toBe(true)
  })

  it("should have a custom classname", () => {
    const testClassName = "testClassName"
    const wrapper = shallow(
      <NavItem title="Home" icon={Home} className={testClassName} />
    )
    expect(wrapper.find("a").hasClass(testClassName)).toBe(true)
  })
})
