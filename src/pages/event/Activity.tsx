import React from "react"

import { Contain, Text } from "../../styles/style"

const data = [
  { id: 1, name: "John just joined your design team" },
  { id: 2, name: "David just left your design team" },
  { id: 3, name: "John just joined your Gifts team" },
  { id: 4, name: "John just joined your Food team" },
  { id: 5, name: "John just joined your Attendees team" },
  { id: 6, name: "John just joined your design team" },
]

const Activity = () => {
  return (
    <div>
      <br />
      {data.map(({ name, id }) => {
        return (
          <ul style={{ listStyle: "none" }}>
            <li key={id} style={{ padding: "0.3rem 0rem" }}>
              <Text small> {name} </Text>{" "}
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default Activity
