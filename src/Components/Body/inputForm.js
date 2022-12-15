import { useState } from "react";
import React from "react";
import Proptypes from "prop-types";

InputForm.propTypes = {
  inputLink: Proptypes.func.isRequired,
};

function InputForm({ inputLink }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = () => {
    if (!userInput) return;
    inputLink(userInput);
    setUserInput("");
  };
  return (
    <div className="input-field">
      <input
        id="newLink"
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter link"
      />
      <button className="add-link" onClick={handleSubmit}>
        Shorten It
      </button>
    </div>
  );
}

export default InputForm;
