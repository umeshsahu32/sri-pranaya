import React, { Fragment } from "react";
import styles from "./ClientServed.module.css";
import MainHeading from "../MainHeading/MainHeading";
import { clientsList } from "../../Util/data.jsx";

const ClientServed = () => {
  return (
    <Fragment>
      <div className={styles.clientContainer}>
        <MainHeading
          heading="Our Clients"
          paragraph1="Trusted by Leading Brands"
          paragraph2="We’ve had the privilege of partnering with some of the most renowned brands and businesses across various industries. Our clients trust us for our commitment to quality, timely delivery, and innovative solutions."
        />
        <div className={styles.imageCardContainer}>
          {clientsList.map((item, index) => {
            return <img src={item.image} alt={`Client ${index}`} key={index} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default ClientServed;
