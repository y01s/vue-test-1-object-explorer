import _ from 'lodash';
import * as d3 from 'd3';

let obj = {
  super: {
    prop: {
      nested: 'reall'
    },
    other: 'hey'
  },
  stuff: 'yeah'
}

function displayKeys(obj, node) {
  d3.select(node)
  .append('pre')
  .text(JSON.stringify(obj, null, 2));
}

window.updateObject = function (newObj) {
  displayKeys(newObj, document.querySelector('#app'));
}

window.updateObject(obj);
