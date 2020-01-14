import React from "react"

import { Contain } from "../../styles/style"

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
    <Contain>
      {data.map(({ name, id }) => {
        return (
          <ul>
            <li key={id}> {name} </li>{" "}
          </ul>
        )
      })}
    </Contain>
  )
}

export default Activity
