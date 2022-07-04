// // src/components/CharacterCard.js
import React from "react";

/**
 * char is Favorites.js char variable
 * deleteCharFromDataBase is deleteCharFromDataBase function in Character.js
 */
function CharacterCard({char, deleteCharFromDataBase}){

  function deleteChar(){
    deleteCharFromDataBase(char.id);
  }

  return (
    <div className="ui column">
      <div className="ui card" key={char.id}>
        <div className="image">
          <img alt="oh no!" src={char.img} />
        </div>
        <div className="content">
          <p>Name : {char.name}</p>
          <p>Nickname : {char.nickname}</p>
          <p>Actor : {char.portrayed}</p>
          <p>Birthday : {(char.birthday) === null ? "Unknown" : (char.birthday)} </p>
          <p>Status : {char.status}</p>
          <p>TV Series : {char.category}</p>
        </div>
        <div className="ui primary button" onClick={() => deleteChar()}>Un-Favorite</div>
      </div>
    </div>
  );
}


export default CharacterCard;