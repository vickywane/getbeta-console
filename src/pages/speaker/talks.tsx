import React from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { Link } from "react-router-dom"
import { useQuery } from "@apollo/react-hooks"

import { TEST } from "../../data/queries"
import { Header, Footer } from "../../components/"
import { Body, Text } from "../../styles/style"

const Talks = (): JSX.Element => {
  const { loading, error, data } = useQuery(TEST, {
    // variables: { language: "english" },
  })

  console.log(data, "gql data")
  return (
    <div>
      <Header screen="Docs" />
      <Body>
        <Text> list of Speakers talks </Text>
      </Body>

      <Footer />
    </div>
  )
}

export default Talks
