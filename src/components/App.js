import "./App.css";
import React, { useState } from "react";
import Navigation from "./Navigation";
import Form from "./Form";
import Request from "./Request";
import UserInfo from "./UserInfo";

function App() {
  const [formInput, setFormInput] = useState("");
  const [requestResults, setRequestResults] = useState({});

  //function to get the data from the form component
  const getInputOnSubmitHandler = (input) => {
    setFormInput(input);
  };

  const sendResultsHandler = (data) => {
    setRequestResults(data);
  };

  return (
    <div className="container">
      <Navigation />

      {/* accept data from the form component and send it to the parent component (app) */}
      <Form getInputOnSubmit={getInputOnSubmitHandler} />

      {/* accept the form data from the form component */}
      <Request userInput={formInput} sendResults={sendResultsHandler} />
      <UserInfo results={requestResults} />
    </div>
  );
}

export default App;
