import React from "react";
import UserDetails from "./UserDetails";
import "./Card.css";
import Buttons from "./Buttons";

const Card = ({ character }) => {
  return (
    <div className="Card">
      <UserDetails character={character} />
      <Buttons />
    </div>
  );
};

export default Card;
