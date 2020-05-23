import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { ApolloProvider } from "@apollo/react-hooks"

import client from "../data/config"
import Login from "../pages/forms/auth/signin"
import { AuthStore } from "../state/"

Enzyme.configure({ adapter: new Adapter() })

describe("Tests the Authemtication Setup", () => {
  const Component = shallow(
    <ApolloProvider client={client}>
      <Login AuthStore={AuthStore} />
    </ApolloProvider>
  )

  it("Login Component is rendered with specific Elements", () => {
    expect(Component.find("h4"))

    expect(Component.exists(".input"))

    expect(Component).toMatchSnapshot()
    // expect(Component.find("input")).toHaveLength(6)
  })

  it("Create Account Component is rendered with specific Elements", () => {
    expect(Component.find("h4"))

    expect(Component.exists(".input"))

    expect(Component).toMatchSnapshot()
  })
})
