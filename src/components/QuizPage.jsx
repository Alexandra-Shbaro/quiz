// src/components/QuizPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { markQuizTaken } from '../redux/quizSlice';
import { addPoints } from '../redux/userSlice';

const QuizPage = ({ quiz, questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const dispatch = useDispatch();

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 10);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      dispatch(markQuizTaken({ id: quiz.id, points: score }));
      dispatch(addPoints(score));
    }
  };

  return (
    <div>
      <h2>{quiz.name}</h2>
      <p>{questions[currentQuestion].text}</p>
      {questions[currentQuestion].options.map((option) => (
        <button key={option.text} onClick={() => handleAnswer(option.isCorrect)}>
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default QuizPage;
