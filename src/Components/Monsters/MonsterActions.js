import React, { useState } from "react";
import {Container, Row, DropdownButton, Dropdown} from "react-bootstrap";

const MonsterActions = ({monsterInfo}) => {
    const [desc, setDesc] = useState();

    const getDesc = (event) => {
        var x = event.currentTarget.id;
        console.log(x);
        setDesc(x);
    }

    return(
        <Container>
            <Row>
                <DropdownButton variant="warning" id="dropdown-basic-button" title="Actions">
                    <Dropdown.Item key={"actions-no"} id={""} onClick={getDesc}>Toggle Actions</Dropdown.Item>
                    {monsterInfo.actions.map((x, i) =>
                     <Dropdown.Item key={"actions-"+i} id={x.desc} onClick={getDesc}>{x.name}</Dropdown.Item>)}
                </DropdownButton>
            </Row>
            {desc && <Row>
                {desc}
            </Row>}
        </Container>
    )
}
export default MonsterActions;