import React, { Fragment } from "react";
import styles from "./OurValues.module.css";
import { values } from "../../Util/data.jsx";

const BackgroundTextOverlay = ({ backgroundImage, overlayText }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.textOverlay}>{overlayText}</div>
    </div>
  );
};

const OurValues = () => {
  return (
    <Fragment>
      <div className={styles.valuesContainer}>
        <div className={styles.sectionHeading}>
          <h6>Our Values</h6>
        </div>
        <div className={styles.valueContainer}>
          {values.map((item) => {
            return (
              <BackgroundTextOverlay
                key={item.id}
                backgroundImage={item.icon}
                overlayText={item.title}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default OurValues;
