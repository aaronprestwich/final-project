import React, { useState, useRef } from "react";
import MonsterInfo from "./MonsterInfo";
import { Container, Card, Button, Form } from "react-bootstrap";

export default function MonsterList({ monsterInfo }) {

    const crudcrudRef = useRef();
    const url = 'https://crudcrud.com/api/';
    const [storedMonsterInfo, setInfo] = useState('');
    const [error, setError] = useState(null);
    const [endpointAPI, setEndpointAPI] = useState('');


    const getENDPOINT = (event) => {
        const ENDPOINT = crudcrudRef.current.value;
        if (ENDPOINT === '') return
        console.log(ENDPOINT);
        setEndpointAPI(ENDPOINT)
        addMonster(ENDPOINT);

    }
    // POST
    const addMonster = (ENDPOINT) => {
        const crudcrud = `${url}${ENDPOINT}/monsters`;
        fetch(crudcrud, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ monsterInfo })
        })
            .then(() => getMonster(ENDPOINT));
    }
    // GET
    const getMonster = (ENDPOINT) => {
        const crudcrud = `${url}${ENDPOINT}/monsters`;
        fetch(crudcrud)
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    throw Error(`Monster is not found.`);
                }
                return response.json()
            })
            .then(data => { setInfo(data); console.log(data); setError(null) })
            .catch(err => {
                setError(err.message);
            })
    }
    // PUT 
    // Update KO monster
    const editMonster = (event) => {
        var x = event.currentTarget.id
        console.log('ID is here ' + x)
        const crudcrud = `${url}${endpointAPI}/monsters/${x}`;

        fetch(crudcrud, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ monsterInfo })
        })
            .then(response => response.json())
            .then(data => {
                console.log('SUCCESS', data);

            })
            .then(() => getMonster(endpointAPI));
        console.log('ENDPOINT MADE IT ' + endpointAPI);

    }
    // DELETE
    const deleteMonster = (event) => {
        // add _id at the end of /monsters
        console.log(event.currentTarget.id);

        const crudcrud = `${url}${endpointAPI}/monsters/${event.currentTarget.id}`;
        console.log('url ', crudcrud);
        fetch(crudcrud, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ monsterInfo })
        })
            .then(() => getMonster(endpointAPI));
    }
    return (
        <div>
            <p>To add a monster you will need to get a <a href="https://crudcrud.com/">CRUD CRUD ENDPOINT</a> first.</p>
            <Form className="mb-2">
                <Form.Control type="text" ref={crudcrudRef} placeholder="https://crudcrud.com/api/" />
            </Form>
            <Button variant="warning" onClick={getENDPOINT}>Add Monster</Button>
            {error && <div> {error}</div>}
            {storedMonsterInfo.length > 0 && storedMonsterInfo?.map((monster) => (
                <><MonsterInfo monsterInfo={monster.monsterInfo} />
                    {/* edit monster hp button */}
                    <label htmlFor="hp">Hit Points:</label>

                    <input type="number" id={monster._id} name="hp"
                        min="0" max="676"
                        // value={monster.monsterInfo.hit_points}
                        onChange={editMonster}></input>
                    <Button variant="danger" id={monster._id} onClick={deleteMonster}>Delete Monster</Button>
                </>

            ))}
        </div>

    )
}