// //Chapter 3 Component Properties, State, and Context

// // Setting an initial component state

// import React from 'react';
// import { render } from 'react-dom';
// import MyComponent from './MyComponent';

// render(<MyComponent />, document.getElementById('root'));


// // Creating a component state

// import React from 'react';
// import { render } from 'react-dom';

// import MyComponent from './MyComponent';

// const myComponent = render(<MyComponent />,
//   document.getElementById('root'));

//   setTimeout(() => {
//     myComponent.setState({
//       heading: 'React Awesomesauce',
//       content: 'Done!'
//     });
//   }, 3000);


import React from 'react';
import { render } from 'react-dom';
import MyComponent from './MyComponent';

const myComponent = render(<MyComponent />,
  document.getElementById('root'));

  setTimeout(() => {
    myComponent.setState({ first: 'done!' });
  }, 1000);

  setTimeout(() => {
    myComponent.setState({ second: 'done!' });
  }, 2000);

  setTimeout(() => {
    myComponent.setState({ third: 'done!' });
  }, 3000);

  setTimeout(() => {
    myComponent.setState(state => ({
      ...state,
      fourth: state.doneMessage
    }));
  }, 4000);
  