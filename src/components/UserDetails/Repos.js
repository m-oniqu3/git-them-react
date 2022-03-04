import React from "react";
import global from "./ProfileGlobalStyles.module.css";

function Repos({ repos, name }) {
  console.log(repos);
  //TODO figure out why the array can't be mapped
  const data = Array.from(repos);

  //TODO turn into link tag with the
  const list = data.map((repo, index) => {
    return (
      <p key={repo.id} className={global.item}>
        {`${index + 1} `}. {repo.name}
      </p>
    );
  });

  return (
    <section className={global.wrapper}>
      {name && <h1>{`Latest repositories for ${name}`}</h1>}
      {list}
    </section>
  );
}

export default Repos;
