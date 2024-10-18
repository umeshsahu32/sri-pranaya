import React, { Fragment } from "react";
import styles from "./ContactUs.module.css";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import { infoCardData } from "../../Util/data.jsx";

const InfoCard = ({ image, heading, title, style }) => {
  return (
    <div className={`${styles.infoCard} ${styles[style]}`}>
      <img src={image} alt="Address" />
      <div className={styles.infoText}>
        <h6>{heading}</h6>
        <p>{title}</p>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <Fragment>
      <div className={styles.contactContainer}>
        <div className={styles.contactForm}>
          <h5>Get in touch</h5>
          <p>
            Ready to bring your printing project to life? Get in touch with Sri
            Pranaya Printers today! Our team is here to provide personalized
            solutions that fit your needs and budget.
          </p>
          <form>
            <div className={styles.formContainer}>
              <Input
                id="name"
                label="Full Name"
                type="text"
                style="nameInput"
              />
              <Input
                id="email"
                label="Email Address"
                type="email"
                style="emailInput"
              />
              <Input
                id="phone"
                label="Phone Number"
                type="number"
                style="phoneInput"
              />
              <Input
                id="subject"
                label="Subject"
                type="text"
                style="subjectInput"
              />
              <Input id="message" label="Message" style="messageInput" />
              <SubmitButton
                onClick={() => console.log("Button Clicked")}
                text="Submit"
              />
            </div>
          </form>
        </div>
        <div className={styles.mapContainer}>
          {infoCardData.map((item) => {
            return (
              <InfoCard
                key={item.id}
                image={item.image}
                heading={item.heading}
                title={item.title}
                style={item.style}
              />
            );
          })}
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.930273842261!2d78.42021668485067!3d17.367087860904956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb965211864d45%3A0x4dad9a8961b41c23!2sh%2011%2C%204-68%2C%203-4-68%2C%20Hyderguda%2C%20Ambience%20Fort%2C%20Radha%20Krishna%20Nagar%2C%20Hyderabad%2C%20Telangana%20500048!5e0!3m2!1sen!2sin!4v1729243790379!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUs;
