/* eslint-disable no-unused-vars */
import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

function Company() {
  return (
    <div className="company list-head">
      <h3>Company</h3>
      <ul className="company-list footer-list">
        <li>
          <Link to="/about" className="links">About</Link>
        </li>
        <li>Our Team</li>
        <li>Careers</li>
      </ul>
    </div>
  );
}

export default Company;
