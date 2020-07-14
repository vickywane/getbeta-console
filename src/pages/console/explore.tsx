import React from "react"
import { CSSTransition } from "react-transition-group"
import { useQuery } from "@apollo/react-hooks"
import { Spinner } from "react-bootstrap"

import { Bounce, Items } from "../../styles/style"
import EventCard from "../../components/cards/EventCard"
import { EVENTS } from "../../data/queries"

const Explore = props => {
  const { activeSection } = props
  const { data, loading, error } = useQuery(EVENTS)

  if (error) {
    console.log(error)
    return <p> Error from query </p>
  }

  if (loading) {
    return <p>Loading results </p>
  }

  if (data) {
    return (
      <CSSTransition
        timeout={900}
        unmountOnExit
        in={activeSection === "explore"}
        classNames={""}
      >
        <div>
          <br />
          {loading && (
            <Spinner variant="primary" animation="grow" role="loading" />
          )}

          <Items>
            {data.events.map(
              ({
                id,
                dateCreated,
                eventType,
                createdBy,
                name,
                summary,
                venue,
                isArchived,
                meetupGroups,
              }) => {
                return (
                  <Bounce>
                    <EventCard
                      id={id}
                      name={name}
                      type={eventType}
                      created={dateCreated}
                      isArchived={isArchived}
                      createdBy={createdBy}
                      meetupGroups={meetupGroups !== null && 0}
                      venue={venue}
                      location={true}
                      summary={summary}
                    />
                  </Bounce>
                )
              }
            )}
          </Items>
        </div>
      </CSSTransition>
    )
  }
}

export default Explore
