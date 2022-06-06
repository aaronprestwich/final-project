import React from "react";
import {Row} from "react-bootstrap";

const MonsterVulnerabilities = ({monsterInfo}) => {
    console.log(monsterInfo.damage_resistances)
    console.log(monsterInfo.damage_immunities)
    return(
        <>
            {monsterInfo.damage_vulnerabilities && 
            <Row>Damage Vulnerabilities: {monsterInfo.damage_vulnerabilities.map(x => `${x},`)}</Row>}
            {monsterInfo.damage_resistances && 
            <Row>Damage Resistances: {monsterInfo.damage_resistances.map(x => `${x}, `)}</Row>}
            {monsterInfo.damage_immunities && 
            <Row>Damage Immunities: {monsterInfo.damage_immunities.map(x => `${x}, `)}</Row>}
        </>
    )
}
export default MonsterVulnerabilities;