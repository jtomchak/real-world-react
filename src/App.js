import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  appName: state.appName
});

class App extends Component {
  state = {};

  render() {
    return <div>{this.props.appName}</div>;
  }
}

export default connect(mapStateToProps)(App);
