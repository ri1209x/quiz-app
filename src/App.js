import React, { useState } from 'react';
import QuizForm from './components/QuizForm';
import QuizDisplay from './components/QuizDisplay';
import './App.css';

function App() {
  const [quiz, setQuiz] = useState(null);

  return (
    <div className="App">
      <h1>Quiz Generator</h1>
      <QuizForm setQuiz={setQuiz} />
      {quiz && <QuizDisplay quiz={quiz} />}
    </div>
  );
}

export default App;