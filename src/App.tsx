import React, { useState } from "react"
import { Router, Route, Switch } from "react-router"
import { createBrowserHistory } from "history"
import { inject, observer } from "mobx-react"

import { Spinner } from "react-bootstrap"
import useWindowWidth from "./hook_style"
import {
  Event,
  CreateEvent,
  Console,
  Signin,
  EventList,
  Media,
  Documentation,
  Team,
  Drafts,
  Draft,
  ScheduledTalks,
  Mobile,
  Editor,
  SubmitTalk,
  Upload,
  ResetPassword,
  Preferences,
  Stream,
  Reminders,
  TaskForm,
  TeamForm,
  Schedule,
} from "./pages/"
import Protected from "./pages/auth/protectedRoute"
import { GlobalStyles } from "./styles/global"
import { ResolutionError } from "./components/"

const History = createBrowserHistory()

const App = (props): JSX.Element => {
  const [Authenticated, setAuthenticated] = useState<boolean>(null)

  setTimeout(() => {
    setAuthenticated(props.AuthStore.authenticated)
  }, 1000)

  const Hooks = useWindowWidth()

  if (Hooks <= 550) {
    return <ResolutionError />
  }

  return (
    <div>
      {Authenticated === null ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: window.innerHeight,
          }}
        >
          <Spinner variant="primary" animation="grow" role="loading" />{" "}
        </div>
      ) : (
        <Router history={History}>
          <GlobalStyles />
          <Switch>
            <Route exact path="/" component={Documentation} />
            <Route path="/login" component={Signin} />
            <Route path="/reset" component={ResetPassword} />

            <Protected
              authenticated={Authenticated}
              path="/create"
              component={CreateEvent}
            />

            <Protected
              authenticated={Authenticated}
              path="/console"
              component={Console}
            />

            <Protected
              authenticated={Authenticated}
              path="/list"
              component={EventList}
            />
            <Protected
              authenticated={Authenticated}
              path="/submit-talk/:id"
              component={SubmitTalk}
            />
            <Protected
              authenticated={Authenticated}
              path="/media/:id/:name"
              component={Media}
            />

            <Protected
              authenticated={Authenticated}
              path="/:eventType/:id"
              component={Event}
            />

            <Protected
              authenticated={Authenticated}
              path="/team/:id"
              component={Team}
            />

            <Protected
              authenticated={Authenticated}
              path="/drafts"
              component={Drafts}
            />

            <Protected
              authenticated={Authenticated}
              path="/tallks/:id"
              component={Draft}
            />

            <Protected
              authenticated={Authenticated}
              path="/editor"
              component={Editor}
            />

            <Protected
              authenticated={Authenticated}
              path="/mobile"
              component={Mobile}
            />

            <Protected
              authenticated={Authenticated}
              path="/stream"
              component={Stream}
            />

            <Protected
              authenticated={Authenticated}
              path="/settings"
              component={Preferences}
            />

            <Protected
              authenticated={Authenticated}
              path="/upload/:name"
              component={Upload}
            />

            <Protected
              authenticated={Authenticated}
              path="/create-task"
              component={TaskForm}
            />

            <Protected
              authenticated={Authenticated}
              path="/create-team"
              component={TeamForm}
            />

            <Protected
              authenticated={Authenticated}
              path="/event-talks/"
              component={ScheduledTalks}
            />

            <Protected
              authenticated={Authenticated}
              path="/reminders"
              component={Reminders}
            />
          </Switch>
        </Router>
      )}
    </div>
  )
}

export default inject("AuthStore")(observer(App))
