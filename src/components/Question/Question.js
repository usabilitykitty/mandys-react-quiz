import React from 'react';

const Question = (props) => {
  return (    
    <div className="input-group question-box-group">
      <label htmlFor="new-question">Question Text</label>
      <textarea id="new-question" name="newQuestion" className="form-control question-box" value={props.newQuestion} onChange={props.onChange} required></textarea>
    </div>
  )
}

export default Question;