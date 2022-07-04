import React, {useState} from "react";

/**
 * char is Search.js char variable
 * addCharToDatabase is Search.js addCharToDatabase function
 */
function SearchCard({char, addCharToDatabase}){

    /**
     * useState to see if the user wants to add the search character to the favorited database
     */
    const [favorited, setFavorited] = useState(false);

    /**
     * Function to add the character to the favorited database
     */
    function addChar(){
        setFavorited(true);
        addCharToDatabase(char);
    }  

    const addPerson = (<div className="ui primary button" onClick={() => addChar()}>Add to Favorites</div> );
    const noAddPerson = (<div className="ui disabled button">Favorited</div>);

    return (
        <div className="ui column">
            <div className="ui card" key={char.id}>
                <div className="image">
                    <img alt={char.name} src={char.img} />
                </div>
                <div className="content">
                    <p>Name : {char.name}</p>
                    <p>Nickname : {char.nickname}</p>
                    <p>Actor : {char.portrayed}</p>
                    <p>Birthday : {(char.birthday) === null ? "Unknown" : (char.birthday)} </p>
                    <p>Status : {char.status}</p>
                    <p>TV Series : {char.category}</p>
                </div>
                {favorited ? noAddPerson : addPerson}
            </div>
        </div>
    );
}


export default SearchCard;