import React, { Fragment } from "react";
import MainHeading from "../MainHeading/MainHeading";
import styles from "./Services.module.css";
import { serviceList } from "../../Util/data.jsx";

const Services = () => {
  return (
    <Fragment>
      <div className={styles.servicesContainer}>
        <MainHeading
          heading="Our Services"
          paragraph1="Customized Printing Solutions Tailored for You"
          paragraph2=" We offer a comprehensive range of printing services designed to meet
            the demands of businesses and individuals alike."
        />
        <div className={styles.containerItem}>
          {serviceList.map((item) => {
            return (
              <div key={item.id} className={styles.serviceItem}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
