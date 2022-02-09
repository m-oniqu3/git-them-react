import "./App.css";
import React, { useState } from "react";
import Navigation from "./Navigation";
import Form from "./Form";
import Request from "./api/Request";
import UserInfo from "./UserDetails/UserInfo";

function App() {
  const [formInput, setFormInput] = useState("");
  const [requestResults, setRequestResults] = useState({});

  //function to get the data from the form component
  const getInputOnSubmitHandler = (input) => {
    setFormInput(input);
  };

  //get the results from the request component
  const sendResultsHandler = (data) => {
    setRequestResults(data);
  };

  return (
    <div className="container">
      <Navigation />

      {/* accept data from the form component and send it to the parent component (app) */}
      <Form getInputOnSubmit={getInputOnSubmitHandler} />

      {/* accept the form data from the app component */}
      {/* send the results from the api to the app component */}
      <Request userInput={formInput} sendResults={sendResultsHandler} />

      {/* accepts the data from the request component */}
      <UserInfo results={requestResults} />
    </div>
  );
}

export default App;
