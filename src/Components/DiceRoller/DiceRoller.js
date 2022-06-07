import React, { useState } from "react";
import { Card, ButtonGroup, Button, Form } from "react-bootstrap";
import {GiDiceTwentyFacesTwenty,
        GiD12,
        GiD10,
        GiDiceEightFacesEight,
        GiPerspectiveDiceSix,
        GiD4
} from 'react-icons/gi'

const DiceRoller = () => {
    let dice =[ 20, 12, 10, 8, 6, 4]
    const [modifier, setModifier] = useState(0);
    const [diceAmount, setDice] = useState(1);
    const [total, setTotal] = useState('');
    const [roll, setRoll] = useState('');
    const [radio, setRadio] = useState(dice[0])
    let die = radio;
    let diceIcon = [ <GiDiceTwentyFacesTwenty className = "group1" color = {radio == dice[0] ? "#D35100" : "#292b2c"} size = {50}/>,
    <GiD12 className = "group1" color = {radio == dice[1] ? "#D35100" : "#292b2c"} size = {50}/>,
    <GiD10 className = "group1" color = {radio == dice[2] ? "#D35100" : "#292b2c"} size = {50}/>,
    <GiDiceEightFacesEight className = "group1" color = {radio == dice[3] ? "#D35100" : "#292b2c"} size = {50}/>,
    <GiPerspectiveDiceSix className = "group1" color = {radio == dice[4] ? "#D35100" : "#292b2c"} size = {50}/>,
    <GiD4 className = "group1" color = {radio == dice[5] ? "#D35100" : "#292b2c"} size = {50}/>];
    
    const getModifier = (event) =>{
        var x = parseInt(event.currentTarget.value, 10);
        
        setModifier(x);
    }

    const getDice = (event) =>{
        var x = parseInt(event.currentTarget.value, 10);
        setDice(x);
    }
    
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

    return (
        <div>
            <Form>
                <Form.Label className="pt-2">Number of Dice: </Form.Label>
                <br/>
                    <ButtonGroup aria-label="Number of Dice">
                        {[...Array(10)].map((diceButton, i) => {
                        const numDice = i + 1;

                            return (
                                <Button variant="dark"
                                        key={'Button '+i}
                                        value = {numDice}
                                        onClick = {getDice}>
                                        {numDice}</Button>
                            );
                        })}
                    </ButtonGroup>
                <Form.Group className="pt-2">
                    <Form.Label>Modifier:</Form.Label>
                        <Form.Control type="number" min={-5} max={10} placeholder={'0'} onChange={getModifier} />                        
                
                    <div key={`inline-radio`} className="mb-3 py-3">
                    {[...Array(6)].map((diceImg, i) => {
                        let numDice = i++;

                        return (
                            <Form.Check 
                        inline
                        key = {'Dice'+i}
                        name = "group1"
                        type={'radio'}
                        id = {`D${dice[numDice]}`}
                        isValid = {radio === dice[numDice]}
                        value = {dice[numDice]}
                        label={diceIcon[numDice]}
                        onChange = {(e) => { setRadio(e.target.value)}}
                    />
                        );
                    })}
                    </div>
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="warning" size="lg" onClick={(e) => rollDice(die, e)}>Roll</Button>
                </div>
            </Form>
            <Card className="bg-dark text-white text-center p-5 my-3">
                Amount of Dice: {diceAmount}<br/>
                Modifier: {modifier}<br/>
                Type of Dice: D{radio}<br/>
                Base roll: {roll}
                <Card.Title>Total: {total}</Card.Title>
            </Card>
        </div>
    )
}
export default DiceRoller;