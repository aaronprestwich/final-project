import React, { useState } from "react";
import { Col, Form} from "react-bootstrap";
import {GiDeathSkull} from "react-icons/gi";

const MonsterHP = ({monsterInfo, id, updateMonster}) => {
    const [HP, setHP] = useState();
    let isDead = false;
    
    if(HP == 0){
        isDead = true;
        if(id){
        updateMonster(isDead, id, HP);
        }
    }

    const getHP = (event) =>{
        var x = parseInt(event.currentTarget.value, 10);
        
        setHP(x);
    }
    return(
            <Col>Enter in HP: {HP} {isDead && <GiDeathSkull/>}
                <Form className="pt-2">
                    <Form.Control type="number" min={0} max={700} placeholder={`HP: ${monsterInfo.hit_points}`} onChange={getHP} />
                </Form>
            </Col>
                   
    )
}
export default MonsterHP;