import React from 'react';

const Result = (props) => {
  return (
    <div>
      <strong>{props.resultQuestion}</strong>
      <p>{props.resultAnswer}</p>
    </div>
  )
}

export default Result;