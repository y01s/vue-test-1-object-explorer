import React from 'react';

export default function TextEdit(props) {
  return (
    <div className="text-edit">
      <label>{props.label}</label>
      <div>{props.value}</div>
    </div>

  )
}
