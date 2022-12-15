import BodyText from "./bodyText";
import InputForm from "./inputForm";
import Output from "./output";
import React from "react";

import Proptypes from "prop-types";

BodyContainer.propTypes = {
    inputLink: Proptypes.func.isRequired,
    lastLink: Proptypes.string.isRequired
  };

function BodyContainer({inputLink,lastLink}){
    return(
        <div className="body-container">
        <BodyText />
        <InputForm inputLink={inputLink} />
        <Output lastLink={lastLink} />
      </div>
    );
}

export default BodyContainer;