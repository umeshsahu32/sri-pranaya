import React from "react";
import styles from "./SubmitButton.module.css";

const SubmitButton = ({ type, text }) => {
  return (
    <button className={styles.submitBtn} type={type}>
      {text}
    </button>
  );
};

export default SubmitButton;
