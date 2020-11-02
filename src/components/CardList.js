import React from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ robots }) => {
  const cardsArray = robots.map((user, id) => {
    return (
      <Card
        key={id}
        id={robots[id].id}
        name={robots[id].name}
        email={robots[id].email}
      />
    );
  });

  return <div className="cardList">{cardsArray}</div>;
};

export default CardList;
