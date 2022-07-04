// src/components/Favorites.js
import React from "react";
import CharacterCard from "./CharacterCard";

/**
 * characters is Character.js characters variable
 * deleteCharFromDataBase is Character.js deleteCharFromDataBase function
 */
function Favorites({characters, deleteCharFromDataBase}) {

  /**
   * Loops through the characters useState and assigned it to a CharacterCard
   */
  const person = characters.map(char => (
    <CharacterCard key={char.id} char={char} deleteCharFromDataBase={deleteCharFromDataBase}/>
  ))

  return (
    <div className="ui six column grid">
        {person}
    </div>
  );
}

export default Favorites;