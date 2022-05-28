import React from "react";

const MonsterInfo = ({monsterInfo}) => {
    
    console.log(monsterInfo);
    
    return(
        <>
        <div>
            <h2>{monsterInfo.name}</h2>
            <p>AC {monsterInfo.armor_class}</p>
            <p>HP {monsterInfo.hit_points}</p>
            <p>Str {monsterInfo.strength}</p>
            <p>Dex {monsterInfo.dexterity}</p>
            <p>Con {monsterInfo.constitution}</p>
            <p>Int {monsterInfo.intelligence}</p>
            <p>Wis {monsterInfo.wisdom}</p>
            <p>Char {monsterInfo.charisma}</p>
        </div>
        </>
    )
}
export default MonsterInfo;