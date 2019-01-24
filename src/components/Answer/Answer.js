import React from 'react';

const Answer = (props) => {
  return (
    <div className="input-group option-group">
      <label htmlFor={`answer${props.index}`}><span className="sr-only">Answer</span> {props.index}:</label>
      <input id={`answer${props.index}`} name={`answer${props.index}`} type="text" className="form-control" 
        value={props.value} onChange={props.onChange} required />
    </div>
  )
}

export default Answer;