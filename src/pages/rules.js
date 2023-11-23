import React from "react";
import cardRules from '../images/gameRules.png';
import './rules.css';
 
const Rules = () => {
    return (
        <div class="rules">
            <img src={cardRules}  class="card" alt="logo"/>
        </div>
    );
};
 
export default Rules;