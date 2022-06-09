import React, { useState } from "react";
import { Row, DropdownButton, Dropdown, ListGroupItem} from "react-bootstrap";

// Special Abilities and Actions Dropdown Button Component
// Props passed from MonsterInfo
const MonsterAbilities = ({actions, title}) => {
    const [desc, setDesc] = useState();

    // Get description of ability
    const getDesc = (event) => {
        var x = event.currentTarget.id;
        console.log(x);
        setDesc(x);
    }

    return(
        <ListGroupItem className="bg-warning px-5">
            <Row>
                <DropdownButton variant="warning" id="dropdown-basic-button" title={title}>
                    <Dropdown.Item key={"abilities-no"} id={""} onClick={getDesc}>Toggle {title}</Dropdown.Item>
                    {actions.map((x, i) => 
                    <Dropdown.Item key={"abilities-"+i} id={x.desc} onClick={getDesc}>{x.name}</Dropdown.Item>)}
                </DropdownButton>
            </Row>
            {desc && <Row>
                {desc}
            </Row>}
        </ListGroupItem>
    )
}
export default MonsterAbilities;