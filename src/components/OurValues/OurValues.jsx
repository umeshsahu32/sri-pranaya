import React, { Fragment } from "react";
import styles from "./OurValues.module.css";
import quality from "../../assets/values/quality.png";
import innovation from "../../assets/values/innovation.png";
import customerSatisfaction from "../../assets/values/customer-satisfaction.png";
import sustainability from "../../assets/values/sustainability.png";

const OurValues = () => {
  let values = [
    { id: 1, icon: quality, title: "Quality" },
    { id: 2, icon: innovation, title: "Innovation" },
    {
      id: 3,
      icon: customerSatisfaction,
      title: "Customer Satisfaction",
    },
    { id: 4, icon: sustainability, title: "Sustainability" },
  ];

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
                <img src={item.icon} alt={item.title} />
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
