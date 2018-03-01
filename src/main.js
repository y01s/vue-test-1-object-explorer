import React from 'react';
import ReactDOM from 'react-dom';

let object = {
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
  </div>,
  document.getElementById('app')
);
