import React, { Component } from "react";
import { connect } from "react-redux";

import agent from "../agent";
import Header from "./Header";
import Home from "./Home";

const mapStateToProps = state => ({
  appName: state.common.appName,
  redirectTo: state.common.redirectTo,
  currentUser: state.common.currentUser
});

//i am a function, takes dispatch and return an object literal
const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) => dispatch({ type: "APP_LOAD", payload, token }),
  onRedirect: () => dispatch({ type: "REDIRECT" })
});

class App extends Component {
  state = {};

  componentWillMount() {
    const token = window.localStorage.getItem("jwt");
    if (token) {
      //set with agent
      agent.setToken(token);
    }
    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      this.context.router.replace(nextProps.redirectTo);
      this.props.onRedirect();
    }
  }

  render() {
    //determine URL Param isRoot?
    const appName = this.props.appName;
    return (
      <div>
        <Header
          appName={appName}
          rootURL={true}
          currentUser={this.props.currentUser}
        />
        {this.props.children}
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
