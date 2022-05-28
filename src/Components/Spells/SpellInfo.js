import React from "react";

const SpellInfo = ({spellInfo}) => {
    
    console.log(spellInfo);
    
    return(
        <>
        <div>
            <h2>{spellInfo.name}</h2>
            <p>Description {spellInfo.desc}</p>
            
        </div>
        </>
    )
}
export default SpellInfo;