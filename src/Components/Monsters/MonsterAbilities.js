import React, { useState } from "react";
import {Container, Row, DropdownButton, Dropdown} from "react-bootstrap";

const MonsterAbilities = ({monsterInfo}) => {
    const [desc, setDesc] = useState();

    const getDesc = (event) => {
        var x = event.currentTarget.id;
        console.log(x);
        setDesc(x);
    }

    return(
        <Container>
            <Row>
                <DropdownButton variant="warning" id="dropdown-basic-button" title="Special Abilities">
                    <Dropdown.Item key={"abilities-no"} id={""} onClick={getDesc}>Toggle Abilities</Dropdown.Item>
                    {monsterInfo.special_abilities.map((x, i) => <Dropdown.Item key={"abilities-"+i} id={x.desc} onClick={getDesc}>{x.name}</Dropdown.Item>)}
                </DropdownButton>
            </Row>
            {desc && <Row>
                {desc}
            </Row>}
        </Container>
    )
}
export default MonsterAbilities;