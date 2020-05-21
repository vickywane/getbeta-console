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
  Deck,
  ScheduledTalks,
  Mobile,
  Talks,
  Upload,
  Preferences,
  TaskForm,
  TeamForm,
  Schedule,
} from "./pages/"
import Protected from "./pages/auth/protectedRoute"
import { GlobalStyles } from "./styles/global"
import { ResolutionError } from "./components/"

import Main from "./pages/event/schedule/main"

const History = createBrowserHistory()
function App(props): JSX.Element {
  const { authenticated } = props.AuthStore
  const Hooks = useWindowWidth()

  if (Hooks <= 550) {
    return <ResolutionError />
  }
  return (
    <Router history={History}>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Documentation} />
        <Route path="/login" component={Signin} />

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
          path="/media"
          component={Media}
        />
        <Protected
          authenticated={authenticated}
          path="/event/:id"
          component={Event}
        />

        <Protected
          authenticated={authenticated}
          path="/team/:id"
          component={Team}
        />

        <Protected
          authenticated={authenticated}
          path="/talks"
          component={Talks}
        />

        <Protected
          authenticated={authenticated}
          path="/deck"
          component={Deck}
        />

        <Protected
          authenticated={authenticated}
          path="/mobile"
          component={Mobile}
        />

        <Protected
          authenticated={authenticated}
          path="/settings"
          component={Preferences}
        />

        <Protected
          authenticated={authenticated}
          path="/upload"
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
          path="/schedule"
          component={Schedule}
        />

        <Protected
          authenticated={authenticated}
          path="/event-talks"
          component={ScheduledTalks}
        />
      </Switch>
    </Router>
  )
}

export default inject("AuthStore")(observer(App))
