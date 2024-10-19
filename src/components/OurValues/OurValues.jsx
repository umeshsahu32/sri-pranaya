import React, { Fragment } from "react";
import styles from "./OurValues.module.css";
import { values } from "../../Util/data.jsx";

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
              <div key={item.id} className={styles.valueCard}>
                <img src={item.icon} alt={item.title} loading="lazy" />
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default OurValues;
