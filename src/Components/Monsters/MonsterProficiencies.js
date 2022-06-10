import React from "react";
import { Row, Col, Accordion, ListGroupItem } from "react-bootstrap";

// Proficiencies Component props passed from MonsterInfo
const MonsterProficiencies = ({ proficiencies }) => {
    return (
        <ListGroupItem className="bg-warning px-5">
            <Accordion className="accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Proficiencies</Accordion.Header>
                    <Accordion.Body>
                        {/* maps all the abilities that the monster has if it has them */}
                        <Row>{proficiencies.map((x, i) => <Col key={i}> {x.proficiency.name}</Col>)}</Row>
                        <Row>{proficiencies.map((x, i) => <Col key={i}> {x.value}</Col>)}</Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </ListGroupItem>
    )
}
export default MonsterProficiencies; 