import React from 'react';
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import { Console } from './pages/'


const History = createBrowserHistory()
function App() {
  return (
	<Router history={history}>
      <Switch>
        <Route path="console" component={Console} />

      </Switch>
  </Router>,
  );
}

export default App;
