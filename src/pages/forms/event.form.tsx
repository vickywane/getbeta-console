import React, { useState } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { FiToggleLeft, FiX } from "react-icons/fi"
import media from "styled-media-query"
import DatePicker from "react-datepicker"
import Upload from "../media/upload"

import "react-datepicker/dist/react-datepicker.css"
import { Header, Footer } from "../../components/"
import {
  Input,
  Title,
  Button,
  Text,
  Label,
  Hover,
  Grid,
  Notification,
} from "../../styles/style"

const Body = styled.div`
  padding-left: 10em;
  padding-right: 12em;
  ${media.lessThan("large")`
padding-left: 4em;
padding-right: 4em;
`};
  ${media.lessThan("medium")`
padding-left: 1.5em;
padding-right: 1.5em;
`};
  ${media.lessThan("small")`
padding-left: 0.4em;
padding-right: 0.4em;
`};
`

const CreateEvent = () => {
  const [Name, setName] = useState("")
  const [StartDate, setStartDate] = useState(new Date())
  const [Notify, SetNotify] = useState(true)

  const handleChange = date => {
    setStartDate(date)
  }

  return (
    <div>
      <Header screen="event" name="" />
      {Notify ? (
        <Notification>
          <Flex justifyBetween>
            <Text center small white>
              Information saved here can be updated later.
            </Text>

            <Hover
              onClick={() => {
                SetNotify(false)
              }}
            >
              <FiX style={{ fontSize: "1.7rem", color: "white" }} />
            </Hover>
          </Flex>
        </Notification>
      ) : null}
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Body>
          <Title small bold>
            Details
          </Title>
          <Flex column>
            <Label small>Event Name </Label>
            <Input
              wide
              placeholder="Event Name"
              onChangeText={e => {
                setName(e.target.value)
              }}
            />
          </Flex>

          <br />
          <Flex column>
            <Label small>Event Description </Label>
            <Input
              wide
              long
              description
              placeholder="Describe your event to your attendees"
            />
          </Flex>
          <br />

          <Flex justifyBetween>
            <Flex column>
              <Label details>Event Venue </Label>
              <Input placeholder="City , State , Country" />
            </Flex>

            <Flex column>
              <Label details>Event Date </Label>
              <DatePicker selected={StartDate} onChange={handleChange} />
            </Flex>
          </Flex>

          <br />
          <br />

          <Flex justifyBetween>
            <Title small bold>
              Event Media Assets
            </Title>
            <Flex>
              <Text> Skip </Text>
              <Hover style={{ paddingLeft: "10px" }}>
                <FiToggleLeft style={{ fontSize: "2em" }} />
              </Hover>
            </Flex>
          </Flex>
          <hr />

          <Label> Cover Image </Label>

          <Grid>
            <Upload type="component" />

            <div>
              <br />
              <br />
              <Text small center>
                This is your logo. Image can either be in a .png or .svg file
                format.
              </Text>
              <p
                style={{ color: "grey", fontSize: "1rem", textAlign: "center" }}
              >
                A 1070 X 1205 image resolution is recommended
              </p>
            </div>
          </Grid>

          <br />
          <br />
          <Label> Logo </Label>

          <Grid>
            <Upload type="component" />

            <div>
              <br />
              <br />
              <Text small center>
                This is your logo. Image can either be in a .png or .svg file
                format. A 1070 X 1205 image resolution is recommended
              </Text>
            </div>
          </Grid>
        </Body>
      </div>

      <Flex justifyCenter>
        <Button> Create Event </Button>
      </Flex>

      <Footer />
    </div>
  )
}

export default CreateEvent
