import React from "react";
import global from "./ProfileGlobalStyles.module.css";

function Repos({ name }) {
  return (
    <section className={global.wrapper}>
      <h1>{name}</h1>
      <p className={global.item}>Repo 1</p>
      <p className={global.item}>Repo 1</p>
      <p className={global.item}>Repo 1</p>
      <p className={global.item}>Repo 1</p>
      <p className={global.item}>Repo 1</p>
      <p className={global.item}>Repo 1</p>
    </section>
  );
}

export default Repos;
