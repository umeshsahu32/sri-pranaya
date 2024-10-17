import React, { Fragment } from "react";
import styles from "./MainHeading.module.css";

<<<<<<< HEAD
const MainHeading = ({ heading, paragraph1, paragraph2 }) => {
=======
let title = "Quality Printing for Every Need";
let para1 =
  " Welcome to Sri Pranaya Printers, where your printing dreams come to life. We specialize in high-quality, affordable printing solutions for businesses, individuals, and institutions. Whether you need custom packaging, promotional materials, or stunning marketing collateral, we've got you covered. Our state-of-the-art equipment and experienced team ensure exceptional results every time.";
let para2 =
  "Explore our range of services and discover how we can help elevate your brand with our printing expertise.";

const MainHeading = ({
  heading = title,
  paragraph1 = para1,
  paragraph2 = para2,
}) => {
>>>>>>> 90eee29a6a1b6e7413042279bf771422d114ce7d
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
