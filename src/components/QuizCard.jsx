import React from 'react';

const QuizCard = ({ quiz, onClick }) => (
  <div className="quiz-card" onClick={onClick}>
    <h3>{quiz.name}</h3>
    {quiz.taken ? (
      <p>Taken - Points: {quiz.points}</p>
    ) : (
      <p>Take it now!</p>
    )}
  </div>
);

export default QuizCard;
