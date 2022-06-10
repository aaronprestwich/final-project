import React from "react";
import { Container, Card, ListGroup, ListGroupItem, Row, Col, Button } from "react-bootstrap";
import MonsterProficiencies from "./MonsterProficiencies";
import MonsterAbilities from "./MonsterAbilities";
import MonsterVulnerabilities from "./MonsterVulnerabilities";
import MonsterStatBlock from "./MonsterStatBlock";

// gets monsterInfo props from MonsterContainer
// gets monsterInfo, id, and updateMonster props from MonsterList component
// passes monsterInfo, id, and updateMonster to MonsterStackBlock component
// passes proficiencies to MonsterProficiencies component
// passes actions to MonsterAbilities component
// passes monsterInfo to MonsterVulnerabilities
const MonsterInfo = ({ monsterInfo, id, updateMonster, deleteMonster, monsterBtnName }) => {

    return (
        <Container className="tray my-3">
            {monsterInfo && <Card className="bg-dark text-light p-2" border="warning">
                <Card.Header className="bg-warning text-dark px-5 text-center">
                    {monsterInfo.size} {monsterInfo.type} {monsterInfo.alignment}
                </Card.Header>
                <Card.Title className="text-center pt-2">
                    <h2>{monsterInfo.name}</h2>
                </Card.Title>
                <Card.Body>

                    {/* MonsterStatBlock contains MonsterHP component */}
                    <MonsterStatBlock monsterInfo={monsterInfo} updateMonster={updateMonster} id={id} />

                    <ListGroup className="list-group-flush">
                        <ListGroupItem className="bg-warning px-5">
                            <Row>Passive Perception: {monsterInfo.senses.passive_perception}</Row>
                            {monsterInfo.senses.darkvision && <Row>Dark Vision: {monsterInfo.senses.darkvision}</Row>}

                            {/* MonsterVulnerabilities contains Damage Resistances, Damage Immunities and Damage Vulnerabilities */}
                            <MonsterVulnerabilities monsterInfo={monsterInfo} />

                            <Row>Languages: {monsterInfo.languages}</Row>
                        </ListGroupItem>

                        {/* MonsterProgiciencies dropdown Accordion */}
                        <MonsterProficiencies proficiencies={monsterInfo.proficiencies} />

                        {/* First MonsterAbilities is the Special Abilities dropdown button and the second is the Actions */}
                        <MonsterAbilities actions={monsterInfo.special_abilities} title={'Special Abilities'} />
                        <MonsterAbilities actions={monsterInfo.actions} title={'Actions'} />

                    </ListGroup>
                </Card.Body>
                <Card.Footer className="bg-warning text-dark px-5">
                    <Row>
                        <Col>
                            Challenge {monsterInfo.challenge_rating} ({monsterInfo.xp} experience)
                        </Col>

                        {/* Delete button only appears when a monster object is added to CRUDCRUD */}
                        {monsterBtnName && <Col>
                            <Button variant="danger"
                                id={id}
                                onClick={deleteMonster}>
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