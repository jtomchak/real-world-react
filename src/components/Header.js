import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="nav navbar-light">
          <div className="container">
            <a className="navbar-band">{this.props.appName.toLowerCase()}</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
