import React, { Component } from "react";
import { Link } from "react-router";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="nav navbar-light">
          <div className="container">
            <Link to="/" className="navbar-brand">
              {this.props.appName.toLowerCase()}
            </Link>

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
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
