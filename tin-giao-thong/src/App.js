// import React, { Fragment, useState } from 'react';

// export default function App() {
//     const [name, setName] = useState('Adam');
//     const [age, setAge] = useState(35);

//     return (
//         <Fragment>
//             <section>
//                 <input value={name} onChange={e => setName(e.target.value)} />
//                 <p>My name is {name}</p>
//             </section>
//             <section>
//                 <input 
//                     type="number"
//                     value={age}
//                     onChange={e => setAge(e.target.value)}
//                 />
//                 <p>My age is {age}</p>
//             </section>
//         </Fragment>
//     );
// }

import React, { Fragment, useEffect, useState } from 'react';
function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1, name: 'Adam' });
        }, 1000);
    });
}

export default function App() {
    const [id, setId] = useState('loading...');
    const [name, setName] = useState('loading...');

    useEffect(() => {
        fetchUser().then(user => {
            setId(user.id);
            setName(user.name);
        });
    });

    return (
        <Fragment>
            <p> ID: {id}</p>
            <p>Name: {name}</p>
        </Fragment>
    );
}

