import React, { Component, Fragment } from 'react';

class Fragments extends Component {
    render() {
        return (
            <Fragment>
                <h1>With Fragments</h1>
                <p>Doesn't have any unused DOM elements.</p>
            </Fragment>
        );
    }
}

export default Fragments;
