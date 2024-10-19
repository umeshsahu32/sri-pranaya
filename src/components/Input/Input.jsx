import React, { Fragment } from "react";
import styles from "./Input.module.css";

const Input = ({ type, label, id, style, value, onChange }) => {
  return (
    <Fragment>
      <div className={`${styles.inputGroup} ${styles[style]}`}>
        {label === "Message" ? (
          <textarea
            rows={8}
            required
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          ></textarea>
        ) : (
          <input
            type={type}
            required
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        )}
        <label htmlFor={id}>{label}</label>
      </div>
    </Fragment>
  );
};

export default Input;
