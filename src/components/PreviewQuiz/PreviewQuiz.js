import React from 'react';

class PreviewQuiz extends React.Component {  
  render() {
    return (
      <>
        <h2>Preview Quiz</h2>
        <div className="questions">
          {this.props.questions !== undefined && this.props.questions.map(question => {
            return (
              <fieldset key={question.id} className="question">
                <legend className="question-text">{question.value}</legend>
                <button className="btn btn-danger btn-remove" aria-label={`Remove ${question.value}`} onClick={() => this.props.deleteQuestion(question.id)}>x</button>
                
                {question.answers.map((answer, index) => {
                  if (answer) {
                  return (
                      <div key={`${question.id}-${index}`} className="input-group question-group">
                        <input id={`${question.id}-${index}`} className="input-radio" type="radio" name={question.id} value={answer} onChange={() => this.props.logAnswer(question.id, question.value, answer)} />
                        <label htmlFor={`${question.id}-${index}`} className="input-radio-label">{answer}</label>
                      </div>
                    );
                  } else {
                    return null;
                  }              
                })}
                
              </fieldset>
            )
          })}
        </div>
        { this.props.questions.length > 0 ? <button className="btn btn-primary" onClick={() => this.props.deleteAllQuestions()}>Delete All Questions</button> : null }
      </>
    )
  }
}

export default PreviewQuiz;