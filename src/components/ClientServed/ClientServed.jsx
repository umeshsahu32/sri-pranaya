import React, { Fragment } from "react";
import styles from "./ClientServed.module.css";
import client1 from "../../assets/client-image/img1.jpg";
import client2 from "../../assets/client-image/img2.jpg";
import client3 from "../../assets/client-image/img3.jpg";
import client4 from "../../assets/client-image/img4.jpg";
import client5 from "../../assets/client-image/img5.jpg";
import client6 from "../../assets/client-image/img6.jpg";
import client7 from "../../assets/client-image/img7.jpg";
import client8 from "../../assets/client-image/img8.jpg";
import client9 from "../../assets/client-image/img9.jpg";
import client10 from "../../assets/client-image/img10.jpg";
import client11 from "../../assets/client-image/img11.jpg";
import client12 from "../../assets/client-image/img12.jpg";
import client13 from "../../assets/client-image/img13.jpg";
import client14 from "../../assets/client-image/img14.jpg";
import client15 from "../../assets/client-image/img15.jpg";
import MainHeading from "../MainHeading/MainHeading";

const ClientServed = () => {
  let clientsList = [
    { id: 1, image: client1 },
    { id: 2, image: client2 },
    { id: 3, image: client3 },
    { id: 4, image: client4 },
    { id: 5, image: client5 },
    { id: 6, image: client6 },
    { id: 7, image: client7 },
    { id: 8, image: client8 },
    { id: 9, image: client9 },
    { id: 10, image: client10 },
    { id: 11, image: client11 },
    { id: 12, image: client12 },
    { id: 13, image: client13 },
    { id: 14, image: client14 },
    { id: 15, image: client15 },
  ];

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
            return <img src={item.image} alt={`Client ${index}`} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default ClientServed;
