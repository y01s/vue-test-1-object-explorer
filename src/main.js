import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from "./components/accordion/accordion";

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
      <div className="container">
        <Accordion title={'Obj'} data={obj}/>
      </div>
  </div>,
  document.getElementById('app')
);
