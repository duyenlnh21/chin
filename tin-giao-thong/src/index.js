// //Chapter 3 Component Properties, State, and Context

// // Setting an initial component state

// import React from 'react';
// import { render } from 'react-dom';
// import MyComponent from './MyComponent';

// render(<MyComponent />, document.getElementById('root'));


// Creating a component state

import React from 'react';
import { render } from 'react-dom';

import MyComponent from './MyComponent';

const myComponent = render(<MyComponent />,
  document.getElementById('root'));

  setTimeout(() => {
    myComponent.setState({
      heading: 'React Awesomesauce',
      content: 'Done!'
    });
  }, 3000);