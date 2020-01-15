import React from "react"
import { Router, Route, Switch } from "react-router"
import { createBrowserHistory } from "history"

import { inject, observer } from "mobx-react"

import {
  Event,
  CreateEvent,
  Console,
  Signin,
  EventList,
  Media,
  Signup,
  Documentation,
  Team,
} from "./pages/"
import Protected from "./pages/auth/protectedRoute"

const History = createBrowserHistory()
function App(props): JSX.Element {
  const { authenticated } = props.AuthStore
  return (
    <Router history={History}>
      <Switch>
        <Route exact path="/" component={Documentation} />
        <Route path="/login" component={Signin} />
        <Route path="/signup" component={Signup} />

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
      </Switch>
    </Router>
  )
}

export default inject("AuthStore")(observer(App))
