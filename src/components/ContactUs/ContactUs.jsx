import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import Input from "../Input/Input.jsx";
import SubmitButton from "../SubmitButton/SubmitButton.jsx";
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
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name: userName,
      email: userEmail,
      phone: userPhone,
      message: userMessage,
    };

    const userData = new FormData();

    Object.keys(formData).forEach((key) => {
      userData.append(key, formData[key]);
    });

    userData.append("access_key", "3f889373-c628-46d9-a226-f6fe1e6fdc45");

    const object = Object.fromEntries(userData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setFormStatus("success");
      setUserName("");
      setUserEmail("");
      setUserPhone("");
      setUserMessage("");
    } else {
      console.log("Error", res);
      setFormStatus("fail");
    }
  };

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
            <form className={styles.inputs} onSubmit={onSubmit}>
              <Input
                type="text"
                label="Full Name"
                id="name"
                style="fullName"
                value={userName}
                onChange={setUserName}
              />
              <Input
                type="email"
                label="Email"
                id="name"
                style="email"
                value={userEmail}
                onChange={setUserEmail}
              />
              <Input
                type="number"
                label="phone"
                id="name"
                style="phone"
                value={userPhone}
                onChange={setUserPhone}
              />
              <Input
                type="text"
                label="Message"
                id="name"
                style="message"
                value={userMessage}
                onChange={setUserMessage}
              />
              <SubmitButton type="submit" text="Submit" />
              {formStatus === "success" && (
                <p className={styles.successText}>
                  Form Submitted Successfully !!!
                </p>
              )}
              {formStatus === "fail" && (
                <p className={styles.errorText}>
                  Sorry. Something went wrong. Please try again.
                </p>
              )}
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
