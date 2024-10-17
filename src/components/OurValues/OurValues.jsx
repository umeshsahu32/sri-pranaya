import React, { Fragment } from "react";
import styles from "./OurValues.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { BsLightbulbFill } from "react-icons/bs";
import { MdSentimentVerySatisfied } from "react-icons/md";
import { GiRecycle } from "react-icons/gi";

const OurValues = () => {
  let values = [
    { id: 1, icon: <FaCheckCircle />, title: "Quality" },
    { id: 2, icon: <BsLightbulbFill />, title: "Innovation" },
    {
      id: 3,
      icon: <MdSentimentVerySatisfied />,
      title: "Customer Satisfaction",
    },
    { id: 4, icon: <GiRecycle />, title: "Sustainability" },
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
                <p>{item.icon}</p>
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
