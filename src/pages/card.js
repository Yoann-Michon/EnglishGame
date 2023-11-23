import React from "react";
import "./card.css"
import party from "../images/cards/fuegos-artificiales.png"
import apple from "../images/cards/family/apple.png";
import adidas from "../images/cards/family/adidas.png";
import nike from "../images/cards/family/nike.png";
import challengeApple from "../images/cards/challenge/Challenge-Cards-01.png";
import challengeSamsung from "../images/cards/challenge/Challenge-Cards-03.png";
import challengeNike from "../images/cards/challenge/Challenge-Cards-04.png";

 
const Card = () => {
    return (
        <div className="explanation">
            <p>On this page, you will have a look to what our cards look like.<br />
                This game contains  two different types of cards:</p>
            <div className="exemple">
                <div className="family card">
                    <h3>Families Cards</h3>
                    <img src={apple}   alt="exemples of an apple card"/>
                    <img src={nike}   alt="exemples of a nike card"/>
                    <img src={adidas}   alt="exemples of an adidas card"/>
                </div>
                
                <div className="challenge card">
                    <h3>Challenges Cards</h3>
                    <img src={challengeApple}   alt="exemples of a challenge card"/>
                    <img src={challengeNike}   alt="exemples of a challenge card"/>
                    <img src={challengeSamsung}   alt="exemples of a challenge card"/>
                </div>
                
            </div>
           <div className="disclaimer">
                <img src={party}  className="left" alt="icon party"/>
                <p>If you're feeling creative, don't hesitate to create your own challenge cards.</p>
                <img src={party}  className="right" alt="icon party"/>
           </div>
            
        </div>
    );
};
 
export default Card;