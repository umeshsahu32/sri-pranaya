import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <img src={item.image_url} alt={item.book_name} />
      <h3>{item.book_name}</h3>
      <button>View Details</button>
    </div>
  );
};

export default Card;
