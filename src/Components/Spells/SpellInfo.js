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
            <Card className="bg-dark text-light p-2" border="warning">
                <Card.Header className="bg-warning text-dark text-center px-5">
                    Level {spellInfo.level} {spellInfo.school.name} Spell
                </Card.Header>
                <Card.Title className="text-center pt-3">
                    <h2>{spellInfo.name}</h2>
                </Card.Title>
                <Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem className="bg-warning px-5">
                            Description: {spellInfo.desc}
                        </ListGroupItem>
                        {spellInfo.higher_level == 0 ? null : <ListGroupItem className="bg-warning px-5">
                            Higher Level: {spellInfo.higher_level}
                        </ListGroupItem>}
                        <ListGroupItem className="bg-warning text-center px-5">
                            <Row>
                                <Col>Ritual:</Col>
                                <Col>Concentration:</Col>
                                <Col>Range:</Col>
                                {spellInfo.area_of_effect && <Col>AOE:</Col>}
                            </Row> 
                            <Row>
                                <Col>{getYesNo(spellInfo.ritual)}</Col>
                                <Col>{getYesNo(spellInfo.concentration)}</Col>
                                <Col>{spellInfo.range}</Col>
                                {spellInfo.area_of_effect && <Col>{spellInfo.area_of_effect.size}ft. {spellInfo.area_of_effect.type}</Col>}
                            </Row>      
                        </ListGroupItem>
                        <ListGroupItem className="text-center bg-warning px-5">
                            <Row>
                                <Col>Casting Time: {spellInfo.casting_time}</Col>
                                {spellInfo.dc && <Col>DC: {spellInfo.dc.dc_type.name} at {spellInfo.dc.dc_success} damage on success</Col>}
                            </Row>                      
                        </ListGroupItem>
                    </ListGroup>
                </Card.Body>
                <Card.Footer className="bg-warning px-5"></Card.Footer>
            </Card>
        </Container>}
        </>
    )
}
export default SpellInfo;