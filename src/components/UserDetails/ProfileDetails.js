import React from "react";
import styled from "./ProfileDetails.module.css";

function ProfileDetails({
  name,
  bio,
  location,
  following,
  followingUrl,
  followers,
  followersUrl,
  gists,
}) {
  return <div className={styled.container}></div>;
}

export default ProfileDetails;
