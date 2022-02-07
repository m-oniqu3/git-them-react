import "./App.css";
import React, { useState } from "react";
import Navigation from "./Navigation";
import Form from "./Form";
import Request from "./Request";

function App() {
  const [formInput, setFormInput] = useState("");

  //function to get the data from the form component
  const getInputOnSubmit = (input) => {
    setFormInput(input);
  };

  return (
    <div className="container">
      <Navigation />

      {/* accept data from the form component and send it to the parent component (app) */}
      <Form getInputOnSubmit={getInputOnSubmit} />
      <Request userInput={formInput} />
    </div>
  );
}

export default App;
