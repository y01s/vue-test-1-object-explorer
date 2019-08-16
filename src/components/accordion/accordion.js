import React from 'react';
import TextEdit from "../text-edit/text-edit";

export default function Accordion(props) {

  const render = () => {
    return Object.keys(props.data).map((datum, index) => {
      if (props.data[datum] instanceof Object) {
        return <Accordion key={index} title={datum} data={props.data[datum]}/>
      } else {
        return <TextEdit key={index} label={datum} value={props.data[datum]}/>
      }
    })
  };
  return (
    <div className='container'>
      {props.title}
      {render()}
    </div>
  )
}
