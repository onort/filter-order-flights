import React from "react"
import { mount, shallow } from "enzyme"

import SearchBar from "../"
import { SearchForm } from "../../"

describe("<SearchBar />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<SearchBar type="primary" />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should have correct type of SearchForm", () => {
    const wrapper = mount(<SearchBar type="secondary" />)
    expect(wrapper.find(SearchForm).prop("type")).toBe("secondary")
    wrapper.unmount()
  })

  it("should have a title for secondary type", () => {
    const wrapper = mount(<SearchBar type="secondary" />)
    expect(wrapper.find("h2").exists()).toBe(true)
    expect(wrapper.find("h2").text()).toBe("En uygun bileti hemen bul")
    wrapper.unmount()
  })
})
