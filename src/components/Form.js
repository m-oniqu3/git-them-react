import "./Form.css";
import React, { useState } from "react";

function Form({ getInputOnSubmit }) {
  const [input, setInput] = useState("");

  const getInput = (e) => {
    setInput(e.target.value);
  };

  const sendData = (e) => {
    e.preventDefault();

    //send the user input to the app component
    getInputOnSubmit(input);

    //clear the input field
    setInput("");
  };

  return (
    <section className="form-section">
      <figure className="banner">
        <p>Search for github users and view their respositories.</p>
      </figure>

      <section className="form-container">
        <form onSubmit={sendData}>
          <input
            type="text"
            placeholder="Enter a username"
            value={input}
            onChange={getInput}
          />
        </form>
      </section>
    </section>
  );
}

export default Form;
