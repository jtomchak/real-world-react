import React from "react";
import { connect } from "react-redux";

import agent from "../agent";
import ListErrors from "./ListErrors";

//any of the properties on store auth will be spread out to props of the
//login component
const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onSubmit: (email, password) =>
    dispatch({ type: "LOGIN", payload: agent.Auth.login(email, password) })
});

class Login extends React.Component {
  state = {};
  handleInputonChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.email, this.state.password);
  };

  render() {
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <a>Need an account?</a>
              </p>
              <ListErrors errors={this.props.errors} />
              <form onSubmit={this.handleOnSubmit}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      onChange={this.handleInputonChange}
                      className="form-control form-control-lg"
                      name="email"
                      type="email"
                      placeholder="Email"
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      onChange={this.handleInputonChange}
                      className="form-control form-control-lg"
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={this.props.inProgress}
                  >
                    > Sign in
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
