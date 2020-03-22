import React from "react"
import { inject, observer } from "mobx-react"
import Flex from "styled-flex-component"
import { Link } from "react-router-dom"
import { useQuery } from "@apollo/react-hooks"
import Profile from "../user/profile"

import { Header, Footer } from "../../components/"
import {
  Body,
  Card,
  Bounce,
  Name,
  Section,
  Title,
  Text,
  Hover,
} from "../../styles/style"
import { TEST } from "../../data/queries"
// import Create from "./create"

const Console = (props): JSX.Element => {
  const { loading, error, data } = useQuery(TEST, {})

  const datas = [
    { i: 1, name: "OSCA" },
    { i: 2, name: "FB Eng" },
    { i: 3, name: "GDG Eng" },
    { i: 4, name: "FB DevC" },
    { i: 5, name: "CCHUB" },
    { i: 6, name: "LPDVS" },
  ]

  return (
    <div>
      <Header />
      <Body>
        <Profile />

        <Section> Organizing : </Section>
        <Flex justifyAround>
          {datas.map(({ i, name }) => {
            return (
              <Bounce>
                <Link to={`/event/${i}`}>
                  <Card key={i}>
                    <div style={{ textAlign: "center" }}>
                      <h5> {name}</h5>
                    </div>
                  </Card>
                </Link>
              </Bounce>
            )
          })}
        </Flex>
        <br />
        <Section> Volunteering : </Section>
        <Flex justifyAround>
          {datas.map(({ i, name }) => {
            return (
              <Bounce>
                <Link to={`/event/${i}`}>
                  <Card key={i}>
                    <div style={{ textAlign: "center" }}>
                      <h5> {name}</h5>
                    </div>
                  </Card>
                </Link>
              </Bounce>
            )
          })}
        </Flex>
      </Body>
      <Footer />
    </div>
  )
}

export default inject("ConsoleStore", "AuthStore")(observer(Console))
