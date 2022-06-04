import React, { useState } from "react";
import {Container, Card, ListGroup, ListGroupItem, Row, Col} from "react-bootstrap";
import MonsterSpeed from './MonsterSpeed';

const MonsterInfo = ({monsterInfo, speed, actions}) => {
    
    console.log(monsterInfo);
    

    
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
                    <MonsterSpeed speed ={speed}/>
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
                        {/* <Row>Senses: {monsterInfo.senses.darkvision} Passive Perception {monsterInfo.senses.passive_perception}</Row> */}
                        <Row>Languages: {monsterInfo.languages}</Row>
                    </ListGroupItem>
                    <ListGroupItem className="bg-warning px-5">
                    {/* {[...actions].map((actionList, i) => {
                        let actionNum = i++;

                            return (
                                <Row>{actions.name[actionNum]}</Row>
                            );
                        })} */}
                    <Row>Actions:</Row>
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