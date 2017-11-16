import React, { Component } from "react";

class SettingsForm extends Component {
  state = {
    image: "",
    username: "",
    bio: "",
    email: "",
    password: ""
  };

  componentWillMount() {
    if (this.props.currentUser) {
      const cu = this.props.currentUser;
      Object.assign(this.state, {
        image: cu.image || "",
        username: cu.username,
        bio: cu.bio,
        email: cu.email
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser) {
      const cu = nextProps.currentUser;
      this.setState(
        Object.assign(this.state, {
          image: cu.image || "",
          username: cu.username,
          bio: cu.bio,
          email: cu.email
        })
      );
    }
  }

  handleInputChange = event => {
    const targetName = event.target.name;
    this.setState({
      [targetName]: event.target.value
    });
  };

  submitForm = e => {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (user.password.length <= 0) {
      delete user.password;
    }
    this.props.onSubmitForm(user);
  };

  render() {
    return (
      <form onSubmit={e => this.submitForm(e)}>
        <fieldset>
          <fieldset className="form-group">
            <input
              className="form-control"
              type="text"
              name="image"
              placeholder="URL of profile picture"
              value={this.state.image}
              onChange={this.handleInputChange}
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </fieldset>

          <fieldset className="form-group">
            <textarea
              className="form-control form-control-lg"
              rows="8"
              name="bio"
              placeholder="Short bio about you"
              value={this.state.bio}
              onChange={this.handleInputChange}
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="password"
              name="password"
              placeholder="New Password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </fieldset>

          <button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            disabled={this.state.inProgress}
          >
            Update Settings
          </button>
        </fieldset>
      </form>
    );
  }
}

export default SettingsForm;
