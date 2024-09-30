import React, { Fragment } from "react";
import Hero from "../../components/Hero/Hero";

import { booksArray } from "../../../util/data";
import Card from "../../components/Card/Card";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <div className={styles.card_container}>
        {booksArray.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
    </Fragment>
  );
};

export default Home;
