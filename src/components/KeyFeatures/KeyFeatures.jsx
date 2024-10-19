import React, { Fragment } from "react";
import styles from "./KeyFeatures.module.css";
import whyUs from "../../assets/why-us.png";
import { keyFeaturesList } from "../../Util/data.jsx";

const KeyFeatures = () => {
  return (
    <Fragment>
      <div className={styles.featureContainer}>
        <div className={styles.sectionHead}>
          <h5>Why Choose Us</h5>
        </div>
        <div className={styles.featuresListContainer}>
          <div className={styles.featuresList}>
            {keyFeaturesList.map((item) => {
              return (
                <div key={item.id} className={styles.featuresItem}>
                  <span>{item.icon}</span>
                  <p>
                    <strong>{item.title}: </strong>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className={styles.whyUsImage}>
            <img src={whyUs} alt="why choose us" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default KeyFeatures;
