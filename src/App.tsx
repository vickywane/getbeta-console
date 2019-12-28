import React from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import { Provider } from "mobx-react";

import { Console, Signin, Signup } from "./pages/";
import { AuthStore } from "./state/";

const History = createBrowserHistory();
function App() {
  return (
    <Provider AuthStore={AuthStore}>
      <Router history={History}>
        <Switch>
          <Route exact path="/" component={Console} />
          <Route path="/login" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
