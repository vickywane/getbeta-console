import React from "react"
import { Link } from "react-router-dom"

import { Card, Text } from "../../styles/style"

const EventCard = props => {
  const { name, id, summary } = props

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
      </div>
    </Card>
  )
}

export default EventCard
