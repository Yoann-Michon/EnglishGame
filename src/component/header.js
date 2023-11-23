import React from "react";
import Home from "../pages/home";
import Rules from "../pages/rules";
import "./header.css";
import hat from '../images/hat.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

 
const Header = () => {
    return (
        <header className="App-header">
            <img src={hat}  class="card" alt="logo"/>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/rules">Rules</Link>
            <Link to="/card">Cards</Link>
          </nav>
        </header>
    );
};
 
export default Header;




