import React, { useState, useEffect } from "react";
import config from "../config";

function Request({ userInput }) {
  //Keys
  const client_id = config.client_ID;
  const client_secret = config.client_Secret;

  const url = `https://api.github.com/users/${userInput}?client_id=${client_id}&client_secret=${client_secret}`;

  useEffect(() => {
    const requestData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    };

    if (userInput) {
      requestData();
    }
  }, [url, userInput]);

  return <div>request</div>;
}

export default Request;
