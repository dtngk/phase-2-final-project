// src/components/Home.js
import React, {useState} from "react";
import SearchCard from "./SearchCard";

const randChar = ("https://www.breakingbadapi.com/api/character/random");
const allChars = ("https://www.breakingbadapi.com/api/characters")
const allBreakingBad = ("https://www.breakingbadapi.com/api/characters?category=Breaking+Bad")
const allBetterCallSaul = ("https://breakingbadapi.com/api/characters?category=Better+Call+Saul")
const host = "http://localhost:3000/characters";

function Search() {

    /**
     * useState to hold all the characters from the API call
     */
    const [searchPeople, setSearchPeople] = useState([]);
    
    /**
     * Does an API call depending on which button the user clicks
     */
    function callAPI(string){
        fetch(string)
        .then(reponse => reponse.json())
        .then(data => { 
            const character = data.map((char) => (char));
            setSearchPeople(character);
      });
    }  

    /**
     * Adds a search character to the database 
     */
    function addCharToDatabase(char){
        console.log(char.char_id)
        fetch(`${host}`,{
          method: "POST",
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: char.char_id,
            name: char.name,
            birthday: (char.birthday === null) ? "Unknown" : char.birthday,
            occupation: char.occupation,
            img: char.img,
            status: char.status,
            nickname: char.nickname,
            portrayed: char.portrayed,
            category: char.category,
          })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    console.log(searchPeople);

    /**
     * Maps thru all the search characters and creates a SearchCard for each one
     */
    const person = searchPeople.map(char => (
        <SearchCard  key={char.id} char={char} addCharToDatabase={addCharToDatabase} />
    ))

    return (
        <div>
            <div className="four ui buttons">
                <div className="ui inverted segment">
                    <button className="ui inverted purple button" onClick={() => callAPI(randChar)}>
                        Random Character
                    </button>
                    <button className="ui inverted purple button" onClick={() => callAPI(allChars)}>
                        All Characters
                    </button>
                    <button className="ui inverted purple button" onClick={() => callAPI(allBreakingBad)}>
                        All Breaking Bad Characters
                    </button>
                    <button className="ui inverted purple button" onClick={() => callAPI(allBetterCallSaul)}>
                        All Better Call Saul Characters
                    </button>
                </div>
            </div>
            <div className="ui six column grid">
                {person}
            </div>
        </div>
    );
}

export default Search;