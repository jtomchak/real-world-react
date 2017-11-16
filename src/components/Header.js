import React, { Component } from "react";
import { Link } from "react-router";

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="register" className="nav-link">
            Sign up
          </Link>
        </li>
      </ul>
    );
  }
  return null;
};

const LoggedInView = ({ currentUser }) => {
  if (currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="editor" className="nav-link">
            <i className="ion-compose" />&nbsp;New Post
          </Link>
        </li>

        <li className="nav-item">
          <Link to="settings" className="nav-link">
            <i className="ion-gear-a" />&nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          <Link to={`@${currentUser.username}`} className="nav-link">
            <img src={currentUser.image} className="user-pic" />
            {currentUser.username}
          </Link>
        </li>
      </ul>
    );
  }
  return null;
};

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="nav navbar-light">
          <div className="container">
            <Link to="/" className="navbar-brand">
              {this.props.appName.toLowerCase()}
            </Link>

            <LoggedOutView currentUser={this.props.currentUser} />

            <LoggedInView currentUser={this.props.currentUser} />
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
