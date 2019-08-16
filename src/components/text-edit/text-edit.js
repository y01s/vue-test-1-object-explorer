import React from 'react';
import Edit from "../edit/edit";

export default function TextEdit(props) {


  return (
    <div className="text-edit" style={{paddingLeft: props.level*15 +'px'}}>
      <Edit value={props.label} />
      <Edit value={props.value} />
    </div>

  )
}
