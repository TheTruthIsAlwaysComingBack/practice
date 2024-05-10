import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Home.css";

const getRandomIds = () => {
  const ids = [];
  while (ids.length < 3) {
    const randomId = Math.floor(Math.random() * 20) + 1;
    if (!ids.includes(randomId)) {
      ids.push(randomId);
    }
  }
  console.log(ids);
  return ids;
};

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const randomIds = getRandomIds();
    const fetchPromises = randomIds.map((id) =>
      fetch(`https://663d4e0617145c4d8c3937bf.mockapi.io/users/${id}`)
        .then((response) => response.json())
        .catch((error) => {
          console.error(`Error fetching data for ID ${id}:`, error);
          return null;
        })
    );

    Promise.all(fetchPromises)
      .then((results) => {
        const characters = results.filter((result) => result !== null);
        setCharacters(characters);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="contenedor_principal">
      {characters.length > 0 ? (
        characters.map((character) => (
          <Card key={character.id} character={character} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
