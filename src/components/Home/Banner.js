import React from "react";
/*
const Banner = props => {
const appName = props.appName;
...
*/

const Banner = ({ appName }) => {
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">{appName.toLowerCase()}</h1>
        <p>A place to meow your knowledge</p>
      </div>
    </div>
  );
};

export default Banner;
