import React, { useState, useRef } from "react";
import MonsterInfo from "./MonsterInfo";
import { Button, Form } from "react-bootstrap";

// Contains CRUDCRUD functions
// Gets props from MonsterContainer
// Passes monsterBtnName, id, monsterInfo, updateMonster, deleteMonster to MonsterInfo
export default function MonsterList({ monsterInfo }) {

    const crudcrudRef = useRef();
    const url = 'https://crudcrud.com/api/';
    const [storedMonsterInfo, setInfo] = useState('');
    const [error, setError] = useState(null);
    const [endpointAPI, setEndpointAPI] = useState('');

    // Run by monster add button with CRUDCRUD endpoint entered
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
            // catch error and set error if Monster object doesn't exist
            .catch(err => {
                setError(err.message);
            })
    }
    // PUT 
    // Update Dead monster it is used only in MonsterHP component
    const updateMonster = (bool, id, HP) => {
        console.log(`Is the Monster Dead? ${bool}`)
        var x = id;
        console.log('ID is here ' + x)
        const crudcrud = `${url}${endpointAPI}/monsters/${x}`;
        let isDeadObj = {
            isDead: bool,
            hit_points: HP
        }
        // Combine monster object with isDeadObj
        // hit_points in monsterInfo will be updated to 0 
        monsterInfo = {
            ...monsterInfo,
            ...isDeadObj
        }

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
            {storedMonsterInfo.length > 0 && storedMonsterInfo?.map((monster, i) => (
                // Passes alot of information including updateMonster and Delete button info
                <><MonsterInfo key={`${monster.monsterInfo.name}-${i}`}
                    monsterBtnName={`${monster.monsterInfo.name}-${i + 1}`}
                    id={monster._id}
                    monsterInfo={monster.monsterInfo}
                    updateMonster={updateMonster}
                    deleteMonster={deleteMonster} />
                </>

            ))}
        </div>

    )
}