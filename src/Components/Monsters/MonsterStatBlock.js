import React from "react";
import { Row, Col } from "react-bootstrap";
import MonsterHP from "./MonsterHP";

// Gets props from MonsterInfo
// Passes all three props to MonsterHp component
const MonsterStatBlock = ({ monsterInfo, updateMonster, id }) => {
    return (
        <>
            <Row className="pb-2">
                <Col>AC: {monsterInfo.armor_class}</Col>

                {/* MonsterHP component */}
                <MonsterHP monsterInfo={monsterInfo} id={id} updateMonster={updateMonster} />

                {/* if it is null then don't show anything */}
                {monsterInfo.speed.walk == null ? null : <Col>Walk: {monsterInfo.speed.walk}</Col>}
                {monsterInfo.speed.run == null ? null : <Col>Run: {monsterInfo.speed.run}</Col>}
                {monsterInfo.speed.fly == null ? null : <Col>Fly: {monsterInfo.speed.fly}</Col>}
                {monsterInfo.speed.swim == null ? null : <Col>Swim: {monsterInfo.speed.swim}</Col>}
                {monsterInfo.speed.climb == null ? null : <Col>Climb: {monsterInfo.speed.climb}</Col>}
            </Row>
            <Row className="text-center">
                <Col>Str</Col>
                <Col>Dex</Col>
                <Col>Con</Col>
                <Col>Int</Col>
                <Col>Wis</Col>
                <Col>Char</Col>
            </Row>
            <Row className="text-center pb-2">
                <Col>{monsterInfo.strength}</Col>
                <Col>{monsterInfo.dexterity}</Col>
                <Col>{monsterInfo.constitution}</Col>
                <Col>{monsterInfo.intelligence}</Col>
                <Col>{monsterInfo.wisdom}</Col>
                <Col>{monsterInfo.charisma}</Col>
            </Row>
        </>
    )
}
export default MonsterStatBlock;