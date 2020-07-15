import React from "react"

import { Head, Body, Text, Title, Section, Button } from "../../../styles/style"

const Api = (props): JSX.Element => {
  return (
    <div>
      <Head header>
        <Section> Developer Settings </Section>
      </Head>

      <Body>
        <Title small> Event Api </Title>
        <hr />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Text> Generate Api token to consume event data </Text>

          <Button>Generate Key</Button>
        </div>
      </Body>
    </div>
  )
}

export default Api
