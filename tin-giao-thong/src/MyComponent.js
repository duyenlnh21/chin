import React, { Component } from 'react';

class Luat extends Component {
    render() {
        return <p>Luật an toàn giao thông...</p>;
    }
}

class ThiBang extends Component {
    render() {
        return <p>Thi bằng lái xe miễn phí...</p>;
    }
}

class MyComponent extends Component {
    render() {
        return <section> {this.props.children}</section>;
    }
}

MyComponent.Luat = Luat;
MyComponent.ThiBang = ThiBang;

export default MyComponent;

export { Luat, ThiBang };
