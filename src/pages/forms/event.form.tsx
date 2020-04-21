import React, { useState } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { FiToggleLeft, FiX } from "react-icons/fi"
import media from "styled-media-query"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Card } from "react-bootstrap"
import * as Yup from "yup"
import { useFormik } from "formik"

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
  const [StartDate, setStartDate] = useState(new Date())
  const [Notify, SetNotify] = useState(true)
  const [Mail, ConfirmMail] = useState(false)
  const [Import, setImport] = useState(false)

  const handleCalendarChange = date => {
    setStartDate(date)
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      alias: "",
      website: "",
      email: "",
      venue: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(8, "Not less than 3")
        .max(24, "More than 25")
        .required("must have a name "),
      description: Yup.string().min(10, "Not less than 10"),
      alias: Yup.string().min(2, "Not less than 10"),
      website: Yup.string().min(2, "Not less than 10"),
      email: Yup.string().min(2, "Not less than 10"),
      venue: Yup.string().min(2, "Not less than 10"),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null))
    },
  })

  return (
    <div style={{ background: "#eeeeee" }}>
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
                  Import Data
                </Button>
              </Flex>
            </Notification>
          ) : null}
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
              <hr />
              <form onSubmit={formik.handleSubmit}>
                <Flex justifyBetween>
                  <Flex column>
                    <Card
                      style={{
                        boxShadow: "0px 3px 4px grey",
                        padding: "0rem 0.5rem",
                      }}
                    >
                      <br />
                      <Label htmlFor="event-name" small>
                        Event Name
                      </Label>
                      <Input
                        grey
                        id="event-name"
                        name="event-name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        placeholder="Event Name"
                      />
                      <br />

                      <Flex column>
                        <Label htmlFor="event-alias" small>
                          Event Alias
                        </Label>
                        <Input
                          id="event-alias"
                          name="event-alias"
                          placeholder="Event Alias"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.alias}
                        />
                      </Flex>

                      <br />
                    </Card>
                  </Flex>

                  <Card
                    style={{
                      boxShadow: "0px 3px 4px grey",
                      padding: "0rem 0.2rem",
                    }}
                  >
                    <br />
                    <Flex column>
                      <Label small details htmlFor="event-website">
                        Event Brand Page
                      </Label>
                      <Input
                        id="event-website"
                        name="event-website"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.website}
                        placeholder="https//my-event.com"
                      />
                    </Flex>
                    <br />
                    <Flex column>
                      <Label small details htmlFor="event-email">
                        Support E-Mail
                      </Label>
                      <Input
                        id="event-email"
                        name="event-email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder="myevent@gmail.com"
                      />
                    </Flex>
                  </Card>
                </Flex>
                <br />
                <br />
                <Card
                  style={{
                    boxShadow: "0px 3px 4px grey",
                    padding: "0rem 0.2rem",
                  }}
                >
                  <br />
                  <Flex column>
                    <Label small htmlFor="event-description">
                      Event Summary
                    </Label>
                    <Input
                      id="event-description"
                      name="event-description"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      onBlur={formik.handleBlur}
                      wide
                      description
                      placeholder="Few line summary of your event"
                    />
                  </Flex>

                  <Flex column>
                    <Label small htmlFor="event-description">
                      Event Description
                    </Label>
                    <Input
                      id="event-description"
                      name="event-description"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      onBlur={formik.handleBlur}
                      wide
                      long
                      description
                      placeholder="Describe your event to your attendees"
                    />
                  </Flex>
                  <br />
                </Card>

                <br />
                <Flex justifyBetween />
                <br />
                <Flex justifyBetween>
                  <Card
                    style={{
                      boxShadow: "0px 3px 4px grey",
                      padding: "0rem 0.2rem",
                    }}
                  >
                    <br />
                    <Flex column>
                      <Label details hmtlFor="event-venue">
                        Event Venue
                      </Label>
                      <Input
                        id="event-venue"
                        name="event-venue"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.venue}
                        placeholder="City , State , Country"
                      />
                    </Flex>
                    <br />

                    <Flex column>
                      <Label details>Event Date </Label>

                      <p
                        style={{
                          paddingLeft: "20px",
                          color: "grey",
                        }}
                      >
                        {" "}
                        Start Date :{" "}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        <DatePicker
                          selected={StartDate}
                          onChange={handleCalendarChange}
                        />
                      </div>

                      <p
                        style={{
                          paddingLeft: "20px",
                          color: "grey",
                        }}
                      >
                        {" "}
                        End Date :{" "}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        <DatePicker
                          selected={StartDate}
                          onChange={handleCalendarChange}
                        />
                      </div>
                    </Flex>

                    <br />
                  </Card>
                </Flex>
              </form>
              <br />
              <br />

              <Card
                style={{
                  boxShadow: "0px 3px 4px grey",
                  padding: "0rem 0.2rem",
                }}
              >
                <br />
                <div style={{ padding: "0rem 1rem" }}>
                  <Flex justifyBetween>
                    <Title small bold>
                      Event Media Assets
                    </Title>
                    <Text> Skip </Text>
                  </Flex>
                </div>

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
              </Card>
              <br />
              <br />
              <div style={{ textAlign: "right" }}>
                <Button
                  disabled={formik.isSubmitting}
                  onClick={() => {
                    ConfirmMail(true)
                    SetNotify(false)
                  }}
                >
                  Proceed To Confirm Support Mail >
                </Button>
              </div>
            </Body>
          ) : (
            <Flex justifyCenter>
              <CustomCard>
                <Text>
                  An Email Confirmation link has been sent to xxxxxxxxxxxxxxx
                </Text>
              </CustomCard>
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
