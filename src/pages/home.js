import React from "react";
import WordFlicker from "../component/flicker";
import './home.css';
import hat from '../images/hat.png';
 
const Home = () => {
    return (
        <div class="home">
            <img src={hat}  class="card" alt="logo"/>
            <h1>Welcome</h1>
            <h1>To</h1>
            <div class="flicker">
                <WordFlicker />
            </div>
            
        </div>
    );
};
 
export default Home;