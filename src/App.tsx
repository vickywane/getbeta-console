import React from "react"
import { Router, Route, Switch } from "react-router"
import { createBrowserHistory } from "history"
import { inject, observer } from "mobx-react"

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
function App(props): JSX.Element {
  const { authenticated } = props.AuthStore
  const Hooks = useWindowWidth()

  if (Hooks <= 550) {
    return <ResolutionError />
  }

  // since auth has not been perfectly setup
  if (localStorage.getItem("user_id") === null) {
    return <Signin />
  }

  return (
    <Router history={History}>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Documentation} />
        <Route path="/login" component={Signin} />
        <Route path="/reset" component={ResetPassword} />

        <Protected
          authenticated={authenticated}
          path="/create"
          component={CreateEvent}
        />

        <Protected
          authenticated={authenticated}
          path="/console"
          component={Console}
        />

        <Protected
          authenticated={authenticated}
          path="/list"
          component={EventList}
        />
        <Protected
          authenticated={authenticated}
          path="/submit-talk/:id"
          component={SubmitTalk}
        />
        <Protected
          authenticated={authenticated}
          path="/media/:id/:name"
          component={Media}
        />

        <Protected
          authenticated={authenticated}
          path="/:eventType/:id"
          component={Event}
        />

        <Protected
          authenticated={authenticated}
          path="/team/:id"
          component={Team}
        />

        <Protected
          authenticated={authenticated}
          path="/drafts"
          component={Drafts}
        />

        <Protected
          authenticated={authenticated}
          path="/tallks/:id"
          component={Draft}
        />

        <Protected
          authenticated={authenticated}
          path="/editor"
          component={Editor}
        />

        <Protected
          authenticated={authenticated}
          path="/mobile"
          component={Mobile}
        />

        <Protected
          authenticated={authenticated}
          path="/stream"
          component={Stream}
        />

        <Protected
          authenticated={authenticated}
          path="/settings"
          component={Preferences}
        />

        <Protected
          authenticated={authenticated}
          path="/upload/:name"
          component={Upload}
        />

        <Protected
          authenticated={authenticated}
          path="/create-task"
          component={TaskForm}
        />

        <Protected
          authenticated={authenticated}
          path="/create-team"
          component={TeamForm}
        />

        <Protected
          authenticated={authenticated}
          path="/event-talks/"
          component={ScheduledTalks}
        />

        <Protected
          authenticated={authenticated}
          path="/reminders"
          component={Reminders}
        />
      </Switch>
    </Router>
  )
}

export default inject("AuthStore")(observer(App))
