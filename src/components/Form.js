import "./Form.css";
import React from "react";

function Form() {
  return (
    <section className="form-section">
      <figure className="banner">
        <p>Search for github users and view their respositories.</p>
      </figure>

      <section className="form-container">
        <form>
          <input type="text" placeholder="Enter a username" />
        </form>
      </section>
    </section>
  );
}

export default Form;
