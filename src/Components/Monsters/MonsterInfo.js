import React from "react";
import {Container, Card, ListGroup, ListGroupItem, Row, Col, Accordion, Button} from "react-bootstrap";
import MonsterProficiencies from "./MonsterProficiencies";
import MonsterAbilities from "./MonsterAbilities";
import MonsterVulnerabilities from "./MonsterVulnerabilities";
import MonsterStatBlock from "./MonsterStatBlock";

const MonsterInfo = ({monsterInfo, id, updateMonster, deleteMonster, monsterBtnName}) => {
    return(
        <Container className="tray my-3">
        {monsterInfo && <Card className="bg-dark text-light p-2" border="warning">
            <Card.Header className="bg-warning text-dark px-5 text-center">
                {monsterInfo.size} {monsterInfo.type} {monsterInfo.alignment}
            </Card.Header>
            <Card.Title className="text-center pt-2">
                <h2>{monsterInfo.name}</h2>
            </Card.Title>
            <Card.Body>
                <MonsterStatBlock monsterInfo = {monsterInfo} updateMonster = {updateMonster} id= {id}/>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="bg-warning px-5">
                        <Row>Passive Perception: {monsterInfo.senses.passive_perception}</Row>
                        {monsterInfo.senses.darkvision && <Row>Dark Vision: {monsterInfo.senses.darkvision}</Row>}
                        <MonsterVulnerabilities monsterInfo= {monsterInfo}/>  
                        <Row>Languages: {monsterInfo.languages}</Row>
                    </ListGroupItem>
                    <MonsterProficiencies proficiencies={monsterInfo.proficiencies}/>
                    <MonsterAbilities actions = {monsterInfo.special_abilities} title ={'Special Abilities'}/>      
                    <MonsterAbilities actions = {monsterInfo.actions} title ={'Actions'}/>      
                </ListGroup>
            </Card.Body>
            <Card.Footer className="bg-warning text-dark px-5">
                <Row>
                    <Col>
                    Challenge {monsterInfo.challenge_rating} ({monsterInfo.xp} experience)
                    </Col>
                    {monsterBtnName && <Col>
                        <Button variant="danger"
                            id = {id}
                            onClick = {deleteMonster}>
                            {`Delete ${monsterBtnName}`}
                        </Button>
                    </Col>}
                </Row>
               
            </Card.Footer>
        </Card>}
        </Container>
    )
}
export default MonsterInfo;