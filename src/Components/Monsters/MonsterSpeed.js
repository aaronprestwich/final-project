import React from "react";
import { Col } from "react-bootstrap";

const MonsterSpeed = ({speed}) => {
    console.log(speed);
    return(
        <>
            {console.log(speed)}
            {speed && <Col>Speed: {speed.walk}</Col>}                
        </>  
    )
}
export default MonsterSpeed;