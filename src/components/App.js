// src/components/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Character from "./Character";
import Search from "./Search";
import Main from "./Main";
import NavBar from "./NavBar.js";
import About from "./About.js";

function App() {
  
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/Search" element={<Search/>}/>
                <Route path="/Character" element={<Character/>}/>
                <Route path="/About" element={<About/>}/>
            </Routes>
        </div>
    );
}

export default App;