import React from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import { Console, Login } from "./pages/";

const History = createBrowserHistory();
function App() {
  return (
    <Router history={History}>
      <Switch>
        <Route path="console" component={Console} />
        <Route path="login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
