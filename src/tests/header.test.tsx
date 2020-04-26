import React from "react"
import { Header } from "../components/"
import { render } from "@testing-library/react"
import { AuthStore, ConsoleStore } from "../state"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

test("Header contains specific links", () => {
  const component = shallow(
    <Header
      AuthStore={AuthStore}
      ConsoleStore={ConsoleStore}
      page={"non-app"}
    />
  )

  let tree = component

  expect(tree).toMatchSnapshot()

  const { getByText } = render(
    <Header
      AuthStore={AuthStore}
      ConsoleStore={ConsoleStore}
      page={"non-app"}
    />
  )

  const linkElement = getByText(/Oasis/i)
  expect(linkElement).toBeInTheDocument()
})
