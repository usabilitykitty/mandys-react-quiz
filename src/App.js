import React, { Component } from 'react';
import logo from './logo.svg';
import BuildQuiz from './components/BuildQuiz/BuildQuiz';
import PreviewQuiz from './components/PreviewQuiz/PreviewQuiz';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newQuestion: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
      questions: []
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.deleteAllQuestions = this.deleteAllQuestions.bind(this);
  }
  
  handleChange(event) {
    const target = event.target;

    this.setState({[target.name]: event.target.value });
  }
  
  componentDidMount() {
    this.loadFromLocalStorage();
    window.addEventListener(
      "beforeunload",
      this.saveToLocalStorage.bind(this)
    );
  }
  
  loadFromLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
  
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }
  
  saveToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }
  
  addQuestion() {
    const newQuestion = {
      id: 1 + Math.random(),
      value: this.state.newQuestion.slice(),
      answers: [ this.state.answer1, this.state.answer2, this.state.answer3, this.state.answer4 ]
    };
    
    const questions = [...this.state.questions];
    
    questions.push(newQuestion);
    
    this.setState({
      questions,
      newQuestion: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: ''
    });
    
    localStorage.setItem("questions", JSON.stringify(questions));
    localStorage.setItem("newQuestion", "");
  }
  
  deleteAllQuestions() {
    this.setState({ questions: [] });
  }
  
  deleteQuestion(id) {
    const questions = [...this.state.questions];
    const updatedQuestions = questions.filter(question => question.id !== id);

    this.setState({ questions: updatedQuestions });
  }
  
  render() {
    return (
      <div className="App">
        <header className="page-header">
          <h1 className="page-title">Mandy's Quiz Builder</h1>
        </header>
        <main>
          <div className="container">
            <div className="row quiz-panel">
              <div className="col-md-6 build-pane">
                <BuildQuiz 
                  newQuestion={this.state.newQuestion} 
                  handleChange={this.handleChange} 
                  addQuestion={this.addQuestion}
                  answer1={this.state.answer1}
                  answer2={this.state.answer2}
                  answer3={this.state.answer3}
                  answer4={this.state.answer4} />
              </div>
              <div className="col-md-6 preview-pane">
                <PreviewQuiz
                  questions={this.state.questions}
                  deleteQuestion={this.deleteQuestion}
                  deleteAllQuestions={this.deleteAllQuestions} />
              </div>
            </div>
          </div>
          <footer className="shameless-plug">
            Coding is not all that I do! Check out my blog, <a href="http://www.usabilitykitty.com/"><img className="logo" src={logo} alt="Usability Kitty"/></a>, to read about my passion for user experience and accessibility.
          </footer>
        </main>
      </div>
    );
  }
}

export default App;
