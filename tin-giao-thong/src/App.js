import React, { Fragment, useState } from 'react';
import User from './User';

const ShowHideUser = ({ show }) => (show ? <User /> : null);

export default function App() {
    const [show, setShow] = useState(false);

    return (
        <Fragment>
            <button onClick={() => setShow(!show)}>
                {show ? 'Danh sách' : 'Xem chi tiet'}
            </button>
            <ShowHideUser show={show} />
        </Fragment>
    );
}