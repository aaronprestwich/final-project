const monsterIDRef = useRef();
const url = 'https://www.dnd5eapi.co/api';
export const [error, setError] = useState(null);
export let [monsterInfo, setInfo] = useState('');

export function getNewID(event) {
        const id = `monsters/${monsterIDRef.current.value}`;
        if (id === '') return
        monsterIDRef.current.value = null;
        getNewInfo(id.replace(/\s+/g, '-').toLowerCase());
    }

    // GET monster object
    // getAPI(id);
export function getNewInfo (id){
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


// // POST
// export function addMonster (ENDPOINT) {
//     const crudcrud = `${url}${ENDPOINT}/monsters`;
//     fetch(crudcrud, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ monsterInfo })
//     })
//         .then(() => getMonster(ENDPOINT));
// }

// // GET
// export function getMonster (ENDPOINT){
//     const crudcrud = `${url}${ENDPOINT}/monsters`;
//     fetch(crudcrud)
//         .then(response => {
//             console.log(response);
//             if (!response.ok) {
//                 throw Error(`Monster is not found.`);
//             }
//             return response.json()
//         })
//         .then(data => { setInfo(data); console.log(data); setError(null) })
//         .catch(err => {
//             setError(err.message);
//         })
// }

// // PUT 
//     // Update Dead monster
//     export function updateMonster (isDead, id) {
//         console.log(`Is the Monster Dead? ${isDead}`)
//         var x = id;
//         console.log('ID is here ' + x)
//         const crudcrud = `${url}${endpointAPI}/monsters/${x}`;

//         fetch(crudcrud, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ monsterInfo })
//         })
//             .then(response => response.json())
//             .then(data => {
//                 console.log('SUCCESS', data, isDead);

//             })
//             .then(() => getMonster(endpointAPI));
//         console.log('ENDPOINT MADE IT ' + endpointAPI);

//     }

//     // DELETE
//     export function deleteMonster(event) {
//         // add _id at the end of /monsters
//         console.log(event.currentTarget.id);

//         const crudcrud = `${url}${endpointAPI}/monsters/${event.currentTarget.id}`;
//         console.log('url ', crudcrud);
//         fetch(crudcrud, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ monsterInfo })
//         })
//             .then(() => getMonster(endpointAPI));
//     }