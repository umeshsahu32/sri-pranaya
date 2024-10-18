import React, { Fragment } from "react";
import styles from "./Input.module.css";

const Input = ({ type, label, id, style }) => {
  return (
    <Fragment>
      <div className={`${styles.inputGroup} ${styles[style]}`}>
        {label === "Message" ? (
          <textarea rows={8} required id={id}></textarea>
        ) : (
          <input type={type} required id={id} />
        )}
        <label htmlFor={id}>{label}</label>
      </div>
    </Fragment>
  );
};

export default Input;
