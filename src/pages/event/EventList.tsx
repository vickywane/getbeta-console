import React from "react"
import { useQuery } from "@apollo/react-hooks"

import { Loader, Header, Footer } from "../../components/"
import { Contain, Items, Bounce } from "../../styles/style"
import EventCard from "../../components/cards/EventCard"
import { EVENTS } from "../../data/queries"

const EventList = () => {
  const { data, loading, error } = useQuery(EVENTS)

  if (error) {
    return <Loader error={true} />
  }

  if (loading) {
    return <Loader loading={true} />
  }
  const { events } = data
  console.log(events)
  return (
    <div>
      <Header page="Search" placeholder="Search For An Event" />
      <br />
      <br />
      <br />
      <Contain>
        <Items>
          {events.map(({ name, id, summary }) => {
            return (
              <Bounce>
                <EventCard
                  id={id}
                  name={name}
                  summary={summary}
                  volunteerOption={true}
                />
              </Bounce>
            )
          })}
        </Items>
      </Contain>

      <br />
      <Footer />
    </div>
  )
}

export default EventList
