import React from "react";
import "./Card.css";

const Card = ({ name, email, id }) => {
  return (
    <div className="card">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
      <div className="card__text">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
