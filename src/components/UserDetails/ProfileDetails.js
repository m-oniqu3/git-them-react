import React from "react";
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
  //TODO refactor this and use map function with array
  return (
    <section className={global.wrapper}>
      <h1>{name}</h1>

      <p className={global.item}>Bio: {bio}</p>
      <p className={global.item}>Location: {location}</p>
      <a className={global.item} href={gistsUrl}>
        Public Gists: {gists}
      </a>

      <div className={global.follows}>
        <a className={global.item} href={followingUrl}>
          Following: {following}
        </a>
        <a className={global.item} href={followersUrl}>
          Followers: {followers}
        </a>
      </div>
    </section>
  );
}

export default ProfileDetails;
