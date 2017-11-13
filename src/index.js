import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import React from "react";

import App from "./App";

const defaultState = {
  appName: "Meowdium",
  articles: null
};

const reducer = function(state = defaultState, action) {
  return state;
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
