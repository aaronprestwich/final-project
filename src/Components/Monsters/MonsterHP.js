import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { GiDeathSkull } from "react-icons/gi";

// Monster hit point component
// Props is passed from MonsterContainer to MonsterList and MonsterInfo
const MonsterHP = ({ monsterInfo, id, updateMonster }) => {
    const [HP, setHP] = useState();
    let isDead = false;

    // Sets skull icon if dead and updates monster object
    if (HP == 0) {
        isDead = true;
        // Next if is for the MonsterInfo component to avoid errors because it cannot be updated.
        if (id) {
            // Run update and set isDead to true and HP to 0
            updateMonster(isDead, id, HP);
        }
    }

    const getHP = (event) => {
        var x = parseInt(event.currentTarget.value, 10);
        setHP(x);
    }

    return (
        <Col>Enter in HP: {HP} {isDead && <GiDeathSkull />}
            <Form className="pt-2">
                <Form.Control type="number" min={0} max={700} placeholder={`HP: ${monsterInfo.hit_points}`} onChange={getHP} />
            </Form>
        </Col>

    )
}
export default MonsterHP;