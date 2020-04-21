import React from "react"

import { Header, Footer } from "../../components/"
import { Events } from "../../Data"
import { Contain, Items, Bounce } from "../../styles/style"
import EventCard from "../../components/cards/EventCard"

const EventList = () => {
  return (
    <div>
      <Header page="EventList" />
      <br />
      <br />
      <Contain>
        <Items>
          {Events.map(({ name, id, text }) => {
            return (
              <Bounce>
                <EventCard id={id} name={name} summary={text} />
              </Bounce>
            )
          })}
        </Items>
      </Contain>

      <Footer />
    </div>
  )
}

export default EventList
