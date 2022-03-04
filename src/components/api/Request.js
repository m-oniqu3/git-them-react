import React, { useState, useEffect } from "react";
import config from "../../config";

function Request({ userInput, sendResults }) {
  //State
  const [userResults, setUserResults] = useState({});
  const [repoResults, setRepoResults] = useState({});
  //const [repoResults, setRepoResults] = useState({});

  //TODO add these to new files and then import them because this is a bit too crowdy

  //Keys
  const client_id = config.client_ID;
  const client_secret = config.client_Secret;

  //Url
  const url = `https://api.github.com/users/${userInput}?client_id=${client_id}&client_secret=${client_secret}`;

  //Repo Url and constants

  const repoLimit = 6;
  const sort = "created:asc";

  const repoUrl = `https://api.github.com/users/${userInput}/repos?per_page=${repoLimit}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`;

  /**fetched the data from the two endpoints
   * update the state when the promises are resolved
   * if there is a userinput then call the function to fetch the data */
  useEffect(() => {
    const getUserAndRepos = async () => {
      try {
        const responses = await Promise.allSettled([
          fetch(url).then((response) => response.json()),
          fetch(repoUrl).then((response) => response.json()),
        ]);
        setUserResults(responses[0].value);
        setRepoResults(responses[1].value);
      } catch (error) {
        console.error(error);
      }
    };

    if (userInput) {
      getUserAndRepos();
    }
  }, [url, repoUrl, userInput]);

  /**checks if userinput and results exist
   * send the results to the app component (parent) if the above is true*/
  useEffect(() => {
    if (userInput && userResults.length !== 0) {
      sendResults(userResults, repoResults);
    }
  }, [userResults, userInput, sendResults, repoResults]);

  return <div></div>;
}

export default Request;
