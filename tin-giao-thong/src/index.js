
// // Creating your own JSX elements
// // 1. Encapsulating HTML

// import React, { Component } from 'react';
// import { render } from 'react-dom';

// class MyComponent extends Component {
//   render() {
//     return (
//       <section>
//         <h1>My Component</h1>
//         <p>Content in my component...</p>
//       </section>
//     );
//   }
// }


// render(<MyComponent />, document.getElementById('root'));

// // 2. Nested elements

// import React from 'react';
// import { render } from 'react-dom';

// import MySection from './MySection';
// import MyButton from './MyButton';

// render(
//   <MySection>
//     <MyButton>Học miễn phí</MyButton>
//   </MySection>,
//   document.getElementById('root')
// );

// 3. Namespaced components

import React from 'react';
import { render } from 'react-dom';

import MyComponent from './MyComponent';

render(
  <MyComponent>
    <MyComponent.Luat />
    <MyComponent.ThiBang />
  </MyComponent>,
  document.getElementById('root')
);