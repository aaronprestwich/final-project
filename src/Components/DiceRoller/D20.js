import React, { useState,useEffect } from "react";
import { Container, Card, ButtonGroup, Button, Form } from "react-bootstrap";
import {GiDiceTwentyFacesTwenty,
        GiD12,
        GiD10,
        GiDiceEightFacesEight,
        GiPerspectiveDiceSix,
        GiD4
} from 'react-icons/gi'



const D20 = () => {
    const [modifier, setModifier] = useState(0);
    const [diceAmount, setDice] = useState(1);
    const [roll, setRoll] = useState('');
    const [radio, setRadio] = useState(d20)
    let die = radio;
    var d20 = 20;
    var d12 = 12;
    var d10 = 10;
    var d8 = 8;
    var d6 = 6;
    var d4 = 4;
    
    const getModifier = (event) =>{
        var x = parseInt(event.currentTarget.value, 10);
        
        setModifier(x);
    }

    const getDice = (event) =>{
        var x = parseInt(event.currentTarget.value, 10);
        console.log(x)
        setDice(x);
    }
    
    const rollDice = (dice) => {
        let baseRoll = 0;
        let modifiedRoll = 0;
        if(dice == 20){
            baseRoll = Math.floor(Math.random()*dice)+1
            if(baseRoll == 20){
                modifiedRoll = 'Nat 20!';
            }
            else{
                modifiedRoll = `Rolled 1 D${dice} Modifier: ${modifier} Base Roll: ${baseRoll} Total:${baseRoll + modifier}`;
            }            
        }
        else{

            let i = 0;
            do {
                baseRoll += Math.floor(Math.random()*dice)+1;
                console.log(`Amount of dice: ${diceAmount} Total before modifier: ${baseRoll} D${dice} Rolled ${i} dice`);
                i++
            } while (i < diceAmount);
            modifiedRoll = `Rolled ${diceAmount} D${dice} Modifier: ${modifier} Base Roll: ${baseRoll} Total:${baseRoll + modifier}`;
        }
        console.log(`${baseRoll} + ${modifier} = ${modifiedRoll}`)
        
        setRoll(modifiedRoll);
    }

    return (
        <div>
            <ButtonGroup aria-label="Basic example">
                {[...Array(10)].map((diceButton, i) => {
                    const numDice = i + 1;

                    return (
                        <Button variant="dark"
                        value = {numDice}
                        onClick = {getDice}>
                            {numDice}</Button>
                    );
                })}
            </ButtonGroup>
            <input type="number" placeholder="Modifier"
                min="-5" max="10" 
                onChange = {getModifier}></input>
            <input type="number" name="Amount"
                min="1" max="10" 
                onChange = {getDice}></input>
            <Form>
                <div key={`inline-radio`} className="mb-3">
                <Form.Check 
                    inline
                    name = "group1"
                    type={'radio'}
                    id = 'D20'
                    isValid = {radio === d20}
                    value = {d20}
                    label={<GiDiceTwentyFacesTwenty className = "group1" color = {radio == d20 ? "grey" : "#292b2c"} size = {50}/>}
                    onChange = {(e) => { setRadio(e.target.value)}}
                />
                <Form.Check 
                    inline 
                    name = "group1"
                    type={'radio'}
                    id = 'D12'
                    isValid = {radio === d12}
                    value = {d12}
                    label={<GiD12 className = "group1" color = {radio == d12 ? "grey" : "#292b2c"} size = {50}/>}
                    onChange = {(e) => { setRadio(e.target.value)}}
                />
                <Form.Check 
                    inline
                    name = "group1"
                    type={'radio'}
                    id = 'D10'
                    isValid = {radio === d10}
                    value = {d10}
                    label={<GiD10 className = "group1" color = {radio == d10 ? "grey" : "#292b2c"} size = {50}/>}
                    onChange = {(e) => { setRadio(e.target.value)}}
                />
                <Form.Check 
                    inline
                    name = "group1"
                    type={'radio'}
                    id = 'D8'
                    isValid = {radio === d8}
                    value = {d8}
                    label={<GiDiceEightFacesEight className = "group1" color = {radio == d8 ? "grey" : "#292b2c"} size = {50}/>}
                    onChange = {(e) => { setRadio(e.target.value)}}
                />
                <Form.Check 
                    inline
                    name = "group1"
                    type={'radio'}
                    id = 'D6'
                    isValid = {radio === d6}
                    value = {d6}
                    label={<GiPerspectiveDiceSix className = "group1" color = {radio == d6 ? "grey" : "#292b2c"} size = {50}/>}
                    onChange = {(e) => { setRadio(e.target.value)}}
                />
                <Form.Check 
                    inline
                    name = "group1"
                    type={'radio'}
                    id = 'D4'
                    isValid = {radio === d4}
                    value = {d4}
                    label={<GiD4 className = "group1" color = {radio == d4 ? "grey" : "#292b2c"} size = {50}/>}
                    onChange = {(e) => { setRadio(e.target.value)}}
                />
                </div>
            </Form>
            <Button onClick={(e) => rollDice(die, e)}>Roll</Button>
            <Card className="bg-dark text-white text-center p-5 my-5">
  
                {roll}
            </Card>
        </div>
    )
}
export default D20;