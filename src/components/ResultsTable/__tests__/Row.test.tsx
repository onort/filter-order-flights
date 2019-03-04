import React from "react"
import { shallow } from "enzyme"

import { Row } from "../"

describe("<Row />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(
      <Row>
        <span>Test</span>
      </Row>
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should be able to have a custom className", () => {
    const testClassName = "testClassName"
    const wrapper = shallow(
      <Row className={testClassName}>
        <span>Test</span>
      </Row>
    )
    expect(wrapper.find("div.row").hasClass(testClassName)).toBe(true)
  })
})
