import React from "react";
import ProfileImg from "./ProfileImg";

function UserInfo({ results }) {
  console.log(results);
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
  } = results;
  console.log(name);
  return (
    <div>
      <ProfileImg url={url} avatar={avatar_url} name={name} />
    </div>
  );
}

export default UserInfo;
