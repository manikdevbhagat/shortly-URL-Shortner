import React from "react";
import Proptypes from "prop-types";

Output.propTypes = {
  lastLink: Proptypes.string.isrequired,
};

function Output({ lastLink }) {
  return (
    <div className="output">
      <p className="input-link">{lastLink}</p>
      <p className="output-link">Short Link</p>
      <button className="copy-button">Copy</button>
    </div>
  );
}

export default Output;
