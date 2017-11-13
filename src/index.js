import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import React from "react";

import App from "./components/App";
import { promiseMiddleware } from "./middleware";

const defaultState = {
  appName: "Meowdium",
  articles: null
};

const reducer = function(state = defaultState, action) {
  console.log(action.payload);
  return state;
};

const store = createStore(reducer, applyMiddleware(promiseMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
