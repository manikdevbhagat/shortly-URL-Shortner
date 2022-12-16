/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Heading() {
  return (
    <div className="heading">
      <h2>
        <Link to="/" className="links" id="home-link">Shortly</Link></h2>
    </div>
  );
}

export default Heading;
