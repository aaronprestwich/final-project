import React, { useState, useRef, useEffect } from "react";
import MonsterInfo from "./MonsterInfo";
import MonsterList from "./MonsterList";


const MonsterContainer = () => {

    
    const monsterIDRef = useRef();
    const url = 'https://www.dnd5eapi.co/api';
    const [error, setError] = useState(null);
    let [monsterInfo, setInfo] =useState('');
    

    const getNewID = (event) => {
        const id = `monsters/${monsterIDRef.current.value}`;
        if(id === '') return
        console.log(id);
        monsterIDRef.current.value = null;
        getNewInfo(id.replace(/\s+/g, '-').toLowerCase());
    }

    // GET monster object
    // getAPI(id);
    const getNewInfo = (id) =>{
        
            fetch(`${url}/${id}`)
            .then(response => {
                console.log(response);
                if(!response.ok){
                    throw Error(`${id} is not found in the DND 5e API https://www.dnd5eapi.co/api/monsters/${id}. Try "aboleth".`);
                }
                return response.json()})
            .then(data => {setInfo(data); console.log(data); setError(null)}) 
            .catch(err =>{
                setError(err.message);
            })
    }

    return(
        <>
        <input ref = {monsterIDRef} type="text"/>
        <button onClick={getNewID}>Get New Monster</button>
        {error && <div> { error }</div>}
        <MonsterInfo monsterInfo = {monsterInfo}/>
        <MonsterList monsterInfo = {monsterInfo}/>
        </>
    )
}
export default MonsterContainer;