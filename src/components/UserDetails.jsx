import React from "react";
import "./UserDetails.css";

const UserDetails = ({ character }) => {
  return (
    <div className="user_details_container">
      <img src={character.avatar} alt={`avatar de ${character.name}`} />
      <p className="Name">{character.name}</p>
      <p>{character.description}</p>
    </div>
  );
};

export default UserDetails;
