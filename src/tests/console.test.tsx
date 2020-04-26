import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { MockedProvider } from "@apollo/react-testing"
import { ApolloProvider } from "@apollo/react-hooks"

import { Console } from "../pages/"
import { ConsoleStore, AuthStore } from "../state/"
import { GET_USER } from "../data/queries"
import client from "../data/config"
import { Loader } from "../components/"

Enzyme.configure({ adapter: new Adapter() })

const mockedData = [
  {
    request: {
      query: GET_USER,
      variables: { id: 5577006791947779410 },
    },
    result: {
      data: {
        ID: 5577006791947779410,
        Name: "John Doe",
        Email: "Johndoe@gmail.com",
        BucketLink: "https://google.cloud.com/storage",
      },
    },
  },
]

describe("Tests the User Console", () => {
  const Component = shallow(
    <MockedProvider mocks={mockedData} addTypename={false}>
      <ApolloProvider client={client}>
        <Console AuthStore={AuthStore} ConsoleStore={ConsoleStore} />
      </ApolloProvider>
    </MockedProvider>
  )

  it("Check that Apollo works correctly", () => {
    const tree = Component
    console.log(tree.children)

    //Todo : check if apollo is loading && if loader component is present

    // expect(tree.children).toContain(<Loader/>)
  })

  it("checks if main items exits", () => {
    const ConsoleWrapper = Component

    expect(ConsoleWrapper.find("h2"))
  })
})
