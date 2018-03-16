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

d3.select('#app')
.append('pre')
.text(JSON.stringify(obj, null, 2));
