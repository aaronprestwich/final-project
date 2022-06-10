import React from "react";
import { Row } from "react-bootstrap";

// Gets props from MonsterInfo
const MonsterVulnerabilities = ({ monsterInfo }) => {
    return (
        <>
            {monsterInfo.damage_vulnerabilities.length == 0 ? null : (
                <Row>Damage Vulnerabilities: {monsterInfo.damage_vulnerabilities.map(x => `${x},`)}</Row>)}
            {monsterInfo.damage_resistances.length == 0 ? null :
                <Row>Damage Resistances: {monsterInfo.damage_resistances.map(x => `${x}, `)}</Row>}
            {monsterInfo.damage_immunities.length == 0 ? null :
                <Row>Damage Immunities: {monsterInfo.damage_immunities.map(x => `${x}, `)}</Row>}
        </>
    )
}
export default MonsterVulnerabilities;