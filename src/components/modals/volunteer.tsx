import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { inject, observer } from "mobx-react"
import { FiX, FiSend } from "react-icons/fi"
import Flex from "styled-flex-component"
import { useMutation, useQuery } from "@apollo/react-hooks"
import styled from "styled-components"
import { Loader } from "../"

import Fields from "../../pages/forms/fields"
import { VOLUNTEER } from "../../data/mutations"
import { GET_EVENT } from "../../data/queries"
import {
  Hover,
  Head,
  Section,
  Body,
  BigInput,
  Text,
  Button,
} from "../../styles/style"

/* TODO: THIS MODAL CONTENT GETS FIRED EVEN WHEN CLOSED
          CURRENTLY EVENT ID WHICH IS USED TO FECTH EVENT DETAILS AS PARAM
          GETS PASSED AS A PROP WHEN CLICKED FROM THE PARENT COMPONENT

          WALKAROUND IS TO AVOID DESTRUCTRING ANY VALUE SINCE THEY ARE A BIT LAZY LOADED
          AND IGNORE APOLLO ERROR
*/

const Volunteer = props => {
  const { showVolunteerModal, closeVolunteerModal, EventID } = props

  const [Description, setDescription] = useState("")
  const [Role, setRole] = useState("")
  const [WordCount, setWordCount] = useState(0)

  const { data, loading } = useQuery(GET_EVENT, {
    variables: {
      id: EventID,
      name: "",
    },
  })

  const [createVolunteer, { error }] = useMutation(VOLUNTEER)

  const Submit = () => {
    createVolunteer({
      variables: {
        UserID: localStorage.getItem("user_id"),
        EventID: EventID,
        Role: Role,
        Duration: "2 hours",
        Proposal: Description,
      },
    })
      .catch(e => console.log(e))
      .then(() => alert("created"))
  }

  const handleChange = (value: string, label: string) => {
    setDescription(value)
    setWordCount(WordCount + 1)
  }

  if (loading) {
    return <Loader type="loading" />
  }

  const name = showVolunteerModal ? data.event.name : null

  const Data = [
    {
      id: 1,
      name: "Photographer",
    },
    {
      id: 2,
      name: "Dancer",
    },
    {
      id: 3,
      name: "Attendant",
    },
    {
      id: 4,
      name: "M-c",
    },
    {
      id: 5,
      name: "VideoMan",
    },
  ]

  const Grid = styled.div`
    display: grid;
    grid-gap: 1.5rem 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  `

  const Box = styled.div`
    padding: 0.5rem 0.3rem;
    border-radius: 5px;
    transition: all 300ms;
    cursor: pointer;
    border: 1px solid grey;
    text-align: center;
    box-shadow: ${props.role === Role ? "0px 2px 6px #326690" : null};
    &: hover {
      border: 1px solid #326690;
      box-shadow: 0px 2px 6px #326690;
    }
  `

  return (
    <Modal
      size="lg"
      style={{ marginTop: "5%" }}
      onHide={() => closeVolunteerModal()}
      show={showVolunteerModal}
    >
      <Head>
        <Section> Volunteer for {name}</Section>

        <Hover onClick={() => closeVolunteerModal()}>
          <FiX style={{ fontSize: "1.75em" }} />
        </Hover>
      </Head>

      <Body>
        <Text small>
          {name} is currently seeking volunteers to fill out the following roles
          during the {name}.
        </Text>

        <div style={{ border: "1px solid grey", padding: "0.7rem 1rem" }}>
          <Text> Available Roles : </Text>

          <Grid>
            {Data.map(({ id, name }) => {
              return (
                <Box role={"Dancer"} key={id} onClick={() => setRole(name)}>
                  {name}
                </Box>
              )
            })}
          </Grid>
        </div>
        <Text>
          Selected Role: <b> {Role}</b>
        </Text>
        <br />
        <Text> Pick a time slot </Text>

        <br />
        <Fields
          id="Description"
          value={Description}
          placeholder="Tell us about yourself"
          name={` Brief Description ${WordCount} / 250`}
          type={"text"}
          textarea={false}
          onChange={(e: string) => handleChange(e, "Description")}
        />
        <br />
        <Flex justifyCenter>
          <Button disabled={WordCount > 250} long onClick={() => Submit()}>
            Submit Application{" "}
          </Button>
        </Flex>
      </Body>
    </Modal>
  )
}
export default Volunteer
