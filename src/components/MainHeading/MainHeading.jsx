import React, { Fragment } from "react";
import styles from "./MainHeading.module.css";

const MainHeading = ({ heading, paragraph1, paragraph2 }) => {
  return (
    <Fragment>
      <div className={styles.mainHeading}>
        <h3>{heading}</h3>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
      </div>
    </Fragment>
  );
};

export default MainHeading;
