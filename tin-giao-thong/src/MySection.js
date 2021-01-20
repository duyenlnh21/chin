import React, { Component } from 'react';

export default class MySection extends Component {
    render() {
        return (
            <section>
                <h2>Thi bằng lái A1</h2>
                {this.props.children}
            </section>
        );
    }
}