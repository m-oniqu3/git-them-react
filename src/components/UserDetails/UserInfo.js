import React from "react";
import ProfileImg from "./ProfileImg";
import ProfileDetails from "./ProfileDetails";
import Repos from "./Repos";

function UserInfo({ userResults, repoResults }) {
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

      {repoResults.length !== 0 ? (
        <Repos repos={repoResults} name={name} />
      ) : (
        <p>No repositories for this user </p>
      )}
    </div>
  );
}

export default UserInfo;
