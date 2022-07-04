// src/components/NavBar.js
import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
    display: "flex",
    background: 'black',
    padding: '5px 5px 5px 5px',
    fontSize: '20px',
    margin: '1px',
    width: '150px',
    border: '5px solid green',
};

function NavBar() {

    return (
        <nav className="navbar">
            <NavLink to="/" style={styles}> Main </NavLink>
            <NavLink to="/character" style={styles}>Favorited Characters</NavLink>
            <NavLink to="/search" style={styles}>Search Characters</NavLink>
            <NavLink to="/about" style={styles}>About</NavLink>
        </nav>
    );
}

export default NavBar;