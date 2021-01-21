import React, { Fragment, useEffect, useState } from 'react';
import { Promise } from "bluebird";

Promise.config({ cancellation: true });

function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 10, name: "Lê Thị Duyên" });
        }, 1000);
    });
}

export default function User() {
    const [id, setId] = useState("loading...");
    const [name, setName] = useState("loading...");

    useEffect(() => {
        const promise = fetchUser().then(user => {
            setId(user.id);
            setName(user.name);
        });

        return () => {
            promise.cancel();
        };
    });

    return (
        <Fragment>
            <p>Điểm môn học:{id}</p>
            <p>Học sinh: {name}</p>
        </Fragment>
    );
}