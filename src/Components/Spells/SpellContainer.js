import React, { useState, useRef, useEffect } from "react";
import SpellInfo from "./SpellInfo";

const SpellContainer = () => {

    const url = 'https://www.dnd5eapi.co/api';
    const spellIDRef = useRef();
    const [error, setError] = useState(null);
    let [spellInfo, setInfo] =useState('');

    const getNewID = (event) => {
        const id = spellIDRef.current.value;
        if(id === '') return
        console.log(id);
        spellIDRef.current.value = null;
        getNewSpell(id.replace(/\s+/g, '-').toLowerCase());
    }

    // GET monster object
    const getNewSpell = (id) =>{
        
            fetch(`${url}/spells/${id}`)
            .then(response => {
                console.log(response);
                if(!response.ok){
                    throw Error(`${id} is not found in the DND 5e API https://www.dnd5eapi.co/api/spells/${id}. Try "Fireball".`);
                }
                return response.json()})
            .then(data => {setInfo(data); console.log(data); setError(null)}) 
            .catch(err =>{
                setError(err.message);
            })
    }

    return(
        <>
        
        <input ref = {spellIDRef} type="text"/>
        <button onClick={getNewID}>Get New Spell</button>
        {error && <div> { error }</div>}
        <SpellInfo spellInfo = {spellInfo}/>
        {/* <SpellList spellInfo = {spellInfo}/> */}
        
        </>
    )
}
export default SpellContainer;