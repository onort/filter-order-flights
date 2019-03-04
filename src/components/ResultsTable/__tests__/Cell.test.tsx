import React from "react"
import { shallow } from "enzyme"

import { Cell } from "../"

describe("<Cell />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(
      <Cell>
        <span>Test</span>
      </Cell>
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should be able to have a custom className", () => {
    const testClassName = "testClassName"
    const wrapper = shallow(
      <Cell className={testClassName}>
        <span>Test</span>
      </Cell>
    )
    expect(wrapper.find("div.cell").hasClass(testClassName)).toBe(true)
  })
})
