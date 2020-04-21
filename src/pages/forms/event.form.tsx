import React, { useState } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { FiToggleLeft, FiX } from "react-icons/fi"
import media from "styled-media-query"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Card } from "react-bootstrap"

import Upload from "../media/upload"
import { Header, Footer } from "../../components/"
import Options from "../imports/createEvent/eventoptions.import"
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
padding-left: 3em;
padding-right: 3em;
`};
  ${media.lessThan("medium")`
padding-left: 1em;
padding-right: 1em;
`};
  ${media.lessThan("small")`
padding-left: 0.4em;
padding-right: 0.4em;
`};
`

const CustomCard = styled(Card)`
  width: 30rem;
  padding: 5rem;
  margin: 5rem 1rem;
  box-shadow: 0px 2px 4px grey;
  text-align: center;
`

const CreateEvent = () => {
  const [Name, setName] = useState("")
  const [StartDate, setStartDate] = useState(new Date())
  const [Notify, SetNotify] = useState(true)
  const [Mail, ConfirmMail] = useState(false)
  const [Import, setImport] = useState(false)

  const handleChange = date => {
    setStartDate(date)
  }

  return (
    <div>
      <Header screen="event" name="" unshadowed={true} />
      {!Mail ? (
        <div>
          {!Import ? (
            <Notification color="#401364">
              <br />
              <Flex justifyBetween>
                <Text center small white>
                  Import and use event data from existing event managers.
                </Text>

                <Button
                  onClick={() => {
                    setImport(true)
                  }}
                >
                  {" "}
                  Import Data{" "}
                </Button>
              </Flex>
            </Notification>
          ) : null}{" "}
        </div>
      ) : null}
      {Notify ? (
        <Notification color="#000">
          <br />
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
      {!Import ? (
        <div>
          {!Mail ? (
            <Body>
              <Title small bold>
                Details
              </Title>
              <Flex>
                <Flex column>
                  <Label small>Event Name </Label>
                  <Input
                    placeholder="Event Name"
                    onChangeText={e => {
                      setName(e.target.value)
                    }}
                  />
                </Flex>

                <Flex column>
                  <Label small>Event Alias </Label>
                  <Input
                    placeholder="Event Alia"
                    onChangeText={e => {
                      setName(e.target.value)
                    }}
                  />
                </Flex>
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
                  <Label details>Event Brand Page </Label>
                  <Input placeholder="https//my-event.com" />
                </Flex>

                <Flex column>
                  <Label details>Support E-Mail </Label>
                  <Input placeholder="myevent@gmail.com" />
                </Flex>
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
                    This is your logo. Image can either be in a .png or .svg
                    file format.
                  </Text>
                  <p
                    style={{
                      color: "grey",
                      fontSize: "1rem",
                      textAlign: "center",
                    }}
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
                    This is your logo. Image can either be in a .png or .svg
                    file format. A 1070 X 1205 image resolution is recommended
                  </Text>{" "}
                  <p
                    style={{
                      color: "grey",
                      fontSize: "1rem",
                      textAlign: "center",
                    }}
                  >
                    A 1070 X 1205 image resolution is recommended
                  </p>
                </div>
              </Grid>{" "}
              <div style={{ textAlign: "right" }}>
                <Button
                  onClick={() => {
                    ConfirmMail(true)
                    SetNotify(false)
                  }}
                >
                  {" "}
                  Proceed To Confirm Support Mail >{" "}
                </Button>
              </div>
            </Body>
          ) : (
            <Flex justifyCenter>
              <CustomCard>
                <Text>
                  {" "}
                  An Email Confirmation link has been sent to xxxxxxxxxxxxxxx{" "}
                </Text>{" "}
              </CustomCard>{" "}
            </Flex>
          )}
        </div>
      ) : (
        <Options />
      )}
      <Footer />
    </div>
  )
}

export default CreateEvent
