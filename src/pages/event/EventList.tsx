import React from "react"
import { useQuery } from "@apollo/react-hooks"

import { Header, Footer } from "../../components/"
import { Events } from "../../Data"
import { Contain, Items, Bounce } from "../../styles/style"
import EventCard from "../../components/cards/EventCard"
import { EVENTS } from "../../data/queries"

const EventList = () => {
  const { data, loading, error } = useQuery(EVENTS, {})
  console.log(data)
  if (error) {
    return (
      <div>
        <Header />
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
        <h2 style={{ textAlign: "center" }}>
          An error has occurred with the server <br /> Switching to offline mode
          ....{" "}
        </h2>{" "}
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <Footer />
      </div>
    )
  }

  if (loading) {
    return (
      <div>
        <br /> <br /> <br /> <br />
        <h2 style={{ textAlign: "center" }}> Data is Loading </h2>{" "}
      </div>
    )
  } else {
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
}

export default EventList
