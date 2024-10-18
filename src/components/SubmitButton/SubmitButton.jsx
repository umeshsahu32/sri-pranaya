import React from "react";
import styles from "./SubmitButton.module.css";

const SubmitButton = ({ onClick, text }) => {
  return (
    <button className={styles.submitBtn} onClick={onClick}>
      {text}
    </button>
  );
};

export default SubmitButton;
