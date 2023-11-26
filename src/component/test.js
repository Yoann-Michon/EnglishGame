import React from "react";
import home from "../images/home.png";
import youtube from "../images/youtube.png";
import rules from "../images/book.png";
import card from "../images/cards.png";
import {  Link } from 'react-router-dom';
import "./test.css";
 
const Menu = () => {
    return (
        <div className="menu">
            <nav>
                <Link to="/Home">
                    <img src={home} alt="Home" />
                </Link>
                <Link to="/Presentation">
                    <img src={youtube} alt="presentation" />
                </Link>
                <Link to="/Rules">
                    <img src={rules} alt="rules" />
                </Link>
                <Link to="/Card">
                    <img src={card} alt="card" />
                </Link>
            </nav>
        </div>

    );
};
 
export default Menu;