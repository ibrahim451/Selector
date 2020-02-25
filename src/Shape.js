import React from 'react';

const Shape = (props) => {
//  console.log( props); // props as in properites used as parameters
  var shape = props.shape;
  var selectShape = props.selectShape;
  return (
    <div className={shape} onClick={() => selectShape(shape)}/>
  )
};

export default Shape;
