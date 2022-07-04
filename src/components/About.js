// src/components/About.js
import React from "react";

function About(){

    return (
        <div>
            <h1 className="series">Main Page</h1>
            <p className="text"> The Main page gives a brief description of both Breaking Bad and Better Call Saul. 
                You are able to click on the link to open up the Wikipedia page for each TV Series. 
            </p>

            <h1 className="series">Favorite Characters</h1>
            <p className="text"> The Favorite Characters page is a call to the database and it fetches all the user-favorited characters 
                from both TV shows and displays them. The user has the ability to un-favorite a character and 
                that will remove the character from the database.
            </p>

            <h1 className="series">Search Characters</h1>
            <p className="text">The Search page gives the user the ability to search for a random character, all characters from both TV shows, all characters in the Breaking Bad or all characters in Better Call Saul. 
                <p className="text">The project uses an API call depending on which button is clicked:</p>
                <p className="text">The main API site is: <a href={"https://www.breakingbadapi.com"}> https://www.breakingbadapi.com</a> </p>
	            <p className="text">For a random character = <a href={"https://www.breakingbadapi.com/api/character/random"}>https://www.breakingbadapi.com/api/character/random </a></p>
	            <p className="text">For all characters = <a href={"https://www.breakingbadapi.com/api/characters"}>https://www.breakingbadapi.com/api/characters</a></p>
	            <p className="text">For all Breaking Bad characters =<a href={"https://www.breakingbadapi.com/api/characters?category=Breaking+Bad"}>https://www.breakingbadapi.com/api/characters?category=Breaking+Bad</a></p>
	            <p className="text">For all Better Call Saul characters = <a href={"https://breakingbadapi.com/api/characters?category=Better+Call+Saul"}>https://breakingbadapi.com/api/characters?category=Better+Call+Saul</a></p>
                <p>The user then has the option to favorite any character and then that character will be saved to the database and 
                    will appear in the Favorites page
                </p>
            </p>            

        </div>
    )

}

export default About;