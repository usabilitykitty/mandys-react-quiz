import React from 'react';
import Answer from '../Answer/Answer';
import Question from '../Question/Question';

class BuildQuiz extends React.Component {
  render() {
    return (
      <>
        <h2>Build Quiz</h2>
        <p>Enter your question and two to four possible answers.</p>
        
        <Question newQuestion={this.props.newQuestion} onChange={(e) => this.props.handleChange(e)} />
        
        <Answer index="1" value={this.props.answer1} onChange={(e) => this.props.handleChange(e)} />
        <Answer index="2" value={this.props.answer2} onChange={(e) => this.props.handleChange(e)} />
        <Answer index="3" value={this.props.answer3} onChange={(e) => this.props.handleChange(e)} />
        <Answer index="4" value={this.props.answer4} onChange={(e) => this.props.handleChange(e)} />

        <button type="submit" className="btn btn-primary" 
          onClick={() => this.props.addQuestion()}
          disabled={!this.props.newQuestion.length || !this.props.answer1 || !this.props.answer2 }>Add Question</button>
      </>
    )
  }
}

export default BuildQuiz;