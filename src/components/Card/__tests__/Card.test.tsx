import React from "react"
import { shallow } from "enzyme"

import Card from "../"

describe("<Card />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(
      <Card>
        <span>Test content.</span>
      </Card>
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should have a custom classname", () => {
    const testClassName = "testClassName"
    const wrapper = shallow(
      <Card className={testClassName}>
        <span>Test content.</span>
      </Card>
    )
    expect(wrapper.find("div").hasClass(testClassName)).toBe(true)
  })
})
