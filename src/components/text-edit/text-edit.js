import React from 'react';

export default function TextEdit(props) {
  return (
    <div className="text-edit" style={{paddingLeft: props.level*15 +'px'}}>
      <label>{props.label}</label>
      <div>{props.value}</div>
    </div>

  )
}
