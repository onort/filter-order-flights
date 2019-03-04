/* tslint:disable jsx-key */

import React from "react"
import { mount, shallow } from "enzyme"

import Results from "../"
import { Card, ResultsTable } from "../../"

describe("<Results />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Results data={[]} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should have correct children", () => {
    const wrapper = mount(<Results data={[]} />)
    expect(
      wrapper.containsAllMatchingElements([
        <Card />,
        <ResultsTable data={[]} />
      ])
    )
    wrapper.unmount()
  })
})
