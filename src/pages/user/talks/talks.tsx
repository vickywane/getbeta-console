import React from "react"
import Flex from "styled-flex-component"
import { Link } from "react-router-dom"
import { FiMail, FiClock, FiCheck } from "react-icons/fi"

import { Header, Footer } from "../../../components/"
import {
  Contain,
  Body,
  Text,
  Button,
  Title,
  List,
  Hover,
} from "../../../styles/style"
import { TalksList } from "../../../Data"

const Talks = (): JSX.Element => {
  return (
    <div>
      <Header screen="Docs" page={"Search"} placeholder={"Search For A Talk"} />
      <br />
      <br />
      <Body>
        <Flex justifyBetween>
          <Title small> Talks </Title>

          <Button> Create New Talk </Button>
        </Flex>
        <br />
        <List bottomHover>
          {TalksList.map(({ id, title, reviewed }) => {
            return (
              <li key={id}>
                <Contain bottomPadding>
                  <Flex justifyBetween>
                    <img alt={"Organization logo"} />

                    <Link to={"/deck"} style={{ textDecoration: "none" }}>
                      <Title small> {title}</Title>
                    </Link>
                    <Flex>
                      <Link to={"/"} style={{ textDecoration: "none" }}>
                        <Flex>
                          <FiMail style={{ fontSize: "1.7rem" }} />
                          <Text style={{ paddingLeft: "7px" }}> 12 </Text>
                        </Flex>
                      </Link>

                      <div
                        style={{
                          borderRight: "1px solid grey",
                          padding: "0rem 0.5rem",
                        }}
                      />

                      <Hover style={{ paddingLeft: "15px" }}>
                        {reviewed ? (
                          <FiClock style={{ fontSize: "1.7rem" }} />
                        ) : (
                          <FiCheck style={{ fontSize: "2rem" }} />
                        )}
                      </Hover>
                    </Flex>
                  </Flex>
                </Contain>
              </li>
            )
          })}
        </List>
      </Body>

      <Footer />
    </div>
  )
}

export default Talks
