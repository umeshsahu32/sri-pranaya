import React, { Fragment } from "react";
import styles from "./ContactUs.module.css";
import Input from "../Input/Input.jsx";
import { infoCardData } from "../../Util/data.jsx";

const InfoCard = ({ image, heading, title, style }) => {
  return (
    <div className={styles.infoCard}>
      <img src={image} alt="Address" loading="lazy" />
      <div>
        <h6>{heading}</h6>
        <p>{title}</p>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <section id="contact-us">
      <div className={styles.contactContainer}>
        <div className={styles.contact}>
          <div className={styles.inputContainer}>
            <div className={styles.headingText}>
              <h5>Get in touch!!</h5>
              <p>
                Ready to bring your printing project to life? Get in touch with
                Sri Pranaya Printers today! Our team is here to provide
                personalized solutions that fit your needs and budget.
              </p>
            </div>
            <form className={styles.inputs}>
              <Input type="text" label="Full Name" id="name" style="fullName" />
              <Input type="email" label="Email" id="name" style="email" />
              <Input type="number" label="phone" id="name" style="phone" />
              <Input type="text" label="Message" id="name" style="message" />
            </form>
          </div>
          <div className={styles.addressContainer}>
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

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.930273842261!2d78.42021668485067!3d17.367087860904956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb965211864d45%3A0x4dad9a8961b41c23!2sh%2011%2C%204-68%2C%203-4-68%2C%20Hyderguda%2C%20Ambience%20Fort%2C%20Radha%20Krishna%20Nagar%2C%20Hyderabad%2C%20Telangana%20500048!5e0!3m2!1sen!2sin!4v1729243790379!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
