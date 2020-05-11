import * as React from "react"
import { inject, observer } from "mobx-react"
import { useQuery } from "@apollo/react-hooks"
import { CSSTransition } from "react-transition-group"
import Activity from "./Activity"
import TeamList from "./teamList"
import Events from "./events"

import { Loader, Header, Footer, Detail } from "../../components/"
import { Contain } from "../../styles/style"
import { Checklist, People, Contact } from "../../components/modals/"
import useWindowWidth from "../../hook_style"
import { UserContext, TabContext } from "../../state/context/contextState"
import { GET_EVENT } from "../../data/queries"
import EventDetails from "./eventdetails"

const Event = (props): JSX.Element => {
  const Hooks = useWindowWidth()
  const { data, loading, error } = useQuery(GET_EVENT, {
    variables: {
      id: props.match.params.id,
      name: "John Doe",
    },
  })

  if (loading) {
    return <Loader type={"loading"} />
  }

  if (error) {
    return <Loader type={"error"} />
  }

  if (data) {
    return (
      <div>
        <Header event="|OSCA" />
        <UserContext.Consumer>
          {user => {
            return (
              <div>
                <br />
                <Checklist />
                <People />
                <Contact email={data.event.Email} />
                <EventDetails data={data} currentWindowSize={Hooks} />
                <TabContext.Consumer>
                  {tab => {
                    console.log(tab, "event page")
                    return (
                      <Contain>
                        <CSSTransition
                          timeout={500}
                          in={tab.activeTab === "detail"}
                          classNames={""}
                          unmountOnExit
                        >
                          <Detail data={data.event.createdBy[0]} />
                        </CSSTransition>

                        <CSSTransition
                          timeout={500}
                          in={tab.activeTab === "activity"}
                          classNames={""}
                          unmountOnExit
                        >
                          <Activity />
                        </CSSTransition>

                        <CSSTransition
                          timeout={500}
                          in={tab.activeTab === "teams"}
                          classNames={""}
                          unmountOnExit
                        >
                          <TeamList />
                        </CSSTransition>

                        <CSSTransition
                          timeout={500}
                          in={tab.activeTab === "events"}
                          classNames={""}
                          unmountOnExit
                        >
                          <Events />
                        </CSSTransition>
                      </Contain>
                    )
                  }}
                </TabContext.Consumer>
              </div>
            )
          }}
        </UserContext.Consumer>

        <Footer />
      </div>
    )
  }
}

export default inject("ModalStore")(observer(Event))
