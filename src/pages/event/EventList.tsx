import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { inject, observer } from "mobx-react"

import { Loader, Header, Footer } from "../../components/"
import { Contain, Items, Bounce } from "../../styles/style"
import EventCard from "../../components/cards/EventCard"
import { EVENTS } from "../../data/queries"
import { VolunteerModal } from "../../components/modals"

const EventList = props => {
  const { data, loading, error } = useQuery(EVENTS)

  if (error) {
    return <Loader error={true} />
  }

  if (loading) {
    return <Loader loading={true} />
  }
  const { events } = data
  const { openVolunteerModal, closeVolunteerModal, EventId } = props.ModalStore

  return (
    <div>
      <Header page="Search" placeholder="Search For An Event" />
      <br />
      <br />
      <VolunteerModal
        EventID={EventId}
        closeVolunteerModal={closeVolunteerModal}
        showVolunteerModal={props.ModalStore.VolunteerModal}
      />
      <br />
      <Contain>
        <Items>
          {events.map(({ name, id, summary }) => {
            return (
              <Bounce>
                <EventCard
                  id={id}
                  openVolunteerModal={openVolunteerModal}
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

export default inject("ModalStore")(observer(EventList))
