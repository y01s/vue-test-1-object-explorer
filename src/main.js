import React from 'react';
import ReactDOM from 'react-dom';

let obj = {
  super: {
    prop: {
      nested: 'reall'
    },
    other: 'hey'
  },
  stuff: 'yeah'
}

ReactDOM.render(
  <div id="app">
      <h1>Toucan Object explorer</h1>
      <h2>Test by ...</h2>
      <pre>{JSON.stringify(obj, null, 2)}</pre>
  </div>,
  document.getElementById('app')
);
