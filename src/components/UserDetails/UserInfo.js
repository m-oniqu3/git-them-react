import React from "react";
import ProfileImg from "./ProfileImg";
import ProfileDetails from "./ProfileDetails";
import Repos from "./Repos";

function UserInfo({ userResults, repoResults }) {
  //TODO refactor this and use map function with array
  //TODO make responsive

  //? but isn't it better to take the data that's needed instead of sending the entire object?
  //destructured the userResults object
  const {
    url,
    name,
    avatar_url,
    bio,
    location,
    following,
    following_url,
    followers,
    followers_url,
    public_gists,
    gists_url,
  } = userResults;

  return (
    <div>
      {/* send some of the userResults data as props */}
      {userResults.length !== 0 && (
        <section>
          <ProfileImg url={url} avatar={avatar_url} name={name} />

          <ProfileDetails
            name={name}
            bio={bio}
            location={location}
            following={following}
            followingUrl={following_url}
            followers={followers}
            followersUrl={followers_url}
            gists={public_gists}
            gistsUrl={gists_url}
          />
        </section>
      )}

      {/**
       * checks if there is repository results and its not empty then send it to the repos component
       */}

      {repoResults && repoResults.length !== 0 ? (
        <Repos repos={repoResults} name={name} />
      ) : (
        //TODO add styling to this
        <p>No repositories for this user </p>
      )}
    </div>
  );
}

export default UserInfo;
