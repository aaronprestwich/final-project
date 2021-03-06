import React, { useState, useRef } from "react";
import MonsterInfo from "./MonsterInfo";
import MonsterList from "./MonsterList";
import { Container, Button, Form } from "react-bootstrap";


const MonsterContainer = () => {

    const monsterIDRef = useRef();
    const url = 'https://www.dnd5eapi.co/api';
    const [error, setError] = useState(null);
    let [monsterInfo, setInfo] = useState('');

    // Get id from search bar then get monster object
    const getNewID = (event) => {
        const id = `monsters/${monsterIDRef.current.value}`;
        if (id === '') return
        monsterIDRef.current.value = null;
        getNewInfo(id.replace(/\s+/g, '-').toLowerCase());
    }

    // GET monster object
    const getNewInfo = (id) => {
        fetch(`${url}/${id}`)
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    throw Error(`${id} was not found in the DND 5e API https://www.dnd5eapi.co/api/${id}.`);
                }
                return response.json()
            })
            // set info and pass to MonsterInfo or MonsterList component
            .then(data => { setInfo(data); console.log(data); setError(null) })
            // if monster object is not found then catch error
            .catch(err => {
                setError(err.message);
            })
    }

    return (
        <Container>
            <Container className="px-5 mt-2">
                <h2>Monster Search</h2>
                <Form className="mb-2">
                    <Form.Control type="text" ref={monsterIDRef} placeholder="Goblin, Vampire, or Ghost" />
                </Form>
                <Button variant="warning" onClick={getNewID} >Get New Monster</Button>
            </Container>
            <Container className="p-5 mt-5 text-center">
                {/* display error if monster object not found */}
                {error && <div> {error}</div>}
                <MonsterInfo monsterInfo={monsterInfo} />
                <MonsterList monsterInfo={monsterInfo} />
            </Container>
        </Container>
    )
}
export default MonsterContainer;