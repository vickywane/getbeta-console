import React from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import { inject, observer } from "mobx-react";

import { Event, Console, Signin, Media, Signup, Documentation } from "./pages/";
import Protected from "./pages/auth/protectedRoute";

const History = createBrowserHistory();
function App(props): JSX.Element {
  const { authenticated } = props.AuthStore;
  return (
    <Router history={History}>
      <Switch>
        <Route exact path="/" component={Documentation} />
        <Route path="/login" component={Signin} />
        <Route path="/signup" component={Signup} />

        <Protected
          authenticated={authenticated}
          path="/console"
          component={Console}
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
      </Switch>
    </Router>
  );
}

export default inject("AuthStore")(observer(App));
