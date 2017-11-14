import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
//react-router ^2.8.1
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import store from "./store";
import App from "./components/App";
import Home from "./components/Home";

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        {/*<Route path="/login" component={Login} />*/}
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
