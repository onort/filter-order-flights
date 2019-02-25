import React from "react"
import { shallow } from "enzyme"

import FilterSection from "../"

describe("<FilterSection />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<FilterSection title="Test" />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should display display title", () => {
    const testTitle = "Test Title"
    const wrapper = shallow(
      <FilterSection title={testTitle} canSelectAll={true} />
    )
    expect(wrapper.find(".title").exists()).toBe(true)
    expect(wrapper.find(".title").text()).toBe(testTitle)
  })

  it("should display select all option if prop has been passed", () => {
    const wrapper = shallow(<FilterSection title="Test" canSelectAll={true} />)
    expect(wrapper.find(".selectAll").exists()).toBe(true)
    expect(wrapper.find(".selectAll").text()).toBe("Tümünü Seç")
  })

  it("should fire onSelectAll when select all span is clicked", () => {
    const handleSelectAll = jest.fn()
    const wrapper = shallow(
      <FilterSection
        title="Test"
        canSelectAll={true}
        onSelectAll={handleSelectAll}
      />
    )
    wrapper.find(".selectAll").simulate("click")
    expect(handleSelectAll).toBeCalledTimes(1)
  })

  it("should be able to have a custom className", () => {
    const testClassName = "testClassName"
    const wrapper = shallow(
      <FilterSection title="Test" className={testClassName} />
    )
    expect(wrapper.find("div.container").hasClass(testClassName)).toBe(true)
  })
})
