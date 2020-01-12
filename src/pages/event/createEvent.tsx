import React, { useState } from "react"
import styled from "styled-components"
import Flex from "styled-flex-component"
import { IoMdAdd } from "react-icons/io"
import { FiToggleLeft } from "react-icons/fi"
import media from "styled-media-query"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"
import { Header, Footer } from "../../components/"

const Input = styled.input`
  width : ${props => (props.description ? "50em" : "50em")}
  height : ${props => (props.description ? "20vh" : "4vh")}
  padding-top : ${props => (props.description ? "0px" : "0px")}
  border : 1px solid grey
  border-radius : 7px
  padding : 0.5em
  font-size : 1em
  padding-left : 15px
  margin-left : 20px
`

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

const Button = styled.button`
  background: ${props => (props.upload ? "transparent" : "#0e2f5a")}
  text-align: right;
  border-radius: ${props => (props.upload ? "3px" : "10px")};
  height: ${props => (props.upload ? "40px" : "57px")}
  border: 1px solid #0e2f5a;
  color: ${props => (props.upload ? "#0e2f5a" : "#fff")};
  margin: 0 1em;
  padding: ${props => (props.upload ? "0.4em 3em" : "0.5em 5em")};
  font-size: ${props => (props.upload ? "1.05em" : " 1.3em")};
  &:hover {
    cursor :  pointer
    color: #0e2f5a;
    background: #fff;
  }
`

const Text = styled.p`
font-size: 1.1em
padding-left : 15px
 color: ${props => (props.notice ? "grey" : "#000")}
`

const Section = styled.h2`
  padding-left:  10px
  font-weight:  550
  font-size: 1.9em
`

const Box = styled.div`
  height: 5vh;
  width: 10em;
  border: 1px solid grey;
  cursor: pointer;
`

const Label = styled.div`
padding-left: 10px
padding-bottom: 5px
font-size: ${props => (props.details ? "1.2em" : "1.3em")}
`

const Hover = styled.div`
  cursor: pointer;
`

const CreateEvent = () => {
  const [Name, setName] = useState<string>("")

  console.log(Name)

  const [StartDate, setStartDate] = useState(new Date())

  const handleChange = date => {
    setStartDate(date)
  }

  return (
    <div>
      <Header screen="event" name="" />

      <Body>
        <Section> Details </Section>
        <Flex column>
          <Label details>Event Name </Label>
          <Input
            placeholder="Event Name"
            onChangeText={e => {
              setName(e.target.value)
            }}
          />
        </Flex>

        <br />
        <Flex column>
          <Label details>Event Description </Label>
          <Input
            description
            placeholder="Describe your event to your attendees"
          />
        </Flex>
        <br />

        <Flex column>
          <Label details>Event Venue </Label>
          <Input placeholder="City , State , Country" />
        </Flex>

        <br />
        <Flex column>
          <Label details>Event Date </Label>
          <DatePicker selected={StartDate} onChange={handleChange} />
        </Flex>

        <br />
        <hr />

        <Section>Images</Section>
        <Flex justifyBetween>
          <Label> Logo </Label>

          <div>
            <Flex>
              <p style={{ fontSize: "1.2em" }}> Skip </p>
              <Hover style={{ paddingLeft: "10px" }}>
                <FiToggleLeft style={{ fontSize: "2.5em" }} />
              </Hover>
            </Flex>
          </div>
        </Flex>
        <Text>
          This is your logo. Image can either be in a .png or .svg file format.
          A 1070 X 1205 image resolution is recommended
        </Text>
        <Flex justifyCenter>
          <Button upload>
            <Flex>
              <IoMdAdd style={{ fontSize: "1.3em" }} /> Upload Image{" "}
            </Flex>{" "}
          </Button>
        </Flex>

        <br />
        <br />
        <Flex justifyBetween>
          <Label> Cover Image </Label>

          <div>
            <Flex>
              <p style={{ fontSize: "1.2em" }}> Skip </p>
              <Hover style={{ paddingLeft: "10px" }}>
                <FiToggleLeft style={{ fontSize: "2.5em" }} />
              </Hover>
            </Flex>
          </div>
        </Flex>
        <Text>
          This is your logo. Image can either be in a .png or .svg file format.
          A 1070 X 1205 image resolution is recommended 1070 X 1205 image
          resolution is recommended 1070 X 1205 image resolution is recommended
        </Text>
        <Flex justifyCenter>
          <Button upload>
            <Flex>
              <IoMdAdd style={{ fontSize: "1.3em" }} /> Upload Image{" "}
            </Flex>{" "}
          </Button>
        </Flex>
      </Body>

      <Flex justifyCenter>
        <div>
          <Text notice> All data here can be updated at a later time. </Text>

          <Button> Create Event </Button>
        </div>
      </Flex>

      <Footer />
    </div>
  )
}

export default CreateEvent
