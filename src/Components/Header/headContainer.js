import React from "react";
import Heading from "./heading";
import NavBar from "./navbar";
import Login from "./login";


function HeadContainer() {
  return (
    <div className="header-container">
      <Heading />
      <NavBar />
      <Login />
    </div>
  );
}

export default HeadContainer;
