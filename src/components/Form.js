import "./Form.css";
import React from "react";
import { useState } from "react";
import Request from "./Request";

function Form() {
  const [name, setName] = useState("");

  const getName = (e) => {
    setName(e.target.value);
  };

  return (
    <section className="form-section">
      <figure className="banner">
        <p>Search for github users and view their respositories.</p>
      </figure>

      <section className="form-container">
        <form>
          <input
            type="text"
            placeholder="Enter a username"
            value={name}
            onChange={getName}
          />
        </form>
      </section>
      <Request name={name} />
    </section>
  );
}

export default Form;
