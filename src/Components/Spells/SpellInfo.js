import React from "react";
import {Container, Card, ListGroup, ListGroupItem, Row, Col} from "react-bootstrap";

const SpellInfo = ({spellInfo}) => {
    
    console.log(spellInfo.higher_level);

    const getYesNo = (ritual) => {
        if(ritual){
            ritual = "Yes";
        }
        else{
            ritual = "No";
        }
        return ritual;
    }
    
    return(
        <>
        {spellInfo && <Container>
            
            <Row>
            <h2>{spellInfo.name}</h2>
                Description: {spellInfo.desc}
            </Row>
            {spellInfo.higher_level && <Row>
                Higher Level: {spellInfo.higher_level}
            </Row>}
            <Row>
                Ritual: {getYesNo(spellInfo.ritual)}
            </Row>
            <Row>
                Casting Time: {spellInfo.casting_time}
            </Row>
            <Row>
                Level: {spellInfo.level}
            </Row>
            <Row>
                School: {spellInfo.school.name}
            </Row>
                  
            
        </Container>}
        </>
    )
}
export default SpellInfo;