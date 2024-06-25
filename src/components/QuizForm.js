import React, { useState } from 'react';
import axios from 'axios';

const QuizForm = ({ setQuiz }) => {
  const [topic, setTopic] = useState('');
  const [numQuestions, setNumQuestions] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/generate-quiz', {
        topic,
        num_questions: numQuestions
      });
      setQuiz(JSON.parse(response.data.quiz));
    } catch (error) {
      console.error('Error generating quiz:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter quiz topic"
        required
      />
      <input
        type="number"
        value={numQuestions}
        onChange={(e) => setNumQuestions(parseInt(e.target.value))}
        min="1"
        max="10"
        required
      />
      <button type="submit">Generate Quiz</button>
    </form>
  );
};

export default QuizForm;