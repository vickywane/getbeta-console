import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import Login from "../pages/auth/login/signin"
import { AuthStore } from "../state/"

Enzyme.configure({ adapter: new Adapter() })

describe("Tests for the Login Page", () => {
  const Component = shallow(<Login AuthStore={AuthStore} />)

  it("Login Page is rendered with specific Elements", () => {
    expect(Component.find("h4"))

    expect(Component.exists(".input"))
    // expect(Component.find("input")).toHaveLength(6)
  })
})
