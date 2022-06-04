import React, { useState, useRef, useEffect } from "react";
import MonsterInfo from "./MonsterInfo";
import MonsterList from "./MonsterList";
import {Container, Card, Button, Form} from "react-bootstrap";


const MonsterContainer = () => {

    let goblin = 'goblin';
    const monsterIDRef = useRef();
    const url = 'https://www.dnd5eapi.co/api';
    const [error, setError] = useState(null);
    let [monsterInfo, setInfo] = useState('');


    const getNewID = (event) => {
        const id = `monsters/${monsterIDRef.current.value}`;
        if (id === '') return
        console.log(id);
        monsterIDRef.current.value = null;
        getNewInfo(id.replace(/\s+/g, '-').toLowerCase());
    }

    // GET monster object
    // getAPI(id);
    const getNewInfo = (id) => {
        fetch(`${url}/${id}`)
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    throw Error(`${id} was not found in the DND 5e API https://www.dnd5eapi.co/api/${id}.`);
                }
                return response.json()
            })
            .then(data => { setInfo(data); console.log(data); setError(null) })
            .catch(err => {
                setError(err.message);
            })
    }

    return (
            <Container>
                
                <Container className="px-5 mt-2">
                <h2>Monster Search</h2>
                    <Form className="mb-2">
                        <Form.Control type="text" ref={monsterIDRef} />
                    </Form>
                    <Button variant="warning" onClick={getNewID}>Get New Monster</Button>
                </Container>
                <Container className="p-5 mt-5 text-center">
                    {error && <div> {error}</div>}
                    <MonsterInfo monsterInfo={monsterInfo}/>
                    <MonsterList monsterInfo={monsterInfo} />
                </Container>
                
                
            </Container>
    )
}
export default MonsterContainer;