import React, { Fragment } from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
import coverImage from "../../assets/cover-image.jpg";

const Hero = () => {
  return (
    <Fragment>
      <section className={styles.hero}>
        <img
          className={styles.videoBackground}
          src={coverImage}
          alt="cover image"
        />
        <div className={styles.heroContent}>
          <div className={styles.heading}>
            <h1>Books: windows to new perspectives.</h1>
            <h2 className={styles.heroSubHeading}>
              Books are gateways to new worlds and ideas, offering wisdom,
              entertainment, and solace. They expand our imagination, challenge
              our thinking, and connect us to others across time and space. In a
              fast-paced world, books provide a lasting refuge for growth and
              discovery.
            </h2>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
