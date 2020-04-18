import React from "react"
import { Link } from "react-router-dom"
import { GoLocation } from "react-icons/go"
import Flex from "styled-flex-component"

import { Card, Text, Button } from "../../styles/style"

const EventCard = props => {
  const { location, name, id, summary, role, venue, volunteerOption } = props

  return (
    <Card key={id}>
      <div style={{ textAlign: "center" }}>
        <img
          alt="event cover"
          src={require("../../assets/images/test.png")}
          style={{ maxWidth: "50%" }}
        />

        <hr />
        <Link to={`/event/${id}`} style={{ textDecoration: "none" }}>
          <h5> {name}</h5>
        </Link>

        <Text small center>
          {summary}
        </Text>
        <hr />

        {location ? (
          <Flex justifyCenter>
            <Flex>
              <GoLocation style={{ fontSize: "1.5rem" }} />

              <Text center small style={{ padding: "0rem 0.5rem" }}>
                {venue}
              </Text>
            </Flex>
          </Flex>
        ) : null}

        <Text bold> {role} </Text>
        {volunteerOption ? (
          <Button long transparent>
            {" "}
            Volunteer{" "}
          </Button>
        ) : null}
      </div>
    </Card>
  )
}

export default EventCard
