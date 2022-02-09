import React from "react";

function ProfileImg({ url, avatar, name }) {
  return (
    <div>
      <img src={avatar} alt={`profile for ${name}`} />
      <a href={url}>View Profile</a>
    </div>
  );
}

export default ProfileImg;
