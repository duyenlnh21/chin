// import React from 'react';
// import { render } from 'react-dom';

// render(
//   <p>
//     Hello, <strong>JSX</strong>
//   </p>,
//   document.getElementById('root')
// );


// // Built-in HTML tags

// import React from 'react';
// import { render } from 'react-dom';

// render(
//   <div>
//     <button />
//     Hello, <strong>JSX</strong>
//     <code />
//     <input />
//     <lable />
//     <p />
//     <pre />
//     <select />
//     <table />
//     <ul />
//   </div>,
//   document.getElementById('root')
// );

// // 3.HTML tag convensions
// import React from 'react';
// import { render } from 'react-dom';

// render(
//   <button title="My Button" foo="bar">
//     My Button
//   </button>,
//   document.getElementById('root')
// );

// render(<button />, document.getElementById('root'));

// Describing UI structures
import React from 'react';
import { render } from 'react-dom';

render(
  <section>
    <header>
      <h1>A Header</h1>
    </header>
    <nav>
      <a href="item">Nav Item</a>
    </nav>
    <main>
      <p>The main content ...</p>
    </main>
    <footer>
      <small>@copy; 2019</small>
    </footer>
  </section>,
  document.getElementById('root')
);



