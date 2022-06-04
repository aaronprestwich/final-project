import React, { useState, useEffect } from "react";
import { Container, Card, ButtonGroup, Button, Form } from "react-bootstrap";
import {GiDiceTwentyFacesTwenty,
        GiD12,
        GiD10,
        GiDiceEightFacesEight,
        GiPerspectiveDiceSix,
        GiD4
} from 'react-icons/gi'



const RollButton = (diceAmount, modifier, die) => {
    const [total, setTotal] = useState('');
    const [roll, setRoll] = useState('');
    const rollDice = (dice) => {
        let baseRoll = 0;
        let modifiedRoll = 0;
        let i = 0;
        do {
            baseRoll += Math.floor(Math.random()*dice)+1;
            console.log(`Amount of dice: ${diceAmount} Total before modifier: ${baseRoll} D${dice} Rolled ${i} dice`);
            i++
        } while (i < diceAmount);
        modifiedRoll = baseRoll + modifier;
        
        console.log(`${baseRoll} + ${modifier} = ${modifiedRoll}`)
        if(baseRoll == 20){
            modifiedRoll = 'Nat 20!';
        }
        setRoll(baseRoll);
        setTotal(modifiedRoll); 
    }
    return(
        <div>
            <Button variant="warning" size="lg" onClick={(e) => rollDice(die, e)}>Roll</Button>
        </div>
    )
}

export default RollButton

