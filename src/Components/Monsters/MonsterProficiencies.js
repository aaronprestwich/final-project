import React from "react";
import { Row, Col, Accordion, ListGroupItem} from "react-bootstrap";

const MonsterProficiencies = ({proficiencies}) => {
    return(
        <ListGroupItem className="bg-warning px-5">
            <Accordion className="accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Proficiencies</Accordion.Header>
                    <Accordion.Body>
                        <Row>{proficiencies.map(x => <Col>{x.proficiency.name}</Col>)}</Row> 
                        <Row>{proficiencies.map(x => <Col>{x.value}</Col>)}</Row> 
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </ListGroupItem>
    )
}
export default MonsterProficiencies;