import React from "react";
import ProfileImg from "./ProfileImg";
import ProfileDetails from "./ProfileDetails";
// import Repos from "./Repos";

function UserInfo({ results }) {
  console.log(results);
  //destructured the results object
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
  } = results;

  return (
    <div>
      {/* send some of the results data as props */}
      {results.length !== 0 && (
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
      {/* <Repos name={name} />  */}
    </div>
  );
}

export default UserInfo;
