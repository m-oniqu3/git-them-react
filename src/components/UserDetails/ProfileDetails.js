import React from "react";
//import styled from "./ProfileDetails.module.css";
import global from "./ProfileGlobalStyles.module.css";

function ProfileDetails({
  name,
  bio,
  location,
  following,
  followingUrl,
  followers,
  followersUrl,
  gists,
  gistsUrl,
}) {
  return (
    <section className={global.wrapper}>
      <h1>{name}</h1>
      <p className={global.item}>Bio: {bio}</p>
      <p className={global.item}>Location: {location}</p>
      <a className={global.item} href={gistsUrl}>
        Public Gists: {gists}
      </a>
      <a className={global.item} href={followingUrl}>
        Following: {following}
      </a>

      <a className={global.item} href={followersUrl}>
        Followers: {followers}
      </a>
    </section>
  );
}

export default ProfileDetails;
