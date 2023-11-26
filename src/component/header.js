import React from "react";
import "./header.css";
import hat from '../images/hat.png';
import {  Link } from 'react-router-dom';

 
const Header = () => {
    return (
        <header className="App-header">
            <img src={hat}  class="card" alt="logo"/>
          <nav>
            <Link to="/Home">Home</Link>
            <Link to="/Presentation">Presentation</Link>
            <Link to="/Rules">Rules</Link>
            <Link to="/Card">Cards</Link>
          </nav>
        </header>
    );
};
 
export default Header;




