import React, { Component } from "react";
import { connect } from "react-redux";
import MainView from "./MainView";
import Banner from "./Banner";

const mapStateToProps = state => ({
  appName: state.appName
});

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Banner appName={this.props.appName} />
        <div className="container page">
          <div className="row">
            <MainView />
            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
