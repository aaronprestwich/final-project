import React, { useState, useRef, useEffect } from "react";
import { Container,
         Card } from "react-bootstrap";
import DiceRoller from "./DiceRoller"


const Tray = () => {
    return (
        <Container className = "tray">
            <Card className = "bg-light p-5 mt-5">
                <Card.Title className="text-center">Dice Roller</Card.Title>
                <DiceRoller/>
            </Card>
        </Container>
    )
}
export default Tray;