// src/components/Character.js
import React, {useState, useEffect} from "react";
import Favorites from "./Favorites";

function Character() {

  /**
   * Localhost location for the database, where all the favorited characters are stored
   */
  const host = "http://localhost:3000/characters";

  /**
   * useState to hold all the favorited characters
   */
  const [characters, setCharacters] = useState([]);

  /**
   * runs when the project starts, fetches all the favorited characters and stores them
   * into the characters useState
   */
  useEffect(() =>{
      fetch(`${host}`)
      .then ((result) => result.json())
      .then ((data) => {
        const character = data.map((char) => (char));
        setCharacters(character);
      });
  }, [setCharacters]);

  /**
   * Deletes a favorited character from the database
   */
  function deleteCharFromDataBase(id){
    fetch(`${host}/${id}`, {
      method: "DELETE",
    })
      .then((reponse) => reponse.json())
      .then(() => {
        setCharacters(characters.filter((char) => char.id !== id))
      }); 
  } 

  return (
    <div>
      <Favorites characters={characters} deleteCharFromDataBase={deleteCharFromDataBase}/>
    </div>

  )
}

export default Character;