import React from 'react';

export default function TextBox({header,content,onClick}) {
  return( <div className="option" onClick={onClick?onClick:null}>
    <div className="option-header">{header}</div>
    <div>{content}</div>
  </div>)
}