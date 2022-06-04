import React, { useState, useRef, useEffect } from "react";
import SpellInfo from "./SpellInfo";
import {Container, Card, Button, Form} from "react-bootstrap";

const SpellContainer = () => {

    const url = 'https://www.dnd5eapi.co/api';
    const spellIDRef = useRef();
    const [error, setError] = useState(null);
    let [spellInfo, setInfo] =useState('');

    const getNewID = (event) => {
        const id = `spells/${spellIDRef.current.value}`;
        if(id === '') return
        console.log(id);
        spellIDRef.current.value = null;
        getNewSpell(id.replace(/\s+/g, '-').toLowerCase());
    }

    // GET monster object
    const getNewSpell = (id) =>{
        
            fetch(`${url}/${id}`)
            .then(response => {
                console.log(response);
                if(!response.ok){
                    throw Error(`${id} is not found in the DND 5e API https://www.dnd5eapi.co/api/${id}. Try "Fireball".`);
                }
                return response.json()})
            .then(data => {setInfo(data); console.log(data); setError(null)}) 
            .catch(err =>{
                setError(err.message);
            })
    }

    return(
        <>
        <Container>
                
                <Container className="px-5 mt-2">
                <h2>Spell Search</h2>
                    <Form className="mb-2">
                        <Form.Control type="text" ref = {spellIDRef} />
                    </Form>
                    <Button variant="warning" onClick={getNewID}>Find Spell</Button>
                </Container>
                <Container className="p-5 mt-5">
                    {error && <div> {error}</div>}
                    <SpellInfo spellInfo = {spellInfo}/>
                    {/* <SpellList spellInfo = {spellInfo}/> */}
                </Container>
                
                
            </Container>
        {/* <input ref = {spellIDRef} type="text"/>
        <button onClick={getNewID}>Get New Spell</button>
        {error && <div> { error }</div>}
        <SpellInfo spellInfo = {spellInfo}/> */}
        {/* <SpellList spellInfo = {spellInfo}/> */}
        
        </>
    )
}
export default SpellContainer;