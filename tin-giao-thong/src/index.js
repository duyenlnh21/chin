// // Using JavaScript expressions

// import React from 'react';
// import { render } from 'react-dom';

// const enabled = false;
// const text = "A Button";
// const palceholder = 'input value...';
// const size = 50;

// render(
//   <section>
//     <button disabled={!enabled}>{text}</button>
//     <input placeholder={palceholder} size={size} />
//   </section>,
//   document.getElementById('root')
// );


// // 
import React from 'react';
import { render } from 'react-dom';

const array = ['Python', 'Java', 'C/C++', 'Javascript', 'Golang', 'R', 'Swift', 'PHP', 'C#', 'Matlab'];

const object = {
  first: 1,
  second: 2,
  third: 3
};

render(
  <section>
    <h1>Các ngôn ngữ lập trình đáng học nhất năm 2020</h1>
    <ul>
      {array.map(i => (
        <li key={i}>{i}</li>
      ))}
    </ul>

    <h1>Lộ trình học lập trình React Native</h1>
    <ul>
      {Object.keys(object).map(i => (
        <li key={i}>
          <strong>{i}: </strong>
          {/* {object[i]} */}
        </li>
      ))}
    </ul>
  </section>,
  document.getElementById('root')
);