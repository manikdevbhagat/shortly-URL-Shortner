import React from "react";
import Company from "./company";
import Features from "./features";
import LoginFooter from "./loginFooter";
import Name from "./name";
import Resources from "./resources";

function Footer() {
  return (
    <footer className="footer">
      <Name />
      <div className="footer-links">
        <Features />
        <Resources />
        <Company />
      </div>
      <LoginFooter />
    </footer>
  );
}

export default Footer;
