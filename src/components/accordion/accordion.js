import React from 'react';
import TextEdit from "../text-edit/text-edit";

export default function Accordion(props) {

  const render = () => {
    return Object.keys(props.data).map((datum, index) => {
      if (props.data[datum] instanceof Object) {
        return <Accordion key={index} level={props.level + 1} title={datum} data={props.data[datum]}/>
      } else {
        return <TextEdit key={index} level={props.level + 1} label={datum} value={props.data[datum]}/>
      }
    })
  };
  return (
    <div className='container' style={{paddingLeft: props.level*15 +'px'}}>
      <div className='title'>{props.title}</div>
      {render()}
    </div>
  )
}
