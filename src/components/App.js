import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./Header";
import Home from "./Home";

const mapStateToProps = state => ({
  appName: state.appName
});

class App extends Component {
  state = {};

  render() {
    const appName = this.props.appName;
    return (
      <div>
        <Header appName={appName} />
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
