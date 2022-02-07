import React, { useState, useEffect } from "react";
import config from "../config";

function Request({ userInput }) {
  //State
  const [results, setResults] = useState("");

  //Keys
  const client_id = config.client_ID;
  const client_secret = config.client_Secret;

  //Url
  const url = `https://api.github.com/users/${userInput}?client_id=${client_id}&client_secret=${client_secret}`;

  useEffect(() => {
    try {
      const requestData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setResults(data);
      };

      //if the user input is not empty then make the request to the api
      if (userInput) {
        requestData();
      }
    } catch (error) {
      console.error(error, "Something went wrong while trying to fetch data.");
    }
  }, [url, userInput]);

  return <div>request</div>;
}

export default Request;
