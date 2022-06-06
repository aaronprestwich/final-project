import React, { useState } from "react";
import {Container, Card, ListGroup, ListGroupItem, Row, Col, DropdownButton, Dropdown} from "react-bootstrap";
import MonsterActions from './MonsterActions';
import MonsterAbilities from "./MonsterAbilities";
import MonsterVulnerabilities from "./MonsterVulnerabilities";

const MonsterInfo = ({monsterInfo, speed, actions}) => {
        
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
                <Row className="pb-2">
                    <Col>AC: {monsterInfo.armor_class}</Col>
                    <Col>HP: {monsterInfo.hit_points}</Col>
                    <Col>Speed: {monsterInfo.speed.walk}</Col>                    
                </Row>
                <Row className="text-center">
                    <Col>Str</Col>
                    <Col>Dex</Col>
                    <Col>Con</Col>
                    <Col>Int</Col>
                    <Col>Wis</Col>
                    <Col>Char</Col>
                </Row>
                <Row className="text-center pb-2">
                    <Col>{monsterInfo.strength}</Col>
                    <Col>{monsterInfo.dexterity}</Col>
                    <Col>{monsterInfo.constitution}</Col>
                    <Col>{monsterInfo.intelligence}</Col>
                    <Col>{monsterInfo.wisdom}</Col>
                    <Col>{monsterInfo.charisma}</Col>
                </Row>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="bg-warning px-5">
                        <Row>Passive Perception: {monsterInfo.senses.passive_perception}</Row>
                        {monsterInfo.senses.darkvision && <Row>Dark Vision: {monsterInfo.senses.darkvision}</Row>}
                        <MonsterVulnerabilities monsterInfo= {monsterInfo}/>                                       
                        {/* {monsterInfo.senses.map(x => {`Dark Vision: ${x.darkvision} Passive Perception: ${x.passive_perception}`})} */}
                        <Row>Languages: {monsterInfo.languages}</Row>
                    </ListGroupItem>
                    <ListGroupItem className="bg-warning px-5">
                        <MonsterAbilities monsterInfo={monsterInfo}/>                                       
                    </ListGroupItem>
                    <ListGroupItem className="bg-warning px-5">
                        <MonsterActions monsterInfo={monsterInfo}/>                                       
                    </ListGroupItem>
                </ListGroup>
            </Card.Body>
            <Card.Footer className="bg-warning text-dark px-5">
               Challenge {monsterInfo.challenge_rating} ({monsterInfo.xp} experience)
            </Card.Footer>
        </Card>}
        <div>
            
        </div>
        </Container>
    )
}
export default MonsterInfo;