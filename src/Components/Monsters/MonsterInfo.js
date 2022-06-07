import React, { useState } from "react";
import {Container, Card, ListGroup, ListGroupItem, Row, Col, Accordion, Form} from "react-bootstrap";
import MonsterActions from './MonsterActions';
import MonsterAbilities from "./MonsterAbilities";
import MonsterVulnerabilities from "./MonsterVulnerabilities";

const MonsterInfo = ({monsterInfo}) => {
    const [HP, setHP] = useState(monsterInfo.hit_points);

    const getHP = (event) =>{
        var x = parseInt(event.currentTarget.value, 10);
        
        setHP(x);
    }
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
                    <Col>HP: {HP}
                        <Form>
                            <Form.Control type="number" min={0} max={700} placeholder={`Enter in HP: ${monsterInfo.hit_points}`} onChange={getHP} />
                        </Form>
                        
                    </Col>
                    {monsterInfo.speed.walk == null ? null : <Col>Walk: {monsterInfo.speed.walk}</Col>}
                    {monsterInfo.speed.run == null ? null : <Col>Run: {monsterInfo.speed.run}</Col>}
                    {monsterInfo.speed.fly == null ? null : <Col>Fly: {monsterInfo.speed.fly}</Col>}
                    {monsterInfo.speed.swim == null ? null : <Col>Swim: {monsterInfo.speed.swim}</Col>} 
                    {monsterInfo.speed.climb == null ? null : <Col>Climb: {monsterInfo.speed.climb}</Col>}                
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
                        <Row>Languages: {monsterInfo.languages}</Row>
                    </ListGroupItem>
                    <ListGroupItem className="bg-warning px-5">
                        <Accordion className="accordion">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Proficiencies</Accordion.Header>
                                <Accordion.Body>
                                    <Row>{monsterInfo.proficiencies.map(x => <Col>{x.proficiency.name}</Col>)}</Row> 
                                    <Row>{monsterInfo.proficiencies.map(x => <Col>{x.value}</Col>)}</Row> 
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
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
        </Container>
    )
}
export default MonsterInfo;