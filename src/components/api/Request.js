import React, { useState, useEffect } from "react";
import config from "../../config";

function Request({ userInput, sendResults }) {
  //State
  const [results, setResults] = useState({});
  //const [repoResults, setRepoResults] = useState({});

  //Keys
  const client_id = config.client_ID;
  const client_secret = config.client_Secret;

  //Url
  const url = `https://api.github.com/users/${userInput}?client_id=${client_id}&client_secret=${client_secret}`;

  //Repo Url

  const repoLimit = 6;
  const sort = "created:asc";

  const repoUrl = `https://api.github.com/users/${userInput}/repos?per_page=${repoLimit}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`;

  //*
  useEffect(() => {
    const getUserAndRepos = async () => {
      try {
        const responses = await Promise.allSettled([
          fetch(url).then((response) => response.json()),
          fetch(repoUrl).then((response) => response.json()),
        ]);
        setResults(responses);
      } catch (error) {
        console.error(error);
      }
    };

    const timerid = setTimeout(() => {
      if (userInput) {
        getUserAndRepos();
      }
    }, 500);

    return () => {
      clearTimeout(timerid);
    };
  }, [url, repoUrl, userInput]);

  //console.log(results);
  // console.log(repoResults);

  //if userinput and results exist and is not empty then send the results to the app component (parent)

  useEffect(() => {
    if (userInput && results.length !== 0) {
      sendResults(results);
    }
  }, [results, userInput, sendResults]);

  return <div></div>;
}

export default Request;
