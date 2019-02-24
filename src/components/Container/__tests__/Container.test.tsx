import React from "react"
import { shallow } from "enzyme"

import Container from "../"

describe("<Container />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(
      <Container>
        <span>Test content.</span>
      </Container>
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should have a custom classname", () => {
    const testClassName = "testClassName"
    const wrapper = shallow(
      <Container className={testClassName}>
        <span>Test content.</span>
      </Container>
    )
    expect(wrapper.find("div").hasClass(testClassName)).toBe(true)
  })
})
