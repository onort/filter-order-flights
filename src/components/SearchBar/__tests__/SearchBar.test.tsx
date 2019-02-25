/* tslint:disable jsx-key */
import React from "react"
import { shallow, mount } from "enzyme"

import {
  Arrival,
  ArrivalDate,
  Departure,
  DepartureDate,
  Person
} from "../../../assets/icons"
import { Button, FormField, SearchBar } from "../../"

describe("<SearchBar />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<SearchBar />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("should have correct children", () => {
    const wrapper = mount(<SearchBar />)
    expect(
      wrapper.containsAllMatchingElements([
        <FormField icon={Departure} size="normal" />,
        <FormField icon={Arrival} size="normal" />,
        <FormField icon={DepartureDate} size="normal" />,
        <FormField icon={ArrivalDate} size="normal" />,
        <FormField icon={Person} size="small" />,
        <Button text="Yeniden Ara" primary={true} />
      ])
    )
    wrapper.unmount()
  })

  it("should have a custom classname", () => {
    const testClassName = "testClassName"
    const wrapper = shallow(<SearchBar className={testClassName} />)
    expect(wrapper.find("div.container").hasClass(testClassName)).toBe(true)
  })
})
