import React from "react"
import Flex from "styled-flex-component"

import { Contain, Title, Button, Text } from "../styles/style"
import { Footer, Header } from "./"

const ResolutionError = () => {
  return (
    <div>
      <Header page={"non-app"} />
      <br />
      <br /> <br />
      <br /> <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          placeItems: "center",
          alignContent: "center",
          verticalAlign: "middle",
        }}
      >
        <Contain>
          <Title center small bold>
            {" "}
            Resolution Limit Reached.
          </Title>
          <Text center>
            {" "}
            The <b> Oasis Web Console</b> can only be accessed via larger
            resolutions.
          </Text>
          <br />
          <hr />
          <Text center> Use the Mobile App </Text>
          <Flex justifyAround>
            <Button> Get On Apple Store </Button>
            <Button> Get On Play Store </Button>
          </Flex>
        </Contain>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default ResolutionError
