import React, { useState } from 'react';

export default function Edit(props) {

  const {isEditing, setIsEditing} = useState([false]);

  const renderLabel = () => {
    return (
      <div>
        <label>{props.value}</label>
        <button>edit</button>
      </div>
    )
  };

  return (
    <div>
      {isEditing ? <input value={props.value}/> : renderLabel()}
    </div>
  )
}
