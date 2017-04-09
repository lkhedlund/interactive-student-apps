import React, { Component } from 'react';
import MultipleChoiceQuiz from './components/MultipleChoiceQuiz.js';
import './App.css';

class App extends Component {
  render() {
    const EXERCISES = [
      {
        "question" : "What is your <i>name</i>?",
        "answer" : "King Arthur of Camelot",
        "options" : [
          "Sir Gawain",
          "Dennis",
          "Roger the Shrubber"
        ]
      },
      {
        "question" : "What is your <b>quest</b>?",
        "answer" : "To seek the holy grail",
        "options" : [
          "I don't know",
          "Really small rocks",
          "Coconuts"
        ]
      },
      {
        "question" : "What is the airspeed velocity of an unladen swallow?",
        "answer" : "African or European?",
        "options" : [
          "42",
          "I don't know",
          "Yellow"
        ]
      }
    ];
    return (
      <div className="App">
        <MultipleChoiceQuiz exercises={EXERCISES[0]} />
      </div>
    );
  }
}

export default App;