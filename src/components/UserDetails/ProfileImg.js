import React from "react";
import styled from "./ProfileImg.module.css";

function ProfileImg({ url, avatar, name }) {
  return (
    <div className={styled.profile}>
      <img className={styled.profileimg} src={avatar} alt="user profile" />
      <a className={styled.link} href={url}>
        View Profile
      </a>
    </div>
  );
}

export default ProfileImg;
//alt={`profile for ${name}`}
